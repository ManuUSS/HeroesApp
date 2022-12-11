import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
export class ConfirmComponent {

  public hero:HerosResponse = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor( private dialogRef: MatDialogRef<ConfirmComponent> ) { }

  delete = () => {
    this.dialogRef.close(true);
  }

  cancel = () => {
    this.dialogRef.close();
  }

}
