import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BancosPage } from '../bancos/bancos';
import { ContactPage } from '../contact/contact';
import { AcouguesPage } from '../acougues/acougues';
import { AgropecuariaPage } from '../agropecuaria/agropecuaria';
import { AcademiasPage } from '../academias/academias';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
goToBancosPage() {
this.navCtrl.push(BancosPage);

}

goToContactPage() {
  this.navCtrl.push(ContactPage);
  
  }

goToAcademiasPage() {
    this.navCtrl.push(AcademiasPage);
    
    }

    goToAcouguesPage() {
      this.navCtrl.push(AcouguesPage);
      
      }

      goToAgropecuariaPage() {
        this.navCtrl.push(AgropecuariaPage);
        
        }
         
  

}
