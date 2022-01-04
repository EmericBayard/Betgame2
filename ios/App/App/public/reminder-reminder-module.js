(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reminder-reminder-module"],{

/***/ "lbJn":
/*!*****************************************************!*\
  !*** ./src/app/reminder/reminder-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ReminderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderPageRoutingModule", function() { return ReminderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reminder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reminder.page */ "qf33");




const routes = [
    {
        path: '',
        component: _reminder_page__WEBPACK_IMPORTED_MODULE_3__["ReminderPage"]
    }
];
let ReminderPageRoutingModule = class ReminderPageRoutingModule {
};
ReminderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReminderPageRoutingModule);



/***/ }),

/***/ "syiy":
/*!*********************************************!*\
  !*** ./src/app/reminder/reminder.module.ts ***!
  \*********************************************/
/*! exports provided: ReminderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderPageModule", function() { return ReminderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reminder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reminder-routing.module */ "lbJn");
/* harmony import */ var _reminder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reminder.page */ "qf33");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let ReminderPageModule = class ReminderPageModule {
};
ReminderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _reminder_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReminderPageRoutingModule"]
        ],
        declarations: [_reminder_page__WEBPACK_IMPORTED_MODULE_6__["ReminderPage"]]
    })
], ReminderPageModule);



/***/ })

}]);
//# sourceMappingURL=reminder-reminder-module.js.map