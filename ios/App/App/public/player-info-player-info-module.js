(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["player-info-player-info-module"],{

/***/ "6S8b":
/*!***********************************************************!*\
  !*** ./src/app/player-info/player-info-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PlayerInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInfoPageRoutingModule", function() { return PlayerInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _player_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-info.page */ "J971");




const routes = [
    {
        path: '',
        component: _player_info_page__WEBPACK_IMPORTED_MODULE_3__["PlayerInfoPage"]
    }
];
let PlayerInfoPageRoutingModule = class PlayerInfoPageRoutingModule {
};
PlayerInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayerInfoPageRoutingModule);



/***/ }),

/***/ "qf9/":
/*!***************************************************!*\
  !*** ./src/app/player-info/player-info.module.ts ***!
  \***************************************************/
/*! exports provided: PlayerInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInfoPageModule", function() { return PlayerInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _player_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-info-routing.module */ "6S8b");
/* harmony import */ var _player_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-info.page */ "J971");








let PlayerInfoPageModule = class PlayerInfoPageModule {
};
PlayerInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _player_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["PlayerInfoPageRoutingModule"]
        ],
        declarations: [_player_info_page__WEBPACK_IMPORTED_MODULE_7__["PlayerInfoPage"]]
    })
], PlayerInfoPageModule);



/***/ })

}]);
//# sourceMappingURL=player-info-player-info-module.js.map