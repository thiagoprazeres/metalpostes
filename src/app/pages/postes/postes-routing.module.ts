import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostesComponent } from './postes.component';

const routes: Routes = [{ path: '', component: PostesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostesRoutingModule { }
