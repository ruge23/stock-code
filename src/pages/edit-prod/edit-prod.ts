import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, App } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';


@Component({
  selector: 'page-edit-prod',
  templateUrl: 'edit-prod.html',
})
export class EditProdPage {
  
  @ViewChild('input') myInput ;
  producto:any=[];
  
  userData:any=[];
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public app: App, 
    public navParams: NavParams,
    public services: ServicesProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProdPage');
    
  }

  ionViewWillEnter(){
    console.log(this.navParams.data.user);
    
    this.producto = this.navParams.data;
    console.log('prod', this.producto);
  }

  guardarProd() {
    console.log("antes", this.producto);
    this.services.actualizarProducto(this.producto).subscribe(x => {
      const toast = this.toastCtrl.create({
        message: 'Producto Actualizado',
        duration: 2500,
        position: 'top'
      });
      toast.present();
      setTimeout(() => {
        let nav = this.app.getRootNav();
        nav.setRoot(HomePage, { user: this.userData, vuelta: true });
      }, 3500)
    });    
  }
}
