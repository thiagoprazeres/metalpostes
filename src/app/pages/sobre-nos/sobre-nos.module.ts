import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreNosRoutingModule } from './sobre-nos-routing.module';
import { SobreNosComponent } from './sobre-nos.component';


@NgModule({
  declarations: [
    SobreNosComponent
  ],
  imports: [
    CommonModule,
    SobreNosRoutingModule
  ]
})
export class SobreNosModule { }
