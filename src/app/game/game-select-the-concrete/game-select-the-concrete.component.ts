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
        text1: "Presenta buena durabilidad en ambientes polucionados con un buen terminado y una buena manejabilidad para acabados finos, además es adecuado para nivelación y afinados de piso. ",
        img1: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_super_resistente.svg",

        text2: "Es durable en construcciones con altos contenidos de sulfatos como aguas residuales urbanas o industriales, además es adecuado para obras de infraestructura que requieran bajo calor de hidratación",
        img2: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_amb_marino.svg",

        text3: "Es especial para elementos estructurales como cimientos, losas, vigas, columnas y muros. También, es ideal para producir elementos prefabricados de todo tipo y concretos de alta resistencia.",
        img3: "../../assets/svg/sourceGame/vulnerabilidad/concreteGame/cemento_uso_estructural.svg",

        text4: "Puede usarse en estructuras que no demanden alta resistencia inicial. Ideal para acabados y repello de paredes interiores y exteriores, pegado de bloques, mosaicos, baldosas y piezas sanitarias.",
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
