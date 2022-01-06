import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectSessionInterceptor } from 'src/app/interceptors/inject-session.interceptor';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  
  ],
   

  providers: [CookieService,
    { provide: RouteReuseStrategy,useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InjectSessionInterceptor, multi: true }

  
  ],

 
 
  
  bootstrap: [AppComponent],
})
export class AppModule {}
