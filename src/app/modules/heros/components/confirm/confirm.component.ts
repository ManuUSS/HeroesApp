import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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


  constructor( private dialogRef: MatDialogRef<ConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: HerosResponse ) { }

  delete = () => {
    this.dialogRef.close(true);
  }

  cancel = () => {
    this.dialogRef.close();
  }

}
