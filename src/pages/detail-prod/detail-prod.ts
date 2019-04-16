import { ServicesProvider } from './../../providers/services/services';
import { EditProdPage } from './../edit-prod/edit-prod';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';


@Component({
  selector: 'page-detail-prod',
  templateUrl: 'detail-prod.html',
})
export class DetailProdPage {

  codeData:any=[];
  userData:any=[];
  dataProd:boolean = false;
  detailProd:any=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App,
    private services: ServicesProvider,
  ) {
  }

  ionViewWillEnter(){
    this.codeData = this.navParams.data['code'];
    this.userData = this.navParams.data['user']; 
    //alert(this.codeData);
    this.devolverProd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailProdPage');
  }

  goBackScan(){
    let nav = this.app.getRootNav(); 
    nav.setRoot(TabsPage, {tabIndex: 0, user: this.userData, vuelta: true});
  }

  editProd(){
    this.navCtrl.push(EditProdPage, {prod: this.detailProd , user: this.userData});
  }

  devolverProd(){
    let index = Math.floor(Math.random() * 10 + 1);
    console.log('index', index);
    this.services.getProducts().subscribe(prod =>{
      this.detailProd = prod['products'].filter(p=>{
        //console.log('ṕ', p);
        return p.id === index;
      })
      this.dataProd = true;
      console.log('det', this.detailProd[0]);
    })
  }

}
