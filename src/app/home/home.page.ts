import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router ) {
    timer(900).subscribe(() => {
      this.router.navigateByUrl('feature');
    });
  }

}
