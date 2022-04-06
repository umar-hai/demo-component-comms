import { Component } from '@angular/core';
import { BiasAssessment } from '../bias-assessment';
import { BiasProgress, createBiasProgress } from '../bias-progress';

@Component({
  selector: 'demo-parent',
  template: `
    <div style="border: 3px solid black;">
      <div>Demo Parent Child</div>
      <div style="display: flex; width: 100%;">
        <demo-form
          (formChanged)="onFormChanged($event)"
          style="flex: 1"
        ></demo-form>
        <demo-progress [progress]="progress" style="flex: 1"></demo-progress>
      </div>
    </div>
  `,
})
export class DemoParentComponent {
  progress: BiasProgress = {
    biasConsidered: 0,
  };

  onFormChanged(assessment: BiasAssessment) {
    this.progress = createBiasProgress(assessment);
  }
}
