import { Component, OnInit } from '@angular/core';

// import { NewBuy } from "../../../models/buys/new-buy";

import { BuyersService } from "../../../services/buyers.service";

@Component({
  selector: 'app-index-buyer',
  templateUrl: './index-buy.component.html',
  styleUrls: ['./index-buy.component.scss']
})
export class IndexBuyComponent implements OnInit {

  constructor(private buyersService: BuyersService) { }

  ngOnInit(): void {
    this.getBuyers();
  }

  buyers: any = [];
  

  getBuyers(){
    this.buyersService.getBuyers().subscribe(
      res => {
        this.buyers = res;

        let temp = this.buyers.data[0].products;

        let objeto = [];
        for(let i = 0; i < this.buyers.data.length; i++){
          let suma = 0;
          for (let x = 0; x < this.buyers.data[i].products.length; x++) {
            let preciox:any =[];
            preciox[i] = this.buyers.data[i].products[x].price_buy;
            suma +=preciox[i];
          }
          console.log(suma);
          objeto.push(suma);
          this.buyers.data[i].products.unshift({precioTotal:suma});
        }
        console.log(objeto);
        console.log(this.buyers);

      },  
      err => console.log(err)
    )
  }


  

}
