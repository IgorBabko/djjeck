import { Component, OnInit, Input } from '@angular/core';
import { Mix } from '../models/mix.model';

declare var jQuery: any;

@Component({
    'selector': 'dj-mix',
    'templateUrl': '/templates/components.mix'
})
export class MixComponent {

    @Input() mix: Mix;
}