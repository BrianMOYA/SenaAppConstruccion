import { Component, OnInit } from '@angular/core';
import { ModuleNameService } from '../../services/module-name.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss'],
})
export class InstallationComponent implements OnInit {

  public imgPieces : {img: string, title: string, route: string}[] = [
  ];

  rutas = {
    "Hidraulica" : [
      {
        img: "../../assets/svg/sourceInstallation/slider/hidraul.svg",
        route: "/main/installationinfo"
      },
    ],
    "Sanitaria" : [
      {
        img: "../../assets/svg/sourceInstallation/slider/sanit.svg",
        route: "/main/installationinfo"
      },
    ],
    "Gas" : [
      {
        img: "../../assets/svg/sourceInstallation/slider/gas.svg",
        route: "/main/installationinfo"
      }
    ],
  }

  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute
  ) {

    this.moduleNameService.moduleNameSource.subscribe((moduleId) => {
    this.imgPieces = this.rutas[moduleId]
    })
  }

  ngOnInit() {}

}
