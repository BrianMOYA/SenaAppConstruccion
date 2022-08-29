import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-choose-the-pieces',
  templateUrl: './game-choose-the-pieces.component.html',
  styleUrls: ['./game-choose-the-pieces.component.scss'],
})
export class GameChooseThePiecesComponent implements OnInit {

  public pieces: { img: string; }[] = [
    {
      img: '../../assets/svg/sourceGame/hidraulica/symbologyGame/1.png',

    },
    {
      img: '../../assets/svg/sourceGame/hidraulica/symbologyGame/2.png',

    },
    {
      img: '../../assets/svg/sourceGame/hidraulica/symbologyGame/3.png',

    },
  ];

  constructor() { }

  ngOnInit() {}

  goTo(){

  }

}
