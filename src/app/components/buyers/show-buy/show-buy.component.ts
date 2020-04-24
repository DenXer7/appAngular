import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-buy',
  templateUrl: './show-buy.component.html',
  styleUrls: ['./show-buy.component.scss']
})
export class ShowBuyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
  }


}
















// Header Fixed y Footer con margin
$(document).ready(function(){
  var footer = $('.footer-content').height();
  var footerCSS = {"margin-bottom":footer+'px'};

  $(window).on('scroll', function(){
    if( $(window).scrollTop() > 0){
      $('.header-content').addClass('header-main-fixed');
      $('.body-content').css(footerCSS);
    }else{
      $('.header-content').removeClass('header-main-fixed');
    }
  });

});



