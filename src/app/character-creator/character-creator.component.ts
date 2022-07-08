import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Biography, Images, Powerstats, SuperHero } from '../model/superHeroes/superHero';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss']
})
export class CharacterCreatorComponent implements OnInit {
  public Name: string = ''
  public FullName: string = ''
  public STR: number
  public INT: number
  public POW: number
  public SPD: number
  public DUR: number
  public COM: number
  public popupVisible: boolean = false
  @ViewChild("inputFile") public inputFile: ElementRef<HTMLInputElement>

  constructor(
    public heroes: HeroesService
  ) { }

  ngOnInit(): void {
    
  }

  public getImageURL(input: HTMLInputElement): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(input.files[0])
      reader.onload = () => {
        resolve(reader.result as string)
      }
      reader.onerror = () => {
        reject('No se ha podido cargar la imagen')
      }
    })
  }

  public async createHero(): Promise<void> {
    let hero = new SuperHero()
    hero.name = this.Name
    hero.biography = new Biography()
    hero.biography.fullName = this.FullName
    hero.powerstats = new Powerstats()
    hero.powerstats.strength = this.STR
    hero.powerstats.intelligence = this.INT
    hero.powerstats.power = this.POW
    hero.powerstats.speed = this.SPD
    hero.powerstats.durability = this.DUR
    hero.powerstats.combat = this.COM
    hero.images = new Images()
    hero.images.sm = '/assets/noimage.png'
    hero.id = Math.max(...this.heroes.superHeroes.map(p => p.id)) + 1

    try {
      let imageURL = await this.getImageURL(this.inputFile.nativeElement)
      hero.images.sm = imageURL
    } catch (ex) {}

    if (hero.name.trim() == '') {
      alert('Hero must have a name.')
      return
    }
    if (isNaN(hero.powerstats.strength) || hero.powerstats.strength < 0 || hero.powerstats.strength > 100) {
      alert('Invalid STR value.')
      return
    }
    if (isNaN(hero.powerstats.intelligence) || hero.powerstats.intelligence < 0 || hero.powerstats.intelligence > 100) {
      alert('Invalid INT value.')
      return
    }
    if (isNaN(hero.powerstats.power) || hero.powerstats.power < 0 || hero.powerstats.power > 100) {
      alert('Invalid POW value.')
      return
    }
    if (isNaN(hero.powerstats.speed) || hero.powerstats.speed < 0 || hero.powerstats.speed > 100) {
      alert('Invalid SPD value.')
      return
    }
    if (isNaN(hero.powerstats.durability) || hero.powerstats.durability < 0 || hero.powerstats.durability > 100) {
      alert('Invalid DUR value.')
      return
    }
    if (isNaN(hero.powerstats.combat) || hero.powerstats.combat < 0 || hero.powerstats.combat > 100) {
      alert('Invalid COM value.')
      return
    }

    this.heroes.superHeroes.push(hero)
    this.heroes.favorites.push(hero)
    this.Name = ''
    this.FullName = ''
    delete this.INT
    delete this.POW
    delete this.SPD
    delete this.STR
    delete this.DUR
    delete this.COM

    this.popupVisible = false
    this.heroes.saveHeroes()

  }

  public setName(e: Event) {
    let value = (e.target as HTMLInputElement).value
    this.Name = value
  }
  public setFullName(e: Event) {
    let value = (e.target as HTMLInputElement).value
    this.FullName = value
  }
  public setSTR(e: Event) {
    let value = (e.target as HTMLInputElement).value
    this.STR = parseInt(value)
  }
  public setINT(e: Event) {
    let value = (e.target as HTMLInputElement).value
    this.INT = parseInt(value)
  }
  public setPOW(e: Event) {
    let value = (e.target as HTMLInputElement).value
    this.POW = parseInt(value)
  }
  public setSPD(e: Event) {
    let value = (e.target as HTMLInputElement).value
    this.SPD = parseInt(value)
  }
  public setDUR(e: Event) {
    let value = (e.target as HTMLInputElement).value
    this.DUR = parseInt(value)
  }
  public setCOM(e: Event) {
    let value = (e.target as HTMLInputElement).value
    this.COM = parseInt(value)
  }

  public clickMask(e: Event) {
    if ((event.target as HTMLElement).classList.contains('popup')) {
      this.popupVisible = false
    }
  }

}
