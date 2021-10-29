import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BracosGalvanizadosRoutingModule } from './bracos-galvanizados-routing.module';
import { BracosGalvanizadosComponent } from './bracos-galvanizados.component';


@NgModule({
  declarations: [
    BracosGalvanizadosComponent
  ],
  imports: [
    CommonModule,
    BracosGalvanizadosRoutingModule
  ]
})
export class BracosGalvanizadosModule { }
