import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/modules/auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .main-content {
        margin: 18px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  get auth():Auth {
    return this.authService.auth;
  }

  constructor( private router:Router,
          private authService:AuthService ) { }

  ngOnInit(): void {
  }

  logout = () => {
    this.router.navigate(['./auth'])
  }

}
