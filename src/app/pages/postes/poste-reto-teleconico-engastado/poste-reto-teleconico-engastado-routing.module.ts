import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteRetoTeleconicoEngastadoComponent } from './poste-reto-teleconico-engastado.component';

const routes: Routes = [{ path: '', component: PosteRetoTeleconicoEngastadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteRetoTeleconicoEngastadoRoutingModule { }
