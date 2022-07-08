import { Injectable } from '@angular/core';
import { SuperHero } from '../model/superHeroes/superHero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  public favorites: SuperHero[]
  public superHeroes: SuperHero[]
  public apiURL: string = 'https://akabab.github.io/superhero-api/api'

  constructor() { 
    this.favorites = []
  }

  public async loadSuperHeroes(): Promise<void> {

    let superHeroesStr = localStorage.getItem('superHeroes') || '[]'
    let favoritesStr = localStorage.getItem('favorites') || '[]'

    let superHeroes: SuperHero[] = JSON.parse(superHeroesStr)
    let favorites: SuperHero[] = JSON.parse(favoritesStr)
    
    if (superHeroes.length < 1) {
      let superHeroesRequest = await fetch(`${this.apiURL}/all.json`)
      superHeroes = await superHeroesRequest.json()
    }
    this.superHeroes = superHeroes
    this.favorites = favorites
  }

  public nonFavourites(): SuperHero[] {
    if (this.superHeroes == null) {
      return []
    }
    return this.superHeroes.filter(p => !this.favorites.find(q => q.id == p.id))
  }

  public saveHeroes(): void {
    localStorage.setItem('superHeroes', JSON.stringify(this.superHeroes))
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }
}
