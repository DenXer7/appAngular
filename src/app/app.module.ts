
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRoutingModule } from './components/home-rounting.module';
import { HomeComponent } from './components/xhome/home.component';


//Components
import { SideNavComponent } from './components/xmenu/side-nav/side-nav.component';
import { HeaderComponent } from './components/xmenu/header/header.component';
import { CreateBuyerComponent } from './components/buyers/create-buyer/create-buyer.component';
import { IndexBuyerComponent } from './components/buyers/index-buyer/index-buyer.component';
import { CreateSellerComponent } from './components/sellers/create-seller/create-seller.component';
import { IndexSellerComponent } from './components/sellers/index-seller/index-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    HeaderComponent,
    CreateBuyerComponent,
    IndexBuyerComponent,
    CreateSellerComponent,
    IndexSellerComponent
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
