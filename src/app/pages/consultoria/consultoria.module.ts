import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultoriaRoutingModule } from './consultoria-routing.module';
import { ConsultoriaComponent } from './consultoria.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ConsultoriaComponent
  ],
  imports: [
    CommonModule,
    ConsultoriaRoutingModule,
    MatListModule,
    MatIconModule
  ]
})
export class ConsultoriaModule { }
