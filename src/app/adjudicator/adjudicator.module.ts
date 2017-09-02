import { NgModule } from '@angular/core';

import { AdjudicatorRoutingModule } from './adjudicator-routing.module';
import { AdjudicatorHomeComponent } from './adjudicator-home/adjudicator-home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AdjudicatorRoutingModule
  ],
  declarations: [AdjudicatorHomeComponent]
})
export class AdjudicatorModule { }
