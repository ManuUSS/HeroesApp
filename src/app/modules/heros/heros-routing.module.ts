import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { SearchComponent } from './components/search/search.component';
import { HeroComponent } from './components/hero/hero.component';

const routes:Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',
        component: AddComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: ':id',
        component: HeroComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
  
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule  
  ]
})
export class HerosRoutingModule { }
