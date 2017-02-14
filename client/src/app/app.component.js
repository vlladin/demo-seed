import {Component} from '@angular/core';

export class AppComponent {
    constructor() {
    }

}

AppComponent.annotations = [
    new Component({
        selector: 'app',
        template: require('./app.component.html'),
        style: require('./app.component.css')
    })
];


