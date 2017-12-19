import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BelezaPage } from './beleza';

@NgModule({
  declarations: [
    BelezaPage,
  ],
  imports: [
    IonicPageModule.forChild(BelezaPage),
  ],
})
export class BelezaPageModule {}
