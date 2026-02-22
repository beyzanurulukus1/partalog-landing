
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// DİKKAT: Dosya uzantısı .service değil, senin dosyan olan translation
import { TranslationService } from '../../services/translation'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  ts = inject(TranslationService); // Servisi içeri al

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}