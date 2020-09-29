import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';
import { OrdersComponent } from '../orders/orders.component';
import { PaymentsComponent } from '../payments/payments.component';
import { ProductsComponent } from '../products/products.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
