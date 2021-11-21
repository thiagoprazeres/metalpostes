import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostesRoutingModule } from './postes-routing.module';
import { PostesComponent } from './postes.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PostesComponent
  ],
  imports: [
    CommonModule,
    PostesRoutingModule,
    MatListModule,
    MatIconModule
  ]
})
export class PostesModule { }
