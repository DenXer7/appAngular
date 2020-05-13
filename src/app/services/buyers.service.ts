import { Injectable } from '@angular/core';

// PARA CONSUMIR APIS
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BuyersService {

  constructor(private http: HttpClient) { }

  API_URI = 'https://huaquito.herokuapp.com';

  getBuyers(){
    return this.http.get(`${this.API_URI}/buyers`);
  }

  getBuyer(id: string | number) {
    return this.http.get(`${this.API_URI}/buyers/${id}`);
  }

  saveBuyer(buyer){
    return this.http.post(`${this.API_URI}/buyers`, buyer);
  }

  delete(id){
    return this.http.delete(`${this.API_URI}/buyers/${id}`);
  }

  updateBuyer(id, buyerUpdate){
    return this.http.put(`${this.API_URI}/buyers/${id}`, buyerUpdate);
  }

}
