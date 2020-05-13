import { Component, OnInit, HostListener } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { NewBuyer } from '../../../models/buyers/new-buyer';

import { BuyersService } from '../../../services/buyers.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create-buy',
  templateUrl: './create-buy.component.html',
  styleUrls: ['./create-buy.component.scss']
})
export class CreateBuyComponent implements OnInit {


  toggleForm = false;
  toggleTotal = false;
  toggleValidate = false;
  toggleValidateIn = false;
  newBuyerArray: NewBuyer[] = [];
  productId;
  totalBuyer = 0;

  getParamsBuyerId = 0;
  getParamsEdit = false;

  toggleCreate = false;


  toggleInvalidModel = false;
  toggleInvalidPrice = false;

  constructor(private formBuilder: FormBuilder, private buyersService: BuyersService, private activatedRoute: ActivatedRoute) {
    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      event.returnValue = "Unsaved modifications";
      return event;
   });
  }


  newBuyerForm = this.formBuilder.group({
    buyer_id: 0,
    product_id: '' ,
    model: ['', Validators.required],
    price_buyer: ['', Validators.required],
    detail: [false]
  });


  ngOnInit(): void {


    const getParamsEdit = this.activatedRoute.snapshot.paramMap.get('edit');
    const getParamsBuyerId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);

    if (getParamsEdit === 'edit'){
      this.ifEdit(getParamsEdit);
      this.getParamsBuyerId = getParamsBuyerId;
      this.buyersService.getBuyer(getParamsBuyerId).subscribe(
        res => {
          this.newBuyerArray = res["data"];
          this.calcTotalBuyer();
          console.log('cargado correctamente');
        },
        err => console.log(err)
      );
    }

    if(getParamsEdit === null){
      this.toggleCreate = true;
    }


  }

  ifEdit(data: string){
    if (data === 'edit') {
      this.getParamsEdit = true;
    }
  }

  showTotal() {
    if (this.totalBuyer > 0) {
      this.toggleTotal = true;
    }
    if(this.totalBuyer < 1) {
      this.toggleTotal = false;
    }
  }

  showForm(){
    this.newBuyerForm.reset();
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }


  get model(){
    return this.newBuyerForm.get('model');
  }
  get price_buyer(){
    return this.newBuyerForm.get('price_buyer');
  }



  addMobil(mobil) {

    if (this.model.errors || this.price_buyer.errors) {
      if (this.model.errors) {
        this.toggleInvalidModel = true;
        setTimeout( () => {this.toggleInvalidModel = false; }, 1000);
      }

      if (this.price_buyer.errors) {
        this.toggleInvalidPrice = true;
        setTimeout( () => {this.toggleInvalidPrice = false; }, 1000);
        return;
      }
      return;
    }

    if (mobil.value.model && mobil.value.price_buyer !== null) {

      let detailAdd = mobil.value.detail;
      if (detailAdd === null) {
        detailAdd = false;
      }

      if (this.getParamsEdit) {
        mobil.value.buyer_id = this.getParamsBuyerId;
      }

      if (this.toggleCreate) {

        if (this.getParamsBuyerId > 0 ){
          mobil.value.buyer_id = this.getParamsBuyerId;
        }

        if(this.getParamsBuyerId < 1) {
          mobil.value.buyer_id = 0;
        }

      }

      this.buyersService.saveBuyer(mobil.value)
      .subscribe(
        res => {
          let count = this.newBuyerArray.length;
          this.getParamsBuyerId = res['data'].buyer_id;
          this.newBuyerArray[count - 1].product_id = res['data'].id;
        },
        err => console.log(err)
      );

      this.newBuyerArray.push(this.newBuyerForm.value);

      this.calcTotalBuyer();
      this.toggleForm = false;
    }

    this.newBuyerForm.reset();

    console.log("this.newBuyerArray");
    console.log(this.newBuyerArray);


  }


  editMobil(mobilEdit){

    console.log("EDIT");
    console.log(mobilEdit);

    this.productId = mobilEdit.product_id;

    console.log("productID");
    console.log(this.productId);

    this.newBuyerForm.patchValue({
      product_id: mobilEdit.product_id,
      model: mobilEdit.model,
      price_buyer: mobilEdit.price_buyer,
      detail: mobilEdit.detail
    });

    if (this.toggleForm) {
      this.toggleForm = false;
    }

  }

  updateMobil(mobilUpdate){

    console.log("mobilUpdate");
    console.log(mobilUpdate);
    console.log(mobilUpdate.product_id);

    this.buyersService.updateBuyer(mobilUpdate.product_id, mobilUpdate).subscribe(
      res =>{
        console.log("res");
        console.log(res);
      },
      err => console.log(err)
    );

    const updateMobile = this.newBuyerArray.find(res => res.product_id === mobilUpdate.product_id);
    const index = this.newBuyerArray.indexOf(updateMobile);

    console.log("updateMobile");
    console.log(updateMobile);
    console.log("index");
    console.log(index);

    this.newBuyerArray[index] = mobilUpdate;

    this.newBuyerForm.reset();
    this.calcTotalBuyer();
  }

  cancelUpdateMobil() {
    this.newBuyerForm.reset();
  }


  deleteMobil(mobileDelete) {

    this.buyersService.delete(mobileDelete.product_id).subscribe(
      res => {
        this.newBuyerArray = this.newBuyerArray.filter( x => x['product_id'] !== mobileDelete.product_id);
      },
      err => console.log(err)
    );

    this.newBuyerForm.reset();

    this.calcTotalBuyer();
  }

  calcTotalBuyer() {
    this.totalBuyer = 0;
    this.newBuyerArray.forEach(phone => {
      this.totalBuyer += phone.price_buyer;
    });

    this.showTotal();
  }


   validateForm(input: string) {
   if (this.newBuyerForm.get(input).invalid && (this.newBuyerForm.get(input).dirty || this.newBuyerForm.get(input).touched)) {
     return true;
   } else {
      return false;
   }
  }



  // =====================================

}
