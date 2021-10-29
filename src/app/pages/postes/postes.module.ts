import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostesRoutingModule } from './postes-routing.module';
import { PostesComponent } from './postes.component';


@NgModule({
  declarations: [
    PostesComponent
  ],
  imports: [
    CommonModule,
    PostesRoutingModule
  ]
})
export class PostesModule { }
