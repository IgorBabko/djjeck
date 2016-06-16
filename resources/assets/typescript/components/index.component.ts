import { Component, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    'selector': 'index',
    'templateUrl': '/templates/FirstComponent.main'
})
export class IndexComponent {

    /**
     * @type {string}
     */
    private redirectRoute: string = '/edit';

    constructor() {}
}