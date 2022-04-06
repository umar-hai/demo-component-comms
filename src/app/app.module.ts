import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoFormComponent } from './parent-child/demo-form.component';
import { DemoParentComponent } from './parent-child/demo-parent.component';
import { DemoProgressComponent } from './parent-child/demo-progress.component';
import { DemoServiceSubjectFormComponent } from './service-with-subject/demo-service-subject-form.component';
import { DemoServiceSubjectParentComponent } from './service-with-subject/demo-service-subject-parent.component';
import { DemoServiceSubjectProgressComponent } from './service-with-subject/demo-service-subject-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent,
    DemoProgressComponent,
    DemoParentComponent,
    DemoServiceSubjectFormComponent,
    DemoServiceSubjectParentComponent,
    DemoServiceSubjectProgressComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
