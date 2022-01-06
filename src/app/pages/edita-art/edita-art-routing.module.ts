import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaArtPage } from './edita-art.page';

const routes: Routes = [
  {
    path: '',
    component: EditaArtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaArtPageRoutingModule {}
