import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router,
  ) {

  }


  ngOnInit() {}

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
