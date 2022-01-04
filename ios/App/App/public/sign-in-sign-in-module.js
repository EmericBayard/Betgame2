(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "FuQ6":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-routing.module */ "j1PK");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in.page */ "WawN");








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignInPageRoutingModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_7__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "P3na":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<ion-header>\n    <ion-toolbar>\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n-->\n\n<ion-content fullscreen class=\"bg_color\">\n    <div class=\"logo ion-text-center\">\n        <img src=\"assets/icon/logo2.png\" class=\"animate__animated animate__zoomIn wow logo_img\" data-wow-duration=\"0.3s\">\n    </div>\n\n    <div class=\"background center_img\">\n        <img src=\"assets/images/bg.png\" class=\"crop_img\">\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <div class=\"form\">\n        <h2 class=\"ion-text-center animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">{{'let_s_play' | translate}}</h2>\n        <ion-list class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">\n                <div class=\"item_inner\">\n                    <!-- <ion-label>{{'phone_number' | translate}}</ion-label> -->\n                    <ion-label>pseudo/email</ion-label>\n                    <div class=\"input-box d-flex\">\n                        <!-- <h3 (click)=\"country_code()\">+1 &nbsp;</h3> -->\n                        <!-- <ion-input mode=\"md\" type=\"number\" placeholder=\"{{'enter_phone_number' | translate}}\"></ion-input> -->\n                        <ion-input mode=\"md\" type=\"string\" placeholder=\"Entrer votre pseudo ou email\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">\n                <div class=\"item_inner\">\n                    <!-- <ion-label>{{'phone_number' | translate}}</ion-label> -->\n                    <ion-label>mot de passe</ion-label>\n                    <div class=\"input-box d-flex\">\n                        <!-- <h3 (click)=\"country_code()\">+1 &nbsp;</h3> -->\n                        <!-- <ion-input mode=\"md\" type=\"number\" placeholder=\"{{'enter_phone_number' | translate}}\"></ion-input> -->\n                        <ion-input mode=\"md\" type=\"password\" placeholder=\"Entrer votre mot de passe\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n\n        <!-- <ion-button size=\"large\" class=\"btn animate__animated animate__slideInUp wow\" data-wow-duration=\".5s\" expand=\"round\" (click)=\"register()\">{{'continue' | translate}}</ion-button> -->\n        <ion-button size=\"large\" class=\"btn animate__animated animate__slideInUp wow\" data-wow-duration=\".5s\" expand=\"round\" (click)=\"register()\">Connexion</ion-button>\n    </div>\n\n    <div class=\"social_login\">\n        <h3 class=\"ion-text-center animate__animated animate__fadeInUp wow\" data-wow-duration=\".8s\">Mot de passe oublié ?</h3>\n        <!--<div class=\"button_container d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\".8s\">\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-button size=\"large\" expand=\"full\" class=\"btn\" (click)=\"verification()\">\n                        <ion-icon class=\"zmdi zmdi-facebook ion-text-start\"></ion-icon>&nbsp;\n                        {{'facebook' | translate}}\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-button size=\"large\" expand=\"full\" class=\"btn\" (click)=\"verification()\">\n                        <ion-icon class=\"zmdi zmdi-google ion-text-start\"></ion-icon>&nbsp;&nbsp;\n                        {{'google' | translate}}\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </div>-->\n    </div>\n</ion-footer>");

/***/ }),

