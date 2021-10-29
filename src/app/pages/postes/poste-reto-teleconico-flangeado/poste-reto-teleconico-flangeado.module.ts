import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteRetoTeleconicoFlangeadoRoutingModule } from './poste-reto-teleconico-flangeado-routing.module';
import { PosteRetoTeleconicoFlangeadoComponent } from './poste-reto-teleconico-flangeado.component';


@NgModule({
  declarations: [
    PosteRetoTeleconicoFlangeadoComponent
  ],
  imports: [
    CommonModule,
    PosteRetoTeleconicoFlangeadoRoutingModule
  ]
})
export class PosteRetoTeleconicoFlangeadoModule { }
