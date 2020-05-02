import { Component, OnInit } from '@angular/core';

import { Mobile } from "../../../models/mobile";

import { BuyersService } from "../../../services/buyers.service";

//PARA CAPTURAR PARAMETROS DE LA RUTA
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-show-buy',
  templateUrl: './show-buy.component.html',
  styleUrls: ['./show-buy.component.scss']
})
export class ShowBuyComponent implements OnInit {

  constructor(private buyersService: BuyersService, private activatedRoute: ActivatedRoute) { }
  mobileArray: Mobile[] = [
    {
      id: 1,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 2,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 3,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 4,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 5,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 6,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 7,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 8,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 9,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 10,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 11,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 12,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 13,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 14,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 15,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 16,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 17,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 18,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 19,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 20,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 21,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 22,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 23,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 24,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
    {
      id: 25,
      state: "verificando",
      brand: "samsung",
      model: "a10",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: true
    },
    {
      id: 26,
      state: "verificando",
      brand: "samsung",
      model: "ULIMO",
      price_buy: 200,
      price_sale_min: 280,
      price_sale_max: 320,
      mac: "F0:E1:D2:C3:B4:A5",
      detail: false
    },
  ];

  listBuyer:any=[];

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getService(params.id);
  }

  getService(id:number){
    this.buyersService.getBuyer(id).subscribe(
      res => {
        this.listBuyer = res;
        console.log(this.listBuyer);
      },
      err => console.log(err)
    )
  }

}
















// Header Fixed y Footer con margin
// $(document).ready(function(){
//   var footer = $('.footer-content').height();
//   var footerCSS = {"margin-bottom":footer+'px'};

//   $(window).on('scroll', function(){
//     if( $(window).scrollTop() > 0){
//       $('.header-content').addClass('header-main-fixed');
//       $('.body-content').css(footerCSS);
//     }else{
//       $('.header-content').removeClass('header-main-fixed');
//     }
//   });

// });



