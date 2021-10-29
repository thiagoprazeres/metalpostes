import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteCurvoSimplesTeleconicoFlangeadoRoutingModule } from './poste-curvo-simples-teleconico-flangeado-routing.module';
import { PosteCurvoSimplesTeleconicoFlangeadoComponent } from './poste-curvo-simples-teleconico-flangeado.component';


@NgModule({
  declarations: [
    PosteCurvoSimplesTeleconicoFlangeadoComponent
  ],
  imports: [
    CommonModule,
    PosteCurvoSimplesTeleconicoFlangeadoRoutingModule
  ]
})
export class PosteCurvoSimplesTeleconicoFlangeadoModule { }
