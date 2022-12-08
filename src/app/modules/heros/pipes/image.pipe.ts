import { Pipe, PipeTransform } from '@angular/core';
import { HerosResponse } from '../interfaces/heros.interface';

@Pipe({
    name: 'image'
})
export class ImagePipe implements PipeTransform {

    transform ( hero:HerosResponse ):string {
        return `assets/heroes/${ hero.id }.jpg`
    }

}