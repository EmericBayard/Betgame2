(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emericbayard/Dropbox/BayardTech/Dossiers/Betgame/Projets/Betgame/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MJO3":
/*!***************************************!*\
  !*** ./src/models/contants.models.ts ***!
  \***************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
Constants.KEY_DEFAULT_LANGUAGE = 'ob_dl';


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/contants.models */ "MJO3");
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/myevent.services */ "ThQF");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.config */ "aR35");
/* harmony import */ var _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vt-popup/vt-popup.page */ "gmVL");
/* harmony import */ var _app_buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/buyappalert/buyappalert.page */ "WrFF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");














let AppComponent = class AppComponent {
    constructor(config, platform, navCtrl, modalController, splashScreen, statusBar, route, translate, myEvent) {
        this.config = config;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.route = route;
        this.translate = translate;
        this.myEvent = myEvent;
        this.rtlSide = "left";
        this.initializeApp();
        this.myEvent.getLanguageObservable().subscribe(value => {
            this.navCtrl.navigateRoot(['./']);
            this.globalize(value);
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].KEY_DEFAULT_LANGUAGE);
            this.globalize(defaultLang);
        });
    }
    globalize(languagePriority) {
        this.translate.setDefaultLang("en");
        let defaultLangCode = this.config.availableLanguages[0].code;
        this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    }
    setDirectionAccordingly(lang) {
        switch (lang) {
            case 'ar': {
                this.rtlSide = "rtl";
                break;
            }
            default: {
                this.rtlSide = "ltr";
                break;
            }
        }
    }
    ngOnInit() {
        if (this.config.demoMode) {
            setTimeout(() => {
                this.language();
            }, 1000);
            setTimeout(() => {
                this.presentModal();
            }, 15000);
        }
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_11__["VtPopupPage"],
            });
            return yield modal.present();
        });
    }
    developed_by() {
        window.open("https://opuslab.works/", '_system', 'location=no');
    }
    buyappalert() {
        this.modalController.create({ component: _app_buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_12__["BuyappalertPage"] }).then((modalElement) => {
            modalElement.present();
        });
    }
    language() {
        this.route.navigate(['./language']);
    }
};
AppComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_10__["APP_CONFIG"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_9__["MyEvent"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "ThQF":
/*!******************************************!*\
  !*** ./src/services/myevent.services.ts ***!
  \******************************************/
/*! exports provided: MyEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEvent", function() { return MyEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");


 // For rxjs 6
let MyEvent = class MyEvent {
    constructor() {
        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getLanguageObservable() {
        return this.selectedLanguage.asObservable();
    }
    setLanguageData(data) {
        this.selectedLanguage.next(data);
    }
};
MyEvent.ctorParameters = () => [];
MyEvent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyEvent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app [dir]=\"rtlSide\">\n    <ion-router-outlet></ion-router-outlet>\n</ion-app>");

/***/ }),

/***/ "WrFF":
/*!*************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.ts ***!
  \*************************************************/
/*! exports provided: BuyappalertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyappalertPage", function() { return BuyappalertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buyappalert_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buyappalert.page.html */ "fOBK");
/* harmony import */ var _buyappalert_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buyappalert.page.scss */ "aoEl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






let BuyappalertPage = class BuyappalertPage {
    constructor(modalController, http) {
        this.modalController = modalController;
        this.http = http;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    buyAppAction() {
        this.modalController.dismiss();
        window.open("http://bit.ly/cc_ionic_fantasy11", '_system', 'location=no');
    }
    navWhatsapp() {
        let projectName = "fantasy11";
        this.http.get("https://dashboard.vtlabs.dev/whatsapp.php?product_name=" + projectName + "&source=ionic_template", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        }).subscribe(res => {
            window.open(res['link'], '_system', 'location=no');
        }, err => { });
        this.dismiss();
    }
};
BuyappalertPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
BuyappalertPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buyappalert',
        template: _raw_loader_buyappalert_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buyappalert_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BuyappalertPage);



/***/ }),

