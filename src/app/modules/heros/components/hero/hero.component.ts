import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { HerosResponse } from '../../interfaces/heros.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
    img {
      width: 100%;
      border-radius: 5px;
    } 
  `
  ]
})
export class HeroComponent implements OnInit {

  public hero!:HerosResponse;

  constructor( private activatedRoute: ActivatedRoute,  private heroService:HeroesService ) { }
  
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe( switchMap( ({ id }) => this.heroService.getHeroById( id ) ) )
      .subscribe( hero => this.hero = hero );
  }

}
