import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Rutas
import { HomeComponent } from './xhome/home.component';
import { CreateBuyerComponent } from './buyers/create-buyer/create-buyer.component';
import { IndexBuyerComponent } from './buyers/index-buyer/index-buyer.component';
import { IndexSellerComponent } from './sellers/index-seller/index-seller.component';
import { CreateSellerComponent } from './sellers/create-seller/create-seller.component';
import { HeaderComponent } from './xmenu/header/header.component';
import { SideNavComponent } from './xmenu/side-nav/side-nav.component';


const routes: Routes = 
[
    {
        path:'', component: HomeComponent,children:
        [
            {path: 'buyers', component: IndexBuyerComponent},
            {path: 'buyers/create', component: CreateBuyerComponent},
            
            {path: 'sellers', component: IndexSellerComponent},
            {path: 'sellers/create', component  : CreateSellerComponent},
        ]
    }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class HomeRoutingModule { }