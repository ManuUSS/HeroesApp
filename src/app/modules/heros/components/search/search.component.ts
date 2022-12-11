import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HerosResponse } from '../../interfaces/heros.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public term:string = '';
  public heros:HerosResponse[] = [];
  public selectedHero:HerosResponse | undefined;

  constructor( private herosService:HeroesService ) { }

  ngOnInit(): void {
  }

  search = () => {
    this.herosService.getHeroSugerences( this.term.trim() ) 
      .subscribe( heros => this.heros = heros );
  }

  selected = ( event: MatAutocompleteSelectedEvent ) => {
    if ( !event.option.value ) {
      this.selectedHero = undefined;
      return;  
    }
    const hero: HerosResponse = event.option.value;
    this.term = hero.superhero;
    this.herosService.getHeroById( hero.id! )
      .subscribe( hero => this.selectedHero = hero );
  }

}
