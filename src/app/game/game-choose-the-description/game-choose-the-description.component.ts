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

       img1: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/1.jpg",
       answerFirst1: 'Agrietamiento por contracción o retracción ',
       answerFirst2: 'Agrietamiento por oxidación y tipo de acero de refuerzo',
       answerFirst3: 'Agrietamiento por reactividad de los agregados',
       answerFirst4: 'Agrietamiento por un mal curado',

       img2: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/1.png",
       answerSecond1: 'Si la excentricidad es pequeña será por compresión',
       answerSecond2: 'Si la excentricidad es mayor la falla será por tensión ',
       answerSecond3: 'Si no hay excentricidad la falla será por aplastamiento',
       answerSecond4: 'Si la excentricidad',

       img3: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/3.jpg",
       answerThird1: 'Si falla por aplastamiento en la parte superior es columna corta',
       answerThird2: 'ESi presenta poca resistencia en la parte superior es columna larga',
       answerThird3: 'Si falla en la parte intermedia y el refuerzo sufre aplastamiento es columna larga',
       answerThird4: 'Si tienen mayor dimensión resisten más, aunque no tengan refuerzo',

       img4: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/4.jpg",
       answerFourth1: 'Si el concreto de la placa falla es porque no tiene un espesor adecuado para el trafico',
       answerFourth2: 'Si el concreto de la placa falla es porque el diseño de la mezcla no da la resistencia',
       answerFourth3: 'Si el concreto de la placa falla es porque el terreno que la soporta falla',
       answerFourth4: 'Si el concreto de la placa falla es porque queda mal vibrada y con hormigueros',

       img5: "../../assets/svg/sourceGame/vulnerabilidad/badPracticeGame/5.jpg",
       answerFifth1: 'Si falla por grietas diagonales es por tensión diagonal cortante',
       answerFifth2: 'Si la falla es por descascaramientos es por perdida del recubrimiento',
       answerFifth3: 'Si la falla es por movimiento inferior de la estructura es por deslizamiento en la base',
       answerFifth4: 'Si la falla es por hundimiento es por aplastamiento',
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
