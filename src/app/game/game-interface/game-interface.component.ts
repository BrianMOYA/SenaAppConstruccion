import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ModuleNameService } from 'src/app/services/module-name.service';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss'],
})
export class GameInterfaceComponent implements OnInit {
  moduleName : string;

  public moduleGames : {img: string, route: string}[] = [
  ];

  rutas = {
    "Vulnerabiliad Sismica" : [
      {
        img: "../../../assets/svg/sourceGame/menuGame/juegoCementos.svg",
        route: "/game/gameSelectConcrete"
      },
      {
        img: "../../../assets/svg/sourceGame/menuGame/juegoMalasPracticas.svg",
        route: "/game/gameChooseDescription"
      }
    ],
    "Hidraulica" : [
      {
        img: "../../../assets/svg/sourceGame/menuGame/portadaJuegoPlanos.svg",
        route: "/game/gameDashboard"
      },
      {
        img: "../../assets/svg/sourceGame/menuGame/portadaJuegoSimbolos.svg",
        route: "/game/gameSelectPair"
      }
    ],
    "Sanitaria" : [
      {
        img: "../../assets/svg/sourceGame/menuGame/portadaJuegoSanitaria.svg",
        route: "/game/gameDashboard"
      },
      {
        img: "../../assets/svg/sourceGame/menuGame/portadaJuegoSanitarias2.svg",
        route: "/game/gameSelectPair"
      }
    ],
    "Gas" : [
      {
        img: "../../assets/svg/sourceGame/menuGame/portadaJuegoGas.svg",
        route: "/game/gameDashboard"
      },
      {
        img: "../../assets/svg/sourceGame/menuGame/portadaJuegoGas2.svg",
        route: "/game/gameSelectPair"
      }
    ],
  }

  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute
  ) {
    this.moduleNameService.moduleNameSource.subscribe((moduleId) => {
      this.moduleGames = this.rutas[moduleId]
    })
  }

  ngOnInit() {}

}
