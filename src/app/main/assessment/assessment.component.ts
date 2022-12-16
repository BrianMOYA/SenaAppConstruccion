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
  }[] = [];

  rutas = {
    "Vulnerabiliad Sismica" : [
      {

        question1: "¿Qué daños pueden provocar los terremotos?",
        answerFirst1: 'Alud de tierra',
        answerFirst2: 'El uso del suelo',
        answerFirst3: 'Movimiento natural',
        answerFirst4: 'Amenaza sísmica',

        question2: "¿Qué es una vivienda vulnerable?",
        answerSecond1: 'La calidad del suelo',
        answerSecond2: 'Tiene estructura aporticada',
        answerSecond3: 'Esta en terreno plano',
        answerSecond4: 'Tiene riesgo dañarse',

        question3: "Son requisitos mínimos de una vivienda sismorresistente",
        answerThird1: 'No tiene cimientos',
        answerThird2: 'El suelo es blando',
        answerThird3: 'Muros confinados',
        answerThird4: 'Losa discontinua',

        question4: "Son ubicaciones para una vivienda segura",
        answerFourth1: 'Terreno en pendiente',
        answerFourth2: 'Terreno llano',
        answerFourth3: 'Relleno mal compactado',
        answerFourth4: 'Sobre zonas húmedas',

        question5: "¿Qué es una mala práctica?",
        answerFifth1: 'Pegas uniformes',
        answerFifth2: 'Columnas sin hormigueros',
        answerFifth3: 'Muros demasiado largos',
        answerFifth4: 'Refuerzo con recubrimiento',
      },
    ],
    "Hidraulica" : [
      {

        question1: "Cuando se Utilizan lápices en el dibujo de planos, la intensidad de cada una de las líneas se logra de acuerdo a la clasificación de los mismos (Blando y Duro,), que respectivamente son:",
        answerFirst1: 'H y B',
        answerFirst2: 'H y F',
        answerFirst3: 'F Y  B',
        answerFirst4: 'HF y HB',

        question2: "Hay Escalas de Reducción y de Ampliación, con base a esto, que escala no corresponde a los valores más usados en la representación de un plano de Interpretación de instalación Hidráulica: ",
        answerSecond1: '1:100',
        answerSecond2: '1:20',
        answerSecond3: '1:50',
        answerSecond4: '1:1',

        question3: "Teniendo en cuenta lo aprendido respecto a las normas para el tamaño del papel, Porque este es importante en la representación de un plano de Interpretación de instalación Hidráulica:",
        answerThird1: 'Para que se interprete mejor la instalación Hidráulica.',
        answerThird2: 'Para que en un solo formato  se represente parte de la acometida Hidráulica',
        answerThird3: 'Para que en el formato papel se logre representar  e  interpretar toda la instalación Hidráulica en la escala correspondiente.',
        answerThird4: 'No es importante el Formato.',

        question4: "Para el dibujo de planos Se deben usar sólo los tipos y espesores de las líneas indicadas según la Norma Técnica Colombiana NTC 1777. De acuerdo a lo anterior cuales son las líneas que se utilizan para el dibujo de Líneas de Eje, Líneas de Simetría y Trayectoria:",
        answerFourth1: 'Continúa Gruesa.',
        answerFourth2: 'Fina de Cadena.',
        answerFourth3: 'Gruesa de Segmentos.',
        answerFourth4: 'Continua Fina.',

        question5: "La Perspectiva es la manera de representar uno o varios objetos en una superficie plana, de las siguientes opciones cual no corresponde a la perspectiva más usada en el dibujo de un plano Hidráulico:",
        answerFifth1: 'Jerárquica',
        answerFifth2: 'Caballera',
        answerFifth3: 'Concentrica.',
        answerFifth4: 'Axonometríca ',
      },
    ],
    "Sanitaria" : [
      {

        question1: "Con referencia a las instalaciones sanitarias en una edificación, en las bajantes para aguas servidas se debe instalar una tubería de reventilación que tiene como función:",
        answerFirst1: 'Conservar los sellos hidráulicos en los sifones',
        answerFirst2: 'Disminuir el diámetro de las tuberías',
        answerFirst3: 'Evitar las vibraciones',
        answerFirst4: 'Aumentar la velocidad de desalojamiento',

        question2: "Según su concepto los planos para instalaciones hidrosanitarias son:",
        answerSecond1: 'Son representaciones gráficas aumentadas.',
        answerSecond2: 'Son representaciones gráficas sin escala.',
        answerSecond3: 'Son representaciones gráficas naturales',
        answerSecond4: 'Son representaciones gráficas disminuidas.',

        question3: "Los planos de instalaciones sanitarias, entre otros aspectos, deben contener:",
        answerThird1: 'Red de agua potable, accesorios y aparatos sanitarios',
        answerThird2: 'Red de aguas lluvias, tragantes y aparatos sanitarios',
        answerThird3: 'Red de evacuación de aguas servidas, red de aguas lluvias y aparatos sanitarios',
        answerThird4: 'Cajas de inspección, red de agua potable y accesorios.',

        question4: "Los planos sanitarios deben contener la información conforme a:",
        answerFourth1: 'Reglamento de agua y saneamiento básico',
        answerFourth2: 'Norma técnica colombiana NTC-1500',
        answerFourth3: 'Norma técnica colombiana NTC-2005',
        answerFourth4: 'Norma sismo resistente NSR-10',

        question5: "¿Qué tipo de línea se utiliza para representar ejes en una figura?",
        answerFifth1: 'Línea continua delgada',
        answerFifth2: 'Trazo largo, trazo corto, trazo corto',
        answerFifth3: 'Línea fina de segmentos cortos y largos alternados',
        answerFifth4: 'Línea fina de segmentos cortos y largos alternados',
      },
    ],
    "Gas" : [
      {

        question1: "¿Cuál es el objetivo de usar diferentes tamaños de formatos de papel para representar gráficamente una instalación de gas natural residencial?",
        answerFirst1: 'Que en un solo formato se pueda mostrar toda la instalación a gas natural residencial, en la escala gráfica apropiada',
        answerFirst2: 'Que se vean las medidas o cotas de la instalación',
        answerFirst3: 'Que en un formato solo aparezcan partes de una instalación a gas natural residencial, en cualquier escala gráfica',
        answerFirst4: 'Que se vea más bonita la presentación del dibujo',

        question2: "¿La selección de la escala más apropiada para dibujar un plano de qué depende?",
        answerSecond1: 'Del tamaño del objeto',
        answerSecond2: 'Del tamaño del formato de papel',
        answerSecond3: 'De la intensidad de las líneas a dibujar',
        answerSecond4: 'Del tamaño del papel y de las dimensiones del objeto',

        question3: "¿Qué tipo de línea se usa para representar elementos ocultos en un plano?",
        answerThird1: 'Trazo largo, trazo corto',
        answerThird2: 'Puntos y trazos cortos',
        answerThird3: 'Líneas segmentadas de trazos cortos',
        answerThird4: 'Trazo largo, puntos',

        question4: "¿Qué tipo de línea se utiliza para representar elementos visibles en un plano?",
        answerFourth1: 'Trazo largo, trazo corto',
        answerFourth2: 'Línea continua gruesa',
        answerFourth3: 'Línea continua gruesa',
        answerFourth4: 'Trazo corto, trazo largo',

        question5: "¿Qué tipo de línea se utiliza para representar ejes en una figura?",
        answerFifth1: 'Línea continua delgada',
        answerFifth2: 'Trazo largo, trazo corto, trazo corto',
        answerFifth3: 'Línea fina de segmentos cortos y largos alternados',
        answerFifth4: 'Línea fina de segmentos cortos y largos alternados',
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
    }, 300);
  }

  goTo() {
    this.router.navigateByUrl('game/congratulation');
    this.slides.slideTo(0);
  }

}
