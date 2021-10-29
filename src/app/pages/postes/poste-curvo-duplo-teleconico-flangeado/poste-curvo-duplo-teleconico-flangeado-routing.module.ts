import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteCurvoDuploTeleconicoFlangeadoComponent } from './poste-curvo-duplo-teleconico-flangeado.component';

const routes: Routes = [{ path: '', component: PosteCurvoDuploTeleconicoFlangeadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteCurvoDuploTeleconicoFlangeadoRoutingModule { }
