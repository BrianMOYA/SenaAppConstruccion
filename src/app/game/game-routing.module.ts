import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameInterfaceComponent } from './game-interface/game-interface.component';
import { GameChooseTheDescriptionComponent } from './game-choose-the-description/game-choose-the-description.component';
import { GameChooseThePiecesComponent } from './game-choose-the-pieces/game-choose-the-pieces.component';
import { GameSelectTheConcreteComponent } from './game-select-the-concrete/game-select-the-concrete.component';
import { GameSelectThePairComponent } from './game-select-the-pair/game-select-the-pair.component';

import { CongratulationsComponent } from './congratulations/congratulations.component';

const routes: Routes = [
  {
    path: 'congratulation',
    component: CongratulationsComponent
  },
  {
    path: 'gameInterface',
    component: GameInterfaceComponent
  },
  {
    path: 'gameChooseDescription',
    component: GameChooseTheDescriptionComponent
  },
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
    path: '**',
    pathMatch: 'full',
    redirectTo: 'gameInterface'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
