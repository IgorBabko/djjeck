import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { PlayerComponent } from './components/player.component';


// @Routes([
//     {
//         path: '/',
//         component: IndexComponent
//     }
// ])
@Component({
    'selector': 'app',
    'templateUrl': '/templates/app',
    'directives': [ROUTER_DIRECTIVES, PlayerComponent],
})
export class AppComponent {
    constructor () {}
}