import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BancosPage } from '../bancos/bancos';
import { AcouguesPage } from '../acougues/acougues';
import { AgropecuariaPage } from '../agropecuaria/agropecuaria';
import { AcademiasPage } from '../academias/academias';
import { BaresPage } from '../bares/bares';
import { AntenasPage } from '../antenas/antenas';
import { AutonomosPage } from '../autonomos/autonomos';
import { BelezaPage } from '../beleza/beleza';
import { BrindesPage } from '../brindes/brindes';
import { CelularesPage } from '../celulares/celulares';
import { ConfeitariasPage } from '../confeitarias/confeitarias';
import { ContabilidadePage } from '../contabilidade/contabilidade';
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



goToAcademiasPage() {
    this.navCtrl.push(AcademiasPage);
    
    }

    goToAcouguesPage() {
      this.navCtrl.push(AcouguesPage);
      
      }

      goToAgropecuariaPage() {
        this.navCtrl.push(AgropecuariaPage);
        
        }
         
  


        goToAntenasPage() {
          this.navCtrl.push(AntenasPage);
          
          }

          goToAutonomosPage() {
            this.navCtrl.push(AutonomosPage);
            
            }

            
            goToDrogariasPagePage() {
              this.navCtrl.push(AgropecuariaPage);
              
              }

              

              goToBaresPage() {
                this.navCtrl.push(BaresPage);
                
                }

                

                goToBelezaPage() {
                  this.navCtrl.push(BelezaPage);
                  
                  }

                  

                  goToBrindesPage() {
                    this.navCtrl.push(BrindesPage);
                    
                    }

                    

                    goToCasaPage() {
                      this.navCtrl.push(AgropecuariaPage);
                      
                      }

                      

                      goToCelularesPage() {
                        this.navCtrl.push(CelularesPage);
                        
                        }

                        

                        goToConfeitariasPage() {
                          this.navCtrl.push(ConfeitariasPage);
                          
                          }

                          

                          goToContabilidadePage() {
                            this.navCtrl.push(ContabilidadePage);
                            
                            }
                  

}
