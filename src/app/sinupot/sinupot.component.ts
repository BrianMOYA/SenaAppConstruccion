import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinupot',
  templateUrl: './sinupot.component.html',
  styleUrls: ['./sinupot.component.scss'],
})
export class SinupotComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor() { }

  ngOnInit() {}

  /*@Component({
    selector: 'app-internet-alert',
    styles:[],
    template: `
      <div style="text-align: center;">
        Internet Required
      </div>
    `
  })*/

}
