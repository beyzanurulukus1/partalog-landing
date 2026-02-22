import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TranslationService } from '../../services/translation'; 

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './faq.html'
})
export class FaqComponent {
  ts = inject(TranslationService); // Dil servisi eklendi

  faqs = [
    {
      qTr: "Partalog tam olarak nedir ve kimler içindir?",
      qEn: "What exactly is Partalog and who is it for?",
      aTr: "Partalog, endüstriyel yedek parça sektörüne özel geliştirilmiş yapay zeka destekli bir dijital katalog ve asistan platformudur. Üreticiler, tedarikçiler ve bakım ekipleri için parça bulmayı ve yönetmeyi kolaylaştırır.",
      aEn: "Partalog is an AI-supported digital catalog and assistant platform developed specifically for the industrial spare parts sector. It makes finding and managing parts easier for manufacturers, suppliers, and maintenance teams.",
      isOpen: false
    },
    {
      qTr: "Klasik PDF kataloglardan farkı nedir?",
      qEn: "How is it different from classic PDF catalogs?",
      aTr: "Statik PDF dosyalarının aksine, Partalog interaktif bir deneyim sunar. Sayfalar arasında kaybolmak yerine, görsel arama veya sohbet botu ile saniyeler içinde doğru parçaya ulaşırsınız.",
      aEn: "Unlike static PDF files, Partalog offers an interactive experience. Instead of getting lost between pages, you can find the right part in seconds with visual search or the chatbot.",
      isOpen: false
    },
    {
      qTr: "Hangi sektörlerdeki parçaları kapsıyor?",
      qEn: "Which sectors' parts does it cover?",
      aTr: "Otomotiv, iş makineleri, tekstil makineleri, üretim hatları gibi endüstriyel alanlardaki geniş bir yelpazeyi destekler.",
      aEn: "It supports a wide range of industrial areas such as automotive, construction machinery, textile machinery, and production lines.",
      isOpen: false
    },
    {
      qTr: "Görsel Arama (Visual Search) özelliği nasıl çalışır?",
      qEn: "How does the Visual Search feature work?",
      aTr: "Aradığınız parçanın fotoğrafını sisteme yüklemeniz yeterlidir. Yapay zeka algoritmalarımız, parçayı analiz eder ve veritabanındaki en uygun eşleşmeleri teknik özellikleriyle birlikte size sunar.",
      aEn: "Simply upload a photo of the part you are looking for. Our AI algorithms analyze the part and present you with the most suitable matches in the database along with their technical specifications.",
      isOpen: false
    },
    {
      qTr: "Yapay zeka asistanı teknik konularda ne kadar yetkin?",
      qEn: "How competent is the AI assistant in technical matters?",
      aTr: "Asistanımız, yüklenen teknik dökümanlar ve katalog verileri üzerinde eğitilmiştir. Parça uyumluluğu, montaj bilgileri veya alternatif parça önerileri gibi konularda teknik destek sağlayabilir.",
      aEn: "Our assistant is trained on uploaded technical documents and catalog data. It can provide technical support on issues such as part compatibility, assembly information, or alternative part suggestions.",
      isOpen: false
    },
    {
      qTr: "Parçanın seri numarası silinmişse de bulabilir miyim?",
      qEn: "Can I find it even if the part's serial number is erased?",
      aTr: "Evet, görsel tanıma teknolojimiz sayesinde barkod veya seri numarası okunamaz durumda olsa bile, parçanın formundan ve yapısal özelliklerinden tanımlama yapabiliriz.",
      aEn: "Yes, thanks to our visual recognition technology, we can identify the part from its form and structural features even if the barcode or serial number is unreadable.",
      isOpen: false
    },
    {
      qTr: "Mevcut ürün kataloglarımı sisteme nasıl yüklerim?",
      qEn: "How do I upload my existing product catalogs to the system?",
      aTr: "Mevcut PDF, Excel veya ERP verilerinizi kolayca içe aktarabilirsiniz. Sistemimiz bu verileri otomatik olarak işleyerek akıllı, aranabilir bir dijital kataloğa dönüştürür.",
      aEn: "You can easily import your existing PDF, Excel, or ERP data. Our system automatically processes this data and transforms it into a smart, searchable digital catalog.",
      isOpen: false
    },
    {
      qTr: "Mobil cihazlardan erişim mümkün mü?",
      qEn: "Is access from mobile devices possible?",
      aTr: "Evet, Partalog tamamen bulut tabanlıdır (SaaS). Sahadaki teknisyenleriniz cep telefonlarından fotoğraf çekip parça aratabilir veya tabletlerinden katalog inceleyebilir.",
      aEn: "Yes, Partalog is completely cloud-based (SaaS). Your field technicians can take photos from their mobile phones to search for parts or review catalogs from their tablets.",
      isOpen: false
    },
    {
      qTr: "ERP veya stok yönetim sistemimle entegre çalışır mı?",
      qEn: "Does it integrate with my ERP or inventory management system?",
      aTr: "Evet, API desteğimiz sayesinde mevcut stok ve sipariş yönetim sistemlerinizle haberleşebilir, anlık stok durumu gösterebilir.",
      aEn: "Yes, thanks to our API support, it can communicate with your existing inventory and order management systems and show real-time stock status.",
      isOpen: false
    },
    {
      qTr: "Verilerim ve kataloglarım güvende mi?",
      qEn: "Are my data and catalogs safe?",
      aTr: "Endüstriyel verilerinizin gizliliği önceliğimizdir. Tüm veriler şifrelenerek saklanır ve sadece yetki verdiğiniz kullanıcılar erişebilir.",
      aEn: "The privacy of your industrial data is our priority. All data is stored encrypted and can only be accessed by users you authorize.",
      isOpen: false
    },
    {
      qTr: "Ücretlendirme modeli nasıldır?",
      qEn: "What is the pricing model?",
      aTr: "İhtiyacınıza göre aylık veya yıllık abonelik modellerimiz mevcuttur. Parça sayısı ve kullanıcı sayısına göre ölçeklenebilir paketler sunuyoruz. Şu an demo aşamasındayız.",
      aEn: "We have monthly or annual subscription models according to your needs. We offer scalable packages based on the number of parts and users. We are currently in the demo phase.",
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}