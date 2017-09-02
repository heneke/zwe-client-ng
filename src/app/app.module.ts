import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
