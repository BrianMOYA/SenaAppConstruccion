import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss'],
})
export class GameInterfaceComponent implements OnInit {

  public mouduleGames : {img: string, route: string}[] = [
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/menuGame/juegoCementos.svg",
      route: "/gameSelectConcrete"
    },
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/menuGame/juegoMalasPracticas.svg",
      route: "/gameChooseDescription"
    },
  ];

  constructor() { }

  ngOnInit() {}

}
