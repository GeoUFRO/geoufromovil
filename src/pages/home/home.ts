import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Mapa } from '../mapa/mapa';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  
  constructor(public navCtrl: NavController) {

  }

  goToNextPage(){
    this.navCtrl.setRoot(Mapa);
  }

}
