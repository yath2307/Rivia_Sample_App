import { Component, OnInit } from '@angular/core';
import { FetchOrdersService } from '../services/fetch-orders.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-order-popup',
  templateUrl: './order-popup.component.html',
  styleUrls: ['./order-popup.component.scss'],
})
export class OrderPopupComponent implements OnInit {

  public orderType = '';
  public headers = ['order_number', 'confirmed', 'fulfillment_status', 'closed_at', 'total_price']
  public ordersList = [];

  constructor(public navParams: NavParams, public fetchOrder: FetchOrdersService) { 
    this.orderType = navParams.get('type');
    this.ordersList.push(this.headers);
   }
  fetchClosedOrders() {
    this.fetchOrder.fetchOrders().subscribe(
      (response) => {
        if (response.body !== null) {
          console.log(response.body);
          this.ordersList.splice(1,this.ordersList.length);
          for (let element of response.body.orders) {
            let tempOrder = [];
            if (element['closed_at'] === null) {
              continue;
            }
            else {
              tempOrder.push(element['order_number']);
              tempOrder.push(element['confirmed']);
              tempOrder.push(element['fulfillment_status']);
              tempOrder.push(element['closed_at']);
              tempOrder.push(element['total_price']);
              this.ordersList.push(tempOrder);
            }
          }
        } else {
          console.log('error');
        }
      },
      (error) => {
        console.log('Error in fetching rule');
      }
    );
  }
  fetchOpenOrders() {
    this.fetchOrder.fetchOrders().subscribe(
      (response) => {
        if (response.body !== null) {
          console.log(response.body);
          this.ordersList.splice(1,this.ordersList.length);
          for (let element of response.body.orders) {
            let tempOrder = [];
            if (element['closed_at'] === null) {
              tempOrder.push(element['order_number']);
              tempOrder.push(element['confirmed']);
              tempOrder.push(element['fulfillment_status']);
              tempOrder.push('not_closed');
              tempOrder.push(element['total_price']);
              this.ordersList.push(tempOrder);
            }
            else {
              continue;
            }
          }
        } else {
          console.log('error');
        }
      },
      (error) => {
        console.log('Error in fetching rule');
      }
    );
  }
  fetchAllOrders() {
    this.fetchOrder.fetchOrders().subscribe(
      (response) => {
        if (response.body !== null) {
          console.log(response.body);
          this.ordersList.splice(1,this.ordersList.length);
          for (let element of response.body.orders) {
            let tempOrder = [];
            tempOrder.push(element['order_number']);
            tempOrder.push(element['confirmed']);
            tempOrder.push(element['fulfillment_status']);
            if (element['closed_at'] === null) {
              tempOrder.push('not_closed');
            }
            else {
              tempOrder.push(element['closed_at']);
            }
            tempOrder.push(element['total_price']);
            this.ordersList.push(tempOrder);
          }
        } else {
          console.log('error');
        }
      },
      (error) => {
        console.log('Error in fetching rule');
      }
    );
  }

  ngOnInit() {
    if (this.orderType === 'all') {
      this.fetchAllOrders();
    }
    else if (this.orderType === 'open') {
      this.fetchOpenOrders();
    }
    else if (this.orderType === 'closed') {
      this.fetchClosedOrders();
    }
  }

}
