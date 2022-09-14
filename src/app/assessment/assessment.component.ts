import { Component, OnInit } from '@angular/core';
import { ModuleNameService } from 'src/app/services/module-name.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {

  public options : {question: string; opt1: string; opt2: string; opt3: string; opt4: string}[] = [

  ];

  rutas = {
    "Vulnerabiliad Sismica" : [
      {
        question: "¿Que es el agua?",
        opt1: "hfdjfhdsjhfdsjhfjkds",
        opt2: "dsfdsfdsfdsfdsfds",
        opt3: "dsfdsfdsfdsfdsf",
        opt4: "esa si es"
      },
      {
        question: "Que es pan",
        opt1: "dsfdsfdsfdsfds",
        opt2: "esa si es",
        opt3: "dfdsf",
        opt4: "fdsfdsf"
      },
      {
        question: "Que es azucar",
        opt1: "dsfdsfds",
        opt2: "sdfdsf",
        opt3: "esa si es",
        opt4: "sdsadsadas"
      },
      {
        question: "Que es amor",
        opt1: "esa si es",
        opt2: "dsfdsfs",
        opt3: "dfdsfds",
        opt4: "gfdgfdgfdgfd"
      },
      {
        question: "Que es yuca",
        opt1: "dfdsfds",
        opt2: "esa si es",
        opt3: "dsfdsfds",
        opt4: "fdsfdsf"
      },
    ],
    "Hidraulica" : [
      {
        question: "¿Que es el agua?",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es pan",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es azucar",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es amor",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es yuca",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
    ],
    "Sanitaria" : [
      {
        question: "¿Que es el agua?",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es pan",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es azucar",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es amor",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es yuca",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
    ],
    "Gas" : [
      {
        question: "¿Que es el agua?",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es pan",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es azucar",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es amor",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
      {
        question: "Que es yuca",
        opt1: "",
        opt2: "",
        opt3: "",
        opt4: "esa si es"
      },
    ],
  }

  constructor(
    private moduleNameService: ModuleNameService,
  ) {
    this.moduleNameService.moduleNameSource.subscribe((moduleId) => {
      this.options = this.rutas[moduleId]
    })
  }

  ngOnInit() {}

}
