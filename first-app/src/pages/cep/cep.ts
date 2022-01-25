import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
})
export class CepPage {
  cepInfo: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
    this.cepInfo = this.navParams.get('cepInfo')
    if (this.cepInfo['erro'] == true) {
      let alert = this.alertCtrl.create({
        title: 'CEP Inexistente',
        buttons: ['OK']
      })
      alert.present()
    } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CepPage');
  }

}
