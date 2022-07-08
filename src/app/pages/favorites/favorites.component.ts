import { Component, OnInit } from '@angular/core';
import { SuperHero } from 'src/app/model/superHeroes/superHero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(
    public heroes: HeroesService
  ) { }

  ngOnInit(): void {
  }

  public removeFromFavorites(hero: SuperHero) {
    this.heroes.favorites.splice(this.heroes.favorites.indexOf(hero), 1)
  }

}
