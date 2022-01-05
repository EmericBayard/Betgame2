(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-policy-privacy-policy-module"],{

/***/ "Grmv":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"page-title\">\n        <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">{{'privacy_policy' | translate}}</h2>\n        <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".8s\">{{'how_we_work' | translate}}</h3>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"content-inner\">\n        <div class=\"text_box animate__animated animate__fadeInUp wow\">\n            <h2>{{'terms_of_use' | translate}}</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n\n        <div class=\"text_box animate__animated animate__fadeInUp wow\">\n            <h2>{{'privacy_policy' | translate}}</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n\n        <div class=\"text_box animate__animated animate__fadeInUp wow\">\n            <h2>{{'terms_of_use' | translate}}</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n\n        <div class=\"text_box animate__animated animate__fadeInUp wow\">\n            <h2>{{'privacy_policy' | translate}}</h2>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "TOq4":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function() { return PrivacyPolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-policy-routing.module */ "yO/6");
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./privacy-policy.page */ "qTUc");








let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPageRoutingModule"]
        ],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_7__["PrivacyPolicyPage"]]
    })
], PrivacyPolicyPageModule);



/***/ }),

/***/ "qTUc":
/*!*******************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
  \*******************************************************/
/*! exports provided: PrivacyPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function() { return PrivacyPolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./privacy-policy.page.html */ "Grmv");
/* harmony import */ var _privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy-policy.page.scss */ "wyFE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PrivacyPolicyPage = class PrivacyPolicyPage {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyPolicyPage.ctorParameters = () => [];
PrivacyPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-privacy-policy',
        template: _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PrivacyPolicyPage);



/***/ }),

/***/ "wyFE":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 172.2px);\n  max-height: calc(100vh - 172.2px);\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 11;\n  background: var(--secondary);\n  padding-top: 32px;\n}\n\n.content-inner .text_box {\n  padding: 0px 22px 0px 22px;\n}\n\n.content-inner .text_box h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1rem;\n  padding-bottom: 20px;\n}\n\n.content-inner .text_box p {\n  color: var(--white);\n  font-size: 0.85rem;\n  font-weight: 300;\n  line-height: 25px;\n  margin: 0;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBSUk7RUFDSSwwQkFBQTtBQUZSOztBQUlRO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRlo7O0FBS1E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQUhaIiwiZmlsZSI6InByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbn1cblxuXG4gXG5cbi5jb250ZW50LWlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE3Mi4ycHgpO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzIuMnB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcblxuICAgIC50ZXh0X2JveCB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMnB4IDBweCAyMnB4O1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "yO/6":
/*!*****************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PrivacyPolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageRoutingModule", function() { return PrivacyPolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy-policy.page */ "qTUc");




const routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyPage"]
    }
];
let PrivacyPolicyPageRoutingModule = class PrivacyPolicyPageRoutingModule {
};
PrivacyPolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivacyPolicyPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=privacy-policy-privacy-policy-module.js.map