
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation'; // Senin dosya yolun

@Component({
  selector: 'app-transformation',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './transformation.html',
  styleUrl: './transformation.css'
})
export class TransformationComponent {
  ts = inject(TranslationService);
  sliderValue: number = 50;

  updateSlider(event: Event) {
    const target = event.target as HTMLInputElement;
    this.sliderValue = Number(target.value);
  }
}