(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"],{

/***/ "6R/f":
/*!*******************************************!*\
  !*** ./src/app/support/support.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n\n.background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n}\n\n.background img {\n  top: -29px;\n  min-height: calc(100vh + 29px);\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 172.2px);\n  max-height: calc(100vh - 172.2px);\n  overflow: hidden;\n  z-index: 11;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.content-inner::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--secondary);\n  opacity: 0.8;\n}\n\n.content-inner .contacts {\n  position: relative;\n  z-index: 99;\n  padding: 10px 25px;\n  display: flex;\n  align-items: center;\n}\n\n.content-inner .contacts ion-row {\n  width: 100%;\n  margin: 0 -5px;\n  position: relative;\n}\n\n.content-inner .contacts ion-row::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 1px;\n  height: 36px;\n  margin: auto;\n  background: var(--white);\n  opacity: 0.4;\n}\n\n.content-inner .contacts ion-row ion-col {\n  min-height: 60px;\n  padding: 0 5px;\n}\n\n.content-inner .contacts ion-row ion-col h2 {\n  margin: 0 auto;\n  color: var(--white);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.95rem;\n  font-weight: 400;\n}\n\n.content-inner .contacts ion-row ion-col h2 ion-icon {\n  font-size: 1.45rem;\n  min-width: 37px;\n}\n\n.content-inner .form {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  max-height: calc(100vh - 252px);\n  min-height: calc(100vh - 252px);\n  background: var(--bg-color);\n  padding-top: 25px;\n}\n\n.content-inner .form .page-title {\n  padding: 0;\n}\n\n.content-inner .form ion-list {\n  min-height: calc(100vh - 450px);\n  max-height: calc(100vh - 450px);\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.content-inner .form ion-list ion-item ion-textarea {\n  max-height: 175px;\n  overflow: hidden;\n  overflow-y: auto;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUk7RUFDSSxVQUFBO0VBQ0EsOEJBQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFESjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBRFI7O0FBSUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUZSOztBQUlRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZaOztBQUlZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUZoQjs7QUFNWTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUpoQjs7QUFNZ0I7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSnBCOztBQU1vQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUp4Qjs7QUFXSTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQVRSOztBQVdRO0VBQ0ksVUFBQTtBQVRaOztBQVlRO0VBQ0ksK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFWWjs7QUFhWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFYaEIiLCJmaWxlIjoic3VwcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG5cblxuLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgaW1nIHtcbiAgICAgICAgdG9wOiAtMjlweDtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCArIDI5cHgpO1xuICAgIH1cbn1cblxuLmNvbnRlbnQtaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcyLjJweCk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE3Mi4ycHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMTE7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgIC5jb250YWN0cyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIC01cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM3cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTJweCk7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTJweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG5cbiAgICAgICAgLnBhZ2UtdGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0NTBweCk7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDUwcHgpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cblxuICAgICAgICAgICAgaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNzVweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "JWn5":
/*!***************************************************!*\
  !*** ./src/app/support/support-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function() { return SupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support.page */ "MSq+");




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ "MSq+":
/*!*****************************************!*\
  !*** ./src/app/support/support.page.ts ***!
  \*****************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./support.page.html */ "vLdp");
/* harmony import */ var _support_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.page.scss */ "6R/f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SupportPage = class SupportPage {
    constructor() { }
    ngOnInit() {
    }
};
SupportPage.ctorParameters = () => [];
SupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-support',
        template: _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_support_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SupportPage);



/***/ }),

/***/ "ZlwT":
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support-routing.module */ "JWn5");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support.page */ "MSq+");








let SupportPageModule = class SupportPageModule {
};
SupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_6__["SupportPageRoutingModule"]
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_7__["SupportPage"]]
    })
], SupportPageModule);



/***/ }),

/***/ "vLdp":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"page-title\">\n        <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">{{'support' | translate}}</h2>\n        <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".8s\">{{'contact_us' | translate}}</h3>\n    </div>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"background center_img\">\n        <img src=\"assets/images/bg.png\" class=\"crop_img\">\n    </div>\n\n    <div class=\"content-inner\">\n        <div class=\"contacts animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">\n            <ion-row>\n                <ion-col class=\"d-flex\" size=\"6\">\n                    <h2 class=\"d-flex\">\n                        <ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon>\n                        {{'call_us' | translate}}\n                    </h2>\n                </ion-col>\n\n                <ion-col class=\"d-flex\" size=\"6\">\n                    <h2 class=\"d-flex\">\n                        <ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon>\n                        {{'mail_us' | translate}}\n                    </h2>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class=\"form\">\n            <div class=\"page-title\">\n                <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">{{'write_us' | translate}}</h2>\n                <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".5s\">{{'let_us_know_your_quary' | translate}}</h3>\n            </div>\n\n            <ion-list class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">\n                    <div class=\"item_inner\">\n                        <ion-label>{{'phone_number_email' | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"text\" placeholder=\"{{'add_contact_info' | translate}}\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">\n                    <div class=\"item_inner\">\n                        <ion-label>{{'add_your_issue_feedback' | translate}}</ion-label>\n                        <ion-textarea mode=\"md\" rows=\"1\" auto-grow=\"true\" type=\"text\" placeholder=\"{{'write_your_message' | translate}}\"></ion-textarea>\n                    </div>\n                </ion-item>\n            </ion-list>\n\n            <ion-button size=\"large\" class=\"btn animate__animated animate__slideInUp wow\" data-wow-duration=\".6s\" expand=\"round\">{{'submit' | translate}}</ion-button>\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=support-support-module.js.map