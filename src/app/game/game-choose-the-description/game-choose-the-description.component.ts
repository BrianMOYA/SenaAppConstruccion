import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModuleNameService } from 'src/app/services/module-name.service';
import { ActivatedRoute} from '@angular/router';
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

  public descriptions :
 {
   img1: string;
   answerFirst1: string;
   answerFirst2: string;
   answerFirst3: string;
   answerFirst4: string;

   img2: string,
   answerSecond1: string;
   answerSecond2: string;
   answerSecond3: string;
   answerSecond4: string;

   img3: string,
   answerThird1: string;
   answerThird2: string;
   answerThird3: string;
   answerThird4: string;

   img4: string,
   answerFourth1: string;
   answerFourth2: string;
   answerFourth3: string;
   answerFourth4: string;

   img5: string,
   answerFifth1: string;
   answerFifth2: string;
   answerFifth3: string;
   answerFifth4: string;
 }[] = [];

 rutas = {
   "Vulnerabiliad Sismica" : [
     {

       img1: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/error1.jpg",
       answerFirst1: 'Agrietamiento por contracción o retracción ',
       answerFirst2: 'Agrietamiento por oxidación y tipo de acero de refuerzo',
       answerFirst3: 'Agrietamiento por reactividad de los agregados',
       answerFirst4: 'Agrietamiento por un mal curado',

       img2: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/1.png",
       answerSecond1: 'Si la excentricidad es pequeña será por compresión',
       answerSecond2: 'Si la excentricidad es mayor la falla será por tensión ',
       answerSecond3: 'Si no hay excentricidad la falla será por aplastamiento',
       answerSecond4: 'Si la excentricidad',

       img3: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/error1.jpg",
       answerThird1: 'No tiene cimientos',
       answerThird2: 'El suelo es blando',
       answerThird3: 'Muros confinados',
       answerThird4: 'Losa discontinua',

       img4: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/error1.jpg",
       answerFourth1: 'Terreno en pendiente',
       answerFourth2: 'Terreno llano',
       answerFourth3: 'Relleno mal compactado',
       answerFourth4: 'Sobre zonas húmedas',

       img5: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/error1.jpg",
       answerFifth1: 'Pegas uniformes',
       answerFifth2: 'Columnas sin hormigueros',
       answerFifth3: 'Muros demasiado largos',
       answerFifth4: 'Refuerzo con recubrimiento',
     },
   ]
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




  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.moduleNameService.moduleNameSource.subscribe((moduleId) => {
      this.descriptions = this.rutas[moduleId]
    })
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
    this.slides.slideTo(0);
  }
}
