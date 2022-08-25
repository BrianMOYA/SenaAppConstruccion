import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.scss'],
})
export class GameInterfaceComponent implements OnInit {

  public mouduleGames : {img: string, title: string, route: string}[] = [
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/menuGame/juegoCementos.svg",
      title: "Codo de 45",
      route: "/gameSelectConcrete"
    },
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/menuGame/juegoMalasPracticas.svg",
      title: "Codo 90",
      route: "/gameChooseDescription"
    },
  ];

  constructor() { }

  ngOnInit() {}

}
