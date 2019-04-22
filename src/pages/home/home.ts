import { SearchProdPage } from './../search-prod/search-prod';
import { LoginPage } from './../login/login';
import { DetailProdPage } from './../detail-prod/detail-prod';
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataUsuario:any=[];
  saludo:boolean=true;

  constructor(
    public navCtrl: NavController,
    public navParams : NavParams,
    public app: App,
    private barcodeScanner: BarcodeScanner
  ) {

  }

  ionViewWillEnter(){
    if(this.navParams.data.vuelta){
      this.saludo = false;
    }
    this.dataUsuario = this.navParams.data;
    console.log('param', this.dataUsuario);
  }

  iniciarScanPrueba(){
    this.navCtrl.push(DetailProdPage, {user: this.dataUsuario});
  }

  iniciarScan(){
    this.barcodeScanner.scan({
      preferFrontCamera : false, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      torchOn: true, // Android, launch with the torch switched on (if available)
      prompt : "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : "EAN_13", // default: all but PDF_417 and RSS_EXPANDED
      orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
  }).then(barcodedata=>{
      //alert(JSON.stringify(barcodedata, null, 4))
      if(barcodedata){
        this.navCtrl.push(DetailProdPage, {code:JSON.stringify(barcodedata, null, 4), user: this.dataUsuario});
      }
      //console.log('dataCodigo', barcodedata);
    })
  }

  goToSearch(){
    this.navCtrl.push(SearchProdPage);
  }

  logOut(){
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }

}
