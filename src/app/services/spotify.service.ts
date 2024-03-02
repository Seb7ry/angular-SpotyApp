import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient ) {

   }

   getQuery( query: String){
      const URL = `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQBVKV_fpmClaEhjFb2k2AvXS5IcVk78mjq-1M9tFmOogMCMlj3nDUafw3EAaQDmMXOiR4JPZnAWIwSwP89s9bGB14HvGif7NMAFFJA9ta0WYLyT9s0'
      }) //Validate token with request postman

      return this.http.get(URL, {headers}); 
   }

   getNewReleases(){
      return this.getQuery('browse/new-releases')
        .pipe( map( ( data: any ) => data.albums.items ));
   }

   getArtist(termino : String){
      //const headers = new HttpHeaders({
      //  'Authorization' : 'Bearer BQAICqRB98Q2W9dMmBJntm4Jw6Wf9fCQdTA9nZluorI5r0TpJ3bW3PSAqqGSMTvoUFoMzffEGklW8SPuTTiXjx2U2AgDJvw-zmitPFAVmA-Ux8T1H1A'
      //}) Validate token with request postman
      //return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, { headers })
      //  .pipe( map( (data: any) => data.artists.items));
      return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
          .pipe( map( ( data: any ) => data.artists.items));
   }
}

