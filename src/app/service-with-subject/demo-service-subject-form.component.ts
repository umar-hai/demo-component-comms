import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BiasAssessment } from '../bias-assessment';
import { createBiasProgress } from '../bias-progress';
import { DemoServiceSubjectService } from './demo-service-subect.service';

@Component({
  selector: 'demo-service-subject-form',
  template: `
    <div style="padding: 10px; border: 2px solid black">
      <div>Demo form</div>
      <form [formGroup]="form" (change)="onFormChanged()">
        <div>
          <label>Bias considered</label>
          <select formControlName="biasConsidered">
            <option></option>
            <option [value]="true">True</option>
            <option [value]="false">False</option>
          </select>
        </div>
      </form>
    </div>
  `,
})
export class DemoServiceSubjectFormComponent {
  form = this.fb.group({
    biasConsidered: '',
    biasType: '',
    datasource: '',
    metricCollected: '',
  });

  constructor(
    private fb: FormBuilder,
    private demoService: DemoServiceSubjectService
  ) {}

  onFormChanged() {
    this.demoService.formChanged(this.form.value);
  }
}
