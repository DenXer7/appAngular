import { Injectable } from '@angular/core';

// PARA CONSUMIR APIS
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class BuyersService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://127.0.0.1:8000';

  getBuyers(){
    return this.http.get(`${this.API_URI}/buyers`);
  }

  getBuyer(id: string | number){
    return this.http.get(`${this.API_URI}/buyers/${id}`)
  }

}
