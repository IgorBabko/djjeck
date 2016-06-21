import { Component, OnInit, Input } from '@angular/core';
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

    @Input() mix: Mix;
    public playlist = [];

    constructor(private musicService: MusicService) {}

    ngOnInit() {
        this.loadMix(1);
    }

    private loadMix(id: string | number) {
        this
            .musicService
            .getMix(id)
            .subscribe(
                mix   => this.buildPlaylist(mix),
                error => console.error(error)
            );
    }

    public changePlaylist(mix) {
        this.buildPlaylist(mix);
    }

    private buildPlaylist(mix) {

        // var t = {
        //     playlist: [
        //         {
        //             file: "https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3",
        //             thumb: "img/deluxe.jpg",
        //             trackName: "Niko Bellic",
        //             trackArtist: "dj jeck",
        //             trackAlbum: "dj jeck"
        //         },
        //         {
        //             file: "https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3",
        //             thumb: "img/frash_sound.jpg",
        //             trackName: "Blank",
        //             trackArtist: "dj jeck",
        //             trackAlbum: "dj jeck"
        //         },
        //         {
        //             file: "https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3",
        //             thumb: "img/time_to_dance.jpg",
        //             trackName: "Fade",
        //             trackArtist: "dj jeck",
        //             trackAlbum: "dj jeck"
        //         },
        //         {
        //             file: "https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3",
        //             thumb: "img/deluxe.jpg",
        //             trackName: "Niko Bellic",
        //             trackArtist: "dj jeck",
        //             trackAlbum: "dj jeck"
        //         },
        //         {
        //             file: "https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3",
        //             thumb: "img/frash_sound.jpg",
        //             trackName: "Blank",
        //             trackArtist: "dj jeck",
        //             trackAlbum: "dj jeck"
        //         },
        //         {
        //             file: "https://s3.eu-central-1.amazonaws.com/djjeck/DJ+JECK+-+Fresh+Sound+2015.mp3",
        //             thumb: "img/time_to_dance.jpg",
        //             trackName: "Fade",
        //             trackArtist: "dj jeck",
        //             trackAlbum: "dj jeck"
        //         }
        //     ]
        // };

        let tracks = mix.tracks;
        this.playlist = [];

        for (let i = 0; i < tracks.length; ++i) {
            this.playlist.push({
                file: tracks[i].url,
                thumb: mix.cover,
                trackName: tracks[i].name,
                trackArtist: "dj jeck",
                trackAlbum: mix.name
            });
        }

        $(".jAudio--player").jAudio(
            { playlist: this.playlist }
        );
    }
}