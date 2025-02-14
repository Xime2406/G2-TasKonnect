import { Routes } from '@angular/router';
import LoginComponent from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'main', component: MainCalendarComponent, children:[
  //     { path: 'editarperfil', title:"Editar perfil", component: EditarperfilComponent },
  //     { path: 'calendar', title:"Calendar", component: CalendarComponent },
  //     { path: 'editartarea', title:"Editar tarea", component: EditarTareaComponent, canActivate:[editTaskGuard] },
  //     { path: 'creartarea', title:"Crear tarea", component: CrearTareaComponent },
  //     { path: '', redirectTo: "/main/calendar", pathMatch: 'full'},
  //   ],
  //   canActivate:[loginGuard]
  // },
  // {path:'editarperfil',component:EditarperfilComponent},
];
