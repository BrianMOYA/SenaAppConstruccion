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
  selector: 'app-game-select-the-concrete',
  templateUrl: './game-select-the-concrete.component.html',
  styleUrls: ['./game-select-the-concrete.component.scss'],
})
export class GameSelectTheConcreteComponent implements OnInit {

  @ViewChild(IonSlides, { static:true}) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  moduleName : string;

  public concretes :
  {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  }[] = [
  ];

  rutas = {
    "Vulnerabiliad Sismica" : [
      {
        text1: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_super_resistente.svg",
        img1: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_super_resistente.svg",

        text2: "¿Es aquel en que pop?",
        img2: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_amb_marino.svg",

        text3: "¿Es aquel que usamos para jugar?",
        img3: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_estructural.svg",

        text4: "¿Es aquel que usamos para jugar?",
        img4: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_general.svg",
      },
    ],
    "Hidraulica" : [
      {
        text1: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_super_resistente.svg",
        img1: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_super_resistente.svg",

        text2: "¿Es aquel en que pop?",
        img2: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_amb_marino.svg",

        text3: "¿Es aquel que usamos para jugar?",
        img3: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_estructural.svg",

        text4: "¿Es aquel que usamos para jugar?",
        img4: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_general.svg",
      },
    ],
    "Sanitaria" : [
      {
        text1: "El cemento reforzado con grafeno es más duro, más resistente y más sostenible. Se calcula que la producción de cemento es causante de hasta el 5% de las emisiones de CO2 a nivel mundial.",
        img1: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_super_resistente.svg",

        text2: "¿Es aquel en que pop?",
        img2: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_amb_marino.svg",

        text3: "¿Es aquel que usamos para jugar?",
        img3: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_estructural.svg",

        text4: "¿Es aquel que usamos para jugar?",
        img4: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_general.svg",
      },
    ],
    "Gas" : [
      {
        text1: "El cemento reforzado con grafeno es más duro, más resistente y más sostenible. Se calcula que la producción de cemento es causante de hasta el 5% de las emisiones de CO2 a nivel mundial.",
        img1: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_super_resistente.svg",

        text2: "¿Es aquel en que pop?",
        img2: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_amb_marino.svg",

        text3: "¿Es aquel que usamos para jugar?",
        img3: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_estructural.svg",

        text4: "¿Es aquel que usamos para jugar?",
        img4: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_general.svg",
      },
    ],
  }

  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.moduleNameService.moduleNameSource.subscribe((moduleId) => {
      this.concretes = this.rutas[moduleId]
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
