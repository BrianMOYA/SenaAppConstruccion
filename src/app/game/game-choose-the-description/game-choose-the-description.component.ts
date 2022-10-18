import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';


interface ButtonStyle {
  fill: string;
  color: string;
}

@Component({
  selector: 'app-game-choose-the-description',
  templateUrl: './game-choose-the-description.component.html',
  styleUrls: ['./game-choose-the-description.component.scss'],
})
export class GameChooseTheDescriptionComponent implements OnInit {

  @ViewChild(IonSlides, { static:true}) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  button1: ButtonStyle = {
    fill: "solid",
    color: "primary"
  };

  button2: ButtonStyle = {
    fill: "solid",
    color: "primary"
  }

  button3: ButtonStyle = {
    fill: "solid",
    color: "primary"
  }

  button4: ButtonStyle = {
    fill: "solid",
    color: "primary"
  }



  public options: { img: string; description: string }[] = [
    {
      img: '../../assets/svg/sourceVulnerabilidad/prime/portadaCartillaV.svg',
      description: 'Se calcula que la producción de cemento es causante de hasta el 5% de las emisiones de CO2 a nivel mundial',
    },
    {
      img: '../../assets/svg/sourceMaterialDeApoyo/portada_Normas.svg',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de',
    },
    {
      img: '../../assets/svg/sourceMaterialDeApoyo/portada_Videos.svg',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías .',
    },
  ];

  constructor( private router: Router) {
    this.options.push({img:'', description:'brian'})
    console.log(this.randomArrayShuffle(this.options))
  }

  public randomArrayShuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  ngOnInit() {
    this.slides.lockSwipeToNext(true);
  }

  resetButtonStyle(){
    this.button1 = {
      fill: "solid",
      color: "primary"
    };

    this.button2 = {
      fill: "solid",
      color: "primary"
    }

    this.button3 = {
      fill: "solid",
      color: "primary"
    }

    this.button4 = {
      fill: "solid",
      color: "primary"
    }
  }

  applyButtonSelectedStyle(buttonSelected: number){
    switch (buttonSelected){
      case 1:
        this.button1 ={
          fill: "solid",
          color: "success",
        };
        this.slides.lockSwipeToNext(false);
        break;
      case 2:
        this.button2 ={
          fill: "solid",
          color: "danger"
        };
        this.slides.lockSwipeToNext(true);
        break;
      case 3:
        this.button3 ={
          fill: "solid",
          color: "danger"
        };
        this.slides.lockSwipeToNext(true);
        break;
      case 4:
        this.button4 ={
          fill: "solid",
          color: "danger"
        };
        this.slides.lockSwipeToNext(true);
        break;
    }

  }

  swipeToNextSlide(){
    this.slides.slideNext();
    this.resetButtonStyle();
  }

  respondPoll(buttonSelected: number){
    this.applyButtonSelectedStyle(buttonSelected);

    setTimeout(() => {
      this.swipeToNextSlide();
    }, 900);
  }

  goTo() {
    this.router.navigateByUrl('game/congratulation');
  }
}
