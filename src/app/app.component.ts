import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})

export class AppComponent {
    public appPages = [
        { title: 'Home', url: '/homepage', icon: 'home' },
        { title: 'Login', url: '/folder/login', icon: 'log-in' }
    ];

  constructor() {}
}
