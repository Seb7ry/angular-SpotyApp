import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient ) {

   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDiic4EpINxgA6V1ibXRh5_8M0Iq3dV3xlUzbcpBvSMGoeyDUNlt8ZYSFiQWAUwUx6iF2XTztKKC0Q97LHa8KwZpPVUyWyyLZnkcKqgq6cJCABCSSA'
    })

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( data => {
        console.log(data);
      })
   }
}
