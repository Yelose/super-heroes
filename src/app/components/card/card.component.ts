import { Component, Input, OnInit } from '@angular/core';
import { SuperHero } from 'src/app/model/superHeroes/superHero';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input("hero") public hero: SuperHero

  constructor() { }

  ngOnInit(): void {
  }

}
