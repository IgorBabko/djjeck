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
    'template': '<button class="">Listen</button>'
})
export class AppComponent {
    constructor () {}
}