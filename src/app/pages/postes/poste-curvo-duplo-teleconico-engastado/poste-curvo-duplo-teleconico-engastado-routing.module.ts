import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteCurvoDuploTeleconicoEngastadoComponent } from './poste-curvo-duplo-teleconico-engastado.component';

const routes: Routes = [{ path: '', component: PosteCurvoDuploTeleconicoEngastadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteCurvoDuploTeleconicoEngastadoRoutingModule { }
