import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopContainerComponent } from './top-container/top-container.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [TopContainerComponent],
  exports: [
    TopContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class TopModule { }
