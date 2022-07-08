import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import MenuOption from 'src/app/model/menu/menuOption';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuOptions: MenuOption[]

  constructor(
    private router: Router
  ) { 
    this.menuOptions = [
      {title: 'Home', url: '/home'},
      {title: 'Stats', url: '/stats'},
      {title: 'Races', url: '/races'},
      {title: 'Favorites', url: '/favorites'}
    ]
  }

  ngOnInit(): void {
  }

  public loadPage(url: string) {
    this.router.navigateByUrl(url)
  }

}
