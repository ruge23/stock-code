import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, App } from 'ionic-angular';


@Component({
  selector: 'page-edit-prod',
  templateUrl: 'edit-prod.html',
})
export class EditProdPage {

  producto:any=[];
  prod:any=[];
  userData:any=[];
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public app: App, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProdPage');
  }

  ionViewWillEnter(){
    console.log(this.navParams.data.user);
    this.userData = this.navParams.data.user;
    this.prod = this.navParams.data.prod;
    console.log('prod', this.prod);
    this.producto['name'] = this.prod[0].name;
    this.producto['price'] = this.prod[0].price;
    this.producto['units'] = this.prod[0].units;
  }

  guardarProd(){
    const toast = this.toastCtrl.create({
      message: 'Producto Actualizado',
      duration: 2500,
      position: 'top'
    });
    toast.present();
    setTimeout(()=>{
      let nav = this.app.getRootNav(); 
      nav.setRoot(TabsPage, {tabIndex: 0, user: this.userData, vuelta: true});
    },2500)
  }

}
