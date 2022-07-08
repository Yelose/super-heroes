import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/model/superHeroes/superHero';

@Component({
  selector: 'app-heroesviewer',
  templateUrl: './heroesviewer.component.html',
  styleUrls: ['./heroesviewer.component.scss']
})
export class HeroesviewerComponent implements OnInit {
  @Input("heroes") public Heroes: SuperHero[]
  @Input("sort-by-name") public SortByName: boolean = false
  @Input("show-full-info") public ShowFullInfo: boolean = false
  @Output("hero-click") public OnHeroClick = new EventEmitter<SuperHero>()
  public page: number = 1
  public limit: number = 20 // Número de registros por página.
  public filter_Search: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public sortHeroes(heroes: SuperHero[]): SuperHero[] {
    if (this.SortByName) {
      let heroesCopy = JSON.parse(JSON.stringify(heroes))
      for (let i = 0; i < heroesCopy.length; ++i) {
        for (let j = i; j < heroesCopy.length; ++j) {
          if (heroesCopy[i].name > heroesCopy[j].name) {
            let aux = heroesCopy[i]
            heroesCopy[i] = heroesCopy[j]
            heroesCopy[j] = aux
          }
        }
      }
      return heroesCopy
    } else {
      return heroes
    }
  }

  public filteredHeroes(): SuperHero[] {
    let result = this.sortHeroes(this.Heroes).filter(p => p.name.toLowerCase().indexOf(this.filter_Search.toLowerCase()) != -1)
    return result
  }

  public loadPage(): SuperHero[] {
    let start = ((this.page - 1) * this.limit) // Índice del primer registro que se va a cargar.
    let resultSuperHeroes = []
    let heroes = this.filteredHeroes()
    for (let i = start; i < start + this.limit; ++i) {
      if (i < heroes.length) {
        resultSuperHeroes.push(heroes[i])
      }
    }
    return resultSuperHeroes
  }

  public heroClick(hero: SuperHero): void {
    this.OnHeroClick.emit(hero)
  }

  public pages(): number[] {
    let heroes = this.filteredHeroes()
    let numPages = Math.ceil(heroes.length / this.limit)
    let resultNums = []
    for (let i = 1; i <= numPages; ++i) {
      resultNums.push(i)
    }
    return resultNums
  }
  
  public setPage(page: number) {
    this.page = page;
    this.loadPage()
  }

  public setFilter(e: Event) {
    this.filter_Search = (e.target as HTMLInputElement).value
    this.page = 1
  }

}
