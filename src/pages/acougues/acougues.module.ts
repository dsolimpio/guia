import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcouguesPage } from './acougues';

@NgModule({
  declarations: [
    AcouguesPage,
  ],
  imports: [
    IonicPageModule.forChild(AcouguesPage),
  ],
})
export class AcouguesPageModule {}
