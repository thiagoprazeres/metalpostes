import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteCurvoSimplesTeleconicoEngastadoComponent } from './poste-curvo-simples-teleconico-engastado.component';

const routes: Routes = [{ path: '', component: PosteCurvoSimplesTeleconicoEngastadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteCurvoSimplesTeleconicoEngastadoRoutingModule { }
