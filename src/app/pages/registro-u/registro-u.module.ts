import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUPageRoutingModule } from './registro-u-routing.module';

import { RegistroUPage } from './registro-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [RegistroUPage]
})
export class RegistroUPageModule {}
