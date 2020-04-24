import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item-buy',
  templateUrl: './edit-item-buy.component.html',
  styleUrls: ['./edit-item-buy.component.scss']
})
export class EditItemBuyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}



















// Header Fixed y Footer con margin

$(document).ready(function(){
  var footer = $('.footer-content').height();
  var footerCSS = {"margin-bottom":footer+'px'};

  console.log(footer);
  console.log(footerCSS);

  $(window).on('scroll', function(){
    if( $(window).scrollTop() > 0){
      $('.header-content').addClass('header-main-fixed');
      $('.body-content').css(footerCSS);
    }else{
      $('.header-content').removeClass('header-main-fixed');
    }
  });

});

