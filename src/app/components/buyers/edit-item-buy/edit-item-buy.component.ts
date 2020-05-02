import { Component, OnInit } from '@angular/core';
import { Mobile } from "../../../models/mobile";

@Component({
  selector: 'app-edit-item-buy',
  templateUrl: './edit-item-buy.component.html',
  styleUrls: ['./edit-item-buy.component.scss']
})
export class EditItemBuyComponent implements OnInit {

  constructor() { }

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
      detail: true
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
      detail: true
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
      detail: true
    },
  ];

  ngOnInit(): void {
  }


}



















// Header Fixed y Footer con margin

// $(document).ready(function(){
//   var header = $('.header-content').height();
//   var footer = $('.footer-content').height();
//   var headerCSS = {"margin-bottom":header+'px'};
//   var footerCSS = {"margin-bottom":footer+'px'};

//   $('.body-content')

//   $(window).on('scroll', function(){
//     if( $(window).scrollTop() > 0){
//       $('.header-content').addClass('header-main-fixed');
//       $('.body-content').css(footerCSS);
//     }else{
//       $('.header-content').removeClass('header-main-fixed');
//     }
//   });

//   var tamañoVentana = $(window).height();
//   // var tamañoVentanaCSS = {"height": tamañoVentana+'px'};
//   console.log(tamañoVentana);

// });

