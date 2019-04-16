import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:any = {
    name: '',
    pass: ''
  }

  dataUser:any=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private services : ServicesProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  validar(){
    if(this.user.name === "" || this.user.pass === ""){
      this.presentToast();
    }else if(this.user.name.trim() === "Usuario1" || this.user.pass.trim() === "user1"){
      this.getUsuarios(this.user.name);
    }else if(this.user.name.trim() === "Usuario2" || this.user.pass.trim() === "user2"){
      this.getUsuarios(this.user.name);
    }else{
      this.presentToast();
    }
  }

  getUsuarios(usuario){
    if(usuario === 'Usuario1'){
      this.services.getUsuario().subscribe(data=>{
        console.log('usuarios');
        console.log(data);
        this.dataUser = data['users'].filter(user=>{
          return user['id'] === 1;
        })
        this.navCtrl.setRoot(TabsPage, this.dataUser[0]);
      })
    }else if(usuario === 'Usuario2'){
      this.services.getUsuario().subscribe(data=>{
        console.log('usuarios');
        console.log(data);
        this.dataUser = data['users'].filter(user=>{
          return user['id'] === 2;
        })
        this.navCtrl.setRoot(TabsPage, this.dataUser[0]);
      })
    }else{
      this.presentToast();
    }
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Error con las Credenciales!',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }
}
