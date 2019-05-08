import { HomePage } from './../home/home';
import { ServicesProvider } from './../../providers/services/services';
import { EditProdPage } from './../edit-prod/edit-prod';
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { SearchProdPage } from '../search-prod/search-prod';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-detail-prod',
  templateUrl: 'detail-prod.html',
})
export class DetailProdPage {

  codeData:any=[];
  userData:any=[];
  //dataProd:boolean = false;
  detailProd:any=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    public app: App,
    private services: ServicesProvider,
  ) {
  }

  ionViewWillEnter(){
    // this.codeData = this.navParams.data['code'];
    // this.userData = this.navParams.data['user']; 
    // //alert(this.codeData);
    // this.devolverProd();
    this.userData = this.services.usuario;
    this.detailProd = this.navParams.data;
    console.log("prod",this.detailProd)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailProdPage');
  }

  goBackScan(){
    let nav = this.app.getRootNav(); 
    nav.setRoot(HomePage, {tabIndex: 0, user: this.userData, vuelta: true});
  }

  editProd(){
    this.navCtrl.push(EditProdPage, this.detailProd);
  }

  // devolverProd(){
  //   let index = Math.floor(Math.random() * 10 + 1);
  //   console.log('index', index);
  //   this.services.getProducts().subscribe(prod =>{
  //     this.detailProd = prod['products'].filter(p=>{
  //       //console.log('ṕ', p);
  //       return p.id === index;
  //     })
  //     this.dataProd = true;
  //     console.log('det', this.detailProd[0]);
  //   })
  // }

  goToSearch(){
    this.navCtrl.popTo(SearchProdPage);
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
        this.navCtrl.push(DetailProdPage, {code:JSON.stringify(barcodedata, null, 4), user: this.userData});
      }
      //console.log('dataCodigo', barcodedata);
    })
  }
}
