import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { PlayerComponent } from './components/player.component';
import { ControlsComponent } from './components/controls.component';

declare var jQuery: any;

// @Routes([
//     {
//         path: '/',
//         component: IndexComponent
//     }
// ])
@Component({
    'selector': 'app',
    'templateUrl': '/templates/app',
    'directives': [ROUTER_DIRECTIVES, PlayerComponent, ControlsComponent],
})
export class AppComponent implements OnInit {
    constructor () {}

    ngOnInit() {
        jQuery('.modal-trigger').leanModal();
    }
}