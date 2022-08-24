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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModuleNameComponent } from './module-name/module-name.component';

/* Importación componentes principales de la APP */
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { TechnicalMaterialComponent } from './technical-material/technical-material.component';
import { SinupotComponent } from './sinupot/sinupot.component';

/* Importación componentes de juegos de la APP  */
import { GameInterfaceComponent } from './game-interface/game-interface.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { GameChooseTheDescriptionComponent } from './game-choose-the-description/game-choose-the-description.component';
import { GameChooseThePiecesComponent } from './game-choose-the-pieces/game-choose-the-pieces.component';
import { GameSelectTheConcreteComponent } from './game-select-the-concrete/game-select-the-concrete.component';
import { GameSelectThePairComponent } from './game-select-the-pair/game-select-the-pair.component';


/* Importación componentes de piezas simbologia de la APP  */
import { InstallationInformationComponent } from './installation-information/installation-information.component';
import { InstallationComponent } from './installation/installation.component';


/* Importación HttpClientModule */
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations:
  [
    AppComponent,
    FeatureComponent,
    IndexComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,

    ModuleNameComponent,
    MainInterfaceComponent,
    SinupotComponent,
    AssessmentComponent,
    TechnicalMaterialComponent,

    GameInterfaceComponent,
    GameDashboardComponent,
    GameChooseTheDescriptionComponent,
    GameChooseThePiecesComponent,
    GameSelectTheConcreteComponent,
    GameSelectThePairComponent,

    InstallationComponent,
    InstallationInformationComponent,
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
