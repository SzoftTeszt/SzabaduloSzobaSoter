import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://localhost:3000/foglalasok/"
  constructor(private http:HttpClient) 
  { }

  getAll(){
    return this.http.get(this.url)
  }

  add(body:any){
    return this.http.post(this.url, body)
  }
}
