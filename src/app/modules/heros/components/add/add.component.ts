import { Component, OnInit } from '@angular/core';
import { HerosResponse, Publisher } from '../../interfaces/heros.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      mat-icon {
        padding-right: 5px;
      }
    `
  ]
})
export class AddComponent implements OnInit {

  public publishers = [
    {
      id: 'DC Comics',
      name: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      name: 'Marvel - Comics'
    }
  ]

  public hero:HerosResponse = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor( private heroService: HeroesService) { }

  ngOnInit(): void {
  }

  saveHero = () => {
    if( this.hero.superhero.trim().length === 0 ) return;
    
    this.heroService.addHero( this.hero )
      .subscribe( resp => {
        console.log(resp);
      }
  }

}
