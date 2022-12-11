import { Component, OnInit } from '@angular/core';
import { HerosResponse, Publisher } from '../../interfaces/heros.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

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

  constructor( private heroService: HeroesService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroService.getHeroById( id ) )
    )
    .subscribe( hero => this.hero = hero );
  }

  saveHero = () => {
    if( this.hero.superhero.trim().length === 0 ) return;
    
    if( this.hero.id ) {
      // Update
    } else {
      // Create
    }

    this.heroService.addHero( this.hero )
      .subscribe( resp => {
        console.log(resp);
      });
  }

}
