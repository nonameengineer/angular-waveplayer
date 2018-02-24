import { Component, OnInit } from '@angular/core';

import * as WaveSurfer from 'wavesurfer.js';
import { Playlist } from '../../services/playlist';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  moduleId: module.id,
  selector: 'wave-surfer',
  templateUrl: 'wavesurfer.component.html',
  styleUrls: ['wavesurfer.component.sass']
})
export class WaveSurferComponent implements OnInit {
  private wavesurfer: WaveSurfer;
  private activeMusic: Playlist;
  private activeMusicId = 0;
  private playlist: Playlist[];
  private status = false;

  constructor(private playlistService: PlaylistService) { }

  private getPlaylist(): void {
    this.playlistService.getPlaylist().subscribe(playlist => this.playlist = playlist);
  }

  private onPreviousButton(event) {
    this.activeMusicId--;
    this.musicUpdate();
  }

  private onPlayButton(event) {
    this.status = !this.status;
    this.wavesurfer.playPause();
  }

  private onNextButton(event) {
    this.activeMusicId++;
    this.musicUpdate();
  }

  private musicUpdate() {
    this.activeMusic = this.playlist[this.activeMusicId];
    this.wavesurfer.load(this.activeMusic.url);
    if (this.status === true) {
      this.wavesurfer.play();
    } else {
      this.wavesurfer.pause();
    }
  }

  ngOnInit() {
    this.getPlaylist();
    this.wavesurfer = WaveSurfer.create({
      container: '.player-container',
      waveColor: '#97C4D2',
      progressColor: '#fff',
      backend: 'MediaElement'
    });
    this.activeMusic = this.playlist[this.activeMusicId];
    console.log(this.activeMusicId);
    this.wavesurfer.load(this.activeMusic.url);
    // this.wavesurfer.empty();
  }
}
