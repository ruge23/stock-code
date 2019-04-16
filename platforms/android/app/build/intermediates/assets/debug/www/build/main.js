webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, services) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.services = services;
        this.user = {
            name: '',
            pass: ''
        };
        this.dataUser = [];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.validar = function () {
        if (this.user.name === "" || this.user.pass === "") {
            this.presentToast();
        }
        else if (this.user.name.trim() === "Usuario1" || this.user.pass.trim() === "user1") {
            this.getUsuarios(this.user.name);
        }
        else if (this.user.name.trim() === "Usuario2" || this.user.pass.trim() === "user2") {
            this.getUsuarios(this.user.name);
        }
        else {
            this.presentToast();
        }
    };
    LoginPage.prototype.getUsuarios = function (usuario) {
        var _this = this;
        if (usuario === 'Usuario1') {
            this.services.getUsuario().subscribe(function (data) {
                console.log('usuarios');
                console.log(data);
                _this.dataUser = data['users'].filter(function (user) {
                    return user['id'] === 1;
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], _this.dataUser[0]);
            });
        }
        else if (usuario === 'Usuario2') {
            this.services.getUsuario().subscribe(function (data) {
                console.log('usuarios');
                console.log(data);
                _this.dataUser = data['users'].filter(function (user) {
                    return user['id'] === 2;
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], _this.dataUser[0]);
            });
        }
        else {
            this.presentToast();
        }
    };
    LoginPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Error con las Credenciales!',
            position: 'top',
            duration: 3000
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/login/login.html"*/'<ion-header no-border no-shadow>\n  <ion-navbar>\n    <ion-title text-center>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row justify-content-center>\n    <ion-col>\n      <ion-list>\n        <ion-item>\n          <ion-label floating>Usuario</ion-label>\n          <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Contraseña</ion-label>\n          <ion-input type="password" [(ngModel)]="user.pass"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row justify-content-center>\n    <button ion-button round (click)="validar()">Iniciar Sesión</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_services_services__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_prod_edit_prod__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchProdPage = /** @class */ (function () {
    function SearchProdPage(navCtrl, navParams, services, app, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.userData = [];
        this.product = [];
    }
    SearchProdPage.prototype.ionViewWillEnter = function () {
        this.userData = this.navParams.data;
    };
    SearchProdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchProdPage');
        console.log('pa', this.navParams.data);
    };
    SearchProdPage.prototype.getProducts = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere por favor...',
            spinner: 'dots',
        });
        loading.present();
        var index = Math.floor(Math.random() * 10 + 1);
        //console.log('i', index);
        this.services.getProducts().subscribe(function (data) {
            //console.log('data', data);
            if (data['products'].length > 0) {
                _this.product = data['products'].filter(function (prod) {
                    //console.log('prod', prod);
                    return index === prod['id'];
                });
            }
            else {
                _this.presentToast();
            }
            //console.log(this.product);
        });
        loading.dismiss();
    };
    SearchProdPage.prototype.onInput = function (ev) {
        //console.log('entreeeeeeee' , ev.target.value);   
        var val = ev.target.value.trim();
        if (val.length >= 3 && !isNaN(val)) {
            this.getProducts();
            /* this.localesPrev2 = this.localesPrev2.filter((item) => {
              //console.log('itemSearch', item);
              return (item['nombre'].toLowerCase().indexOf(val.toLowerCase()) > -1);
            }) */
            //console.log(this.localesPrev2);
        }
        else if (val === "") {
            this.product = [];
        }
        else if (isNaN(val)) {
            this.presentToast();
        }
    };
    SearchProdPage.prototype.goBackScan = function () {
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { tabIndex: 0, user: this.userData, vuelta: true });
    };
    SearchProdPage.prototype.editProd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_prod_edit_prod__["a" /* EditProdPage */], { prod: this.product, user: this.userData });
    };
    SearchProdPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'No hay productos con ese número',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    SearchProdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-search-prod',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/search-prod/search-prod.html"*/'<ion-header no-border no-shadow>\n  <ion-navbar>\n    <ion-searchbar\n    placeholder="ingrese el codigo completo del producto"\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row *ngIf="product.length > 0">\n    <ion-item>\n      <p item-start>{{product[0].name}}</p>\n      <p item-end>$ {{product[0].price}}</p>\n      <p item-end>{{product[0].units}} unidades</p>\n    </ion-item>\n  </ion-row>\n</ion-content>\n<ion-footer no-padding>\n  <ion-row justify-content-center *ngIf="userData.id === 1 && product.length > 0">\n    <button ion-button full (click)="goBackScan()">Volver a Scanear</button>\n  </ion-row>\n  <ion-row justify-content-center *ngIf="!(userData.id === 1) && product.length > 0">\n    <ion-col>\n      <button float-left ion-button (click)="goBackScan()">Scanear</button>\n    </ion-col>\n    <ion-col>\n      <button float-right ion-button (click)="editProd()">Editar</button>      \n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/search-prod/search-prod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], SearchProdPage);
    return SearchProdPage;
}());

