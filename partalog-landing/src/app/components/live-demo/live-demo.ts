import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation'; 

@Component({
  selector: 'app-live-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-demo.html',
})
export class LiveDemoComponent {
  ts = inject(TranslationService);

  features = [
    {
      id: 1,
      titleTr: 'Kolayca Kayıt Olun',
      titleEn: 'Sign Up Easily',
      descTr: 'Dakikalar içinde kayıt olun ve yedek parça kataloglarınızı güvenle sisteme yükleyin.',
      descEn: 'Sign up in minutes and securely upload your spare part catalogs to the platform.',
      icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' 
    },
    {
      id: 2,
      titleTr: 'AI Destekli Dijital Asistana Dönüşüm',
      titleEn: 'Transform into an AI-Powered Digital Assistant',
      descTr: 'Kataloglarınız, AI destekli chatbot ve visual search özellikleriyle konuşan ve arayan bir dijital asistana dönüşür.',
      descEn: 'Your catalogs transform into a digital assistant with AI-powered chatbot and visual search capabilities.',
      icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' 
    },
    {
      id: 3,
      titleTr: 'AI Destekli E-Ticaret Sitesine Dönüşüm',
      titleEn: 'Transform into an AI-Powered E-Commerce Site',
      descTr: 'Katalog veriniz, AI destekli ürün keşfi ve akıllı eşleştirme ile satışa hazır bir e-ticaret deneyimine dönüşür.',
      descEn: 'Your catalog data becomes a sales-ready e-commerce experience with AI-powered discovery and smart matching.',
      icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' 
    }
  ];
}
