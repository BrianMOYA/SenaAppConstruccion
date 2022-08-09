import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ModuleNameService } from '../services/module-name.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  public categories: any [];

  constructor(
    private menu: MenuController,
    private router: Router,
    private http: HttpClient,
    private moduleName: ModuleNameService
  ) {}

  openMenu(){
    this.menu.toggle();
  }

  ngOnInit() {
    this.getaccessory().subscribe(res=>{
      console.log("Res",res)
      this.categories = res;
    })
  }
  getaccessory(){
    return this.http
    .get("assets/file/data.json")
    .pipe(
      map((res:any) =>{
        return res.categories
      })
    )
  }

  async goModule(
    moduleId = ''
  )
  {
    //this.moduleName.passModuleName(moduleId)

    localStorage.setItem('currentModule', moduleId);

    this.router.navigateByUrl(
      'mainInterface/' + moduleId
    )
  }

}

