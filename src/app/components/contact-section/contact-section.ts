import { Component, input } from '@angular/core';
import { Curriculum } from '../../models/curriculum.model';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
})
export class ContactSectionComponent {
  readonly cv = input.required<Curriculum>();
}
