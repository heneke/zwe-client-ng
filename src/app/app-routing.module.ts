import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {path: 'adjudicator', loadChildren: './adjudicator/adjudicator.module#AdjudicatorModule'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
