import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('loads and renders curriculum data from the JSON file', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const request = httpTesting.expectOne('./data/cv.json');
    request.flush({
      nombre: 'Ruth Serrano Nina',
      presentacion: 'Presentación de prueba.',
      formacionAcademica: [],
      habilidades: [],
      objetivosAprendizaje: [],
      objetivoProfesional: 'Objetivo profesional de prueba.',
      correo: 'serranoninaruth@gmail.com',
      proyectos: [],
    });
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Ruth Serrano Nina');
    expect(fixture.nativeElement.querySelector('a[href="mailto:serranoninaruth@gmail.com"]')).toBeTruthy();
  });
});
