import { Component, OnInit } from '@angular/core';
import { Mix } from '../models/mix.model';
import { Track } from '../models/track.model';
import { MusicService } from '../services/music.service';

declare var $: any;
declare var ScrollMagic: any;

@Component({
    'selector': 'dj-player',
    'templateUrl': '/templates/components.player',
    'providers': [MusicService]
})
export class PlayerComponent implements OnInit {

    public mixes: Mix[];

    constructor(private musicService: MusicService) {}

    ngOnInit() {
        this.loadMixes();
        this.buildPlaylist(2);
    }

    private loadMixes() {
        this
            .musicService
            .getMixes()
            .subscribe(
                mixes => this.initialize(mixes),
                error => console.error(error)
            );
    }

    private initialize($data) {
        // console.log($data);
    }

    private buildPlaylist($data) {

        var t = {
            playlist: [
                {
                    file: "https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3",
                    thumb: "img/deluxe.jpg",
                    trackName: "Niko Bellic",
                    trackArtist: "dj jeck",
                    trackAlbum: "dj jeck"
                },
                {
                    file: "https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3",
                    thumb: "img/frash_sound.jpg",
                    trackName: "Blank",
                    trackArtist: "dj jeck",
                    trackAlbum: "dj jeck"
                },
                {
                    file: "https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3",
                    thumb: "img/time_to_dance.jpg",
                    trackName: "Fade",
                    trackArtist: "dj jeck",
                    trackAlbum: "dj jeck"
                }
            ]
        };

        $(".jAudio--player").jAudio(t);

        for (let i = 0; i < $data.length; ++i) {
            
        }
    }
}