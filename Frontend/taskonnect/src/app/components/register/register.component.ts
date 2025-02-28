import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  mostrar: boolean = false; // password
  mostrarConfirm: boolean = false; // Confirm password

  constructor(
    private router: Router,
    // private tasksService: TasksService,
    // private userService: UserService
  ) {

  }

  redirectToMain() {
    this.router.navigate(['/login']);
  }

  errorMessage = {
    count: 0,
    username: {
      text: "",
      mostrar: false
    },
    email: {
      text: "",
      mostrar: false
    },
    name: {
      text: "",
      mostrar: false
    },
    lastname: {
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

  public user = {
    username: "",
    email: "",
    name: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  }
  async registrarUsuario() {
    // // console.log(this.user)
    // // console.log(this.errorMessage)
    // this.errorMessage = {
    //   count: 0,
    //   username: {
    //     text: "",
    //     mostrar: false
    //   },
    //   email: {
    //     text: "",
    //     mostrar: false
    //   },
    //   name: {
    //     text: "",
    //     mostrar: false
    //   },
    //   lastname: {
    //     text: "",
    //     mostrar: false
    //   },
    //   password: {
    //     text: "",
    //     mostrar: false
    //   },
    // }
    //
    // this.errorMessage.count = 0;
    //
    // let regularExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //
    // // validación username
    // if(this.user.username == "" ){
    //   this.errorMessage.username.text = "El nombre de usuario es obligatorio"
    //   this.errorMessage.username.mostrar = true
    //   this.errorMessage.count++;
    // }else if( this.user.username.length < 3  ){
    //   this.errorMessage.username.text = "El nombre de usuario debe ser mayor a 3 letras"
    //   this.errorMessage.username.mostrar = true
    //   this.errorMessage.count++;
    // }else{
    //   this.errorMessage.username.text = ""
    //   this.errorMessage.username.mostrar = false
    // }
    //
    // // validación name
    // if(this.user.name == "" ){
    //   this.errorMessage.name.text = "El nombre es obligatorio"
    //   this.errorMessage.name.mostrar = true
    //   this.errorMessage.count++;
    // }else if( this.user.name.length < 3  ){
    //   this.errorMessage.name.text = "El nombre debe ser mayor a 3 letras"
    //   this.errorMessage.name.mostrar = true
    //   this.errorMessage.count++;
    // }else{
    //   this.errorMessage.name.text = ""
    //   this.errorMessage.name.mostrar = false
    // }
    //
    // // validación lastname
    // if(this.user.lastname == "" ){
    //   this.errorMessage.lastname.text = "El apellido es obligatorio"
    //   this.errorMessage.lastname.mostrar = true
    //   this.errorMessage.count++;
    // }else if(this.user.lastname.length < 3){
    //   this.errorMessage.lastname.text = "El apellido debe ser mayor a 3 letras"
    //   this.errorMessage.lastname.mostrar = true
    //   this.errorMessage.count++;
    // }else{
    //   this.errorMessage.lastname.text = ""
    //   this.errorMessage.lastname.mostrar = false
    // }
    //
    // // validación email
    // if(this.user.email == "" ){
    //   this.errorMessage.email.text = "El correo es obligatorio"
    //   this.errorMessage.email.mostrar = true
    //   this.errorMessage.count++;
    // }else if(!regularExp.test(this.user.email) ){
    //   this.errorMessage.email.text = "Ingrese un correo válido"
    //   this.errorMessage.email.mostrar = true
    //   this.errorMessage.count++;
    // }else{
    //   this.errorMessage.email.text = ""
    //   this.errorMessage.email.mostrar = false
    // }
    //
    // // validación password
    // if(this.user.password == "" || this.user.confirmPassword == ""){
    //   this.errorMessage.password.text = "La contraseña es obligatoria"
    //   this.errorMessage.password.mostrar = true
    //   this.errorMessage.count++;
    // }else if(this.user.password !== this.user.confirmPassword){
    //   this.errorMessage.password.text = "Las contraseñas no coinciden"
    //   this.errorMessage.password.mostrar = true
    //   this.errorMessage.count++;
    // }else{
    //   this.errorMessage.password.text = ""
    //   this.errorMessage.password.mostrar = false
    // }
    //
    // // Validacion backend
    // if(this.errorMessage.count == 0){
    //   console.log("Registrar usuario")
    //
    //   await this.userService.registerUser(
    //     {
    //       usuarioIngreso: this.user.username,
    //       contraseña: this.user.password,
    //       correo: this.user.email,
    //       nombres: this.user.name,
    //       apellidos: this.user.lastname
    //     }
    //   );
    //
    //   this.successMessage.text = "Usuario registrado correctamente"
    //   this.successMessage.mostrar = true;
    //   // redireccionamos
    //   setTimeout(() => {
    //     this.redirectToMain();
    //   }, 1500);
    //
    // }
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

  mostrarPassConfirm(){
    this.mostrarConfirm=true;
    let elemento:any = document.querySelector("[name='confirmPassword']");
    elemento.type = "text";
  }

  noMostrarPassConfirm(){
    this.mostrarConfirm=false;
    let elemento:any = document.querySelector("[name='confirmPassword']");
    elemento.type = "password";
  }

}
