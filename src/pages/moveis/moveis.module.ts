import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoveisPage } from './moveis';

@NgModule({
  declarations: [
    MoveisPage,
  ],
  imports: [
    IonicPageModule.forChild(MoveisPage),
  ],
})
export class MoveisPageModule {}
