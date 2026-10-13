import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { Curriculum } from '../../models/curriculum.model';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-home-section',
  templateUrl: './home-section.html',
  styleUrl: './home-section.css',
})
export class HomeSectionComponent {
  readonly cv = input.required<Curriculum>();
}
