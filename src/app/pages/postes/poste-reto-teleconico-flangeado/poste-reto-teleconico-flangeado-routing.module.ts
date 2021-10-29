import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteRetoTeleconicoFlangeadoComponent } from './poste-reto-teleconico-flangeado.component';

const routes: Routes = [{ path: '', component: PosteRetoTeleconicoFlangeadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteRetoTeleconicoFlangeadoRoutingModule { }
