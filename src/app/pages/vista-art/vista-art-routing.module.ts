import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaArtPage } from './vista-art.page';

const routes: Routes = [
  {
    path: '',
    component: VistaArtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaArtPageRoutingModule {}
