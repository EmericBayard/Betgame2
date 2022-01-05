(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"],{

/***/ "3c0h":
/*!*************************************************!*\
  !*** ./src/app/wallet/wallet-routing.module.ts ***!
  \*************************************************/
/*! exports provided: WalletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function() { return WalletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet.page */ "PaDY");




const routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
    }
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalletPageRoutingModule);



/***/ }),

/***/ "43Fg":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.module.ts ***!
  \*****************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-routing.module */ "3c0h");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wallet.page */ "PaDY");








let WalletPageModule = class WalletPageModule {
};
WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_6__["WalletPageRoutingModule"]
        ],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_7__["WalletPage"]]
    })
], WalletPageModule);



/***/ }),

/***/ "Hp3Q":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-buttons ion-back-button {\n  --padding-start: 14px;\n}\nion-header ion-toolbar ion-title {\n  margin-left: 22px;\n}\nion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n.background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n}\n.background img {\n  top: -29px;\n  min-height: calc(100vh + 29px);\n}\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 172.2px - 57px);\n  max-height: calc(100vh - 172.2px - 57px);\n  overflow: hidden;\n  z-index: 11;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.content-inner::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--secondary);\n  opacity: 0.8;\n}\n.content-inner .contacts {\n  position: relative;\n  z-index: 99;\n  padding: 10px 25px;\n  display: flex;\n  align-items: center;\n}\n.content-inner .contacts ion-row {\n  width: 100%;\n  margin: 0 -5px;\n  position: relative;\n}\n.content-inner .contacts ion-row::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 1px;\n  height: 36px;\n  margin: auto;\n  background: var(--white);\n  opacity: 0.4;\n}\n.content-inner .contacts ion-row ion-col {\n  min-height: 60px;\n  padding: 0 5px;\n}\n.content-inner .contacts ion-row ion-col h2 {\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--white);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n.content-inner .contacts ion-row ion-col h2 ion-icon {\n  font-size: 1.4rem;\n  min-width: 30px;\n  color: var(--primary);\n}\nion-list {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  overflow-y: auto;\n  max-height: calc(100vh - 172.2px - 80px - 57px);\n  min-height: calc(100vh - 172.2px - 80px - 57px);\n  background: var(--bg-color);\n  z-index: 99;\n  padding-top: 20px;\n}\nion-list ion-item {\n  padding: 10px 23px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  background: var(--bg-color);\n  margin-bottom: 10px;\n}\nion-list ion-item .item-inner {\n  width: 100%;\n}\nion-list ion-item .item-inner h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.9rem;\n  padding-bottom: 10px;\n  font-weight: 400;\n}\nion-list ion-item .item-inner h2 span {\n  color: #ED2222;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  display: block;\n  font-weight: 500;\n}\nion-list ion-item .item-inner h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.78rem;\n  font-weight: 400;\n}\nion-list ion-item .item-inner h3 span {\n  color: var(--text-light);\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  display: block;\n  font-weight: 500;\n}\nion-list ion-item.added_to_wallet .item-inner h2 span {\n  color: #93C152;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxxQkFBQTtBQUFSO0FBR0k7RUFDSSxpQkFBQTtBQURSO0FBS0E7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFGSjtBQU1BO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUhKO0FBS0k7RUFDSSxVQUFBO0VBQ0EsOEJBQUE7QUFIUjtBQU9BO0VBQ0ksa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQUpKO0FBTUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUpSO0FBT0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUxSO0FBT1E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTFo7QUFPWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFMaEI7QUFTWTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQVBoQjtBQVNnQjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVBwQjtBQVNvQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBUHhCO0FBZUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBWko7QUFjSTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQVpSO0FBZVE7RUFDSSxXQUFBO0FBYlo7QUFlWTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQWJoQjtBQWVnQjtFQUNJLGNBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFicEI7QUFrQlk7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBaEJoQjtBQWtCZ0I7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWhCcEI7QUF5Qm9CO0VBQ0ksY0FBQTtBQXZCeEIiLCJmaWxlIjoid2FsbGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAgIGlvbi1idXR0b25zIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgICB9XG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbn1cblxuXG4uYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICBpbWcge1xuICAgICAgICB0b3A6IC0yOXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoICsgMjlweCk7XG4gICAgfVxufVxuXG4uY29udGVudC1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzIuMnB4IC0gNTdweCk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE3Mi4ycHggLSA1N3B4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDExO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG5cbiAgICAuY29udGFjdHMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcblxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tbGlzdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzIuMnB4IC0gODBweCAtIDU3cHgpO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzIuMnB4IC0gODBweCAtIDU3cHgpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyM3B4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cblxuICAgICAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0VEMjIyMjtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgICYuYWRkZWRfdG9fd2FsbGV0IHtcbiAgICAgICAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5M0MxNTI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "PaDY":
/*!***************************************!*\
  !*** ./src/app/wallet/wallet.page.ts ***!
  \***************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wallet.page.html */ "a3nW");
/* harmony import */ var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.page.scss */ "Hp3Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let WalletPage = class WalletPage {
    constructor() { }
    ngOnInit() {
    }
};
WalletPage.ctorParameters = () => [];
WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet',
        template: _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WalletPage);



/***/ }),

