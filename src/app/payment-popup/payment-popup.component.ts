import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-payment-popup',
  templateUrl: './payment-popup.component.html',
  styleUrls: ['./payment-popup.component.scss'],
})
export class PaymentPopupComponent implements OnInit {

  public paymentType = '';

  constructor(public navParams: NavParams) { 
    this.paymentType = navParams.get('type');
    if (this.paymentType === 'all') {
      this.fetchAllPayments();
    }
    else if (this.paymentType === 'successful') {
      this.fetchSuccessfulPayments();
    }
    else if (this.paymentType === 'failed') {
      this.fetchFailedPayments();
    }
   }
  fetchFailedPayments() {
    throw new Error('Method not implemented.');
  }
  fetchSuccessfulPayments() {
    throw new Error('Method not implemented.');
  }
  fetchAllPayments() {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {}

}
