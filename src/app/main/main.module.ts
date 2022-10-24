import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalsModule } from './../globals/globals.module';
import { IonicModule } from '@ionic/angular';

import { AssessmentComponent } from './assessment/assessment.component';
import { InstallationinComponent } from './installationin/installationin.component';
import { MainInterfacesComponent } from './main-interfaces/main-interfaces.component';
import { MaterialComponent } from './material/material.component';
import { SinupComponent } from './sinup/sinup.component';
import { InstallationComponent } from './installation/installation.component';

import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [
    AssessmentComponent,
    InstallationinComponent,
    MainInterfacesComponent,
    MaterialComponent,
    SinupComponent,
    InstallationComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    GlobalsModule,
    IonicModule
  ]
})
export class MainModule { }
