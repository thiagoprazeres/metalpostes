import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'sobre-nos', loadChildren: () => import('./pages/sobre-nos/sobre-nos.module').then(m => m.SobreNosModule) },
  { path: 'postes', loadChildren: () => import('./pages/postes/postes.module').then(m => m.PostesModule) },
  { path: 'postes/poste-reto-teleconico-flangeado', loadChildren: () => import('./pages/postes/poste-reto-teleconico-flangeado/poste-reto-teleconico-flangeado.module').then(m => m.PosteRetoTeleconicoFlangeadoModule) },
  { path: 'postes/poste-reto-teleconico-engastado', loadChildren: () => import('./pages/postes/poste-reto-teleconico-engastado/poste-reto-teleconico-engastado.module').then(m => m.PosteRetoTeleconicoEngastadoModule) },
  { path: 'postes/poste-curvo-simples-teleconico-flangeado', loadChildren: () => import('./pages/postes/poste-curvo-simples-teleconico-flangeado/poste-curvo-simples-teleconico-flangeado.module').then(m => m.PosteCurvoSimplesTeleconicoFlangeadoModule) },
  { path: 'postes/poste-curvo-simples-teleconico-engastado', loadChildren: () => import('./pages/postes/poste-curvo-simples-teleconico-engastado/poste-curvo-simples-teleconico-engastado.module').then(m => m.PosteCurvoSimplesTeleconicoEngastadoModule) },
  { path: 'postes/poste-curvo-duplo-teleconico-flangeado', loadChildren: () => import('./pages/postes/poste-curvo-duplo-teleconico-flangeado/poste-curvo-duplo-teleconico-flangeado.module').then(m => m.PosteCurvoDuploTeleconicoFlangeadoModule) },
  { path: 'postes/poste-curvo-duplo-teleconico-engastado', loadChildren: () => import('./pages/postes/poste-curvo-duplo-teleconico-engastado/poste-curvo-duplo-teleconico-engastado.module').then(m => m.PosteCurvoDuploTeleconicoEngastadoModule) },
  { path: 'acessorios', loadChildren: () => import('./pages/acessorios/acessorios.module').then(m => m.AcessoriosModule) },
  { path: 'acessorios/suporte-para-postes-retos', loadChildren: () => import('./pages/acessorios/suporte-para-postes-retos/suporte-para-postes-retos.module').then(m => m.SuporteParaPostesRetosModule) },
  { path: 'acessorios/bracos-galvanizados', loadChildren: () => import('./pages/acessorios/bracos-galvanizados/bracos-galvanizados.module').then(m => m.BracosGalvanizadosModule) },
  { path: 'consultoria', loadChildren: () => import('./pages/consultoria/consultoria.module').then(m => m.ConsultoriaModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
