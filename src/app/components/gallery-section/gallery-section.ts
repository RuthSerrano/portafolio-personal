import { NgOptimizedImage } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  inject,
  Injector,
  runInInjectionContext,
  signal,
  viewChild,
} from '@angular/core';

interface GalleryPhoto {
  src: string;
  title: string;
  alt: string;
}

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.html',
  styleUrl: './gallery-section.css',
})
export class GallerySectionComponent {
  protected readonly sequence: GalleryPhoto[] = Array.from({ length: 9 }, (_, index) => {
    const number = index + 1;
    const formattedNumber = String(number).padStart(2, '0');
    return {
      src: `./fotos/Foto${number}.jpg`,
      title: `Secuencia ${formattedNumber}`,
      alt: `Fotografía ${formattedNumber} de la secuencia.`,
    };
  });
  protected readonly photos = this.sequence;
  protected readonly activeIndex = signal<number | null>(null);
  protected readonly failedImages = signal<ReadonlySet<string>>(new Set());
  protected readonly activePhoto = computed(() => {
    const index = this.activeIndex();
    return index === null ? null : this.photos[index];
  });

  private readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');
  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');
  private previousFocus: HTMLElement | null = null;

  protected open(index: number, event: MouseEvent): void {
    if (!(event.currentTarget instanceof HTMLButtonElement)) {
      return;
    }
    this.previousFocus = event.currentTarget;
    this.activeIndex.set(index);
    this.afterRender(() => this.closeButton()?.nativeElement.focus());
  }

  protected close(): void {
    this.activeIndex.set(null);
    this.afterRender(() => this.previousFocus?.focus());
  }

  protected move(direction: -1 | 1): void {
    this.activeIndex.update((index) => {
      if (index === null) {
        return index;
      }
      return (index + direction + this.photos.length) % this.photos.length;
    });
  }

  protected handleDialogKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.move(-1);
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.move(1);
      return;
    }
    if (event.key !== 'Tab') {
      return;
    }

    const buttons = this.dialog()?.nativeElement.querySelectorAll<HTMLButtonElement>(
      'button:not([disabled])',
    );
    if (!buttons?.length) {
      return;
    }
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  protected markImageFailed(src: string): void {
    this.failedImages.update((failed) => new Set(failed).add(src));
  }

  private readonly injector = inject(Injector);

  private afterRender(callback: () => void): void {
    runInInjectionContext(this.injector, () => afterNextRender(callback));
  }
}
