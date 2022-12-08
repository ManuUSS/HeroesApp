import { Component, Input } from '@angular/core';
import { HerosResponse } from '../../interfaces/heros.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styles: [
        `
      mat-card {
        margin-top: 20px;
      }
    `
    ]
})
export class CardComponent {

    @Input() hero!: HerosResponse;

}