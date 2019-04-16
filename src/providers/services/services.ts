import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesProvider Provider');
  }

  getUsuario(){
    return this.http.get("../../assets/data/user-mok.json");
  }

  getProducts(){
    return this.http.get("../../assets/data/products-mok.json");
  }

}
