import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input('backUrl') backurl: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  async back(){
    if(this.backurl){
      await this.router.navigateByUrl(this.backurl);
    }
  }
}
