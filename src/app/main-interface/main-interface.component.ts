import { Component, OnInit } from '@angular/core';
import { ModuleNameService } from '../services/module-name.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.scss'],
})
export class MainInterfaceComponent implements OnInit {
  moduleName : string;

  public btns : {img: string, title: string, route: string}[] = [
    {
      img: "../../assets/svg/sourceMainInterface/portada_Sinupot.svg",
      title: "sinupot",
      route: "/sinupot"
    },
    {
      img: "../../assets/svg/sourceMainInterface/portada_juegos.svg",
      title: "Juegos",
      route: "/gameInterface"
    },
    {
      img: "../../assets/svg/sourceMainInterface/portada_MaterialDeApoyo.svg",
      title: "Material de apoyo",
      route: "/technicalMaterial"
    },
    {
      img: "../../assets/svg/sourceMainInterface/portada_Evaluaciones.svg",
      title: "Simulacro evaluativo",
      route: "/assessment"
    }
  ];


  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(({id}) => {


      const moduleId = id === ':id' ? localStorage.getItem('currentModule') : id;

      if(!moduleId.includes("Vulnerabiliad Sismica")){
        this.btns[0].title = "instalación";
        this.btns[0].img = "../../assets/svg/sourceMainInterface/portada_Instalaciones.svg";
        this.btns[0].route = "/installation";
      }
      this.moduleNameService.passModuleName(moduleId);
    })
  }

  ngOnInit(): void {
    //this.moduleNameService.currentModuleName.subscribe(moduleName => this.moduleName = moduleName)
  }

  goToSubject(){

  }



}
