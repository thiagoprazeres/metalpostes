import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteCurvoDuploTeleconicoEngastadoRoutingModule } from './poste-curvo-duplo-teleconico-engastado-routing.module';
import { PosteCurvoDuploTeleconicoEngastadoComponent } from './poste-curvo-duplo-teleconico-engastado.component';


@NgModule({
  declarations: [
    PosteCurvoDuploTeleconicoEngastadoComponent
  ],
  imports: [
    CommonModule,
    PosteCurvoDuploTeleconicoEngastadoRoutingModule
  ]
})
export class PosteCurvoDuploTeleconicoEngastadoModule { }
