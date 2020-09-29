import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { FetchProductsService } from '../services/fetch-products.service';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.scss'],
})
export class ProductPopupComponent implements OnInit {

  public productType = '';
  public headers = ['title', 'tags', 'variant', 'price', 'quantity']
  public productsList = [];

  constructor(public navParams: NavParams, public fetchProduct: FetchProductsService) { 
    this.productType = navParams.get('type');
    this.productsList.push(this.headers);
   }
  fetchOutofstockProducts() {
    this.fetchProduct.fetchProducts().subscribe(
      (response) => {
        if (response.body !== null) {
          console.log(response.body);
          this.productsList.splice(1,this.productsList.length);
          for (let element of response.body.products) {
            for (let item of element['variants']) {
              let tempOrder = [];
              if (item['inventory_quantity'] === 0) {
                tempOrder.push(element['title']);
                tempOrder.push(element['tags']);
                tempOrder.push(item['title']);
                tempOrder.push(item['price']);
                tempOrder.push('out of stock');
                this.productsList.push(tempOrder);
              }
              else {
                continue;
              }
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
  fetchInstockProducts() {
    this.fetchProduct.fetchProducts().subscribe(
      (response) => {
        if (response.body !== null) {
          console.log(response.body);
          this.productsList.splice(1,this.productsList.length);
          for (let element of response.body.products) {
            for (let item of element['variants']) {
              let tempOrder = [];
              if (item['inventory_quantity'] === 0) {
                continue;
              }
              else {
                tempOrder.push(element['title']);
                tempOrder.push(element['tags']);
                tempOrder.push(item['title']);
                tempOrder.push(item['price']);
                tempOrder.push(item['inventory_quantity']);
                this.productsList.push(tempOrder);
              }
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
  fetchAllProducts() {
    this.fetchProduct.fetchProducts().subscribe(
      (response) => {
        if (response.body !== null) {
          console.log(response.body);
          this.productsList.splice(1,this.productsList.length);
          for (let element of response.body.products) {
            for (let item of element['variants']) {
              let tempOrder = [];
                tempOrder.push(element['title']);
                tempOrder.push(element['tags']);
                tempOrder.push(item['title']);
                tempOrder.push(item['price']);
              if (item['inventory_quantity'] === 0) {
                tempOrder.push('out of stock');
              }
              else {
                tempOrder.push(item['inventory_quantity']);
              }
              this.productsList.push(tempOrder);
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

  ngOnInit() {
    if (this.productType === 'all') {
      this.fetchAllProducts();
    }
    else if (this.productType === 'in') {
      this.fetchInstockProducts();
    }
    else if (this.productType === 'out') {
      this.fetchOutofstockProducts();
    }
  }
}
