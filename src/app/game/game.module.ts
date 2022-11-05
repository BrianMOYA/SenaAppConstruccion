import { GlobalsModule } from './../globals/globals.module';
import { AppModule } from './../app.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameInterfaceComponent } from './game-interface/game-interface.component';
import { GameChooseTheDescriptionComponent } from './game-choose-the-description/game-choose-the-description.component';
import { GameChooseThePiecesComponent } from './game-choose-the-pieces/game-choose-the-pieces.component';
import { GameSelectTheConcreteComponent } from './game-select-the-concrete/game-select-the-concrete.component';
import { GameSelectThePairComponent } from './game-select-the-pair/game-select-the-pair.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';



@NgModule({
  declarations: [
    GameInterfaceComponent,
    GameChooseTheDescriptionComponent,
    GameChooseThePiecesComponent,
    GameSelectTheConcreteComponent,
    GameSelectThePairComponent,
    CongratulationsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    GameRoutingModule,
    GlobalsModule
  ]
})
export class GameModule { }
