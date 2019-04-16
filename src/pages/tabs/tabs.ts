import { SearchProdPage } from './../search-prod/search-prod';
import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { NavController, NavParams, Tabs } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  index = 0;
  tab1Root = HomePage;
  tab2Root = SearchProdPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: ServicesProvider,
  ) {

  }
  
  ionViewDidEnter() {
    if(this.navParams.data.vuelta){
      this.index = 0;
      //console.log(this.navCtrl.parent.select(0));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad tab1Page');
    console.log(this.navParams.data);
  }
}
