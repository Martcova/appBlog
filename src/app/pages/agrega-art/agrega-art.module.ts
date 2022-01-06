import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregaArtPageRoutingModule } from './agrega-art-routing.module';

import { AgregaArtPage } from './agrega-art.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregaArtPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AgregaArtPage]
})
export class AgregaArtPageModule {}
