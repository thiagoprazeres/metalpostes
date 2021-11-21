import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoriosRoutingModule } from './acessorios-routing.module';
import { AcessoriosComponent } from './acessorios.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AcessoriosComponent
  ],
  imports: [
    CommonModule,
    AcessoriosRoutingModule,
    MatListModule,
    MatIconModule
  ]
})
export class AcessoriosModule { }
