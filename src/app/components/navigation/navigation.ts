import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';

interface NavigationLink {
  label: string;
  target: string;
  icon: string;
}

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class NavigationComponent {
  readonly projectsAvailable = input(false);
  protected readonly menuOpen = signal(false);
  protected readonly links = computed<NavigationLink[]>(() => {
    const links: NavigationLink[] = [
      { label: 'Inicio', target: 'home', icon: 'bi-house' },
      { label: 'Sobre mí', target: 'about', icon: 'bi-person' },
      { label: 'Currículum', target: 'resume', icon: 'bi-file-earmark-text' },
      { label: 'Objetivos profesionales', target: 'professional-objectives', icon: 'bi-bullseye' },
      { label: 'Fotografía', target: 'gallery', icon: 'bi-images' },
    ];
    if (this.projectsAvailable()) {
      links.push({ label: 'Proyectos', target: 'projects', icon: 'bi-kanban' });
    }
    links.push({ label: 'Contacto', target: 'contact', icon: 'bi-envelope' });
    return links;
  });

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(toggle: HTMLButtonElement): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      toggle.focus();
    }
  }
}
