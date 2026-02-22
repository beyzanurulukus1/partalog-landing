import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// YENİ: HttpClient modülünü içeri aktarıyoruz
import { provideHttpClient, withFetch } from '@angular/common/http'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideClientHydration(withEventReplay()),
    // YENİ: Tüm uygulamanın HTTP istekleri atabilmesi için ekledik
    provideHttpClient(withFetch()) 
  ]
};