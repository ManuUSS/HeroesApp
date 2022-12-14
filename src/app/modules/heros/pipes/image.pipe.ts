import { Pipe, PipeTransform } from '@angular/core';
import { HerosResponse } from '../interfaces/heros.interface';

@Pipe({
    name: 'image',
    pure: false
})
export class ImagePipe implements PipeTransform {

    transform ( hero:HerosResponse ):string {
        if ( !hero.id && !hero.alt_img ) {
            return 'assets/no-image.png';
        } else if ( hero.alt_img ) {
            return hero.alt_img;
        }
        return `assets/heroes/${ hero.id }.jpg`
    }

}