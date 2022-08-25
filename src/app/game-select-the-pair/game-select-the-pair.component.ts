import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-select-the-pair',
  templateUrl: './game-select-the-pair.component.html',
  styleUrls: ['./game-select-the-pair.component.scss'],
})
export class GameSelectThePairComponent implements OnInit {

  public simbologias : {img: string}[] = [
    {
      img: "../../assets/svg/sourceGame/hidraulica/symbologyGame/1.png",
    },
    {
      img: "../../assets/svg/sourceGame/hidraulica/symbologyGame/1.2.png",
    },
    {
      img: "../../assets/svg/sourceGame/hidraulica/symbologyGame/2.png",
    },
    {
      img: "../../assets/svg/sourceGame/hidraulica/symbologyGame/2.2.png",
    },
    {
      img: "../../assets/svg/sourceGame/hidraulica/symbologyGame/3.png",
    },
    {
      img: "../../assets/svg/sourceGame/hidraulica/symbologyGame/3.1.png",
    },
    {
      img: "../../assets/svg/sourceGame/hidraulica/symbologyGame/4.png",
    },
    {
      img: "../../assets/svg/sourceGame/hidraulica/symbologyGame/4.1.png",
    },

  ];

  constructor() { }

  ngOnInit() {}

  goTo(){

  }
}
