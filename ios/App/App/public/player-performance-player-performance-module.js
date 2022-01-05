(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["player-performance-player-performance-module"],{

/***/ "rZkn":
/*!*****************************************************************!*\
  !*** ./src/app/player-performance/player-performance.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlayerPerformancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPerformancePageModule", function() { return PlayerPerformancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _player_performance_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-performance-routing.module */ "zBQ1");
/* harmony import */ var _player_performance_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-performance.page */ "EZ0C");








let PlayerPerformancePageModule = class PlayerPerformancePageModule {
};
PlayerPerformancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _player_performance_routing_module__WEBPACK_IMPORTED_MODULE_6__["PlayerPerformancePageRoutingModule"]
        ],
        declarations: [_player_performance_page__WEBPACK_IMPORTED_MODULE_7__["PlayerPerformancePage"]]
    })
], PlayerPerformancePageModule);



/***/ }),

/***/ "zBQ1":
/*!*************************************************************************!*\
  !*** ./src/app/player-performance/player-performance-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PlayerPerformancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPerformancePageRoutingModule", function() { return PlayerPerformancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _player_performance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-performance.page */ "EZ0C");




const routes = [
    {
        path: '',
        component: _player_performance_page__WEBPACK_IMPORTED_MODULE_3__["PlayerPerformancePage"]
    }
];
let PlayerPerformancePageRoutingModule = class PlayerPerformancePageRoutingModule {
};
PlayerPerformancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayerPerformancePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=player-performance-player-performance-module.js.map