import { Component, Input } from '@angular/core';
import { BiasProgress } from '../bias-progress';
import { DemoServiceSubjectService } from './demo-service-subect.service';

@Component({
  selector: 'demo-service-subject-progress',
  template: `
    <div style="padding: 10px; border:2px solid black">
      <div>Demo progress</div>

      <div *ngIf="progress$ | async as progress">
        Bias Considered: Progress {{ progress.biasConsidered }}
      </div>
    </div>
  `,
})
export class DemoServiceSubjectProgressComponent {
  progress$ = this.demoService.progress$;

  constructor(private demoService: DemoServiceSubjectService) {}
}
