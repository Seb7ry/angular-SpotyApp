import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

  artist: any = {};
  tracks: any[] = [];
  loading: boolean;

  constructor( private router : ActivatedRoute,
               private spotify : SpotifyService) {

    this.router.params.subscribe( params => {
      this.getArtist( params['id'] );
      this.getTopTracks( params['id']);
    })
    this.loading = true;
  }

  getArtist( id: String ){
    this.spotify.getArtist(id)
    .subscribe( data => {
      console.log(data)
      this.artist = data;
      this.loading = false;
    });
  }

  getTopTracks(id: String) {
    this.spotify.getTopTracks(id)
    .subscribe( data => {
      console.log(data)
      this.tracks = data;
    })
  }

}
