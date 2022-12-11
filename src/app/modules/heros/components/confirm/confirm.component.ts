import { Component, OnInit } from '@angular/core';
import { HerosResponse, Publisher } from '../../interfaces/heros.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
    `

      h1 {
        margin: 0;
      }

      .button-container {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
      }
    `
  ]
})
export class ConfirmComponent implements OnInit {

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

  delete = () => {
    console.log('delete');
  }

  cancel = () => {
    console.log('cancel');
  }

}
