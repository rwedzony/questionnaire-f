import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomContainerComponent } from './bottom-container/bottom-container.component';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DemoMaterialModule} from './material_module';


@NgModule({
  declarations: [BottomContainerComponent],
  exports: [
    BottomContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DemoMaterialModule,
  ]
})
export class BottomModule { }
