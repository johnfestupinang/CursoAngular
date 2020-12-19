import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme:boolean = false;
  constructor( private auth:AuthService, private router:Router ) { }

  ngOnInit() {
    if( localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login( form:NgForm) {

    if (form.invalid ){return; }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...',
      icon: 'info'
    });
    Swal.showLoading();

    this.auth.logIn(this.usuario).subscribe(
      resp =>{
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('/home');

        if( this.recordarme ){
          localStorage.setItem('email', this.usuario.email);
        }

      }, err =>{
        Swal.fire({
          title: 'Error al autenticar',
          text: err.error.error.message,
          icon: 'error'
        });
        console.log(err.error.error.message);

      }
    );
    console.log(form);
  }

}