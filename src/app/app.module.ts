import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Importación componentes de la APP  */
import { FeatureComponent } from './feature/feature.component';
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { SinupotComponent } from './sinupot/sinupot.component';
import { FooterComponent } from './footer/footer.component';
import { GamesComponent } from './games/games.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { TechnicalMaterialComponent } from './technical-material/technical-material.component';
import { ModuleNameComponent } from './module-name/module-name.component';
import { InstallationComponent } from './installation/installation.component';
import { HeaderComponent } from './header/header.component';
import { GamesInterfaceComponent } from '././game/games-interface/games-interface.component';
import { PrimerComponent } from './primer/primer.component';


/* Importación HttpClientModule */
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations:
  [
    AppComponent,
    FeatureComponent,
    IndexComponent,
    NavBarComponent,
    MainInterfaceComponent,
    SinupotComponent,
    FooterComponent,
    GamesComponent,
    AssessmentComponent,
    TechnicalMaterialComponent,
    ModuleNameComponent,
    InstallationComponent,
    HeaderComponent,
    GamesInterfaceComponent,
    PrimerComponent
  ],
  entryComponents: [],
  imports:
  [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers:
  [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  exports: [
    NavBarComponent
  ],
  bootstrap:
  [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
