import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss'],
})
export class InstallationComponent implements OnInit {

  accessories: any [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    console.log("Hola");
    this.getaccessory().subscribe(res=>{
      console.log("Res",res)
      const hidraulicas = res[1];
      this.accessories = hidraulicas.installation;
      //this.accessories = res;
      console.log(hidraulicas)
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

}
