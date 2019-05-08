import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicesProvider {
  usuario: any;
  constructor(  private httpPost: Http, 
    private http: HttpClient) {
    console.log('Hello ServicesProvider Provider');
  }

  getUsuario(){
    return this.http.get("../../assets/data/user-mok.json");
  }

  traerProductosPorCodigoBarra(codigobarra) : Observable<any> {
    return this.http.get("http://grillwest.dyndns.org/apirest/traerproductoporcodigobarra.php?codigobarra=" + codigobarra);
  }
  
  traerProductosPorCodigoArticulo(codigoarticulo) : Observable<any> {
    return this.http.get("http://grillwest.dyndns.org/apirest/traerproductoporcodigoarticulo.php?codigoarticulo=" + codigoarticulo);
  }

  actualizarProducto(producto): Observable<any> {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });


    var body = JSON.stringify({ productoid: producto.nro, stock: producto.stock, precio: producto.precio });
    console.log("body actualuizar",body);
    return this.httpPost.post("http://grillwest.dyndns.org/apirest/actualizarproducto.php", body, { headers: headers, withCredentials: true });
  }
}
