import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeguradorasPage } from './seguradoras';

@NgModule({
  declarations: [
    SeguradorasPage,
  ],
  imports: [
    IonicPageModule.forChild(SeguradorasPage),
  ],
})
export class SeguradorasPageModule {}
