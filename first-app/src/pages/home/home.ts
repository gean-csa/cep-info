import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { CepPage } from '../cep/cep';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: Observable<any>
  @ViewChild('cepString') cepString;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public httpClient: HttpClient) {
  }

  consultCep() {
    var testString = this.cepString.value
    var cep
    let isNum = /^\d+$/.test(testString)
    if(testString.length == 8 && isNum) {
      cep = testString
      this.data = this.httpClient.get(`http://localhost:4567/info/${cep}`)
      this.data.subscribe(cepInfo => {
        this.navCtrl.push(CepPage, {cepInfo})
      })
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Erro',
        subTitle: 'Valor inserido não atende o formato.',
        buttons: ['OK']
      })
      alert.present()
    }


  }
}
