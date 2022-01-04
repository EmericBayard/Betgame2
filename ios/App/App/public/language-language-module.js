(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-language-module"],{

/***/ "59xb":
/*!*****************************************************!*\
  !*** ./src/app/language/language-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LanguagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageRoutingModule", function() { return LanguagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language.page */ "tAP4");




const routes = [
    {
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_3__["LanguagePage"]
    }
];
let LanguagePageRoutingModule = class LanguagePageRoutingModule {
};
LanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LanguagePageRoutingModule);



/***/ }),

/***/ "Dmpp":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/language/language.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"page-title\">\n        <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">{{'language' | translate}}</h2>\n        <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".8s\">{{'preferred_langauge' | translate}}</h3>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"content-inner\">\n        <ion-list lines=\"none\">\n            <h2>{{'select_preferred_language' | translate}}</h2>\n            <ion-radio-group [(ngModel)]=\"defaultLanguageCode\">\n                <ion-item *ngFor=\"let language of languages\" (click)=\"onLanguageClick(language)\" class=\"animate__animated animate__fadeInUp wow\">\n                    <div class=\"item_inner d-flex\">\n                        <ion-radio value=\"{{language.code}}\"></ion-radio>\n                        <h3>{{language.name}}</h3>\n                    </div>\n                </ion-item> \n            </ion-radio-group>\n        </ion-list>\n\n        <ion-button size=\"large\" class=\"btn animate__animated animate__slideInUp wow\" data-wow-duration=\".6s\" expand=\"round\" (click)=\"languageConfirm()\">{{'submit' | translate}}</ion-button>\n    </div>\n</ion-content>");

/***/ }),

/***/ "XkIt":
/*!*********************************************!*\
  !*** ./src/app/language/language.module.ts ***!
  \*********************************************/
/*! exports provided: LanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _language_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language-routing.module */ "59xb");
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./language.page */ "tAP4");








let LanguagePageModule = class LanguagePageModule {
};
LanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _language_routing_module__WEBPACK_IMPORTED_MODULE_6__["LanguagePageRoutingModule"]
        ],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_7__["LanguagePage"]]
    })
], LanguagePageModule);



/***/ }),

/***/ "tAP4":
/*!*******************************************!*\
  !*** ./src/app/language/language.page.ts ***!
  \*******************************************/
/*! exports provided: LanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePage", function() { return LanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./language.page.html */ "Dmpp");
/* harmony import */ var _language_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.page.scss */ "wXOg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/myevent.services */ "ThQF");
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/contants.models */ "MJO3");







let LanguagePage = class LanguagePage {
    constructor(config, myEvent) {
        this.config = config;
        this.myEvent = myEvent;
        this.languages = this.config.availableLanguages;
        this.defaultLanguageCode = config.availableLanguages[0].code;
        let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].KEY_DEFAULT_LANGUAGE);
        if (defaultLang)
            this.defaultLanguageCode = defaultLang;
    }
    ngOnInit() {
    }
    onLanguageClick(language) {
        this.defaultLanguageCode = language.code;
    }
    languageConfirm() {
        this.myEvent.setLanguageData(this.defaultLanguageCode);
        window.localStorage.setItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    }
};
LanguagePage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"],] }] },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_5__["MyEvent"] }
];
LanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-language',
        template: _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_language_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LanguagePage);



/***/ }),

/***/ "wXOg":
/*!*********************************************!*\
  !*** ./src/app/language/language.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n\n.background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n}\n\n.background img {\n  top: -29px;\n  min-height: calc(100vh + 29px);\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 172.2px);\n  max-height: calc(100vh - 172.2px);\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 11;\n  background: var(--secondary);\n}\n\n.content-inner h2 {\n  margin: 0;\n  color: var(--text-dark);\n  padding: 14px 22px;\n  font-size: 1rem;\n  padding-bottom: 20px;\n}\n\n.content-inner ion-list {\n  margin: 0;\n  background: none;\n  padding: 0;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  max-height: calc(100vh - 255px);\n  min-height: calc(100vh - 255px);\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.content-inner ion-list ion-item {\n  padding: 13px 16px 13px 16px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --ripple-color: var(--transparent);\n  border-radius: 5px;\n  width: calc(100% - 13px);\n  margin: 0 auto;\n  margin-bottom: 6px;\n}\n\n.content-inner ion-list ion-item ion-radio {\n  --color-checked: var(--primary);\n  margin: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  margin-right: 17px;\n}\n\n.content-inner ion-list ion-item h3 {\n  margin: 0;\n  font-weight: 500;\n  letter-spacing: 0;\n  font-size: 0.95rem;\n  color: var(--white);\n}\n\n.content-inner .button.btn {\n  width: calc(100% - 35px);\n  margin: 0 auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVJO0VBQ0ksVUFBQTtFQUNBLDhCQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBREo7O0FBR0k7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQURSOztBQUlJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZSOztBQUlRO0VBQ0ksNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGWjs7QUFJWTtFQUNJLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FBRmhCOztBQU1ZO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSmhCOztBQVdJO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVRSIiwiZmlsZSI6Imxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbn1cblxuXG4uYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICBpbWcge1xuICAgICAgICB0b3A6IC0yOXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoICsgMjlweCk7XG4gICAgfVxufVxuXG4uY29udGVudC1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzIuMnB4KTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcyLjJweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDExO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMjJweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjU1cHgpO1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjU1cHgpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMTZweCAxM3B4IDE2cHg7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEzcHgpO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG5cbiAgICAgICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbi5idG4ge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzVweCk7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=language-language-module.js.map