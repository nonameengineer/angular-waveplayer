import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { Playlist } from '../../services/playlist';

@Component({
  moduleId: module.id,
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {
  playlist: Playlist[];

  constructor(private playlistService: PlaylistService) { }

  getPlaylist(): void {
    this.playlistService.getPlaylist().subscribe(playlist => this.playlist = playlist);
  }

  onMusic(event: Event): void {
    console.log(event);
  }

  ngOnInit() {
    this.getPlaylist();
  }

}
