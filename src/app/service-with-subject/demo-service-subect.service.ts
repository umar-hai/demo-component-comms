import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { BiasAssessment } from '../bias-assessment';
import { BiasProgress, createBiasProgress } from '../bias-progress';

@Injectable({ providedIn: 'root' })
export class DemoServiceSubjectService {
  biasAssessment$ = new BehaviorSubject<BiasAssessment | null>(null);

  progress$ = this.biasAssessment$.pipe(
    map((assessment) => assessment && createBiasProgress(assessment))
  );

  formChanged(assessment: BiasAssessment) {
    this.biasAssessment$.next(assessment);
  }
}
