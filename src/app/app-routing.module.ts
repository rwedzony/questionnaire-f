import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {SummarylayoutComponent} from './admin/summarylayout/summarylayout.component';
import {PagelayoutComponent} from './layout/pagelayout/pagelayout.component';

const routes: Routes = [{
  path: '', component: PagelayoutComponent},
  {path: 'admin', component: SummarylayoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
