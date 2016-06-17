import { Component, OnInit } from '@angular/core';
import { Mix } from '../models/mix.model';
import { Track } from '../models/track.model';
import { MusicService } from '../services/music.service';

declare var jQuery: any;

@Component({
    'selector': 'dj-player',
    'templateUrl': '/templates/components.player',
    'providers': [MusicService]
})
export class PlayerComponent implements OnInit {

    public mixes: Mix[];

    constructor(private musicService: MusicService) {}

    ngOnInit() {

        this
            .musicService
            .getMixes()
            .subscribe(
                mixes => {
                    this.mixes = mixes;
                    console.log(mixes);
                },
                error => console.error(error)
            );
        
        console.log(jQuery(".jAudio--player"));

    }
}