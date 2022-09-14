import { Component, OnInit } from '@angular/core';
import { ModuleNameService } from '../services/module-name.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technical-material',
  templateUrl: './technical-material.component.html',
  styleUrls: ['./technical-material.component.scss'],
})
export class TechnicalMaterialComponent implements OnInit {

  moduleName : string;

  public btnsMaterial : {img: string, title: string, route: string}[] = [
  ];

  rutas = {
    "Vulnerabiliad Sismica" : [
      {
        img: "../../assets/svg/sourceVulnerabilidad/prime/portadaCartillaV.svg",
        title: "Cartilla Sismica",
        route: "/game/gameSelectConcrete"
      },
      {
        img: "../../assets/svg/sourceMaterialDeApoyo/portada_Normas.svg",
        title: "Norma Titulo E",
        route: "/game/gameChooseDescription"
      }
    ],
    "Hidraulica" : [
      {
        img: "../../assets/svg/sourceHidraulica/prime/portada_H.svg",
        title: "Cartilla Hidrualica",
        route: "/game/gameSelectConcrete"
      },
      {
        img: "../../assets/svg/sourceMaterialDeApoyo/portada_Normas.svg",
        title: "Norma 1500",
        route: "/game/gameChooseDescription"
      }
    ],
    "Sanitaria" : [
      {
        img: "../../assets/svg/sourceSanitaria/prime/portada_S.svg",
        title: "Cartilla Sanitaria",
        route: "/game/gameSelectConcrete"
      },
      {
        img: "../../assets/svg/sourceMaterialDeApoyo/portada_Normas.svg",
        title: "Norma 1500",
        route: "/game/gameChooseDescription"
      }
    ],
    "Gas" : [
      {
        img: "../../assets/svg/sourceGas/prime/portada_G.svg",
        title: "Cartilla Gas",
        route: "/game/gameSelectConcrete"
      },
      {
        img: "../../assets/svg/sourceMaterialDeApoyo/portada_Normas.svg",
        title: "Norma 1500",
        route: "/game/gameChooseDescription"
      }
    ],
  }

  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute
  ) {
    this.moduleNameService.moduleNameSource.subscribe((moduleId) => {
      this.btnsMaterial = this.rutas[moduleId]
    })
  }


  ngOnInit(): void {}

}
