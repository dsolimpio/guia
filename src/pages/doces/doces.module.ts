import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocesPage } from './doces';

@NgModule({
  declarations: [
    DocesPage,
  ],
  imports: [
    IonicPageModule.forChild(DocesPage),
  ],
})
export class DocesPageModule {}
