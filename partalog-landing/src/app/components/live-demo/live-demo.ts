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
      titleTr: 'Sisteme Giriş Yapın',
      titleEn: 'Log In Easily',
      descTr: 'Kullanıcı dostu arayüzümüzle Partalog sistemine saniyeler içinde ve güvenle giriş yapın.',
      descEn: 'Log in to the Partalog system securely and in seconds with our user-friendly interface.',
      icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' 
    },
    {
      id: 2,
      titleTr: 'Katalogları Yükleyin',
      titleEn: 'Upload Catalogs',
      descTr: 'Kataloglarınızı sisteme yükleyin ve gelişmiş Partalog sistemi sayesinde aradığınız parçaya kolayca ulaşın.',
      descEn: 'Upload your catalogs to the system and easily find the part you are looking for thanks to our advanced Partalog system.',
      icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' 
    },
    {
      id: 3,
      titleTr: 'Görsel ile Tespit',
      titleEn: 'Visual Detection',
      descTr: 'Kameranızı açın, parçanın fotoğrafını çekin ve yapay zeka saniyeler içinde eşleşmeyi bulsun.',
      descEn: 'Open your camera, take a photo of the part, and let AI find the match in seconds.',
      icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' 
    }
  ];
}