/***/ "WawN":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-in.page.html */ "P3na");
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.page.scss */ "i5US");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _country_code_country_code_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../country-code/country-code.page */ "clGa");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let SignInPage = class SignInPage {
    constructor(route, modalController) {
        this.route = route;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    register() {
        this.route.navigate(['./register']);
    }
    verification() {
        this.route.navigate(['./verification']);
    }
    country_code() {
        this.modalController.create({ component: _country_code_country_code_page__WEBPACK_IMPORTED_MODULE_5__["CountryCodePage"] }).then((modalElement) => modalElement.present());
    }
    ngAfterViewInit() {
        anime.timeline({ loop: false })
            .add({
            targets: '.logo .logo_img',
            delay: (el, i) => 1000 * i,
            scale: [50, 1],
            opacity: [0, 1],
            duration: 1500,
            easing: "easeOutExpo",
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignInPage);



/***/ }),

/***/ "i5US":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  padding: 0 20px;\n  margin: 0 auto;\n  width: 168px;\n  margin-bottom: 25px;\n  position: absolute;\n  top: 19%;\n  left: 0;\n  right: 0;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 999;\n}\n.logo img {\n  display: block;\n  margin: auto;\n}\n.background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n}\n.background img {\n  top: 0;\n}\nion-footer {\n  position: absolute;\n  bottom: 0;\n  overflow-y: auto;\n  border-radius: 22px 22px 0 0;\n  padding-top: 36px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  height: 55%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\nion-footer::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--secondary);\n  opacity: 0.8;\n}\nion-footer .form h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.95rem;\n  letter-spacing: 0.4px;\n  padding: 0;\n  padding-bottom: 26px;\n}\nion-footer .form ion-list ion-item {\n  margin-bottom: 38px;\n}\nion-footer .form ion-list ion-item .input-box {\n  align-items: flex-end !important;\n}\nion-footer .form ion-list ion-item .input-box h3 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1.1rem;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  font-weight: 500;\n}\nion-footer .social_login {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\nion-footer .social_login h3 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.98rem;\n  letter-spacing: 0.4px;\n  padding: 25px 0 25px 0;\n  font-weight: 400;\n}\nion-footer .social_login .button_container {\n  width: 100%;\n  min-height: 89px;\n  border-radius: 12px 12px 0 0;\n  bottom: 0;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(0px);\n          backdrop-filter: blur(0px);\n  position: relative;\n}\nion-footer .social_login .button_container::before, ion-footer .social_login .button_container::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 1px;\n  height: 36px;\n  background: var(--white);\n}\nion-footer .social_login .button_container::before {\n  width: 100%;\n  height: 100%;\n  background: #88888882;\n}\nion-footer .social_login .button_container ion-row {\n  width: 100%;\n}\nion-footer .social_login .button_container ion-row ion-col {\n  padding: 0;\n}\nion-footer .social_login .button_container .btn {\n  letter-spacing: 0 !important;\n  font-weight: 400;\n  text-transform: unset !important;\n  font-size: 0.95rem;\n  --background: red;\n}\n@media (max-height: 652px) {\n  .logo {\n    top: 12% !important;\n  }\n}\n@media (max-height: 606px) {\n  .logo {\n    top: 70px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFDUjtBQUdBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUk7RUFDSSxNQUFBO0FBQVI7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFESjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFEUjtBQU1RO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUpaO0FBUVk7RUFDSSxtQkFBQTtBQU5oQjtBQVFnQjtFQUNJLGdDQUFBO0FBTnBCO0FBUW9CO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxnQkFBQTtBQU54QjtBQWNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVpSO0FBY1E7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVpaO0FBZVE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUVBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxrQkFBQTtBQWRaO0FBZ0JZO0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBZmhCO0FBa0JZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQWhCaEI7QUFtQlk7RUFDSSxXQUFBO0FBakJoQjtBQW1CZ0I7RUFDSSxVQUFBO0FBakJwQjtBQXFCWTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFuQmhCO0FBMEJBO0VBQ0k7SUFDSSxtQkFBQTtFQXZCTjtBQUNGO0FBeUJBO0VBQ0k7SUFDSSxvQkFBQTtFQXZCTjtBQUNGIiwiZmlsZSI6InNpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTY4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOSU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHotaW5kZXg6IDk5OTtcblxuICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICBpbWcge1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMjJweCAyMnB4IDAgMDtcbiAgICBwYWRkaW5nLXRvcDogMzZweDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgIC5mb3JtIHtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGlzdCB7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzhweDtcblxuICAgICAgICAgICAgICAgIC5pbnB1dC1ib3gge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLnNvY2lhbF9sb2dpbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk4cmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjVweCAwIDI1cHggMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDg5cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgJjo6YmVmb3JlLFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODg4ODg4ODI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2NTJweCkge1xuICAgIC5sb2dvIHtcbiAgICAgICAgdG9wOiAxMiUhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LWhlaWdodDogNjA2cHgpIHtcbiAgICAubG9nbyB7XG4gICAgICAgIHRvcDogNzBweCFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "j1PK":
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "WawN");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module.js.map