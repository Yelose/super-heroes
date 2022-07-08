import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { HeroesviewerComponent } from 'src/app/components/heroesviewer/heroesviewer.component';
import { SuperHero } from 'src/app/model/superHeroes/superHero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('heroesViewer') public HeroesViewer: HeroesviewerComponent

  constructor(
    public heroes: HeroesService,
    public changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let heroes = this.heroes.nonFavourites()
    this.HeroesViewer.Heroes = heroes
  }

  public addToFavorites(hero: SuperHero) {
    this.heroes.favorites.push(hero)
    this.HeroesViewer.Heroes = this.heroes.nonFavourites()

    this.heroes.saveHeroes()
  }

}
