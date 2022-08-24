import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/* Importación componentes inicio, header y footer de la APP */
import { FeatureComponent } from './feature/feature.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

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

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'feature',
    component: FeatureComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'mainInterface/:id',
    component: MainInterfaceComponent
  },
  {
    path: 'sinupot',
    component: SinupotComponent
  },
  {
    path: 'assessment',
    component: AssessmentComponent
  },
  {
    path: 'technicalMaterial',
    component: TechnicalMaterialComponent
  },
  {
    path: 'gameInterface',
    component: GameInterfaceComponent
  },
  ,
  {
    path: 'gameDashboard',
    component: GameDashboardComponent
  },
  ,
  {
    path: 'gameChooseDescription',
    component: GameChooseTheDescriptionComponent
  },
  ,
  {
    path: 'gameChoosePieces',
    component: GameChooseThePiecesComponent
  },
  {
    path: 'gameSelectConcrete',
    component: GameSelectTheConcreteComponent
  },
  {
    path: 'gameSelectPair',
    component: GameSelectThePairComponent
  },
  {
    path: 'installation',
    component: InstallationComponent
  },
  {
    path: 'installationInfo',
    component: InstallationInformationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
