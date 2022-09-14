import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // servicio utilizado para obtener información desde el json inicial
  public currentModule;

  constructor(
    private http: HttpClient
  ) { }


  async getDataModule(modulename: string){
    const categories = await this.http
    .get("assets/file/data.json")
    .pipe(
      map((res:any) =>{
        return res.categories
      })
    ).toPromise();


    this.currentModule = categories.find( (module) => module.name.includes(modulename) );
    return this.currentModule || {};
  }

  async getinfor(modulename: string){
    const categories = await this.http
    .get("assets/file/data.json")
    .pipe(
      map((res:any) =>{
        return res.categories
      })
    ).toPromise();


    this.currentModule = categories.find( (module) => module.name.includes(modulename) );
    return this.currentModule || {};
  }

}
