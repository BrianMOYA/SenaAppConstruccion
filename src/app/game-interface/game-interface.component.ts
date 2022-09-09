import { Component, OnInit } from '@angular/core';
import { ModuleNameService } from '../services/module-name.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss'],
})
export class GameInterfaceComponent implements OnInit {
  moduleName : string;

  public moduleGames : {img: string, route: string}[] = [
    {
      img: "../../assets/svg/sourceGame/menuGame/juegoCementos.svg",
      route: "/gameSelectConcrete"
    },
    {
      img: "../../assets/svg/sourceGame/menuGame/juegoMalasPracticas.svg",
      route: "/gameChooseDescription"
    },
  ];

  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(({id}) => {


      const moduleId = id === ':id' ? localStorage.getItem('currentModule') : id;

      if(!moduleId.includes("Vulnerabiliad Sismica")){
        this.moduleGames[0].img = "../../assets/svg/sourceGame/menuGame/portadaJuegoPlanos.svg";
        this.moduleGames[0].route = "/gameDashboard";
        this.moduleGames[1].img = "../../assets/svg/sourceGame/menuGame/portadaJuegoSimbolos.svg";
        this.moduleGames[1].route = "/gameSelectPair";
      }
      this.moduleNameService.passModuleName(moduleId);
    })
  }

  ngOnInit() {}

}
