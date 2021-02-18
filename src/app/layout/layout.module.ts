import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagelayoutComponent } from './pagelayout/pagelayout.component';
import { DemoMaterialModule} from './material_module';
import {TopModule} from './top/top.module';
import {BottomModule} from './bottom/bottom.module';


@NgModule({
  declarations: [PagelayoutComponent],
  exports: [
    PagelayoutComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    TopModule,
    BottomModule
  ]
})
export class LayoutModule { }
