import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomContainerComponent } from './bottom-container/bottom-container.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [BottomContainerComponent],
  exports: [
    BottomContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class BottomModule { }
