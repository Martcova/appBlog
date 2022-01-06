import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaArtPageRoutingModule } from './vista-art-routing.module';
import { VistaArtPage } from './vista-art.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectSessionInterceptor } from 'src/app/interceptors/inject-session.interceptor';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaArtPageRoutingModule,
    PipesModule,
    HttpClientModule
  
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS,
    useClass: InjectSessionInterceptor,
    multi: true}]
  ,


  declarations: [VistaArtPage]
})
export class VistaArtPageModule {}
