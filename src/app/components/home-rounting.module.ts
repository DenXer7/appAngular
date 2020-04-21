import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Rutas
import { HomeComponent } from './xhome/home.component';
import { CreateBuyerComponent } from './buyers/create-buyer/create-buyer.component';
import { IndexBuyerComponent } from './buyers/index-buyer/index-buyer.component';
import { IndexSellerComponent } from './sellers/index-seller/index-seller.component';
import { CreateSellerComponent } from './sellers/create-seller/create-seller.component';
import { AddProviderModalComponent } from './buyers/add-provider-modal/add-provider-modal.component';
import { ModalAddProviderComponent } from './buyers/modal-add-provider/modal-add-provider.component';


const routes: Routes = 
[
    {
        path:'', component: HomeComponent,children:
        [
            {path: 'buyers', component: IndexBuyerComponent},
            {path: 'buyers/create', component: CreateBuyerComponent},
            {path: 'buyers/addProvider-modal', component: AddProviderModalComponent},
            
            {path: 'sellers', component: IndexSellerComponent},
            {path: 'sellers/create', component  : CreateSellerComponent},
        ]
    }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[ModalAddProviderComponent]
})
export class HomeRoutingModule { }