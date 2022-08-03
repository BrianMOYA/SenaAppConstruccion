import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/* Importación componentes de la APP  */
import { FeatureComponent } from './feature/feature.component';
import { IndexComponent } from './index/index.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { SinupotComponent } from './sinupot/sinupot.component';
import { FooterComponent } from './footer/footer.component';
import { GamesComponent } from './games/games.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { TechnicalMaterialComponent } from './technical-material/technical-material.component';
import { ModuleNameComponent } from './module-name/module-name.component';
import { InstallationComponent } from './installation/installation.component';
import { HeaderComponent } from './header/header.component';
//import { GamesInterfaceComponent } from '././game/games-interface/games-interface.component';
import { PrimerComponent } from './primer/primer.component';
import { GameInterfaceComponent } from './game-interface/game-interface.component';
import { SelectTheCorrectPairComponent } from './select-the-correct-pair/select-the-correct-pair.component';


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
    path: 'mainInterface/:id',
    component: MainInterfaceComponent
  },
  {
    path: 'sinupot',
    component: SinupotComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'games',
    component: GamesComponent
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
    path: 'moduleName',
    component: ModuleNameComponent
  },
  {
    path: 'installation',
    component: InstallationComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'primer',
    component: PrimerComponent
  },
  {
    path: 'gameInterface',
    component: GameInterfaceComponent
  },
  {
    path: 'selectThePair',
    component: SelectTheCorrectPairComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