//# sourceMappingURL=search-prod.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_prod_detail_prod__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, app, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.barcodeScanner = barcodeScanner;
        this.dataUsuario = [];
        this.saludo = true;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        if (this.navParams.data.vuelta) {
            this.saludo = false;
        }
        this.dataUsuario = this.navParams.data;
        console.log('param', this.dataUsuario);
    };
    HomePage.prototype.iniciarScanPrueba = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__detail_prod_detail_prod__["a" /* DetailProdPage */], { user: this.dataUsuario });
    };
    HomePage.prototype.iniciarScan = function () {
        var _this = this;
        this.barcodeScanner.scan({
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: true,
            prompt: "Place a barcode inside the scan area",
            resultDisplayDuration: 500,
            formats: "EAN_13",
            orientation: "portrait",
            disableAnimations: true,
            disableSuccessBeep: false // iOS and Android
        }).then(function (barcodedata) {
            //alert(JSON.stringify(barcodedata, null, 4))
            if (barcodedata) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__detail_prod_detail_prod__["a" /* DetailProdPage */], { code: JSON.stringify(barcodedata, null, 4), user: _this.dataUsuario });
            }
            //console.log('dataCodigo', barcodedata);
        });
    };
    HomePage.prototype.logOut = function () {
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/home/home.html"*/'<ion-header no-border no-shadow>\n  <ion-navbar>\n    <ion-title text-center>\n      Home\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="logOut()">\n        <ion-icon name="log-out"></ion-icon> \n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row *ngIf="saludo" justify-content-center>\n    <h1>Bienvenido {{dataUsuario.name}}</h1>\n  </ion-row>\n  <ion-row style="margin: 50% 0px;" justify-content-center>\n    <button ion-button round (click)="iniciarScan()">Iniciar Scan</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailProdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_services_services__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_prod_edit_prod__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailProdPage = /** @class */ (function () {
    function DetailProdPage(navCtrl, navParams, app, services) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.services = services;
        this.codeData = [];
        this.userData = [];
        this.dataProd = false;
        this.detailProd = [];
    }
    DetailProdPage.prototype.ionViewWillEnter = function () {
        this.codeData = this.navParams.data['code'];
        this.userData = this.navParams.data['user'];
        //alert(this.codeData);
        this.devolverProd();
    };
    DetailProdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailProdPage');
    };
    DetailProdPage.prototype.goBackScan = function () {
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { tabIndex: 0, user: this.userData, vuelta: true });
    };
    DetailProdPage.prototype.editProd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__edit_prod_edit_prod__["a" /* EditProdPage */], { prod: this.detailProd, user: this.userData });
    };
    DetailProdPage.prototype.devolverProd = function () {
        var _this = this;
        var index = Math.floor(Math.random() * 10 + 1);
        console.log('index', index);
        this.services.getProducts().subscribe(function (prod) {
            _this.detailProd = prod['products'].filter(function (p) {
                //console.log('ṕ', p);
                return p.id === index;
            });
            _this.dataProd = true;
            console.log('det', _this.detailProd[0]);
        });
    };
    DetailProdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-detail-prod',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/detail-prod/detail-prod.html"*/'<ion-header no-border no-shadow>\n  <ion-navbar>\n    <ion-title text-center>Detalle Producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <p>{{codeData}}</p> -->\n  <ion-row *ngIf="dataProd" justify-content-center>\n    <ion-col col-12>\n      <h1 text-center>{{detailProd[0].name}}</h1>\n    </ion-col>\n    <ion-row>\n      <ion-col col-6>\n        <p text-center float-left>Producto Id: </p>\n      </ion-col>\n      <ion-col col-6>\n        <p text-center float-right>{{detailProd[0].id}}</p>\n      </ion-col>\n      <ion-col col-6>\n        <p text-center float-left>Precio:</p>\n      </ion-col>\n      <ion-col col-6>\n        <p text-center float-right>$ {{detailProd[0].price}}</p>\n      </ion-col>\n      <ion-col col-6>\n        <p text-center float-left>Stock: </p>\n      </ion-col>\n      <ion-col col-6>\n        <p text-center float-right>{{detailProd[0].units}} unidades</p>\n      </ion-col>\n    </ion-row>\n  </ion-row>\n  \n</ion-content>\n<ion-footer no-padding>\n  <ion-row justify-content-center *ngIf="userData.id === 1">\n    <button ion-button full (click)="goBackScan()">Volver a Scanear</button>\n  </ion-row>\n  <ion-row justify-content-center *ngIf="!(userData.id === 1)"> \n    <ion-col>\n      <button float-left ion-button (click)="goBackScan()">Scanear</button>\n    </ion-col>\n    <ion-col>\n      <button float-right ion-button (click)="editProd()">Editar</button>      \n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/detail-prod/detail-prod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__providers_services_services__["a" /* ServicesProvider */]])
    ], DetailProdPage);
    return DetailProdPage;
}());

