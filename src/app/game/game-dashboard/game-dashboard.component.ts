import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.scss'],
})
export class GameDashboardComponent implements OnInit {

  public games : {img: string, title: string, route: string}[] = [
    {
      img: "../../assets/svg/sourceMainInterface/piezas/codo90.webp",
      title: "Codo de 45",
      route: "/game/gameChoosePieces"
    },
    {
      img: "../../assets/svg/sourceMainInterface/piezas/codo90.webp",
      title: "Codo 90",
      route: "/game/gameChoosePieces"
    },
    {
      img: "../../assets/svg/sourceMainInterface/piezas/codo90.webp",
      title: "Union",
      route: "/game/gameChoosePieces"
    },
    {
      img: "../../assets/svg/sourceMainInterface/piezas/codo90.webp",
      title: "Cubo",
      route: "/game/gameChoosePieces"
    },
    {
      img: "../../assets/svg/sourceMainInterface/piezas/codo90.webp",
      title: "Conector",
      route: "/game/gameChoosePieces"
    },
    {
      img: "../../assets/svg/sourceMainInterface/piezas/codo90.webp",
      title: "esfera",
      route: "/game/gameChoosePieces"
    },
    {
      img: "../../assets/svg/sourceMainInterface/piezas/codo90.webp",
      title: "codo 100",
      route: "/game/gameChoosePieces"
    },
    {
      img: "../../assets/svg/sourceMainInterface/piezas/codo90.webp",
      title: "tee 720",
      route: "/game/gameChoosePieces"
    }
  ];

  constructor() { }

  ngOnInit() {}

  goTo(){

  }
}
