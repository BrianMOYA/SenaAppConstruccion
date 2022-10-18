import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssessmentComponent } from './assessment/assessment.component';
import { InstallationinComponent } from './installationin/installationin.component';
import { MainInterfacesComponent } from './main-interfaces/main-interfaces.component';
import { MaterialComponent } from './material/material.component';
import { SinupComponent } from './sinup/sinup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'assessment',
        component: AssessmentComponent
      },
      {
        path: 'installationinfo',
        component: InstallationinComponent
      },
      {
        path: 'mainInterfaces/:id',
        component: MainInterfacesComponent
      },
      {
        path: 'material',
        component: MaterialComponent
      },
      {
        path: 'sinup',
        component: SinupComponent
      },
      {
        path: '**',
        redirectTo: 'mainInterfaces/:id',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
