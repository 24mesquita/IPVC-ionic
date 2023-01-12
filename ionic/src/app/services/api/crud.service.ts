import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
    url:string = "http://localhost:4243";
  constructor(private http: HttpClient) { }
  getdata(controller:string){
    return this.http.get(`${this.url}/api/${controller}`);
  }
}
