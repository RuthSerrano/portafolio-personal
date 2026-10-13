import { Component, OnInit, inject, signal } from '@angular/core';
import { AboutSectionComponent } from './components/about-section/about-section';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { GallerySectionComponent } from './components/gallery-section/gallery-section';
import { HomeSectionComponent } from './components/home-section/home-section';
import { NavigationComponent } from './components/navigation/navigation';
import { ObjectivesSectionComponent } from './components/objectives-section/objectives-section';
import { ProjectsSectionComponent } from './components/projects-section/projects-section';
import { ResumeSectionComponent } from './components/resume-section/resume-section';
import { Curriculum } from './models/curriculum.model';
import { CurriculumService } from './services/curriculum.service';

@Component({
  imports: [
    AboutSectionComponent,
    ContactSectionComponent,
    GallerySectionComponent,
    HomeSectionComponent,
    NavigationComponent,
    ObjectivesSectionComponent,
    ProjectsSectionComponent,
    ResumeSectionComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly curriculumService = inject(CurriculumService);

  protected readonly curriculum = signal<Curriculum | null>(null);
  protected readonly loading = signal(true);
  protected readonly loadError = signal<string | null>(null);
  protected readonly currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.loadCurriculum();
  }

  protected loadCurriculum(): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.curriculumService.load().subscribe({
      next: (curriculum) => {
        this.curriculum.set(curriculum);
        this.loading.set(false);
      },
      error: () => {
        this.curriculum.set(null);
        this.loadError.set(
          'Comprueba tu conexión e intenta recargar los datos desde public/data/cv.json.',
        );
        this.loading.set(false);
      },
    });
  }
}
