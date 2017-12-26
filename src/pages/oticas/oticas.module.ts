import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OticasPage } from './oticas';

@NgModule({
  declarations: [
    OticasPage,
  ],
  imports: [
    IonicPageModule.forChild(OticasPage),
  ],
})
export class OticasPageModule {}
