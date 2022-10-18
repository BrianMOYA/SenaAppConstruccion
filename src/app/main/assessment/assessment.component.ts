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
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {

  @ViewChild(IonSlides, { static:true}) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  moduleName : string;

  public questions :
  {
    question1: string;
    answerFirst1: string;
    answerFirst2: string;
    answerFirst3: string;
    answerFirst4: string;

    question2: string,
    answerSecond1: string;
    answerSecond2: string;
    answerSecond3: string;
    answerSecond4: string;

    question3: string,
    answerThird1: string;
    answerThird2: string;
    answerThird3: string;
    answerThird4: string;

    question4: string,
    answerFourth1: string;
    answerFourth2: string;
    answerFourth3: string;
    answerFourth4: string;

    question5: string,
    answerFifth1: string;
    answerFifth2: string;
    answerFifth3: string;
    answerFifth4: string;


  }[] = [
  ];

  rutas = {
    "Vulnerabiliad Sismica" : [
      {

        question1: "¿Que es una pera?",
        answerFirst1: 'es una fruta',
        answerFirst2: 'es una',
        answerFirst3: 'no es nada',
        answerFirst4: 'si lo es',

        question2: "¿Que es una agua?",
        answerSecond1: 'es una',
        answerSecond2: 'es un liquido',
        answerSecond3: 'no es nada',
        answerSecond4: 'si lo es',

        question3: "¿Que es una luz?",
        answerThird1: 'es una',
        answerThird2: 'es una fruta',
        answerThird3: 'no es energia',
        answerThird4: 'si lo es',

        question4: "¿Que es una gas?",
        answerFourth1: 'es una',
        answerFourth2: 'es una fruta',
        answerFourth3: 'no es nada',
        answerFourth4: 'es un quimico',

        question5: "¿Que es una hola?",
        answerFifth1: 'dfdsfdsfds',
        answerFifth2: 'dsfsdfdsfdsa',
        answerFifth3: 'Tadsfdsfsds es',
        answerFifth4: 'si lodsfdsfsdfdsf es',
      },
    ],
    "Hidraulica" : [
      {

        question1: "¿Que es una play?",
        answerFirst1: 'es una',
        answerFirst2: 'es una fruta',
        answerFirst3: 'no es nada',
        answerFirst4: 'si lo es',

        question2: "¿Que es una agua?",
        answerSecond1: 'es una',
        answerSecond2: 'es una fruta',
        answerSecond3: 'no es nada',
        answerSecond4: 'si lo es',

        question3: "¿Que es una luz?",
        answerThird1: 'es una',
        answerThird2: 'es una fruta',
        answerThird3: 'no es nada',
        answerThird4: 'si lo es',

        question4: "¿Que es una gas?",
        answerFourth1: 'es una',
        answerFourth2: 'es una fruta',
        answerFourth3: 'no es nada',
        answerFourth4: 'si lo es',

        question5: "¿Que es una gas?",
        answer1Fifth: 'es una',
        answer2Fifth: 'es una fruta',
        answer3Fifth: 'no es nada',
        answer4Fifth: 'si lo es',
      },
    ],
    "Sanitaria" : [
      {

        question1: "¿Que es una xbox?",
        answerFirst1: 'es una',
        answerFirst2: 'es una fruta',
        answerFirst3: 'no es nada',
        answerFirst4: 'si lo es',

        question2: "¿Que es una agua?",
        answerSecond1: 'es una',
        answerSecond2: 'es una fruta',
        answerSecond3: 'no es nada',
        answerSecond4: 'si lo es',

        question3: "¿Que es una luz?",
        answerThird1: 'es una',
        answerThird2: 'es una fruta',
        answerThird3: 'no es nada',
        answerThird4: 'si lo es',

        question4: "¿Que es una gas?",
        answerFourth1: 'es una',
        answerFourth2: 'es una fruta',
        answerFourth3: 'no es nada',
        answerFourth4: 'si lo es',


      },
    ],
    "Gas" : [
      {

        question1: "¿Que es una yuca?",
        answerFirst1: 'es una',
        answerFirst2: 'es una fruta',
        answerFirst3: 'no es nada',
        answerFirst4: 'si lo es',

        question2: "¿Que es una agua?",
        answerSecond1: 'es una',
        answerSecond2: 'es una fruta',
        answerSecond3: 'no es nada',
        answerSecond4: 'si lo es',

        question3: "¿Que es una luz?",
        answerThird1: 'es una',
        answerThird2: 'es una fruta',
        answerThird3: 'no es nada',
        answerThird4: 'si lo es',

        question4: "¿Que es una gas?",
        answerFourth1: 'es una',
        answerFourth2: 'es una fruta',
        answerFourth3: 'no es nada',
        answerFourth4: 'si lo es',

        question5: "¿Que es una gas?",
        answer1Fifth: 'es una',
        answer2Fifth: 'es una fruta',
        answer3Fifth: 'no es nada',
        answer4Fifth: 'si lo es',
      },
    ],
  }

  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.moduleNameService.moduleNameSource.subscribe((moduleId) => {
      this.questions = this.rutas[moduleId]
    })
  }

  button1: ButtonStyle = {
    fill: "outline",
    color: "primary"
  };

  button2: ButtonStyle = {
    fill: "outline",
    color: "primary"
  }

  button3: ButtonStyle = {
    fill: "outline",
    color: "primary"
  }

  button4: ButtonStyle = {
    fill: "outline",
    color: "primary"
  }


  ngOnInit() {
    this.slides.lockSwipeToNext(true);
  }

  resetButtonStyle(){
    this.button1 = {
      fill: "outline",
      color: "primary"
    };

    this.button2 = {
      fill: "outline",
      color: "primary"
    }

    this.button3 = {
      fill: "outline",
      color: "primary"
    }

    this.button4 = {
      fill: "outline",
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
