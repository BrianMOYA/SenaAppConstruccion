import { Component, OnInit } from '@angular/core';
import { ModuleNameService } from '../../services/module-name.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-interfaces',
  templateUrl: './main-interfaces.component.html',
  styleUrls: ['./main-interfaces.component.scss'],
})
export class MainInterfacesComponent implements OnInit {

  moduleName : string;

  public btns : {img: string, title: string, route: string}[] = [
    {
      img: "../../assets/svg/sourceMainInterface/portada_Sinupot.svg",
      title: "sinupot",
      route: "/main/sinup"
    },
    {
      img: "../../assets/svg/sourceMainInterface/portada_juegos.svg",
      title: "Juegos",
      route: "/game/gameInterface"
    },
    {
      img: "../../assets/svg/sourceMainInterface/portada_MaterialDeApoyo.svg",
      title: "Material de apoyo",
      route: "/main/material"
    },
    {
      img: "../../assets/svg/sourceMainInterface/portada_Evaluaciones.svg",
      title: "Simulacro evaluativo",
      route: "/main/assessment"
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
        this.btns[0].route = "/main/installation";
      }
      this.moduleNameService.passModuleName(moduleId);
    })
  }

  ngOnInit(): void {
    //this.moduleNameService.currentModuleName.subscribe(moduleName => this.moduleName = moduleName)
  }

}

