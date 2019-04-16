import { EditProdPage } from './../pages/edit-prod/edit-prod';
import { TabsPage } from './../pages/tabs/tabs';
import { SearchProdPage } from './../pages/search-prod/search-prod';
import { DetailProdPage } from './../pages/detail-prod/detail-prod';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicesProvider } from '../providers/services/services';
import { HttpClientModule } from '@angular/common/http';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SearchProdPage,
    TabsPage,
    DetailProdPage,
    EditProdPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SearchProdPage,
    TabsPage,
    DetailProdPage,
    EditProdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    ServicesProvider
  ]
})
export class AppModule {}