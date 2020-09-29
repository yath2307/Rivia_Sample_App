import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { OrderPopupComponent } from "./order-popup/order-popup.component";
import { OrdersComponent } from "./orders/orders.component";

import { ProductPopupComponent } from "./product-popup/product-popup.component";
import { ProductsComponent } from "./products/products.component";
import { PaymentsComponent } from "./payments/payments.component";
import { PaymentPopupComponent } from "./payment-popup/payment-popup.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomersPopupComponent } from "./customers-popup/customers-popup.component";
import { FetchCustomersService } from './services/fetch-customers.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderPopupComponent,
    ProductsComponent,
    ProductPopupComponent,
    PaymentsComponent,
    PaymentPopupComponent,
    CustomersComponent,
    CustomersPopupComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FetchCustomersService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
