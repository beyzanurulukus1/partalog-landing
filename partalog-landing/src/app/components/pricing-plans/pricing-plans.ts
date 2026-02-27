import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-pricing-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-plans.html'
})
export class PricingPlansComponent {
  ts = inject(TranslationService);

  plans = [
    {
      id: 1,
      badgeTr: 'Paket 1',
      badgeEn: 'Package 1',
      titleTr: 'Katalog Yazılımı',
      titleEn: 'Catalog Software',
      descTr: 'Yedek parça işletmeleri için web tabanlı, interaktif katalog yazılımı.',
      descEn: 'Web-based interactive catalog software for spare parts businesses.',
      pointsTr: [
        'Hızlı ürün/parça arama',
        'Kategori bazlı yapı',
        'Tek platformdan katalog yönetimi'
      ],
      pointsEn: [
        'Fast product/part search',
        'Category-based structure',
        'Catalog management on a single platform'
      ]
    },
    {
      id: 2,
      badgeTr: 'Paket 2',
      badgeEn: 'Package 2',
      titleTr: 'AI Destekli Dijital Asistan',
      titleEn: 'AI-Powered Digital Assistant',
      descTr: 'Yedek parça kataloglarınızı AI süreçlerinden geçirip dijital asistana çeviriyoruz.',
      descEn: 'We process your spare parts catalogs with AI and transform them into a digital assistant.',
      pointsTr: [
        'AI destekli Chatbot',
        'Visual Search entegrasyonu',
        'Daha hızlı ve isabetli parça bulma'
      ],
      pointsEn: [
        'AI-powered chatbot',
        'Visual Search integration',
        'Faster and more accurate part discovery'
      ]
    },
    {
      id: 3,
      badgeTr: 'Paket 3',
      badgeEn: 'Package 3',
      titleTr: 'AI Destekli E-Ticaret Çözümü',
      titleEn: 'AI-Powered E-Commerce Solution',
      descTr: 'Kataloglarınız üzerinden AI destekli Chatbot ve Visual Search içeren bir e-ticaret sitesi kuruyoruz.',
      descEn: 'We build an e-commerce site on top of your catalogs with AI-powered Chatbot and Visual Search.',
      pointsTr: [
        'Müşterinin doğru parçayı kolay bulması',
        'Yanlış sipariş kaynaklı kargo/iade maliyetlerini azaltma',
        'Satışa dönük akıllı katalog deneyimi'
      ],
      pointsEn: [
        'Helps customers find the right part easily',
        'Reduces shipping/return costs from wrong orders',
        'Sales-focused smart catalog experience'
      ]
    }
  ];
}
