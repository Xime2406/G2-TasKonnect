import {Component, CUSTOM_ELEMENTS_SCHEMA, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})

export class MenuComponent {

  isMenuOpen: boolean = false;
  animationState = 'closeMenu';

  constructor(private router: Router){

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menu = document.querySelector('.dropdown-menu');
    const userIcon = document.querySelector('.user');

    if (!menu?.contains(target) && !userIcon?.contains(target)) {
      this.isMenuOpen = false;
    }
  }

  cerrarSesion(){
    localStorage.removeItem('token_taskonnect');
    localStorage.removeItem('user_taskonnect');
    this.router.navigate(['/login']);
  }

}
