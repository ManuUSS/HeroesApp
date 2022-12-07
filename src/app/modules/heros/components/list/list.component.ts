import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor( private heroService:HeroesService ) { }

  ngOnInit(): void {
    this.heroService.getHeros()
      .subscribe( resp => {
        console.log( resp );
      });
  }

}
