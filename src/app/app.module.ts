import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BancosPage } from '../pages/bancos/bancos';
import { AcademiasPage } from '../pages/academias/academias';
import { AcouguesPage } from '../pages/acougues/acougues';
import { AgropecuariaPage } from '../pages/agropecuaria/agropecuaria';
import { AntenasPage } from '../pages/antenas/antenas';
import { BelezaPage } from '../pages/beleza/beleza';
import { DrogariasPage } from '../pages/drogarias/drogarias';
import { CreditoPage } from '../pages/credito/credito';
import { SupermercadosPage } from '../pages/supermercados/supermercados';
import { VidraçariasPage } from '../pages/vidra\u00E7arias/vidra\u00E7arias';
import { ViagensETurismoPage } from '../pages/viagens-e-turismo/viagens-e-turismo';
import { VeterinariosPage } from '../pages/veterinarios/veterinarios';
import { TaxistasPage } from '../pages/taxistas/taxistas';
import { SorveteriasPage } from '../pages/sorveterias/sorveterias';
import { SomPage } from '../pages/som/som';
import { SeguradorasPage } from '../pages/seguradoras/seguradoras';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { RadiosPage } from '../pages/radios/radios';
import { PostosDeGasolinaPage } from '../pages/postos-de-gasolina/postos-de-gasolina';
import { PadariasPage } from '../pages/padarias/padarias';
import { OticasPage } from '../pages/oticas/oticas';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BancosPage,
    AcademiasPage,
    AcouguesPage,
    AgropecuariaPage,
    AntenasPage,
    BelezaPage,
    CreditoPage,
    DrogariasPage,
    OticasPage,
    PadariasPage,
    PostosDeGasolinaPage,
    RadiosPage,
    RestaurantesPage,
    SeguradorasPage,
    SomPage,
    SorveteriasPage,
    SupermercadosPage,
    TaxistasPage,
    VeterinariosPage,
    ViagensETurismoPage,
    VidraçariasPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BancosPage,
    AcademiasPage,
    AcouguesPage,
    AgropecuariaPage,
    AntenasPage,
    BelezaPage,
    CreditoPage,
    DrogariasPage,
    OticasPage,
    PadariasPage,
    PostosDeGasolinaPage,
    RadiosPage,
    SeguradorasPage,
    SomPage,
    SorveteriasPage,
    SupermercadosPage,
    TaxistasPage,
    VeterinariosPage,
    ViagensETurismoPage,
    VidraçariasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
