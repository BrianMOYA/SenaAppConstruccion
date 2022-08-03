import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModuleNameService } from '../services/module-name.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.scss'],
})
export class MainInterfaceComponent implements OnInit {
  moduleName : string;

  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(({id}) => {
      this.moduleNameService.passModuleName(id);
    })
  }

  ngOnInit(): void {
    //this.moduleNameService.currentModuleName.subscribe(moduleName => this.moduleName = moduleName)
  }




}
