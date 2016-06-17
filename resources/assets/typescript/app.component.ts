import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { IndexComponent } from './components/index.component';

@Routes([
    {
        path: '/',
        component: IndexComponent
    }
])
@Component({
    'directives': [ROUTER_DIRECTIVES],
    'selector': 'app',
    'templateUrl': '/templates/index'
})
export class AppComponent {
    constructor () {}
}