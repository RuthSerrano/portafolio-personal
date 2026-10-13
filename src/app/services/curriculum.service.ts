import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculum } from '../models/curriculum.model';

@Injectable({ providedIn: 'root' })
export class CurriculumService {
  private readonly http = inject(HttpClient);

  load(): Observable<Curriculum> {
    return this.http.get<Curriculum>('./data/cv.json');
  }
}
