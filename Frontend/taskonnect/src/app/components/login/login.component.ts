import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usernameValue: string = 'ejemplo1@correo.com';
  userPassword: string = 'contraUsuario1';

  constructor(
    private router: Router,
  ) { }

  redirectToMain() {
    this.router.navigate(['/main']);
  }

  mostrar: boolean = false;

  errorMessage = {
    count: 0,
    email: {
      text: "",
      mostrar: false
    },
    password: {
      text: "",
      mostrar: false
    },
  }

  successMessage = {
    text: "",
    mostrar: false,
  }

  loginErrorMessage = {
    text: "",
    mostrar: false,
  }

  public user = {
    email: "",
    password: "",
  }

  mostrarPass(){
    this.mostrar=true;
    let elemento:any = document.querySelector("[name='password']");
    elemento.type = "text";
  }

  noMostrarPass(){
    this.mostrar=false;
    let elemento:any = document.querySelector("[name='password']");
    elemento.type = "password";
  }

  async loginUsuario() {
    this.router.navigate(['/main'])
  }
}
