import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopContainerComponent } from './top-container/top-container.component';



@NgModule({
  declarations: [TopContainerComponent],
  exports: [
    TopContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TopModule { }
