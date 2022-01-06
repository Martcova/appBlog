import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaUsuaPage } from './vista-usua.page';

const routes: Routes = [
  {
    path: '',
    component: VistaUsuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaUsuaPageRoutingModule {}
