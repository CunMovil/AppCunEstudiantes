import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorarioPage } from './horario';

@NgModule({
  declarations: [
    HorarioPage,
  ],
  imports: [
    IonicPageModule.forChild(HorarioPage),
  ],
  exports:[
    HorarioPage
  ]
})
export class HorarioPageModule {}
