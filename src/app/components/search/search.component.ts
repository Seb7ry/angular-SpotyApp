import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  loading: boolean;

  constructor( private spotify : SpotifyService){ 
    this.loading = false;
   }

  artists : any[] = [];


  buscar(termino : String){
    this.loading = true;
    this.spotify.getArtist(termino)
      .subscribe( ( data: any ) => {
        this.loading = true;
        console.log(data)
        this.artists = data;
        this.loading = false;
      })
  }
}
