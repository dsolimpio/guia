import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MototaxistasPage } from './mototaxistas';

@NgModule({
  declarations: [
    MototaxistasPage,
  ],
  imports: [
    IonicPageModule.forChild(MototaxistasPage),
  ],
})
export class MototaxistasPageModule {}
