import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PaymentPopupComponent } from '../payment-popup/payment-popup.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  async paymentPopover(type: string) {
    const popover = await this.modalController.create({
      component: PaymentPopupComponent,
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
