(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"page-title\">\n        <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">Inscription</h2>\n        <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".8s\">En moins d'une minute</h3>\n    </div>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"background center_img\">\n        <img src=\"assets/images/bg.png\" class=\"crop_img\">\n    </div>\n\n    <div class=\"content-inner\">\n        <div class=\"form\">\n            <ion-list class=\"animate__animated animate__fadeInUp\" lines=\"none\" style=\"margin-bottom: -3rem;\">\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.2s\">\n                    <div class=\"item_inner\">\n                        <ion-label>Nom et prénom</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" placeholder=\"Entrer votre nom et prénom\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.25s\">\n                    <div class=\"item_inner\">\n                        <ion-label>email</ion-label>\n                        <ion-input mode=\"md\" type=\"email\" placeholder=\"Entrer votre adresse email\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.25s\">\n                    <div class=\"item_inner\">\n                        <ion-label>Adresse</ion-label>\n                        <ion-input mode=\"md\" type=\"email\" placeholder=\"Entrer votre adresse\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                    <div class=\"item_inner\">\n                        <ion-label>Numéro de téléphone</ion-label>\n                        <div class=\"input-box d-flex\">\n                            <ion-input mode=\"md\" type=\"number\" placeholder=\"Entrer votre numéro de téléphone\"></ion-input>\n                        </div>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                    <div class=\"item_inner\">\n                        <ion-label>Plateforme préférée</ion-label>\n                        <ion-select>\n                            <ion-select-option>Playstation</ion-select-option>\n                            <ion-select-option>Xbox</ion-select-option>\n                            <ion-select-option>PC</ion-select-option>\n                        </ion-select>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                    <div class=\"item_inner\">\n                        <ion-label>Genre</ion-label>\n                        <ion-select>\n                            <ion-select-option>Femme</ion-select-option>\n                            <ion-select-option>Homme</ion-select-option>\n                            <ion-select-option>Autre</ion-select-option>\n                        </ion-select>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                    <div class=\"item_inner\">\n                        <ion-label>PSN/GamerTag/FUTAccout</ion-label>\n                        <div class=\"input-box d-flex\">\n                            <ion-input mode=\"md\" type=\"number\" placeholder=\"Rentrer le pseudo de votre plateforme\"></ion-input>\n                        </div>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">\n                    <div class=\"item_inner\">\n                        <ion-label>Anniversaire</ion-label>\n                        <div class=\"input-box d-flex\">\n                            <ion-datetime mode=\"ios\" displayFormat=\"DD MMMM YYYY\" placeholder=\"Séléctionner votre date de naissance\"></ion-datetime>\n                           <ion-icon class=\"zmdi zmdi-calendar-alt end ion-text-end\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-item>\n            </ion-list>\n        </div>\n\n        <div class=\"content-footer\">\n            <h2 class=\"ion-text-center animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">Nous allons vous envoyer un code de vérification.</h2>\n            <ion-button size=\"large\" class=\"btn animate__animated animate__slideInUp wow\" data-wow-duration=\".45s\" expand=\"round\" (click)=\"verification()\">Continuer</ion-button>\n        </div>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let RegisterPage = class RegisterPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    verification() {
        this.route.navigate(['./verification']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n\n.background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n}\n\n.background img {\n  top: -29px;\n  min-height: calc(100vh + 29px);\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 172.2px);\n  max-height: calc(100vh - 172.2px);\n  overflow: hidden;\n  padding-top: 35px;\n  z-index: 11;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.content-inner::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--secondary);\n  opacity: 0.8;\n}\n\n.form ion-list {\n  min-height: calc(100vh - 358px);\n  padding-top: 12px;\n  max-height: calc(100vh - 358px);\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.form ion-list ion-item.item-datetime ion-icon {\n  color: var(--text-light);\n  min-width: 24px;\n  font-size: 1rem;\n  padding: 0 2px;\n}\n\n.content-footer {\n  position: relative;\n  z-index: 99;\n  padding: 25px;\n}\n\n.content-footer h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1rem;\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVJO0VBQ0ksVUFBQTtFQUNBLDhCQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFESjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBRFI7O0FBTUk7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSFI7O0FBTVk7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpoQjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFQSjs7QUFTSTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQVBSIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbn1cblxuXG4uYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICBpbWcge1xuICAgICAgICB0b3A6IC0yOXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoICsgMjlweCk7XG4gICAgfVxufVxuXG4uY29udGVudC1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzIuMnB4KTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcyLjJweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcbiAgICB6LWluZGV4OiAxMTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbn1cblxuLmZvcm0ge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM1OHB4KTtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNThweCk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAgICAgaW9uLWl0ZW0uaXRlbS1kYXRldGltZSB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb250ZW50LWZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.page */ "b0Bx");








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_6__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map