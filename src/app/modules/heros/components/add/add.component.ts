import { Component, OnInit } from '@angular/core';
import { HerosResponse, Publisher } from '../../interfaces/heros.interface';

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

  constructor() { }

  ngOnInit(): void {
  }

}
