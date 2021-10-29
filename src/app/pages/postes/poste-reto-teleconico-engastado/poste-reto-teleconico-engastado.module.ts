import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteRetoTeleconicoEngastadoRoutingModule } from './poste-reto-teleconico-engastado-routing.module';
import { PosteRetoTeleconicoEngastadoComponent } from './poste-reto-teleconico-engastado.component';


@NgModule({
  declarations: [
    PosteRetoTeleconicoEngastadoComponent
  ],
  imports: [
    CommonModule,
    PosteRetoTeleconicoEngastadoRoutingModule
  ]
})
export class PosteRetoTeleconicoEngastadoModule { }
