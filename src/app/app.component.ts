import {Component} from '@angular/core';
import {InitializerService} from './core/services/initializer.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private readonly initializerService: InitializerService) {
    }
}
