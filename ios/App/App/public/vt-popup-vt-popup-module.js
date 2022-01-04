(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vt-popup-vt-popup-module"],{

/***/ "Dr1u":
/*!*****************************************************!*\
  !*** ./src/app/vt-popup/vt-popup-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: VtPopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VtPopupPageRoutingModule", function() { return VtPopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vt_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vt-popup.page */ "gmVL");




const routes = [
    {
        path: '',
        component: _vt_popup_page__WEBPACK_IMPORTED_MODULE_3__["VtPopupPage"]
    }
];
let VtPopupPageRoutingModule = class VtPopupPageRoutingModule {
};
VtPopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VtPopupPageRoutingModule);



/***/ }),

/***/ "vY8V":
/*!*********************************************!*\
  !*** ./src/app/vt-popup/vt-popup.module.ts ***!
  \*********************************************/
/*! exports provided: VtPopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VtPopupPageModule", function() { return VtPopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vt-popup-routing.module */ "Dr1u");
/* harmony import */ var _vt_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vt-popup.page */ "gmVL");







let VtPopupPageModule = class VtPopupPageModule {
};
VtPopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__["VtPopupPageRoutingModule"]
        ],
        declarations: [_vt_popup_page__WEBPACK_IMPORTED_MODULE_6__["VtPopupPage"]]
    })
], VtPopupPageModule);



/***/ })

}]);
//# sourceMappingURL=vt-popup-vt-popup-module.js.map