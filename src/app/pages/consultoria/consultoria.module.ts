import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultoriaRoutingModule } from './consultoria-routing.module';
import { ConsultoriaComponent } from './consultoria.component';


@NgModule({
  declarations: [
    ConsultoriaComponent
  ],
  imports: [
    CommonModule,
    ConsultoriaRoutingModule
  ]
})
export class ConsultoriaModule { }
