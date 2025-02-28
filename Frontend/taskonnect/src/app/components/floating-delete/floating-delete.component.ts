import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-floating-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-delete.component.html',
  styleUrl: './floating-delete.component.scss'
})
export class FloatingDeleteComponent {

  isOpen: boolean = false;

  constructor() {
  }

  close() {
  }

  getTituloTarea(){
  }

  async deleteTask(){
    this.close();
  }

}
