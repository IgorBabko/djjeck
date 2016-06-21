import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mix } from '../models/mix.model';

declare var $: any;

@Component({
    'selector': 'dj-mix',
    'templateUrl': '/templates/components.mix'
})
export class MixComponent implements OnInit {

    @Input() mix: Mix;
    @Output() mixChanged = new EventEmitter();

    ngOnInit() {
        $('.materialboxed').materialbox();
    }

    public changeMix(event) {
        this.mixChanged.emit(this.mix);
    }
}