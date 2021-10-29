import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultoriaComponent } from './consultoria.component';

const routes: Routes = [{ path: '', component: ConsultoriaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultoriaRoutingModule { }
