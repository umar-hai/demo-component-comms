import { Component } from '@angular/core';
import { BiasAssessment } from '../bias-assessment';
import { BiasProgress, createBiasProgress } from '../bias-progress';

@Component({
  selector: 'demo-service-subject-parent',
  template: `
    <div style="border: 3px solid black">
      <div>Demo Service Subject</div>
      <div style="display: flex; width: 100%;">
        <demo-service-subject-form style="flex: 1"></demo-service-subject-form>
        <demo-service-subject-progress
          style="flex: 1"
        ></demo-service-subject-progress>
      </div>
    </div>
  `,
})
export class DemoServiceSubjectParentComponent {}
