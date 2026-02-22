import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { LiveDemoComponent } from './components/live-demo/live-demo'; 
import { TransformationComponent } from './components/transformation/transformation';
import { FaqComponent } from './components/faq/faq';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    HeroComponent, 
    LiveDemoComponent, 
    TransformationComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,       
        easing: 'ease-out',
        once: false,  // GÜNCELLENDİ: Performans için animasyonlar sadece 1 kez çalışacak.       
        mirror: true,        
        offset: 120,         
        anchorPlacement: 'top-bottom', 
      });
    }
  }
}