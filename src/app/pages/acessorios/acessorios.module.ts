import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoriosRoutingModule } from './acessorios-routing.module';
import { AcessoriosComponent } from './acessorios.component';


@NgModule({
  declarations: [
    AcessoriosComponent
  ],
  imports: [
    CommonModule,
    AcessoriosRoutingModule
  ]
})
export class AcessoriosModule { }
