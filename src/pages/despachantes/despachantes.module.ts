import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DespachantesPage } from './despachantes';

@NgModule({
  declarations: [
    DespachantesPage,
  ],
  imports: [
    IonicPageModule.forChild(DespachantesPage),
  ],
})
export class DespachantesPageModule {}
