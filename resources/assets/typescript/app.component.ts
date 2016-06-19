import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { LogoComponent } from './components/logo.component';
import { SearchComponent } from './components/search.component';
import { PlayerComponent } from './components/player.component';
import { SocialComponent } from './components/social.component';
import { ControlsComponent } from './components/controls.component';
import { MixComponent } from './components/mix.component';
import { MusicService } from './services/music.service';
import { Mix } from './models/mix.model';

declare var $: any;
declare var ScrollMagic: any;

@Component({
    'selector': 'app',
    'templateUrl': '/templates/app',
    'directives': [ROUTER_DIRECTIVES, LogoComponent, SearchComponent, PlayerComponent, SocialComponent, ControlsComponent, MixComponent],
    'providers': [MusicService]
})
export class AppComponent implements OnInit {

    public mixes: Mix[];

    constructor (private musicService: MusicService) {}

    ngOnInit() {
        this.pinColumnByScrollMagic();
        this.loadMixes();
    }

    private loadMixes() {
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

    private pinColumnByScrollMagic() {
        let controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
            triggerElement: '.pinned',
            triggerHook: '0.2'
        }).setPin('.pinned').addTo(controller);
    }
}