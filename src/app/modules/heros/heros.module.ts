import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HerosRoutingModule } from './heros-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './components/add/add.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ImagePipe } from './pipes/image.pipe';



@NgModule({
  declarations: [
    AddComponent,
    CardComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HerosRoutingModule
  ]
})
export class HerosModule { }
