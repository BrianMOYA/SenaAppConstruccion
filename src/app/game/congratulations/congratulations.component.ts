import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.scss'],
})
export class CongratulationsComponent implements OnInit {

  constructor( private router: Router ) {
    timer(1700).subscribe(() => {
    this.router.navigateByUrl('mainInterface/:id');
    });
  }

  ngOnInit() {}

}
