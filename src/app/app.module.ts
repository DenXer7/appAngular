
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRoutingModule } from './components/home-rounting.module';
import { HomeComponent } from './components/xhome/home.component';

    // menu
import { SideNavComponent } from './components/xmenu/side-nav/side-nav.component';
import { HeaderComponent } from './components/xmenu/header/header.component';
    // buyers
import { IndexBuyComponent } from './components/buyers/index-buy/index-buy.component';
import { CreateBuyComponent } from './components/buyers/create-buy/create-buy.component';
import { ModalAddProviderComponent } from './components/buyers/modal-add-provider/modal-add-provider.component';
import { EditItemBuyComponent } from './components/buyers/edit-item-buy/edit-item-buy.component';
import { ModalViewBuyComponent } from './components/buyers/modal-view-buy/modal-view-buy.component';
import { ShowBuyComponent } from './components/buyers/show-buy/show-buy.component';
    // sellers
import { CreateSellerComponent } from './components/sellers/create-seller/create-seller.component';
import { IndexSellerComponent } from './components/sellers/index-seller/index-seller.component';
    



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    HeaderComponent,
    CreateBuyComponent,
    IndexBuyComponent,
    CreateSellerComponent,
    IndexSellerComponent,
    ModalAddProviderComponent,
    ModalViewBuyComponent,
    ShowBuyComponent,
    EditItemBuyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
