import { Component, OnInit } from '@angular/core';
import { HerosResponse, Publisher } from '../../interfaces/heros.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      mat-icon {
        padding-right: 5px;
      }

      button {
        width: calc(50% - 10px);
      }

      img {
        max-width: 40%;
        border-radius: 5px;
      }

      .img-container {
        display: flex;
        justify-content: center;
        background: linear-gradient(90deg, rgba(48,48,48,1) 0%, rgba(35,35,35,1) 77%, rgba(33,33,33,1) 100%);
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

  constructor( private heroService: HeroesService, 
      private activatedRoute: ActivatedRoute,
      private router:Router,
      private snackBar: MatSnackBar,
      public dialog: MatDialog ) { }

  ngOnInit(): void {
    
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroService.getHeroById( id ) )
    )
    .subscribe( hero => this.hero = hero );
  }

  saveHero = () => {
    if( this.hero.superhero.trim().length === 0 ) return;
    
    if( this.hero.id ) {
      this.heroService.updateHero( this.hero )
      .subscribe( resp => {
        console.log(resp);
        this.showSnackBar('¡Heroe actualizado!');
      });
    } else {
      this.heroService.addHero( this.hero )
      .subscribe( resp => {
        this.router.navigate(['/heros/edit', resp.id]);
        this.showSnackBar('¡Heroe creado!');
      });
    }    
  }

  deleteHero = () => {

    const dialogConfirm = this.dialog.open( ConfirmComponent, {
      width: '320px',
      data: { ...this.hero }
    })

    dialogConfirm.afterClosed()
      .subscribe( (result) => {
        if( result ) {
          this.heroService.deleteHero( this.hero.id! )
          .subscribe( resp => {
            this.router.navigate(['/heros']);
            this.showSnackBar('¡Heroe eliminado!');
          });
        }
      });
  }

  showSnackBar = ( message:string ) => {
    this.snackBar.open( message, '¡Ok!', {
      duration: 2500
    });
  }

}
