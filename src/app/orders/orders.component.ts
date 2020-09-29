import { Component, OnInit, Type } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { OrderPopupComponent } from '../order-popup/order-popup.component';
import { TypeOrderServiceService } from '../services/type-order-service.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  async orderPopover(type: string) {
    const popover = await this.modalController.create({
      component: OrderPopupComponent,
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
