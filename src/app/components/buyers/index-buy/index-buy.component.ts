import { Component, OnInit } from '@angular/core';

import { BuyersService } from '../../../services/buyers.service';

@Component({
  selector: 'app-index-buyer',
  templateUrl: './index-buy.component.html',
  styleUrls: ['./index-buy.component.scss']
})
export class IndexBuyComponent implements OnInit {

  constructor(private buyersService: BuyersService) { }

  buyers = [];
  buyersArray = {
    data: []
  };

 arrayBuyerOrder;


  ngOnInit(): void {

    this.getBuyers();
  }


  getBuyers() {
    this.buyersService.getBuyers().subscribe(
      res => {
        this.buyers = res['data'];
        this.buyersGroupArray(this.buyers);
        this.calcTotal();
      },
      err => console.log(err)
    );
  }

  buyersGroupArray(getArray) {

    while ( getArray.length  !== 0 ) {

      let buyerTemp = {
        buyer_id: '',
        buyer_date: '',
        total: '',
        products: []
      };

      let arrayOrder = getArray.filter( res => res.buyer_id  === getArray[0].buyer_id);
      getArray = getArray.filter( res => res.buyer_id  !== getArray[0].buyer_id);

      buyerTemp.buyer_id = arrayOrder[0].buyer_id;
      buyerTemp.buyer_date = arrayOrder[0].buyer_date;

      //BORRAR buyer_id, buyer_date de cada objeto
      // arrayOrder.forEach(element => {
      //   delete element.buyer_id;
      //   delete element.buyer_date;
      // });

      buyerTemp.products.push(arrayOrder);

      this.buyersArray.data.push(buyerTemp);

    }

  }

  calcTotal() {

    for(let i = 0; i < this.buyersArray.data.length; i++) {

      const element = this.buyersArray.data[i].products;
      let suma = 0;

      element[0].forEach(item => {
        const price_buyer = item.price_buyer;
        suma += price_buyer;
      });

      this.buyersArray.data[i].total = suma;
    }
  }


}
