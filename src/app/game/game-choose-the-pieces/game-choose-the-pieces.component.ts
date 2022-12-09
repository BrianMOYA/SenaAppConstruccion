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
  selector: 'app-game-choose-the-pieces',
  templateUrl: './game-choose-the-pieces.component.html',
  styleUrls: ['./game-choose-the-pieces.component.scss'],
})
export class GameChooseThePiecesComponent implements OnInit{



  @ViewChild(IonSlides, { static:true}) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  moduleName : string;

  public concretes :
  {
    plano1: string;
    plano2: string;
    plano3: string;
    img1: string;
    img2: string;
    img3: string;
  }[] = [
  ];

  rutas = {
    "Hidraulica" : [
      {
        plano1:'../../assets/svg/sourceGame/hidraulica/planosGame/codo90.png',
        img2: "../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/codo90.png",

        plano2:'../../assets/svg/sourceGame/hidraulica/planosGame/tee.png',
        img1: "../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tee.png",

        plano3:'../../assets/svg/sourceGame/hidraulica/planosGame/adaptadorMacho.png',
        img3: "../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/adaptadorMacho.png",
      },
    ],
    "Sanitaria" : [
      {
        plano1:'../../assets/svg/sourceGame/sanitaria/planosGame/tapon.png',
        img2: "../../assets/svg/sourceInstallation/piezas/piezasSanitarias/taponDePrueba.png",

        plano2:'../../assets/svg/sourceGame/sanitaria/planosGame/sifon.png',
        img1: "../../assets/svg/sourceInstallation/piezas/piezasSanitarias/sifon.png",

        plano3:'../../assets/svg/sourceGame/sanitaria/planosGame/yee.png',
        img3: "../../assets/svg/sourceInstallation/piezas/piezasSanitarias/yeeSanitaria.png",
      },
    ],
    "Gas" : [
      {
        plano1:'../../assets/svg/sourceGame/gas/planosGame/codo.png',
        img2: "../../assets/svg/sourceInstallation/piezas/piezasGas/codo90.png",

        plano2:'../../assets/svg/sourceGame/gas/planosGame/reguladorDeBola.png',
        img1: "../../assets/svg/sourceInstallation/piezas/piezasGas/valvulaPE_AL_PE.png",

        plano3:'../../assets/svg/sourceGame/gas/planosGame/tee.png',
        img3: "../../assets/svg/sourceInstallation/piezas/piezasGas/tee.png",
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
    }, 300);
  }

  goTo() {
    this.router.navigateByUrl('game/congratulation');
    this.slides.slideTo(0);
  }

}

