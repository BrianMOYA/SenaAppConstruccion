import { Component, OnInit } from '@angular/core';
import { ModuleNameService } from '../../services/module-name.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent implements OnInit {

    moduleName : string;

    public btnsMaterial : {img: string, title: string}[] = [
    ];

    rutas = {
      "Vulnerabiliad Sismica" : [
        {
          img: "../../assets/svg/sourceVulnerabilidad/prime/portadaCartillaV.png",
          title: "Cartilla Sísmica",

        },
      ],
      "Hidraulica" : [
        {
          img: "../../assets/svg/sourceHidraulica/prime/portada_H.png",
          title: "Cartilla Hidráulica",

        },
      ],
      "Sanitaria" : [
        {
          img: "../../assets/svg/sourceSanitaria/prime/portada_S.png",
          title: "Cartilla Sanitaria",

        },
      ],
      "Gas" : [
        {
          img: "../../assets/svg/sourceGas/prime/portada_G.png",
          title: "Cartilla Gas",

        },
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
