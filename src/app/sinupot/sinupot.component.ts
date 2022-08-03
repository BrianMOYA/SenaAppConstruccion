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

}
