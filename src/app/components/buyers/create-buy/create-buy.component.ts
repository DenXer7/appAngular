import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { NewBuyer } from '../../../models/buyers/new-buyer';


@Component({
  selector: 'app-create-buy',
  templateUrl: './create-buy.component.html',
  styleUrls: ['./create-buy.component.scss']
})
export class CreateBuyComponent implements OnInit {


  newBuyerArray: NewBuyer[] = [];

  constructor(private formBuilder: FormBuilder) {

  }


  newBuyerForm = this.formBuilder.group({
    id: '' ,
    model: [''],
    price_buy: [''],
    detail: [false]
  });

  toggleForm = false;

  ngOnInit(): void {


  }

  showForm(){
    this.newBuyerForm.reset();


    setTimeout(() =>{
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);


  }

  addMobil($mobil){
    this.newBuyerForm.patchValue({
      id: this.newBuyerArray.length + 1 ,
      model: $mobil.value.model,
      price_buy: $mobil.value.price_buy,
      detail: $mobil.value.detail
    });

    this.newBuyerArray.push(this.newBuyerForm.value);
    this.newBuyerForm.reset();
  }

  editMobil($mobilEdit){
    this.newBuyerForm.patchValue({
      id: $mobilEdit.id,
      model: $mobilEdit.model,
      price_buy: $mobilEdit.price_buy,
      detail: $mobilEdit.detail
    });

    if(this.toggleForm){
      this.toggleForm = false;
    }

  }


  updateMobil(mobilUpdate){
    const updateMobile = this.newBuyerArray.find(res => res.id === mobilUpdate.id);

    const index = this.newBuyerArray.indexOf(updateMobile);

    this.newBuyerArray[index] = mobilUpdate;

    this.newBuyerForm.reset();
  }

  cancelUpdateMobil(){
    this.newBuyerForm.reset();
  }


  deleteMobil(mobileDelete){
    this.newBuyerArray = this.newBuyerArray.filter( x => x.id !== mobileDelete.id);
    this.newBuyerForm.reset();
  }



}
