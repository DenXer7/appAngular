import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Rutas
import { HomeComponent } from './xhome/home.component';
import { CreateBuyComponent } from './buyers/create-buy/create-buy.component';
import { IndexBuyComponent } from './buyers/index-buy/index-buy.component';
import { IndexSellerComponent } from './sellers/index-seller/index-seller.component';
import { CreateSellerComponent } from './sellers/create-seller/create-seller.component';
import { ShowBuyComponent } from './buyers/show-buy/show-buy.component';
import { EditItemBuyComponent } from './buyers/edit-item-buy/edit-item-buy.component';


const routes: Routes =
[
    {
        path: '', component: HomeComponent, children:
        [
            {path: 'buyers', component: IndexBuyComponent},
            {path: 'buyers/create', component: CreateBuyComponent},
            {path: 'buyers/:edit/:id', component: CreateBuyComponent},
            {path: 'buyers/:id', component: ShowBuyComponent},
            {path: 'buyers/1/1', component: EditItemBuyComponent},


            {path: 'sellers', component: IndexSellerComponent},
            {path: 'sellers/create', component  : CreateSellerComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }


// Caratula
// Matriz de Proceso
