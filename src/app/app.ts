import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Navbar } from './components/navbar/navbar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Hero,
    About,
    Projects,
    Contact,
    Navbar,

  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {}
