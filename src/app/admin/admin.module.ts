import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './summarylayout/table/table.component';
import { SummarylayoutComponent } from './summarylayout/summarylayout.component';



@NgModule({
  declarations: [TableComponent, SummarylayoutComponent],
  exports: [
    TableComponent,
    SummarylayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
