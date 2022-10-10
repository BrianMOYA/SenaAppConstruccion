import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ModuleNameService } from 'src/app/services/module-name.service';

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


  constructor(
    private moduleNameService: ModuleNameService,
  ) {}

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

}
