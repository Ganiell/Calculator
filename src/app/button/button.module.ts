import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonsNumbersComponent } from './buttons-numbers/buttons-numbers.component';
import { ButtonsOperatorsComponent } from './buttons-operators/buttons-operators.component';
import { ButtonNumberComponent } from './button-number/button-number.component';
import { ButtonOperatorComponent } from './button-operator/button-operator.component';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { ButtonEqualComponent } from './button-equal/button-equal.component';



@NgModule({
  declarations: [
    ButtonsComponent,
    ButtonsNumbersComponent,
    ButtonsOperatorsComponent,
    ButtonNumberComponent,
    ButtonOperatorComponent,
    ButtonDeleteComponent,
    ButtonEqualComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonModule { }
