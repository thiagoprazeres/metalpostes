import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteCurvoDuploTeleconicoFlangeadoRoutingModule } from './poste-curvo-duplo-teleconico-flangeado-routing.module';
import { PosteCurvoDuploTeleconicoFlangeadoComponent } from './poste-curvo-duplo-teleconico-flangeado.component';


@NgModule({
  declarations: [
    PosteCurvoDuploTeleconicoFlangeadoComponent
  ],
  imports: [
    CommonModule,
    PosteCurvoDuploTeleconicoFlangeadoRoutingModule
  ]
})
export class PosteCurvoDuploTeleconicoFlangeadoModule { }
