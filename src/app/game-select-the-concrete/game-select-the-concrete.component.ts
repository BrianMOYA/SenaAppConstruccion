import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-select-the-concrete',
  templateUrl: './game-select-the-concrete.component.html',
  styleUrls: ['./game-select-the-concrete.component.scss'],
})
export class GameSelectTheConcreteComponent implements OnInit {

  public concretes : {img: string}[] = [
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_super_resistente.svg",
    },
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_amb_marino.svg",
    },
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_estructural.svg",
    },
    {
      img: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_general.svg",
    },

  ];

  constructor() { }

  ngOnInit() {}

  goTo(){

  }
}
