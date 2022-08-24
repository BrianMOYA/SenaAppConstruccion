import { Component, OnInit } from '@angular/core';
import { ModuleNameService } from '../services/module-name.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technical-material',
  templateUrl: './technical-material.component.html',
  styleUrls: ['./technical-material.component.scss'],
})
export class TechnicalMaterialComponent implements OnInit {

  moduleName : string;

  public btnsMaterial : {img: string, title: string, route: string}[] = [
    {
      img: "../../assets/svg/sourceVulnerabilidad/prime/portadaCartillaV.svg",
      title: "Cartilla Vulnerabilidad",
      route: "/"
    },
    {
      img: "../../assets/svg/sourceMaterialDeApoyo/portada_Normas.svg",
      title: "Normas",
      route: "/"
    },
    {
      img: "../../assets/svg/sourceMaterialDeApoyo/portada_Videos.svg",
      title: "Videos",
      route: "/"
    },
  ];

  constructor(
    private moduleNameService: ModuleNameService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(({id}) => {


      const moduleId = id === ':id' ? localStorage.getItem('currentModule') : id;

      if(!moduleId.includes("Vulnerabiliad Sismica")){
        this.btnsMaterial[0].title = "Cartilla Sismica";
        this.btnsMaterial[0].img = "../../assets/svg/sourceMainInterface/portada_Instalaciones.svg";
        this.btnsMaterial[0].route = "/";
      }
      this.moduleNameService.passModuleName(moduleId);
    })
  }

  ngOnInit(): void {}

}
