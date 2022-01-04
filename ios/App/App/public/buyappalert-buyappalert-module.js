(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buyappalert-buyappalert-module"],{

/***/ "DrSw":
/*!***********************************************************!*\
  !*** ./src/app/buyappalert/buyappalert-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BuyappalertPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyappalertPageRoutingModule", function() { return BuyappalertPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buyappalert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyappalert.page */ "WrFF");




const routes = [
    {
        path: '',
        component: _buyappalert_page__WEBPACK_IMPORTED_MODULE_3__["BuyappalertPage"]
    }
];
let BuyappalertPageRoutingModule = class BuyappalertPageRoutingModule {
};
BuyappalertPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuyappalertPageRoutingModule);



/***/ }),

/***/ "ihH0":
/*!***************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.module.ts ***!
  \***************************************************/
/*! exports provided: BuyappalertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyappalertPageModule", function() { return BuyappalertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _buyappalert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyappalert-routing.module */ "DrSw");
/* harmony import */ var _buyappalert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyappalert.page */ "WrFF");







let BuyappalertPageModule = class BuyappalertPageModule {
};
BuyappalertPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buyappalert_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyappalertPageRoutingModule"]
        ],
        declarations: [_buyappalert_page__WEBPACK_IMPORTED_MODULE_6__["BuyappalertPage"]]
    })
], BuyappalertPageModule);



/***/ })

}]);
//# sourceMappingURL=buyappalert-buyappalert-module.js.map