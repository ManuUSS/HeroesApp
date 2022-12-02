import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'heros',
    loadChildren: () => import('./modules/heros/heros.module').then( m => m.HerosModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
