import { Component, input } from '@angular/core';
import { Curriculum } from '../../models/curriculum.model';

@Component({
  selector: 'app-objectives-section',
  templateUrl: './objectives-section.html',
  styleUrl: './objectives-section.css',
})
export class ObjectivesSectionComponent {
  readonly cv = input.required<Curriculum>();
}
