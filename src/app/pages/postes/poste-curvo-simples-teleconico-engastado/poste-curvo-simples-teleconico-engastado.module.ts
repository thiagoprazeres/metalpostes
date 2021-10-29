import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosteCurvoSimplesTeleconicoEngastadoRoutingModule } from './poste-curvo-simples-teleconico-engastado-routing.module';
import { PosteCurvoSimplesTeleconicoEngastadoComponent } from './poste-curvo-simples-teleconico-engastado.component';


@NgModule({
  declarations: [
    PosteCurvoSimplesTeleconicoEngastadoComponent
  ],
  imports: [
    CommonModule,
    PosteCurvoSimplesTeleconicoEngastadoRoutingModule
  ]
})
export class PosteCurvoSimplesTeleconicoEngastadoModule { }
