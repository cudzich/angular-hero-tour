import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

// @Component is a decorator function that specifies the Angular
// metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// You must export the class so it can be used elsewhere.
export class HeroesComponent implements OnInit {
heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void { // lifecycle hook, place initializing logic here
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
