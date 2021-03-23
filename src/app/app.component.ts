import { Component } from '@angular/core';
import { Task } from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string} | null = null;
  tasks: Task[] = [
    {
      name: "Siłownia",
      deadline: '2020-01-03',
      done: false,
    },
    {
      name: "Nauka",
      deadline: '2020-02-03',
      done: false,
    },
    {
      name: "Pranie",
      deadline: '2020-03-03',
      done: false,
    }
  ];

  constructor() {
    setTimeout( () => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString(),
      };
    }, 500);
  }
}