(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\" tab=\"home\">\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_home.png\">\n                    </div>\n                    <h2>Home</h2>\n                </div>\n            </div>\n\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_homeact.png\">\n                    </div>\n                    <h2>Home</h2>\n                </div>\n            </div>\n        </ion-tab-button>\n\n        <ion-tab-button class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\" tab=\"myMatches\">\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_matches.png\">\n                    </div>\n                    <h2>Mes tournois</h2>\n                </div>\n            </div>\n\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_matchesact.png\">\n                    </div>\n                    <h2>Mes tournois</h2>\n                </div>\n            </div>\n        </ion-tab-button>\n\n        <ion-tab-button class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\" tab=\"wallet\" style=\"\n        background:pink;height:100%;overflow:visible!important;\" (click)=\"addNewToGallery()\">\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_wallet.png\">\n                    </div>\n                    \n                </div>\n            </div>\n\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_walletact.png\">\n                    </div>\n                    \n                </div>\n            </div>\n        </ion-tab-button>\n\n        <ion-tab-button class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\" tab=\"wallet\">\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_wallet.png\">\n                    </div>\n                    <h2>Token</h2>\n                </div>\n            </div>\n\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_walletact.png\">\n                    </div>\n                    <h2>Token</h2>\n                </div>\n            </div>\n        </ion-tab-button>\n\n        <ion-tab-button class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.45s\" tab=\"account\">\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_account.png\">\n                    </div>\n                    <h2>Mon compte</h2>\n                </div>\n            </div>\n\n            <div class=\"tab-button\">\n                <div class=\"tab-button-inner\">\n                    <div class=\"icon_box\">\n                        <img src=\"assets/images/icons/ic_accountact.png\">\n                    </div>\n                    <h2>Mon compte</h2>\n                </div>\n            </div>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let TabsPage = class TabsPage {
    constructor(camera, webview, alertCtrl) {
        this.camera = camera;
        this.webview = webview;
        this.alertCtrl = alertCtrl;
        this.cameraOptions = {
            quality: 100,
            allowEdit: true,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.galleryOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
    }
    addNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('fun !');
            let alertBox = yield this.alertCtrl.create({
                header: 'Choose From',
                buttons: [
                    {
                        text: 'Camera',
                        handler: () => {
                            this.camera.getPicture(this.cameraOptions).then(res => {
                                console.log('response =', res);
                                this.photo = res;
                            });
                        }
                    },
                    {
                        text: 'Gallery',
                        handler: () => {
                            this.camera.getPicture(this.galleryOptions).then(res => {
                                console.log('response =', res);
                                this.photo = res;
                            });
                        }
                    },
                ]
            });
            yield alertBox.present();
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tabs ion-tab-bar {\n  --background: var(--secondary);\n  --ripple-color: var(--transparent) !important;\n}\nion-tabs ion-tab-bar ion-tab-button {\n  --ripple-color: var(--transparent) !important;\n  position: relative;\n  overflow: hidden;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button {\n  position: absolute;\n  bottom: -100%;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  margin: auto;\n  transition: all 0.5s;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button .tab-button-inner {\n  width: 100%;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button .tab-button-inner .icon_box {\n  width: 25px;\n  margin: auto;\n  margin-bottom: 5px;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button .tab-button-inner .icon_box img {\n  width: 15px;\n  display: block;\n  margin: 0 auto;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button .tab-button-inner h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.6rem;\n  font-weight: 500;\n  letter-spacing: 0;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button:nth-child(odd) {\n  bottom: 0;\n}\nion-tabs ion-tab-bar ion-tab-button .tab-button:nth-child(even) .tab-button-inner h2 {\n  color: var(--white);\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected .tab-button:nth-child(odd) {\n  bottom: -100%;\n}\nion-tabs ion-tab-bar ion-tab-button.tab-selected .tab-button:nth-child(even) {\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksOEJBQUE7RUFDQSw2Q0FBQTtBQUFSO0FBRVE7RUFDSSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFFWTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUFoQjtBQUVnQjtFQUNJLFdBQUE7QUFBcEI7QUFFb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQXhCO0FBRXdCO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQTVCO0FBS29CO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSHhCO0FBT2dCO0VBQ0ksU0FBQTtBQUxwQjtBQVVvQjtFQUNJLG1CQUFBO0FBUnhCO0FBZW9CO0VBQ0ksYUFBQTtBQWJ4QjtBQWlCb0I7RUFDSSxTQUFBO0FBZnhCIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYnMge1xuICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgaW9uLXRhYi1idXR0b24ge1xuICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG5cbiAgICAgICAgICAgIC50YWItYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTAwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcblxuICAgICAgICAgICAgICAgIC50YWItYnV0dG9uLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLnRhYi1idXR0b24taW5uZXIgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50YWItc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIC50YWItYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0xMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "MJr+");








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "ct+p")).then(m => m.HomePageModule)
            },
            {
                path: 'myMatches',
                loadChildren: () => __webpack_require__.e(/*! import() | my-matches-my-matches-module */ "my-matches-my-matches-module").then(__webpack_require__.bind(null, /*! ../my-matches/my-matches.module */ "gN/H")).then(m => m.MyMatchesPageModule)
            },
            {
                path: 'wallet',
                loadChildren: () => __webpack_require__.e(/*! import() | wallet-wallet-module */ "wallet-wallet-module").then(__webpack_require__.bind(null, /*! ../wallet/wallet.module */ "43Fg")).then(m => m.WalletPageModule)
            },
            {
                path: 'account',
                loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ../account/account.module */ "jcJX")).then(m => m.AccountPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map