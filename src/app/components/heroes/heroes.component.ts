import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';

// @Component is a decorator function that specifies the Angular
// metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// You must export the class so it can be used elsewhere.
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id:1,
    name: 'Winstorm'
  };
  
  constructor() { }

  ngOnInit(): void { // lifecycle hook, place initializing logic here
  }

}
