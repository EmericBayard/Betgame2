(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"],{

/***/ "IOxn":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"page-title\">\n        <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">Vérification</h2>\n        <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".8s\">En moins d'une minute</h3>\n    </div>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"background center_img\">\n        <img src=\"assets/images/bg.png\" class=\"crop_img\">\n    </div>\n    <div class=\"content-inner\">\n        <div class=\"form\">\n            <h2>Entrer votre code de vérification à 6 chiffres.</h2>\n            <ion-list class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                    <div class=\"item_inner\">\n                        <ion-label>Code</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" placeholder=\"Entrer le code\"></ion-input>\n                    </div>\n                </ion-item>\n                <ion-button size=\"large\" class=\"btn animate__animated animate__slideInUp wow\" data-wow-duration=\".4s\" expand=\"round\" (click)=\"tabs()\">Commencer !</ion-button>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "JF+G":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n\n.background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n}\n\n.background img {\n  top: -29px;\n  min-height: calc(100vh + 29px);\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 172.2px);\n  max-height: calc(100vh - 172.2px);\n  overflow: hidden;\n  padding-top: 35px;\n  z-index: 11;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.content-inner::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--secondary);\n  opacity: 0.8;\n}\n\n.form h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1rem;\n  font-weight: 400;\n  padding-bottom: 20px;\n}\n\n.form ion-list {\n  overflow: hidden;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFSTtFQUNJLFVBQUE7RUFDQSw4QkFBQTtBQUFSOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBREo7O0FBR0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQURSOztBQU1JO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFIUjs7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKUiIsImZpbGUiOiJ2ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xufVxuXG5cbi5iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgIGltZyB7XG4gICAgICAgIHRvcDogLTI5cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggKyAyOXB4KTtcbiAgICB9XG59XG5cbi5jb250ZW50LWlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE3Mi4ycHgpO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzIuMnB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAzNXB4O1xuICAgIHotaW5kZXg6IDExO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG59XG5cbi5mb3JtIHtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "Kw+X":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.module.ts ***!
  \*****************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification-routing.module */ "SIZt");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verification.page */ "c9mM");








let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_6__["VerificationPageRoutingModule"]
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_7__["VerificationPage"]]
    })
], VerificationPageModule);



/***/ }),

/***/ "SIZt":
/*!*************************************************************!*\
  !*** ./src/app/verification/verification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function() { return VerificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification.page */ "c9mM");




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ "c9mM":
/*!***************************************************!*\
  !*** ./src/app/verification/verification.page.ts ***!
  \***************************************************/
/*! exports provided: VerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPage", function() { return VerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verification.page.html */ "IOxn");
/* harmony import */ var _verification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verification.page.scss */ "JF+G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let VerificationPage = class VerificationPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
};
VerificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verification',
        template: _raw_loader_verification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerificationPage);



/***/ })

}]);
//# sourceMappingURL=verification-verification-module.js.map