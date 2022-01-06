import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticulovisPage } from './articulovis.page';

const routes: Routes = [
  {
    path: '',
    component: ArticulovisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticulovisPageRoutingModule {}
