import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleNameComponent } from '../module-name/module-name.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ModuleNameComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ModuleNameComponent,
  ]
})
export class GlobalsModule { }
