(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faqs-faqs-module"],{

/***/ "D7RP":
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n\n.background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n}\n\n.background img {\n  top: -29px;\n  min-height: calc(100vh + 29px);\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 172.2px);\n  max-height: calc(100vh - 172.2px);\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 11;\n  background: var(--secondary);\n}\n\nion-list {\n  margin: 0;\n  background: none;\n}\n\nion-list ion-item {\n  padding: 14px 20px 14px 20px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  transition: all 0.5s;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--white);\n  font-weight: 400;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n}\n\nion-list ion-item .item_inner h3 ion-icon {\n  color: var(--text-light);\n  font-size: 1.5rem;\n  width: 12px;\n  transition: all 0.5s;\n}\n\nion-list ion-item .item_inner .text_box {\n  transition: all 0.5s;\n  max-height: 0px;\n  overflow: hidden;\n}\n\nion-list ion-item .item_inner .text_box p {\n  color: var(--white);\n  font-size: 0.75rem;\n  font-weight: 300;\n  line-height: 24px;\n  margin: 0;\n  padding-top: 20px;\n}\n\nion-list ion-item.active .item_inner h3 ion-icon {\n  transform: rotate(180deg);\n}\n\nion-list ion-item.active .item_inner .text_box {\n  max-height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZhcXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUk7RUFDSSxVQUFBO0VBQ0EsOEJBQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFLQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlJO0VBQ0ksNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFGUjs7QUFJUTtFQUNJLFdBQUE7QUFGWjs7QUFJWTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUZoQjs7QUFJZ0I7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBRnBCOztBQVFZO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFOaEI7O0FBUWdCO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFOcEI7O0FBYWdCO0VBQ0kseUJBQUE7QUFYcEI7O0FBY2dCO0VBQ0ksNEJBQUE7QUFacEIiLCJmaWxlIjoiZmFxcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG5cblxuLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgaW1nIHtcbiAgICAgICAgdG9wOiAtMjlweDtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCArIDI5cHgpO1xuICAgIH1cbn1cblxuLmNvbnRlbnQtaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcyLjJweCk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE3Mi4ycHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB6LWluZGV4OiAxMTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuXG59XG5cbmlvbi1saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTRweCAyMHB4IDE0cHggMjBweDtcbiAgICAgICAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcblxuICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIC50ZXh0X2JveCB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIC5pdGVtX2lubmVyIHtcbiAgICAgICAgICAgICAgICBoMyBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */");

/***/ }),

/***/ "EMSM":
/*!*********************************************!*\
  !*** ./src/app/faqs/faqs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FaqsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageRoutingModule", function() { return FaqsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.page */ "c3PB");




const routes = [
    {
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_3__["FaqsPage"]
    }
];
let FaqsPageRoutingModule = class FaqsPageRoutingModule {
};
FaqsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqsPageRoutingModule);



/***/ }),

