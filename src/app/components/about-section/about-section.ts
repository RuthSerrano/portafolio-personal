import { Component, input } from '@angular/core';
import { Curriculum } from '../../models/curriculum.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSectionComponent {
  readonly cv = input.required<Curriculum>();
}
