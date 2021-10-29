import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuporteParaPostesRetosRoutingModule } from './suporte-para-postes-retos-routing.module';
import { SuporteParaPostesRetosComponent } from './suporte-para-postes-retos.component';


@NgModule({
  declarations: [
    SuporteParaPostesRetosComponent
  ],
  imports: [
    CommonModule,
    SuporteParaPostesRetosRoutingModule
  ]
})
export class SuporteParaPostesRetosModule { }
