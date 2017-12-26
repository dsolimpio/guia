import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaxistasPage } from './taxistas';

@NgModule({
  declarations: [
    TaxistasPage,
  ],
  imports: [
    IonicPageModule.forChild(TaxistasPage),
  ],
})
export class TaxistasPageModule {}