/***/ "Wxli":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vt-popup/vt-popup.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"cloes_btn ion-text-end\">\n        <ion-icon name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n\n    <ion-card>\n        <div class=\"img_box\">\n            <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/popup_img_head.png\">\n        </div>\n\n        <div class=\"text_box\">\n            <h2>Stay in touch.</h2>\n            <p>Stay connected for Future <br>updates and new products.</p>\n        </div>\n        <ion-list lines=\"none\">\n\n            <ion-item lines=\"none\">\n                <ion-input type=\"email\" placeholder=\"Enter your email address\" [(ngModel)]=\"email_Id\"></ion-input>\n            </ion-item>\n\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"onSubscribe()\">\n                Subscribe Now\n            </ion-button>\n\n        </ion-list>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.config */ "aR35");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http);
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            })
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _app_config__WEBPACK_IMPORTED_MODULE_12__["APP_CONFIG"], useValue: _app_config__WEBPACK_IMPORTED_MODULE_12__["BaseAppConfig"] },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aR35":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: APP_CONFIG, BaseAppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAppConfig", function() { return BaseAppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("app.config");
const BaseAppConfig = {
    availableLanguages: [{
            code: 'en',
            name: 'English'
        }, {
            code: 'ar',
            name: 'عربى'
        }, {
            code: 'fr',
            name: 'français'
        }, {
            code: 'es',
            name: 'Española'
        }, {
            code: 'id',
            name: 'bahasa Indonesia'
        }, {
            code: 'pt',
            name: 'português'
        }, {
            code: 'tr',
            name: 'Türk'
        }, {
            code: 'it',
            name: 'Italiana'
        }, {
            code: 'sw',
            name: 'Kiswahili'
        }],
    demoMode: false,
};


/***/ }),

/***/ "aoEl":
/*!***************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clear_button {\n  background: #14990A;\n  padding: 15px 24px;\n}\n.clear_button ion-icon {\n  color: #fff;\n  font-size: 1.65rem !important;\n}\n.container {\n  padding: 51px 34px;\n}\n.container h2 {\n  margin: 0;\n  font-size: 1.55rem;\n  font-weight: 600;\n  letter-spacing: 0;\n  padding-bottom: 12px;\n}\n.container p {\n  margin: 0;\n  font-size: 0.87rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  padding-bottom: 32px;\n}\n.container .button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 50px;\n  height: 58px;\n  padding: 0 18px;\n  box-shadow: 0 5px 9px -2px rgba(0, 0, 0, 0.3);\n}\n.container .button .icon_box {\n  min-width: 45px;\n}\n.container .button .icon_box img {\n  width: 35px;\n  display: block;\n}\n.container .button h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  letter-spacing: 0;\n}\n.container .button h3 strong {\n  font-weight: 700;\n}\n.container.no_backend {\n  background: #14990A;\n}\n.container.no_backend h2 {\n  color: #fff;\n}\n.container.no_backend p {\n  color: #fff;\n}\n.container.no_backend .button {\n  background: #fff;\n  color: #000000;\n}\n.container.complete_backend {\n  background: #FFFFFF;\n}\n.container.complete_backend h2 {\n  color: #000000;\n}\n.container.complete_backend p {\n  color: #7F7F7F;\n}\n.container.complete_backend .button {\n  background: #14990A;\n  color: #FFFFFF;\n}\n.container.complete_backend .button .icon_box img {\n  width: 33px;\n}\n.container.complete_backend .button h3 {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J1eWFwcGFsZXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0FBRVI7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUVSO0FBQUk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFGWTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBSWhCO0FBRFE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUdaO0FBRlk7RUFDSSxnQkFBQTtBQUloQjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtBQUdaO0FBRFE7RUFDSSxXQUFBO0FBR1o7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUdaO0FBQUk7RUFDSSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxjQUFBO0FBR1o7QUFEUTtFQUNJLGNBQUE7QUFHWjtBQURRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBR1o7QUFEZ0I7RUFDSSxXQUFBO0FBR3BCO0FBQVk7RUFDSSxnQkFBQTtBQUVoQiIsImZpbGUiOiJidXlhcHBhbGVydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgIHBhZGRpbmc6IDE1cHggMjRweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuNjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUxcHggMzRweDtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjU1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgfVxuICAgIC5idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDlweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLm5vX2JhY2tlbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgICYuY29tcGxldGVfYmFja2VuZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICM3RjdGN0Y7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "fOBK":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buyappalert/buyappalert.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"clear_button\">\n        <ion-icon name=\"close\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n    <div class=\"container no_backend\">\n        <h2>Buy this <br> Template Now</h2>\n        <p>IONIC template only, No Backend.</p>\n       <div class=\"button\" (click)=\"buyAppAction()\">\n        <!-- <div class=\"button\"> -->\n            <div class=\"icon_box\">\n                <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/ic_codecanyon.png\">\n            </div>\n            <h3>Get it on <strong>Codecanoyon</strong></h3>\n        </div>\n    </div>\n\n    <div class=\"container complete_backend\">\n        <h2>Buy this App with <br>Complete Backend </h2>\n        <p>Full App solution with complete Backend.</p>\n        <div class=\"button\" (click)=\"navWhatsapp()\">\n            <div class=\"icon_box\">\n                <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/ic_whatsapp.png\">\n            </div>\n            <h3>Message on <strong>WhatsApp</strong></h3>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "gmVL":
/*!*******************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.ts ***!
  \*******************************************/
