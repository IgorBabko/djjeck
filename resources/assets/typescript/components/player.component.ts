import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
    'selector': 'dj-player',
    'templateUrl': '/templates/components.player'
})
export class PlayerComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        
        // jQuery(".jAudio--player").jAudio({
        //     playlist: [],
        //     defaultAlbum: undefined,
        //     defaultArtist: undefined,
        //     defaultTrack: 0,
        //     autoPlay: false,
        //     debug: false
        // });

    }
}