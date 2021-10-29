import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuporteParaPostesRetosComponent } from './suporte-para-postes-retos.component';

const routes: Routes = [{ path: '', component: SuporteParaPostesRetosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuporteParaPostesRetosRoutingModule { }
