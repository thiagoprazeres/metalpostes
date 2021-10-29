import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteCurvoSimplesTeleconicoFlangeadoComponent } from './poste-curvo-simples-teleconico-flangeado.component';

const routes: Routes = [{ path: '', component: PosteCurvoSimplesTeleconicoFlangeadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteCurvoSimplesTeleconicoFlangeadoRoutingModule { }
