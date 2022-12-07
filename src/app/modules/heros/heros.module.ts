import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HerosRoutingModule } from './heros-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './components/add/add.component';
import { SearchComponent } from './components/search/search.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HerosRoutingModule
  ]
})
export class HerosModule { }
