from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import requests
import re
import logging

app = Flask(__name__)

# Loglama ayarları (Kişisel veri içermeyen güvenli loglama)
logging.basicConfig(level=logging.INFO)

# 1. GÜVENLİ CORS
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:4200", "https://partalog.tech"]}})

# 2. DENGELİ SPAM KORUMASI
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["5 per day"] 
)

@app.errorhandler(429)
def ratelimit_handler(e):
    return jsonify({
        "error": "Günlük maksimum demo talebi sınırına ulaştınız. Lütfen doğrudan demo@partalog.com adresi üzerinden iletişime geçin."
    }), 429

GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbznESMXdkdjzOBs-_ubkuRw43CoUOWTsUyo-r0UnvnPqArlx4tDiVSinTslbb4BRAAI4g/exec"

def is_valid_email(email):
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern, email)

@app.route('/api/contact', methods=['POST'])
def contact():
    # YENİ 1: Content-Type kontrolü (Sadece JSON kabul et, erken reddet)
    if not request.is_json:
        logging.warning(f"Geçersiz Content-Type: {request.content_type}")
        return jsonify({"error": "Sadece JSON formatı desteklenmektedir."}), 415

    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "Geçersiz veya eksik veri formatı."}), 400

    # 3. HAM VERİ
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    company = data.get('company', '').strip()
    description = data.get('description', '').strip()
    
    # 4. HONEYPOT (BOT) KONTROLÜ
    website_url = data.get('website_url', '').strip()
    if website_url:
        logging.warning("Spam form gönderimi engellendi.")
        return jsonify({"error": "Spam tespit edildi."}), 400
    
    # 5. MANTIKLI KARAKTER SINIRLARI
    if not name or not email or not company:
        return jsonify({"error": "Zorunlu alanlar eksik."}), 400
        
    if len(name) > 100 or len(email) > 100 or len(company) > 100:
        return jsonify({"error": "İsim, e-posta veya şirket bilgisi 100 karakterden uzun olamaz."}), 400
        
    if len(description) > 1000:
        return jsonify({"error": "Mesajınız 1000 karakter sınırını aşıyor. Lütfen daha kısa yazın."}), 400
        
    if not is_valid_email(email):
        return jsonify({"error": "Geçersiz e-posta formatı tespit edildi."}), 400

    # 6. GOOGLE SHEETS'E GÜVENLİ AKTARIM
    payload = {
        "Ad Soyad": name,
        "Email": email,
        "Şirket": company,
        "Mesaj": description
    }
    
    try:
        response = requests.post(GOOGLE_SCRIPT_URL, data=payload, timeout=10)
        
        # YENİ 2: Sadece 200 değil, tüm 2xx başarılı kodları kapsama
        if 200 <= response.status_code < 300:
            return jsonify({"success": True, "message": "Talebiniz başarıyla alındı."}), 200
        else:
            logging.error(f"Google Sheets Hatası: Status Code {response.status_code}")
            return jsonify({"error": "Kayıt işlemi sırasında bir sorun oluştu."}), 502
            
    except requests.exceptions.Timeout:
        logging.error("Google Sheets bağlantısı zaman aşımına uğradı.")
        return jsonify({"error": "Sunucu yanıt vermedi (Zaman aşımı). Lütfen tekrar deneyin."}), 504
    # YENİ 3: Genel request hatalarını (DNS, Connection vb.) yakalama
    except requests.exceptions.RequestException as e:
        logging.error(f"Upstream request error: {str(e)}")
        return jsonify({"error": "Harici servis hatası."}), 502
    except Exception as e:
        logging.error(f"Kritik Sunucu Hatası: {str(e)}")
        return jsonify({"error": "Sunucu tarafında geçici bir hata oluştu."}), 500

if __name__ == '__main__':
    app.run(debug=False, port=5000)