import { GlobalsModule } from './globals/globals.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


/* Importación componentes inicio, header y footer de la APP */
import { FeatureComponent } from './feature/feature.component';
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


/* Importación HttpClientModule */
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations:
  [
    AppComponent,
    FeatureComponent,
    IndexComponent,
    NavBarComponent,
  ],
  entryComponents: [],
  imports:
  [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    GlobalsModule
  ],
  providers:
  [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  exports: [
    NavBarComponent,
  ],
  bootstrap:
  [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
