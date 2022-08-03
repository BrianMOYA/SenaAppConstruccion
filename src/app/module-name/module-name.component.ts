import { DataService } from './../services/data.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { ModuleNameService } from '../services/module-name.service'
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-module-name',
  templateUrl: './module-name.component.html',
  styleUrls: ['./module-name.component.scss'],
})
export class ModuleNameComponent implements OnInit, OnDestroy {
  @Input() src: string;
  text: string = 'hola mundo';
  nameObs: Subscription;
  moduleData: any;

  constructor(
    public moduleNameSvc: ModuleNameService,
    private dataSvc: DataService
  ) {
    this.nameObs = this.moduleNameSvc.moduleNameSource.subscribe(async(name) => {
      this.moduleData = await this.dataSvc.getDataModule(name);
      console.log(this.moduleData);
    });


  }


  ngOnInit() {
    console.log(this.src)
  }

  ngOnDestroy(): void {
    console.log('kill subs')
      this.nameObs.unsubscribe();
  }

}
