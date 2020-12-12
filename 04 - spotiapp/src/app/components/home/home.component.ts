import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{
    nuevasCanciones: any [] = [];
    loading:boolean ;
    error:boolean;
    mensajeError:string;

    constructor(private spotify:SpotifyService){
      this.loading = true;
      this.error = false;
      this.mensajeError = "";

      this.spotify.getNewreleases().subscribe((data:any) =>{
        //console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },(err) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = err.error.error.message;
        console.log("error "+err.error.error.message);
        
      }
      
      );
    }
  

}
