import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-overlay',
  templateUrl: 'overlay.html'
})
export class OverlayPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverlayPage');
  }
openAleert(): void {
  let alert = this.alertCtrl.create({
    title: 'Alert Ionic 2.0.0',
    bottons: [
      'OK',
      'Cancel'
    ]
  });
  alert.present()
}
}
