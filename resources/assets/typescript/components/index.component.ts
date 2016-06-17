import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerComponent } from './player.component';

@Component({
    'selector': 'index',
    'templateUrl': '/templates/FirstComponent.main',
    'directives': [PlayerComponent]
})
export class IndexComponent {

    /**
     * @type {string}
     */
    private redirectRoute: string = '/edit';

    constructor() {}
}