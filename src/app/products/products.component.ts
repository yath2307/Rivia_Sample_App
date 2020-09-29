import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductPopupComponent } from '../product-popup/product-popup.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  async productPopover(type: string) {
    const popover = await this.modalController.create({
      component: ProductPopupComponent,
      componentProps: {
        'type': type
      },
      cssClass: 'my-custom-class',
      showBackdrop: true,
      animated: true,
      mode: 'ios'
    });
    console.log('popup ready');
    return await popover.present();
  }

  ngOnInit() {}

}
