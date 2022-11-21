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
  selector: 'app-game-select-the-pair',
  templateUrl: './game-select-the-pair.component.html',
  styleUrls: ['./game-select-the-pair.component.scss'],
})
export class GameSelectThePairComponent implements OnInit {

  @ViewChild(IonSlides, { static:true}) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  moduleName : string;

  public concretes :
  {
    convencion1: string;
    convencion2: string;
    convencion3: string;
    convencion4: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  }[] = [
  ];

  rutas = {
    "Hidraulica" : [
      {
        convencion1:'../../assets/svg/sourceInstallation/convenciones/hidraulicas/codo90.svg',
        img1: "../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/codo90.png",

        convencion2:'../../assets/svg/sourceInstallation/convenciones/hidraulicas/tee.svg',
        img2: "../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tee.png",

        convencion3:'../../assets/svg/sourceInstallation/convenciones/hidraulicas/tapones.svg',
        img3: "../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tapones.png",

        convencion4:'../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeRetencion.svg',
        img4: "../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeRetencion.png",
      },
    ],
    "Sanitaria" : [
      {
        convencion1:'../../assets/svg/sourceInstallation/convenciones/sanitarias/yeeSanitaria.svg',
        img1: "../../assets/svg/sourceInstallation/piezas/piezasSanitarias/yeeSanitaria.png",

        convencion2:'../../assets/svg/sourceInstallation/convenciones/sanitarias/teeSanitaria.svg',
        img2: "../../assets/svg/sourceInstallation/piezas/piezasSanitarias/teeSanitaria.png",

        convencion3:'../../assets/svg/sourceInstallation/convenciones/sanitarias/codoSanitario90.svg',
        img3: "../../assets/svg/sourceInstallation/piezas/piezasSanitarias/codo90.png",

        convencion4:'../../assets/svg/sourceInstallation/convenciones/sanitarias/buje.svg',
        img4: "../../assets/svg/sourceInstallation/piezas/piezasSanitarias/buje.png",
      },
    ],
    "Gas" : [
      {
        convencion1:'../../assets/svg/sourceInstallation/convenciones/gas/semicodoDeCobreEPC.svg',
        img1: "../../assets/svg/sourceInstallation/piezas/piezasGas/semicodo.png",

        convencion2:'../../assets/svg/sourceInstallation/convenciones/gas/taponCopaCobre.svg',
        img2: "../../assets/svg/sourceInstallation/piezas/piezasGas/taponCopa.png",

        convencion3:'../../assets/svg/sourceInstallation/convenciones/gas/valvulas.svg',
        img3: "../../assets/svg/sourceInstallation/piezas/piezasGas/valvulaPE_AL_PE.png",

        convencion4:'../../assets/svg/sourceInstallation/convenciones/gas/tuberiaMulticapa.svg',
        img4: "../../assets/svg/sourceInstallation/piezas/piezasGas/tuberiaMulticapa.png",
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
