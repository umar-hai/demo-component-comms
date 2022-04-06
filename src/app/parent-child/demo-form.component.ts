import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BiasAssessment } from '../bias-assessment';

@Component({
  selector: 'demo-form',
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
export class DemoFormComponent {
  form = this.fb.group({
    biasConsidered: '',
    biasType: '',
    datasource: '',
    metricCollected: '',
  });

  @Output() formChanged = new EventEmitter<BiasAssessment>();

  constructor(private fb: FormBuilder) {}

  onFormChanged() {
    this.formChanged.emit(this.form.value);
  }
}
