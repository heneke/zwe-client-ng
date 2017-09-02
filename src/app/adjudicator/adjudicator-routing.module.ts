import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdjudicatorHomeComponent} from './adjudicator-home/adjudicator-home.component';

const routes: Routes = [
    {path: 'adjudicator', component: AdjudicatorHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdjudicatorRoutingModule { }
