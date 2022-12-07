import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
