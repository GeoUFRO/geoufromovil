import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps,GoogleMap } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class Mapa {

  map:any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private googleMaps: GoogleMaps) {
  }


  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad Mapa');
  }

  loadMap(){
    this.map = new GoogleMap("map",{
      'controls':{
        'compass':true,
        'myLocationButton':true,
        'indoorPicker':true,
        'zoom':true        
      },
      'gestures':{
        'scroll':true,
        'tilt':true,
        'rotate':true,
        'zoom':true
      }
    });
  }



}
