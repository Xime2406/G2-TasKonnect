import { Component } from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {FloatingDeleteComponent} from '../floating-delete/floating-delete.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent, FloatingDeleteComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
