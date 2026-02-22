import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
// İşte bilgisayarın aradığı sınıf bu:
export class FooterComponent {
  ts = inject(TranslationService);
}