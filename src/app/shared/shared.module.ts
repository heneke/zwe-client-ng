import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        NgbModule,
        SlimLoadingBarModule,
    ],
})
export class SharedModule {
}
