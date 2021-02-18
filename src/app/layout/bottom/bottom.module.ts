import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomContainerComponent } from './bottom-container/bottom-container.component';



@NgModule({
  declarations: [BottomContainerComponent],
  exports: [
    BottomContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BottomModule { }
