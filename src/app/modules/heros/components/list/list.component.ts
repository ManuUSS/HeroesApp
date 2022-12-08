import { Component, OnInit } from '@angular/core';
import { HerosResponse } from '../../interfaces/heros.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  public heroes:HerosResponse[] = [];

  constructor( private heroService:HeroesService ) { }

  ngOnInit(): void {
    this.heroService.getHeros()
      .subscribe( heroes => this.heroes = heroes );
  }

}
