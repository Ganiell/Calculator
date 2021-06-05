import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { TypedComponent } from './typed/typed.component';
import { ResultComponent } from './result/result.component';
import { SupposedResultComponent } from './supposed-result/supposed-result.component';



@NgModule({
  declarations: [
    ResultsComponent,
    TypedComponent,
    ResultComponent,
    SupposedResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResultsComponent
  ]
})
export class ResultModule { }
