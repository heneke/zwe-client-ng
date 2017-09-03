import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InitializerService} from './services/initializer.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
    ],
    providers: [
        InitializerService,
    ]
})
export class CoreModule {
}
