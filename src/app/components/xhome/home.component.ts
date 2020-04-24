import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      // var altura = $('.main-header').offset().top;
      // console.log(altura);

      // var header = $("nav").last().offset().top;
      // console.log(header);
      // console.log( $(window).scrollTop());
    });
  }

}


