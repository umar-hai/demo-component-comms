import { Component, Input } from '@angular/core';
import { BiasProgress } from '../bias-progress';

@Component({
  selector: 'demo-progress',
  template: `
    <div style="padding: 10px; border:2px solid black">
      <div>Demo progress</div>

      <div>Bias Considered: Progress {{ progress?.biasConsidered }}</div>
    </div>
  `,
})
export class DemoProgressComponent {
  @Input() progress?: BiasProgress;
}
