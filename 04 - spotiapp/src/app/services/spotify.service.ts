import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }

  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      //El token expira cada 1 hora, se tiene que volver a generar
      'Authorization':'Bearer BQCuSSG2Zahp67mdI6_5qu2E2RQITUFnFTepHq9DiC0wK4WyIsq2P2YEVIXaVwh-koDrRrOIncFy1ubAwu0'
    });

    return this.http.get(url,{ headers });
  }

  getNewreleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe( map( (data:any) =>  data.albums.items) );
  }

  getArtistas( termino:string ){
   return this.getQuery(`search?q=${ termino }&type=artist&limit=10`).pipe( map( (data:any) =>  data.artists.items));
  }

  getArtista( id:string ){
    return this.getQuery(`artists/${id}`);
    //.pipe( map( (data:any) =>  data.artists.items));
   }

   getTopTracks( id:string ){
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe( map( (data:any) => data['tracks']));
   }

  
}