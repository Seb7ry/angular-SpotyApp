import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  constructor( private spotify : SpotifyService){

  }

  artists : any[] = [];

  buscar(termino : String){
    this.spotify.getArtist(termino)
      .subscribe( ( data: any ) => {
        console.log(data)
        this.artists = data;
      })
  }
}
