import { Component, OnInit } from '@angular/core';
import { HerosResponse } from '../../interfaces/heros.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public term:string = '';

  public heros:HerosResponse[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  search = () => {
    console.log(this.term);
  }

}
