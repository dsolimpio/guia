import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntenasPage } from './antenas';

@NgModule({
  declarations: [
    AntenasPage,
  ],
  imports: [
    IonicPageModule.forChild(AntenasPage),
  ],
})
export class AntenasPageModule {}
