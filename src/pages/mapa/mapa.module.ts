import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mapa } from './mapa';

@NgModule({
  declarations: [
    Mapa,
  ],
  imports: [
    IonicPageModule.forChild(Mapa),
  ],
  exports: [
    Mapa
  ]
})
export class MapaModule {}
