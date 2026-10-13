import { Component, input } from '@angular/core';
import { Project } from '../../models/curriculum.model';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.html',
})
export class ProjectsSectionComponent {
  readonly projects = input.required<Project[]>();
}
