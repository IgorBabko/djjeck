import { Component, OnInit, Input } from '@angular/core';
import { Mix } from '../models/mix.model';

declare var $: any;

@Component({
    'selector': 'dj-mix',
    'templateUrl': '/templates/components.mix'
})
export class MixComponent implements OnInit {

    @Input() mix: Mix;

    ngOnInit() {
        $('.materialboxed').materialbox();
        console.log('+');
    }
}