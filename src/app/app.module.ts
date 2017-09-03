import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
        AppRoutingModule,
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
