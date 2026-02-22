import { Component, inject, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation'; 
import { environment } from '../../../environments/environment'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  ts = inject(TranslationService);
  private zone = inject(NgZone); 
  private cdr = inject(ChangeDetectorRef);
  private http = inject(HttpClient); 
  
  formData = {
    name: '',
    email: '',
    company: '',
    description: '',
    website_url: '' // Honeypot
  };

  isSent = false;
  isSending = false;
  errorMessage = ''; 

  private apiUrl = environment.apiUrl;

  submitForm() {
    if (this.formData.name && this.formData.email && this.formData.company) {
      this.isSending = true;
      this.isSent = false;
      this.errorMessage = ''; 
      this.cdr.detectChanges();

      // DİKKAT: website_url eklendi!
      const payload = {
        name: this.formData.name,
        email: this.formData.email,
        company: this.formData.company,
        description: this.formData.description,
        website_url: this.formData.website_url 
      };

      this.http.post(this.apiUrl, payload).subscribe({
        next: (response: any) => {
          this.zone.run(() => {
            this.isSending = false;
            this.isSent = true; 
            console.log("Form başarıyla işlendi:", response.message); 
            
            this.formData = { name: '', email: '', company: '', description: '', website_url: '' }; 
            this.cdr.detectChanges();
            
            setTimeout(() => {
              this.isSent = false;
              this.cdr.detectChanges();
            }, 5000);
          });
        },
        error: (err) => {
          this.zone.run(() => {
            this.isSending = false;
            console.error('Backend Hatası:', err);
            
            if (err.error && err.error.error) {
              this.errorMessage = err.error.error;
            } else {
              this.errorMessage = "Sunucu ile iletişim kurulamadı. Lütfen daha sonra tekrar deneyin.";
            }
            this.cdr.detectChanges();
          });
        }
      });
    }
  }
}