/***/ "NWDk":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"page-title\">\n        <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">{{'faqs' | translate}}</h2>\n        <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".8s\">{{'get_your_answers' | translate}}</h3>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"content-inner\">\n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" [ngClass]=\"faqExpand1 ? 'active' : '' \" (click)=\"faqExpandToggle1()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'how_to_play' | translate}}?\n                        <ion-icon class=\"zmdi zmdi-chevron-down end ion-text-end\"></ion-icon>\n                    </h3>\n\n                    <div class=\"text_box\">\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" [ngClass]=\"faqExpand2 ? 'active' : '' \" (click)=\"faqExpandToggle2()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'how_to_add_money' | translate}}?\n                        <ion-icon class=\"zmdi zmdi-chevron-down end ion-text-end\"></ion-icon>\n                    </h3>\n                    <div class=\"text_box\">\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" [ngClass]=\"faqExpand3 ? 'active' : '' \" (click)=\"faqExpandToggle3()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'how_to_select_player' | translate}}?\n                        <ion-icon class=\"zmdi zmdi-chevron-down end ion-text-end\"></ion-icon>\n                    </h3>\n                    <div class=\"text_box\">\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" [ngClass]=\"faqExpand4 ? 'active' : '' \" (click)=\"faqExpandToggle4()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'how_to_change_profile_picture' | translate}}?\n                        <ion-icon class=\"zmdi zmdi-chevron-down end ion-text-end\"></ion-icon>\n                    </h3>\n                    <div class=\"text_box\">\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" [ngClass]=\"faqExpand5 ? 'active' : '' \" (click)=\"faqExpandToggle5()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'how_to_send_money_to_bank' | translate}}?\n                        <ion-icon class=\"zmdi zmdi-chevron-down end ion-text-end\"></ion-icon>\n                    </h3>\n                    <div class=\"text_box\">\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n\n\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" [ngClass]=\"faqExpand6 ? 'active' : '' \" (click)=\"faqExpandToggle6()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'how_to_shop' | translate}}?\n                        <ion-icon class=\"zmdi zmdi-chevron-down end ion-text-end\"></ion-icon>\n                    </h3>\n                    <div class=\"text_box\">\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n\n\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" [ngClass]=\"faqExpand7 ? 'active' : '' \" (click)=\"faqExpandToggle7()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'how_to_change_language' | translate}}?\n                        <ion-icon class=\"zmdi zmdi-chevron-down end ion-text-end\"></ion-icon>\n                    </h3>\n                    <div class=\"text_box\">\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" [ngClass]=\"faqExpand8 ? 'active' : '' \" (click)=\"faqExpandToggle8()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'can_i_login_throught_social_account' | translate}}?\n                        <ion-icon class=\"zmdi zmdi-chevron-down end ion-text-end\"></ion-icon>\n                    </h3>\n                    <div class=\"text_box\">\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" [ngClass]=\"faqExpand9 ? 'active' : '' \" (click)=\"faqExpandToggle9()\">\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'how_to_logout_my_account' | translate}}?\n                        <ion-icon class=\"zmdi zmdi-chevron-down end ion-text-end\"></ion-icon>\n                    </h3>\n                    <div class=\"text_box\">\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </ion-item>\n\n        </ion-list>\n    </div>\n</ion-content>");

/***/ }),

/***/ "Toy+":
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.module.ts ***!
  \*************************************/
/*! exports provided: FaqsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function() { return FaqsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faqs-routing.module */ "EMSM");
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faqs.page */ "c3PB");








let FaqsPageModule = class FaqsPageModule {
};
FaqsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _faqs_routing_module__WEBPACK_IMPORTED_MODULE_6__["FaqsPageRoutingModule"]
        ],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_7__["FaqsPage"]]
    })
], FaqsPageModule);



/***/ }),

/***/ "c3PB":
/*!***********************************!*\
  !*** ./src/app/faqs/faqs.page.ts ***!
  \***********************************/
/*! exports provided: FaqsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPage", function() { return FaqsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faqs.page.html */ "NWDk");
/* harmony import */ var _faqs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqs.page.scss */ "D7RP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FaqsPage = class FaqsPage {
    constructor() { }
    ngOnInit() {
    }
    reset() {
        this.faqExpand1 = false;
        this.faqExpand2 = false;
        this.faqExpand3 = false;
        this.faqExpand4 = false;
        this.faqExpand5 = false;
        this.faqExpand6 = false;
        this.faqExpand7 = false;
        this.faqExpand8 = false;
        this.faqExpand9 = false;
    }
    faqExpandToggle1() {
        this.reset();
        this.faqExpand1 = !this.faqExpand1;
    }
    faqExpandToggle2() {
        this.reset();
        this.faqExpand2 = !this.faqExpand2;
    }
    faqExpandToggle3() {
        this.reset();
        this.faqExpand3 = !this.faqExpand3;
    }
    faqExpandToggle4() {
        this.reset();
        this.faqExpand4 = !this.faqExpand4;
    }
    faqExpandToggle5() {
        this.reset();
        this.faqExpand5 = !this.faqExpand5;
    }
    faqExpandToggle6() {
        this.reset();
        this.faqExpand6 = !this.faqExpand6;
    }
    faqExpandToggle7() {
        this.reset();
        this.faqExpand7 = !this.faqExpand7;
    }
    faqExpandToggle8() {
        this.reset();
        this.faqExpand8 = !this.faqExpand8;
    }
    faqExpandToggle9() {
        this.reset();
        this.faqExpand9 = !this.faqExpand9;
    }
};
FaqsPage.ctorParameters = () => [];
FaqsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faqs',
        template: _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faqs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaqsPage);



/***/ })

}]);
//# sourceMappingURL=faqs-faqs-module.js.map