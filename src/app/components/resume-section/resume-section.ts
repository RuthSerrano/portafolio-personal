import { Component, input } from '@angular/core';
import { Curriculum } from '../../models/curriculum.model';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.html',
  styleUrl: './resume-section.css',
})
export class ResumeSectionComponent {
  readonly cv = input.required<Curriculum>();
}
