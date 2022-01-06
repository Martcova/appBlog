import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregaArtPage } from './agrega-art.page';

const routes: Routes = [
  {
    path: '',
    component: AgregaArtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregaArtPageRoutingModule {}
