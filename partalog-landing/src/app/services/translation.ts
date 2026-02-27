import { Injectable, signal, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<'tr' | 'en'>('en'); // Varsayılan dil İngilizce

  // YENİ: Başlık ve doküman servisleri içeri aktarıldı
  private titleService = inject(Title);
  private document = inject(DOCUMENT);

  constructor() {
    // YENİ: Dil değiştiği an burası tetiklenip sekmeyi ve HTML dilini güncelleyecek
    effect(() => {
      this.titleService.setTitle(this.t.pageTitle);
      this.document.documentElement.lang = this.currentLang();
    });
  }

  toggleLang() {
    this.currentLang.update(lang => lang === 'tr' ? 'en' : 'tr');
  }

  get t() {
    return this.translations[this.currentLang()];
  }

  private translations = {
    tr: {
      pageTitle: 'Partalog | Akıllı Parça Yönetimi', // TÜRKÇE SEKME BAŞLIĞI
      nav: {
        solutions: 'Çözümler',
        howItWorks: 'Nasıl Çalışır?',
        demoBtn: 'Demo Talep Et'
      },
      hero: {
        engineLabel: '',
        subtitle: 'YAPAY ZEKA DESTEKLİ ENDÜSTRİYEL PARÇA YÖNETİMİ',
        titlePart1: 'Kataloğunuzdan Akıllı E-Ticarete.',
        titlePart2: 'Sadece Dakikalar İçinde.',
        desc: 'Kendi yapay zeka motorunuzu eğitin. Görsel arama (Visual Search) ve akıllı Chatbot ile donatılmış dijital vitrininiz dakikalar içinde satışa hazır olsun. Müşterilerinizin doğru parçayı saniyeler içinde bulmasını sağlayarak hatalı siparişleri, iade süreçlerini ve kargo maliyetlerini kökten çözün.',
        btnTry: 'Platformu Deneyin',
        btnHow: 'Nasıl Çalışır?',
        note: '🚀 %99.8 Tanıma Doğruluğu ile Güçlendirildi.',
        scanText: 'Tespit Ediliyor...',
        resultTitle: 'Sonuç',
        partName: 'Hidrolik Pompa Dişlisi'
      },
      demo: {
        title: 'Teknolojiyi Sahada Test Edin',
        subtitle: 'Aşağıdaki örnek parçalardan birini seçin ve görsel tanımanın hızını deneyimleyin.',
        selectPart: 'Örnek Envanter',
        analyzing: 'Görsel Analiz Ediliyor...',
        confidence: 'Eşleşme Oranı',
        btnAnalyze: 'Analiz Et',
        inStock: 'Stokta Var',
        stockQty: 'Stok Adedi'
      },
      transformation: {
        title: 'Karışık Çizimlerden, Akıllı Parça Seçimine',
        desc: 'Farkı görmek için çubuğu sürükleyin.',
        beforeLabel: 'Manuel Katalog',
        afterLabel: 'Partalog AI'
      },
      footer: {
        slogan: 'Yapay zeka destekli görsel arama teknolojisi ile endüstriyel yedek parça tedarik süreçlerini dijitalleştiriyoruz.',
        product: 'Ürün',
        corporate: 'Kurumsal',
        contact: 'Bize Ulaşın',
        rights: 'Tüm hakları saklıdır.',
        about: 'Hakkımızda',
        careers: 'Kariyer',
        blog: 'Blog',
        comingSoon: 'Yakında'
      },
      contact: {
        title: 'Demo Talep Edin',
        subtitle: 'Görsel arama teknolojimizin manuel katalog taramayı nasıl ortadan kaldırdığını, tedarik süreçlerinizi nasıl hızlandırdığını ve ekibinizin tam olarak ihtiyaç duyduğu parçaları saniyeler içinde bulmasına nasıl yardımcı olduğunu size göstermek için sabırsızlanıyoruz.',
        name: 'Ad Soyad',
        email: 'E-posta Adresi',
        company: 'Şirket Adı',
        message: 'Mesajınız',
        btnSubmit: 'Gönder',
        success: 'Mesajınız alındı! En kısa sürede döneceğiz.'
      }
    },
    en: {
      pageTitle: 'Partalog | Smart Part Management', // İNGİLİZCE SEKME BAŞLIĞI
      nav: {
        solutions: 'Solutions',
        howItWorks: 'How it Works?',
        demoBtn: 'Request Demo'
      },
      hero: {
        engineLabel: '',
        subtitle: 'AI-POWERED INDUSTRIAL PART MANAGEMENT',
        titlePart1: 'From Your Catalog to Smart E-Commerce.',
        titlePart2: 'In Just Minutes.',
        desc: 'Train your own AI engine. Let your digital storefront, equipped with Visual Search and an intelligent Chatbot, become sales-ready in minutes. Enable your customers to find the right part in seconds and eliminate wrong orders, return workflows, and shipping costs at the root.',
        btnTry: 'Try Platform',
        btnHow: 'How it Works?',
        note: '🚀 Powered by 99.8% Recognition Accuracy.',
        scanText: 'Scanning...',
        resultTitle: 'Result',
        partName: 'Hydraulic Pump Gear'
      },
      demo: {
        title: 'Test Technology in the Field',
        subtitle: 'Select one of the sample parts below and experience the speed of visual recognition.',
        selectPart: 'Sample Inventory',
        analyzing: 'Analyzing Image...',
        confidence: 'Confidence Score',
        btnAnalyze: 'Analyze',
        inStock: 'In Stock',
        stockQty: 'Stock Quantity'
      },
      transformation: {
        title: 'From Complex Drawings to Smart Selection',
        desc: 'Drag the slider to see the difference.',
        beforeLabel: 'Manual Catalog',
        afterLabel: 'Partalog AI'
      },
      footer: {
        slogan: 'We digitize industrial spare part supply processes with AI-powered visual search technology.',
        product: 'Product',
        corporate: 'Corporate',
        contact: 'Contact Us',
        rights: 'All rights reserved.',
        about: 'About Us',
        careers: 'Careers',
        blog: 'Blog',
        comingSoon: 'Coming Soon'
      },
      contact: {
        title: 'Request a Demo',
        subtitle: 'We look forward to showing you how our visual search technology can eliminate manual catalog browsing, accelerate your procurement processes, and help your team find the exact parts they need in seconds.',
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Your Message',
        btnSubmit: 'Send',
        success: 'Message received! We will get back to you soon.'
      }
    }
  };
}
