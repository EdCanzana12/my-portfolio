import { Component } from '@angular/core';
import { Background } from '../background/background';

@Component({
  selector: 'app-hero',
  imports: [
    Background,
    
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
