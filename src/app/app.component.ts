import { Component } from '@angular/core';
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    public heroes: HeroesService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.heroes.loadSuperHeroes()
  }

}
