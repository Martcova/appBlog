import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaArtPageRoutingModule } from './edita-art-routing.module';

import { EditaArtPage } from './edita-art.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaArtPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [EditaArtPage]
})
export class EditaArtPageModule {}
