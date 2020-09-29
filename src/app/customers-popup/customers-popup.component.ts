import { Component, OnInit } from '@angular/core';
import { FetchCustomersService } from '../services/fetch-customers.service';

@Component({
  selector: 'app-customers-popup',
  templateUrl: './customers-popup.component.html',
  styleUrls: ['./customers-popup.component.scss'],
})
export class CustomersPopupComponent implements OnInit {

  public headers = ['first_name', 'last_name', 'email', 'phone', 'orders_count']
  public customersList = [];

  constructor(public fetchCustomer: FetchCustomersService) { 
    this.customersList.push(this.headers);
   }
  fetchAllCustomers() {
    this.fetchCustomer.fetchCustomers().subscribe(
      (response) => {
        if (response.body !== null) {
          console.log(response.body);
          this.customersList.splice(1,this.customersList.length);
          for (let element of response.body.customers) {
              let tempOrder = [];
                tempOrder.push(element['first_name']);
                tempOrder.push(element['last_name']);
                tempOrder.push(element['email']);
                tempOrder.push(element['phone']);
                tempOrder.push(element['orders_count']);
                this.customersList.push(tempOrder);
          }
        } else {
          console.log('error');
        }
      },
      (error) => {
        console.log('Error in fetching Customers');
      }
    );
  }
  ngOnInit() {
    this.fetchAllCustomers();
  }

}
