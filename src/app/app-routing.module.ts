import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistroUPage } from './pages/registro-u/registro-u.page';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registro-u',
    loadChildren: () => import('./pages/registro-u/registro-u.module').then( m => m.RegistroUPageModule)
  },

  //paths para redireccion
  { path:'login/registro-u', component:RegistroUPage},
  {
    path: 'vista-art',
    loadChildren: () => import('./pages/vista-art/vista-art.module').then( m => m.VistaArtPageModule)
  },
  {
    path: 'agrega-art',
    loadChildren: () => import('./pages/agrega-art/agrega-art.module').then( m => m.AgregaArtPageModule)
  },
  {
    path: 'articulovis/:id',
    loadChildren: () => import('./pages/articulovis/articulovis.module').then( m => m.ArticulovisPageModule)
  },
  {
    path: 'edita-art/:id',
    loadChildren: () => import('./pages/edita-art/edita-art.module').then( m => m.EditaArtPageModule)
  },
  {
    path: 'vista-usua',
    loadChildren: () => import('./pages/vista-usua/vista-usua.module').then( m => m.VistaUsuaPageModule)
  },
  ///{ path: 'login', component:LoginPage}
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
