import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-select-the-concrete',
  templateUrl: './game-select-the-concrete.component.html',
  styleUrls: ['./game-select-the-concrete.component.scss'],
})
export class GameSelectTheConcreteComponent implements OnInit {

  public concretes : {img: string}[] = [
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_super_resistnte.svg",
    },
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_amb_marino.svg",
    },
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_estrctral.svg",
    },
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_gral.svg",
    },

  ];

  constructor() { }

  ngOnInit() {}

  goTo(){

  }
}
