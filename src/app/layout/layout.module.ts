import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagelayoutComponent } from './pagelayout/pagelayout.component';
import { DemoMaterialModule} from './material_module';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';


@NgModule({
  declarations: [PagelayoutComponent, TopComponent, BottomComponent],
  exports: [
    PagelayoutComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class LayoutModule { }
