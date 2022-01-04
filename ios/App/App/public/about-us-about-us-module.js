(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"],{

/***/ "00wH":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us-routing.module */ "MiEk");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us.page */ "aqON");








let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_6__["AboutUsPageRoutingModule"]
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_7__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "3SwB":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  position: relative;\n  min-height: 255px;\n}\n\n.logo {\n  padding: 0 20px;\n  width: 168px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 999;\n  bottom: 40px;\n  margin: auto;\n}\n\n.logo img {\n  display: block;\n  margin: auto;\n}\n\nion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 325px) !important;\n  max-height: calc(100vh - 325px) !important;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 11;\n  background: var(--secondary);\n  padding-top: 32px;\n}\n\n.content-inner .text_box {\n  padding: 0px 22px 0px 22px;\n}\n\n.content-inner .text_box h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1rem;\n  padding-bottom: 20px;\n}\n\n.content-inner .text_box p {\n  color: var(--white);\n  font-size: 0.85rem;\n  font-weight: 300;\n  line-height: 25px;\n  margin: 0;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBSUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUdJO0VBQ0ksMEJBQUE7QUFEUjs7QUFHUTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQURaOztBQUlRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUFGWiIsImZpbGUiOiJhYm91dC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMjU1cHg7XG59XG5cbi5sb2dvIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3R0b206IDQwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMjVweCkgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzI1cHgpICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDExO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgcGFkZGluZy10b3A6IDMycHg7XG5cbiAgICAudGV4dF9ib3gge1xuICAgICAgICBwYWRkaW5nOiAwcHggMjJweCAwcHggMjJweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICAgICAgICB9XG4gICAgfVxuXG59Il19 */");

/***/ }),

/***/ "MiEk":
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function() { return AboutUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.page */ "aqON");




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ "aM5c":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"banner\">\n        <div class=\"logo ion-text-center\">\n            <img src=\"assets/icon/logo2.png\" class=\"animate__animated animate__zoomIn wow\" data-wow-duration=\"0.3s\">\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"content-inner\">\n        <div class=\"text_box animate__animated animate__fadeInUp wow\">\n            <h2>{{'who_we_are' | translate}}?</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n\n        <div class=\"text_box animate__animated animate__fadeInUp wow\">\n            <h2>{{'how_we_started' | translate}}?</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n\n        <div class=\"text_box animate__animated animate__fadeInUp wow\">\n            <h2>{{'who_we_are' | translate}}?</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n\n        <div class=\"text_box animate__animated animate__fadeInUp wow\">\n            <h2>{{'how_we_started' | translate}}?</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "aqON":
/*!*******************************************!*\
  !*** ./src/app/about-us/about-us.page.ts ***!
  \*******************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-us.page.html */ "aM5c");
/* harmony import */ var _about_us_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.page.scss */ "3SwB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutUsPage = class AboutUsPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsPage.ctorParameters = () => [];
AboutUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-us',
        template: _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_us_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=about-us-about-us-module.js.map