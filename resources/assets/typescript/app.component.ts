import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { SearchComponent } from './components/search.component';
import { PlayerComponent } from './components/player.component';
import { ControlsComponent } from './components/controls.component';
import { MixComponent } from './components/mix.component';
import { MusicService } from './services/music.service';
import { Mix } from './models/mix.model';

declare var $: any;

// @Routes([
//     {
//         path: '/',
//         component: IndexComponent
//     }
// ])
@Component({
    'selector': 'app',
    'templateUrl': '/templates/app',
    'directives': [ROUTER_DIRECTIVES, SearchComponent, PlayerComponent, ControlsComponent, MixComponent],
    'providers': [MusicService]
})
export class AppComponent implements OnInit {

    public mixes: Mix[];

    constructor (private musicService: MusicService) {}

    ngOnInit() {
        $('.modal-trigger').leanModal();
        $('.parallax').parallax();

        this
            .musicService
            .getMixes()
            .subscribe(
                mixes => {
                    console.log(mixes);
                    this.mixes = mixes;
                },
                error => console.error(error)
            );
    }
}