/*! exports provided: VtPopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VtPopupPage", function() { return VtPopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vt_popup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vt-popup.page.html */ "Wxli");
/* harmony import */ var _vt_popup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vt-popup.page.scss */ "h2e+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let VtPopupPage = class VtPopupPage {
    constructor(navCtrl, modalCtrl, modalController, http, toastController, loadingController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.email_Id = '';
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    onSubscribe() {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (this.email_Id.length <= 5 || !reg.test(this.email_Id)) {
            return this.presentToast('Please provide your Email.');
        }
        this.presentLoading('Sending...');
        let req = {
            "email": this.email_Id,
            "source": "opus_application_fantasy11"
        };
        this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe((res) => {
            this.presentToast('Submitted successfully.');
            this.modalController.dismiss();
            this.dismissLoading();
        });
    }
    presentToast(body, position, duration) {
        this.toastController.create({
            message: body,
            duration: (duration && duration > 0) ? duration : 2000,
            position: (position && (position == "top" || position == "middle")) ? position : 'bottom'
        }).then(toast => toast.present());
    }
    presentLoading(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({ message: body }).then(overlay => {
                overlay.present().then(() => {
                    if (!this.isLoading) {
                        try {
                            overlay.dismiss().then(() => console.log('loading aborted'));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                });
            });
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            try {
                return yield this.loadingController.dismiss();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
};
VtPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
VtPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-vt-popup',
        template: _raw_loader_vt_popup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vt_popup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VtPopupPage);



/***/ }),

/***/ "h2e+":
/*!*********************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(0 0 0 / 0%) !important;\n}\n\n.cloes_btn {\n  padding: 25px;\n}\n\n.cloes_btn ion-icon {\n  color: #fff;\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\nion-card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: calc(100% - 53px);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 0;\n  background: none;\n  overflow: hidden;\n  box-shadow: none;\n  padding: 0 0 3px 0;\n}\n\nion-card::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 113px);\n  background: #fff;\n  border-radius: 5px;\n}\n\nion-card .img_box {\n  position: relative;\n  z-index: 99;\n  margin: auto;\n  width: 100%;\n  max-width: 275px;\n  min-height: 275px;\n}\n\nion-card .img_box img {\n  display: block;\n  margin: 0 auto;\n}\n\nion-card .text_box {\n  position: relative;\n  z-index: 99;\n  width: 100%;\n  padding: 0 25px;\n  top: -23px;\n}\n\nion-card .text_box h2 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #000;\n  margin: 0;\n  letter-spacing: 0;\n  padding-bottom: 18px;\n}\n\nion-card .text_box p {\n  margin: 0;\n  font-size: 1.1rem;\n  line-height: 19px;\n  color: #000;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-card ion-list {\n  position: relative;\n  z-index: 99;\n  margin: 0;\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\nion-card ion-list ion-item {\n  background: #f5f5f5;\n  padding: 0 17px;\n  width: calc(100% - 0px);\n  min-height: unset !important;\n  margin: 0 auto;\n  --background: none;\n  align-items: flex-start;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --ripple-color: var(--transparent) !important;\n  --background-focused: var(--transparent) !important;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\nion-card ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  font-weight: 500 !important;\n  color: #000;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0px !important;\n  --placeholder-color: #b3b3b3 !important;\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --padding: 0 !important;\n  min-height: 45px;\n}\n\nion-card ion-list button[ion-button] {\n  margin: 0;\n  background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  height: 46px;\n  border-radius: 5px;\n  text-transform: unset;\n  font-size: 1.4rem;\n  box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n\nion-card ion-list .button.btn {\n  width: 100%;\n  font-size: 0.95rem;\n  font-weight: 400;\n  letter-spacing: 0.53px !important;\n  height: 46px;\n  --background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  color: #fff;\n  margin: 0;\n  text-transform: unset !important;\n  --box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Z0LXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQVI7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFHUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBRFo7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFIUjs7QUFLUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUhaOztBQU1RO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUpaOztBQVFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQU5SOztBQVFRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTlo7O0FBUVk7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQU5oQjs7QUFXWTtFQUNJLFNBQUE7RUFDQSw0REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvREFBQTtBQVRoQjs7QUFjWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsOERBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0RBQUE7QUFaaEIiLCJmaWxlIjoidnQtcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDAgMCAwIC8gMCUpICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9lc19idG4ge1xuICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTNweCk7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDAgMCAzcHggMDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMTNweCk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuaW1nX2JveCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMjc1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI3NXB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHRfYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgdG9wOiAtMjNweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxN3B4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IzYjNiMyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICZbaW9uLWJ1dHRvbl0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjU4MzlkIDAlLCAjZWUyZDVhIDcwJSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgJi5idG4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjUzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjU4MzlkIDAlLCAjZWUyZDVhIDcwJSk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogMCAxMnB4IDE4cHggLTFweCByZ2JhKDIzOCwgNDUsIDkwLCAwLjM0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => Promise.all(/*! import() | sign-in-sign-in-module */[__webpack_require__.e("default~country-code-country-code-module~sign-in-sign-in-module"), __webpack_require__.e("sign-in-sign-in-module")]).then(__webpack_require__.bind(null, /*! ./sign-in/sign-in.module */ "FuQ6")).then(m => m.SignInPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | register-register-module */ "register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then(m => m.RegisterPageModule)
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() | verification-verification-module */ "verification-verification-module").then(__webpack_require__.bind(null, /*! ./verification/verification.module */ "Kw+X")).then(m => m.VerificationPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'contests',
        loadChildren: () => Promise.all(/*! import() | contests-contests-module */[__webpack_require__.e("common"), __webpack_require__.e("contests-contests-module")]).then(__webpack_require__.bind(null, /*! ./contests/contests.module */ "RIl+")).then(m => m.ContestsPageModule)
    },
    {
        path: 'create-new-team',
        loadChildren: () => Promise.all(/*! import() | create-new-team-create-new-team-module */[__webpack_require__.e("default~create-new-team-create-new-team-module~player-info-player-info-module"), __webpack_require__.e("create-new-team-create-new-team-module")]).then(__webpack_require__.bind(null, /*! ./create-new-team/create-new-team.module */ "nGc4")).then(m => m.CreateNewTeamPageModule)
    },
    {
        path: 'player-info',
        loadChildren: () => Promise.all(/*! import() | player-info-player-info-module */[__webpack_require__.e("default~create-new-team-create-new-team-module~player-info-player-info-module"), __webpack_require__.e("player-info-player-info-module")]).then(__webpack_require__.bind(null, /*! ./player-info/player-info.module */ "qf9/")).then(m => m.PlayerInfoPageModule)
    },
    {
        path: 'team-preview',
        loadChildren: () => __webpack_require__.e(/*! import() | team-preview-team-preview-module */ "team-preview-team-preview-module").then(__webpack_require__.bind(null, /*! ./team-preview/team-preview.module */ "7GzT")).then(m => m.TeamPreviewPageModule)
    },
    {
        path: 'choose-captain',
        loadChildren: () => __webpack_require__.e(/*! import() | choose-captain-choose-captain-module */ "choose-captain-choose-captain-module").then(__webpack_require__.bind(null, /*! ./choose-captain/choose-captain.module */ "+ogK")).then(m => m.ChooseCaptainPageModule)
    },
    {
        path: 'reminder',
        loadChildren: () => Promise.all(/*! import() | reminder-reminder-module */[__webpack_require__.e("common"), __webpack_require__.e("reminder-reminder-module")]).then(__webpack_require__.bind(null, /*! ./reminder/reminder.module */ "syiy")).then(m => m.ReminderPageModule)
    },
    {
        path: 'my-matches',
        loadChildren: () => __webpack_require__.e(/*! import() | my-matches-my-matches-module */ "my-matches-my-matches-module").then(__webpack_require__.bind(null, /*! ./my-matches/my-matches.module */ "gN/H")).then(m => m.MyMatchesPageModule)
    },
    {
        path: 'player-performance',
        loadChildren: () => Promise.all(/*! import() | player-performance-player-performance-module */[__webpack_require__.e("default~completed-match-info-completed-match-info-module~player-performance-player-performance-module"), __webpack_require__.e("player-performance-player-performance-module")]).then(__webpack_require__.bind(null, /*! ./player-performance/player-performance.module */ "rZkn")).then(m => m.PlayerPerformancePageModule)
    },
    {
        path: 'wallet',
        loadChildren: () => __webpack_require__.e(/*! import() | wallet-wallet-module */ "wallet-wallet-module").then(__webpack_require__.bind(null, /*! ./wallet/wallet.module */ "43Fg")).then(m => m.WalletPageModule)
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "jcJX")).then(m => m.AccountPageModule)
    },
    {
        path: 'my-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | my-profile-my-profile-module */ "my-profile-my-profile-module").then(__webpack_require__.bind(null, /*! ./my-profile/my-profile.module */ "IptF")).then(m => m.MyProfilePageModule)
    },
    {
        path: 'my-team',
        loadChildren: () => Promise.all(/*! import() | my-team-my-team-module */[__webpack_require__.e("common"), __webpack_require__.e("my-team-my-team-module")]).then(__webpack_require__.bind(null, /*! ./my-team/my-team.module */ "vSSp")).then(m => m.MyTeamPageModule)
    },
    {
        path: 'my-stat',
        loadChildren: () => __webpack_require__.e(/*! import() | stats-stats-module */ "stats-stats-module").then(__webpack_require__.bind(null, /*! ./stats/stats.module */ "Vb5T")).then(m => m.StatsPageModule)
    },
    {
        path: 'my-points',
        loadChildren: () => __webpack_require__.e(/*! import() | my-points-my-points-module */ "my-points-my-points-module").then(__webpack_require__.bind(null, /*! ./my-points/my-points.module */ "zUih")).then(m => m.MyPointsPageModule)
    },
    {
        path: 'leaderboard',
        loadChildren: () => __webpack_require__.e(/*! import() | leaderboard-leaderboard-module */ "leaderboard-leaderboard-module").then(__webpack_require__.bind(null, /*! ./leaderboard/leaderboard.module */ "tADN")).then(m => m.LeaderboardPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => __webpack_require__.e(/*! import() | privacy-policy-privacy-policy-module */ "privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ./privacy-policy/privacy-policy.module */ "TOq4")).then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'about-us',
        loadChildren: () => __webpack_require__.e(/*! import() | about-us-about-us-module */ "about-us-about-us-module").then(__webpack_require__.bind(null, /*! ./about-us/about-us.module */ "00wH")).then(m => m.AboutUsPageModule)
    },
    {
        path: 'language',
        loadChildren: () => __webpack_require__.e(/*! import() | language-language-module */ "language-language-module").then(__webpack_require__.bind(null, /*! ./language/language.module */ "XkIt")).then(m => m.LanguagePageModule)
    },
    {
        path: 'faqs',
        loadChildren: () => __webpack_require__.e(/*! import() | faqs-faqs-module */ "faqs-faqs-module").then(__webpack_require__.bind(null, /*! ./faqs/faqs.module */ "Toy+")).then(m => m.FaqsPageModule)
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() | support-support-module */ "support-support-module").then(__webpack_require__.bind(null, /*! ./support/support.module */ "ZlwT")).then(m => m.SupportPageModule)
    },
    {
        path: 'vt-popup',
        loadChildren: () => __webpack_require__.e(/*! import() | vt-popup-vt-popup-module */ "vt-popup-vt-popup-module").then(__webpack_require__.bind(null, /*! ./vt-popup/vt-popup.module */ "vY8V")).then(m => m.VtPopupPageModule)
    },
    {
        path: 'buyappalert',
        loadChildren: () => __webpack_require__.e(/*! import() | buyappalert-buyappalert-module */ "buyappalert-buyappalert-module").then(__webpack_require__.bind(null, /*! ./buyappalert/buyappalert.module */ "ihH0")).then(m => m.BuyappalertPageModule)
    },
    {
        path: 'country-code',
        loadChildren: () => Promise.all(/*! import() | country-code-country-code-module */[__webpack_require__.e("default~country-code-country-code-module~sign-in-sign-in-module"), __webpack_require__.e("country-code-country-code-module")]).then(__webpack_require__.bind(null, /*! ./country-code/country-code.module */ "VocU")).then(m => m.CountryCodePageModule)
    },
    {
        path: 'edit-team',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-team-edit-team-module */ "edit-team-edit-team-module").then(__webpack_require__.bind(null, /*! ./edit-team/edit-team.module */ "DvQv")).then(m => m.EditTeamPageModule)
    },
    {
        path: 'upcoming-match-info',
        loadChildren: () => Promise.all(/*! import() | upcoming-match-info-upcoming-match-info-module */[__webpack_require__.e("common"), __webpack_require__.e("upcoming-match-info-upcoming-match-info-module")]).then(__webpack_require__.bind(null, /*! ./upcoming-match-info/upcoming-match-info.module */ "LNU6")).then(m => m.UpcomingMatchInfoPageModule)
    },
    {
        path: 'live-match-info',
        loadChildren: () => __webpack_require__.e(/*! import() | live-match-info-live-match-info-module */ "live-match-info-live-match-info-module").then(__webpack_require__.bind(null, /*! ./live-match-info/live-match-info.module */ "D+HU")).then(m => m.LiveMatchInfoPageModule)
    },
    {
        path: 'completed-match-info',
        loadChildren: () => Promise.all(/*! import() | completed-match-info-completed-match-info-module */[__webpack_require__.e("default~completed-match-info-completed-match-info-module~player-performance-player-performance-module"), __webpack_require__.e("completed-match-info-completed-match-info-module")]).then(__webpack_require__.bind(null, /*! ./completed-match-info/completed-match-info.module */ "T1WA")).then(m => m.CompletedMatchInfoPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Poppins\";\n  font-family: \"Poppins\";\n}\n\n.zmdi {\n  font: normal normal normal 14px/1 \"Material-Design-Iconic-Font\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQzs7Ozs7Ozs7Ozs7OztFQWFJLDRCQUFBO0VBQ0Esc0JBQUE7QUFDTDs7QUFFQztFQUNJLCtEQUFBO0FBQ0wiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICosXG4gYm9keSxcbiBodG1sLFxuIHAsXG4gc3BhbixcbiBoMSxcbiBoMixcbiBoMyxcbiBoNCxcbiBoNSxcbiBoNixcbiBzdHJvbmcsXG4gbGkge1xuICAgICAtLWlvbi1mb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuIH1cblxuIC56bWRpIHtcbiAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xICdNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQnO1xuIH1cbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map