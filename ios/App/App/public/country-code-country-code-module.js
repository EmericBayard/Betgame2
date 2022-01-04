(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country-code-country-code-module"],{

/***/ "VocU":
/*!*****************************************************!*\
  !*** ./src/app/country-code/country-code.module.ts ***!
  \*****************************************************/
/*! exports provided: CountryCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCodePageModule", function() { return CountryCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _country_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country-code-routing.module */ "dC5/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _country_code_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country-code.page */ "clGa");








let CountryCodePageModule = class CountryCodePageModule {
};
CountryCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _country_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["CountryCodePageRoutingModule"]
        ],
        declarations: [_country_code_page__WEBPACK_IMPORTED_MODULE_7__["CountryCodePage"]]
    })
], CountryCodePageModule);



/***/ }),

/***/ "dC5/":
/*!*************************************************************!*\
  !*** ./src/app/country-code/country-code-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CountryCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCodePageRoutingModule", function() { return CountryCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _country_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-code.page */ "clGa");




const routes = [
    {
        path: '',
        component: _country_code_page__WEBPACK_IMPORTED_MODULE_3__["CountryCodePage"]
    }
];
let CountryCodePageRoutingModule = class CountryCodePageRoutingModule {
};
CountryCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CountryCodePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=country-code-country-code-module.js.map