/***/ "a3nW":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Token BetGame</ion-title>\n    </ion-toolbar>\n\n    <div class=\"page-title\">\n        <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">159.50 B</h2>\n        <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".55s\">Solde disponible</h3>\n    </div>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"background center_img\">\n        <img src=\"assets/images/bg.png\" class=\"crop_img\">\n    </div>\n\n    <div class=\"content-inner\">\n        <div class=\"contacts animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">\n            <ion-row>\n                <ion-col class=\"d-flex\" size=\"6\">\n                    <h2 class=\"d-flex\">\n                        <ion-icon class=\"zmdi zmdi-long-arrow-down ion-text-start\"></ion-icon>\n                        Ajouter des Tokens\n                    </h2>\n                </ion-col>\n\n                <ion-col class=\"d-flex\" size=\"6\">\n                    <h2 class=\"d-flex end\">\n                        <ion-icon class=\"zmdi zmdi-long-arrow-up ion-text-start\"></ion-icon>\n                        Dépenser vos Tokens\n                    </h2>\n                </ion-col>\n            </ion-row>\n        </div>\n        \n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Prix d'entrée tournoi d'ouverture <span class=\"end\">4.00 B</span> </h2>\n                    <h3 class=\"d-flex\">Tournoi d'ouverture<span class=\"end\">21 Juin, 11:02</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">1ère place tournoi FootLocker<span class=\"end\">200.00 B</span> </h2>\n                    <h3 class=\"d-flex\">FootLocker <span class=\"end\">20 Juin, 11:00</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">1ère place tournoi Classico<span class=\"end\">24.00 B</span> </h2>\n                    <h3 class=\"d-flex\">Classico <span class=\"end\">13 Juin, 2:32</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Prix d'entrée tournoi C1<span class=\"end\">50.00 B</span> </h2>\n                    <h3 class=\"d-flex\">C1 <span class=\"end\">06 Juin, 07:09</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Prix d'entrée tournoi L2<span class=\"end\">50.00 B</span> </h2>\n                    <h3 class=\"d-flex\">L2 <span class=\"end\">01 Juin, 10:02</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">2ème place tournoi L2<span class=\"end\">20.00 B</span> </h2>\n                    <h3 class=\"d-flex\">L2<span class=\"end\">26 Mai, 9:58</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Gain du défi contre Manzibar<span class=\"end\">100.00 B</span> </h2>\n                    <h3 class=\"d-flex\">Défi 1 vs 1 <span class=\"end\">26 Mai, 10:00</span></h3>\n                </div>\n            </ion-item>\n            \n             \n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">4.00 B</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs CBR <span class=\"end\">21 Jun, 11:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">200.00 B</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">20 Jun, 11:00 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">24.00 B</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">13 Jun, 2:32 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">50.00 B</span> </h2>\n                    <h3 class=\"d-flex\">BLB vs PPD <span class=\"end\">06 Jun, 07:09 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">50.00 B</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">01 Jun, 10:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">20.00 B</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs GGS <span class=\"end\">26 May, 9:58 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">100.00 B</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">26 May, 10:00 pm</span></h3>\n                </div>\n            </ion-item> \n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">4.00 B</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs CBR <span class=\"end\">21 Jun, 11:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">200.00 B</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">20 Jun, 11:00 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">24.00 B</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">13 Jun, 2:32 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">BLB vs PPD <span class=\"end\">06 Jun, 07:09 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">01 Jun, 10:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">$20.00</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs GGS <span class=\"end\">26 May, 9:58 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">$100.00</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">26 May, 10:00 pm</span></h3>\n                </div>\n            </ion-item> \n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$4.00</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs CBR <span class=\"end\">21 Jun, 11:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">$200.00</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">20 Jun, 11:00 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">$24.00</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">13 Jun, 2:32 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">BLB vs PPD <span class=\"end\">06 Jun, 07:09 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">01 Jun, 10:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">$20.00</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs GGS <span class=\"end\">26 May, 9:58 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">$100.00</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">26 May, 10:00 pm</span></h3>\n                </div>\n            </ion-item> \n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$4.00</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs CBR <span class=\"end\">21 Jun, 11:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">$200.00</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">20 Jun, 11:00 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">$24.00</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">13 Jun, 2:32 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">BLB vs PPD <span class=\"end\">06 Jun, 07:09 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">01 Jun, 10:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">$20.00</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs GGS <span class=\"end\">26 May, 9:58 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">$100.00</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">26 May, 10:00 pm</span></h3>\n                </div>\n            </ion-item> \n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$4.00</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs CBR <span class=\"end\">21 Jun, 11:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">$200.00</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">20 Jun, 11:00 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">$24.00</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">13 Jun, 2:32 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">BLB vs PPD <span class=\"end\">06 Jun, 07:09 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">01 Jun, 10:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">$20.00</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs GGS <span class=\"end\">26 May, 9:58 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">$100.00</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">26 May, 10:00 pm</span></h3>\n                </div>\n            </ion-item> \n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$4.00</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs CBR <span class=\"end\">21 Jun, 11:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">$200.00</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">20 Jun, 11:00 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">$24.00</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">13 Jun, 2:32 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">BLB vs PPD <span class=\"end\">06 Jun, 07:09 pm</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\"> Joined a Contest <span class=\"end\">$50.00</span> </h2>\n                    <h3 class=\"d-flex\">MXT vs SKC <span class=\"end\">01 Jun, 10:02 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Won a Contest<span class=\"end\">$20.00</span> </h2>\n                    <h3 class=\"d-flex\">WLS vs GGS <span class=\"end\">26 May, 9:58 am</span></h3>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp added_to_wallet\">\n                <div class=\"item-inner\">\n                    <h2 class=\"d-flex\">Added to Wallet<span class=\"end\">$100.00</span> </h2>\n                    <h3 class=\"d-flex\">Bank of USA <span class=\"end\">26 May, 10:00 pm</span></h3>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=wallet-wallet-module.js.map