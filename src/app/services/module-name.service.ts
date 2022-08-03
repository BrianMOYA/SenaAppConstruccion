import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleNameService {
  public moduleNameSource = new BehaviorSubject<string>('default');

  constructor(
    private http: HttpClient ) { }

  passModuleName(src: string){
    this.moduleNameSource.next(src);
  }
}
