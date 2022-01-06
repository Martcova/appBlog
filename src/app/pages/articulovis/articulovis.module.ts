import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticulovisPageRoutingModule } from './articulovis-routing.module';

import { ArticulovisPage } from './articulovis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticulovisPageRoutingModule
  ],
  declarations: [ArticulovisPage]
})
export class ArticulovisPageModule {}
