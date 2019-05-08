import { HomePage } from './../home/home';
import { ServicesProvider } from './../../providers/services/services';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, App, ToastController } from 'ionic-angular';
import { EditProdPage } from '../edit-prod/edit-prod';
import { DetailProdPage } from '../detail-prod/detail-prod';


@Component({
  selector: 'page-search-prod',
  templateUrl: 'search-prod.html',
})
export class SearchProdPage {

  userData: any = [];
  product: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private services: ServicesProvider,
    public app: App,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
  }

  ionViewWillEnter() {
    this.userData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchProdPage');
    console.log('pa', this.navParams.data);
  }

  // getProducts() {
  //   let loading = this.loadingCtrl.create({
  //     content: 'Espere por favor...',
  //     spinner: 'dots',
  //   });
  //   loading.present();
  //   let index = Math.floor(Math.random() * 10 + 1);
  //   //console.log('i', index);
  //   this.services.getProducts().subscribe(data => {
  //     //console.log('data', data);
  //     if (data['products'].length > 0) {
  //       this.product = data['products'].filter((prod) => {
  //         //console.log('prod', prod);
  //         return index === prod['id'];
  //       })
  //     } else {
  //       this.presentToast();
  //     }
  //     //console.log(this.product);
  //   })
  //   loading.dismiss();
  // }

  onInput(ev: any) {
    //console.log('entreeeeeeee' , ev.target.value);   
    let val = ev.target.value.trim();
    if (val.length >= 3) {
      this.services.traerProductosPorCodigoArticulo(val).subscribe(x => {
        this.product = x["data"];
      });

    } else if (val === "") {
      this.product = [];
    } 
  }

  irADetalle() { 
    this.navCtrl.push(DetailProdPage, this.product);
  }

  goBackScan() {
    let nav = this.app.getRootNav();
    nav.setRoot(HomePage, { tabIndex: 0, user: this.userData, vuelta: true });
  }

  editProd() {
    this.navCtrl.push(EditProdPage, { prod: this.product, user: this.userData });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'No hay productos con ese número',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
