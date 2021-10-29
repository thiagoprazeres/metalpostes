import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BracosGalvanizadosComponent } from './bracos-galvanizados.component';

const routes: Routes = [{ path: '', component: BracosGalvanizadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BracosGalvanizadosRoutingModule { }