//# sourceMappingURL=detail-prod.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_edit_prod_edit_prod__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_search_prod_search_prod__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_detail_prod_detail_prod__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_services_services__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_search_prod_search_prod__["a" /* SearchProdPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_detail_prod_detail_prod__["a" /* DetailProdPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_edit_prod_edit_prod__["a" /* EditProdPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_search_prod_search_prod__["a" /* SearchProdPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_detail_prod_detail_prod__["a" /* DetailProdPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_edit_prod_edit_prod__["a" /* EditProdPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_12__providers_services_services__["a" /* ServicesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_prod_search_prod__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_services__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.index = 0;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_0__search_prod_search_prod__["a" /* SearchProdPage */];
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        if (this.navParams.data.vuelta) {
            this.index = 0;
            //console.log(this.navCtrl.parent.select(0));
        }
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad tab1Page');
        console.log(this.navParams.data);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Scanner" tabIcon="qr-scanner" [rootParams]="navParams.data"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Buscar" tabIcon="search" [rootParams]="navParams.data"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_services__["a" /* ServicesProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesProvider = /** @class */ (function () {
    function ServicesProvider(http) {
        this.http = http;
        console.log('Hello ServicesProvider Provider');
    }
    ServicesProvider.prototype.getUsuario = function () {
        return this.http.get("../../assets/data/user-mok.json");
    };
    ServicesProvider.prototype.getProducts = function () {
        return this.http.get("../../assets/data/products-mok.json");
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicesProvider);
    return ServicesProvider;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProdPage = /** @class */ (function () {
    function EditProdPage(navCtrl, toastCtrl, app, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.navParams = navParams;
        this.producto = [];
        this.prod = [];
        this.userData = [];
    }
    EditProdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProdPage');
    };
    EditProdPage.prototype.ionViewWillEnter = function () {
        console.log(this.navParams.data.user);
        this.userData = this.navParams.data.user;
        this.prod = this.navParams.data.prod;
        console.log('prod', this.prod);
        this.producto['name'] = this.prod[0].name;
        this.producto['price'] = this.prod[0].price;
        this.producto['units'] = this.prod[0].units;
    };
    EditProdPage.prototype.guardarProd = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Producto Actualizado',
            duration: 2500,
            position: 'top'
        });
        toast.present();
        setTimeout(function () {
            var nav = _this.app.getRootNav();
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */], { tabIndex: 0, user: _this.userData, vuelta: true });
        }, 2500);
    };
    EditProdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-edit-prod',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/edit-prod/edit-prod.html"*/'<ion-header no-border no-shadow>\n  <ion-navbar>\n    <ion-title>Editar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-card>\n      <ion-card-header text-center>\n        Para editar\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label float-left>Nombre: </ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <ion-input type="text" float-right [(ngModel)]="producto.name"></ion-input>\n          </ion-col>\n          <ion-col col-6>\n            <ion-label float-left>Precio: </ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <ion-input type="number" float-right [(ngModel)]="producto.price"></ion-input>\n          </ion-col>\n          <ion-col col-6>\n              <ion-label float-left>Stock: </ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <ion-input type="number" float-right [(ngModel)]="producto.units"></ion-input>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n  <ion-row justify-content-center>\n    <button ion-button full round (click)="guardarProd()">Guardar cambios</button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/stockCode/stock-code/src/pages/edit-prod/edit-prod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], EditProdPage);
    return EditProdPage;
}());

//# sourceMappingURL=edit-prod.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map