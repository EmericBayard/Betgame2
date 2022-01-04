(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "+aji":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"title-inner d-flex\">\n                Mon compte\n            </div>\n        </ion-title>\n    </ion-toolbar>\n\n    <div class=\"page-title d-flex\" (click)=\"my_profile()\">\n        <div class=\"img_box center_img\">\n            <img src=\"assets/images/users/user1.png\" class=\"crop_img\">\n        </div>\n        <div class=\"text_box\">\n            <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">Samanthateam123</h2>\n            <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".55s\">Voir le profil</h3>\n        </div>\n    </div>\n\n\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"background center_img\">\n        <img src=\"assets/images/bg.png\" class=\"crop_img\">\n    </div>\n\n    <div class=\"content-inner\">\n        <div class=\"lavel animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n            <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"my_points()\">\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-fire\" style=\"color: #FDBE01\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h2 class=\"d-flex\">Niveau 89\n                            <span class=\"end\">8,871 token BetGame </span>\n                        </h2>\n                        <div class=\"progress_bar\">\n                            <div class=\"progress_bar_active\" style=\"width: 80%\">\n                            </div>\n                        </div>\n\n                        <h3>gagne 129 pour atteindre le niveau 90</h3>\n                    </div>\n                </div>\n            </ion-item>\n        </div>\n\n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"leaderboard()\">\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-assignment-account\" style=\"color: #347FEF\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h2>Rang</h2>\n                        <h3>Jouer des matchs afin d'améliorer votre classement</h3>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"my_team()\">\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-assignment-account\" style=\"color: #347FEF\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h2>Mes équipes</h2>\n                        <h3>Consulter mes équipes</h3>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"about_us()\">\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-assignment-alert\" style=\"color: #2DAA4F\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h2>Qui sommes-nous ?</h2>\n                        <h3>Le projet BetGame</h3>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"support()\">\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-email\" style=\"color: #EA4235\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h2>{{'support' | translate}}</h2>\n                        <h3>Contacter nous en cas de problème</h3>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"privacy_policy()\">\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-assignment\" style=\"color: #FDBE01\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h2>Politique de confidentialité</h2>\n                        <h3>Comment nous gérons vos données</h3>\n                    </div>\n                </div>\n            </ion-item>\n\n            <!--<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"language()\">\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-globe\" style=\"color: #347FEF\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h2>{{'change_languade' | translate}}</h2>\n                        <h3>{{'set_your_prefeerred_language' | translate}}</h3>\n                    </div>\n                </div>\n            </ion-item>-->\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"faqs()\">\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-pin-help\" style=\"color: #2DAA4F\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h2>{{'faqs' | translate}}</h2>\n                        <h3>{{'get_your_question_answered' | translate}}</h3>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"stats()\">\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-assignment-o\" style=\"color: red\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h2>Stats</h2>\n                        <h3>Consulter vos statistiques</h3>\n                    </div>\n                </div>\n            </ion-item>\n\n            \n        </ion-list>\n    </div>\n</ion-content>");

/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-routing.module */ "sGj0");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.page */ "mdzQ");








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "mdzQ":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "+aji");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "n3U/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buyappalert/buyappalert.page */ "WrFF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let AccountPage = class AccountPage {
    constructor(route, modalController, config) {
        this.route = route;
        this.modalController = modalController;
        this.config = config;
    }
    ngOnInit() {
    }
    my_team() {
        this.route.navigate(['./my-team']);
    }
    stats() {
        this.route.navigate(['./my-stat']);
    }
    my_profile() {
        this.route.navigate(['./my-profile']);
    }
    my_points() {
        this.route.navigate(['./my-points']);
    }
    leaderboard() {
        this.route.navigate(['./leaderboard']);
    }
    about_us() {
        this.route.navigate(['./about-us']);
    }
    support() {
        this.route.navigate(['./support']);
    }
    privacy_policy() {
        this.route.navigate(['./privacy-policy']);
    }
    language() {
        this.route.navigate(['./language']);
    }
    faqs() {
        this.route.navigate(['./faqs']);
    }
    buyappalert() {
        this.modalController.create({ component: _buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_6__["BuyappalertPage"] }).then((modalElement) => modalElement.present());
    }
    developed_by() {
        window.open("https://opuslab.works/", '_system', 'location=no');
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"],] }] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountPage);



/***/ }),

/***/ "n3U/":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  padding: 0 22px !important;\n}\n\nion-header {\n  background-image: linear-gradient(#eb01a5, #391431);\n}\n\n.page-title {\n  padding-bottom: 35px;\n}\n\n.page-title .img_box {\n  min-width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  margin-right: 20px;\n}\n\n.page-title h2 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  padding-bottom: 7px;\n  color: var(--white);\n  letter-spacing: 0;\n}\n\n.page-title h3 {\n  min-height: unset;\n}\n\nion-content {\n  overflow: hidden;\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 180px - 58px);\n  max-height: calc(100vh - 180px - 58px);\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 11;\n  background: var(--secondary);\n}\n\n.content-inner ion-item {\n  padding: 14px 22px 14px 22px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --ripple-color: var(--transparent);\n  border-radius: 5px;\n  width: calc(100% - 13px);\n  margin: 0 auto;\n  margin-bottom: 6px;\n}\n\n.content-inner ion-item .icon_box {\n  min-width: 35px;\n}\n\n.content-inner ion-item .icon_box ion-icon {\n  font-size: 1.2rem;\n}\n\n.content-inner ion-item .item-inner {\n  align-items: flex-start;\n}\n\n.content-inner ion-item .text_box {\n  width: 100%;\n}\n\n.content-inner ion-item .text_box h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.9rem;\n  padding-bottom: 10px;\n  font-weight: 400;\n}\n\n.content-inner ion-item .text_box h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.content-inner ion-list {\n  margin: 0;\n  background: none;\n  padding: 0;\n  min-height: calc(100vh - 180px - 95px - 57px);\n  max-height: calc(100vh - 180px - 95px - 57px);\n  overflow: hidden;\n  overflow-y: auto;\n  background: var(--bg-color);\n  border-radius: 25px 25px 0 0;\n  padding-top: 15px;\n  position: relative;\n}\n\n.content-inner .lavel ion-item {\n  padding-top: 25px;\n}\n\n.progress_bar {\n  background: var(--secondary-light);\n  width: 100%;\n  display: block;\n  height: 5px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 5px;\n  margin-bottom: 8px;\n}\n\n.progress_bar .progress_bar_active {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  display: block;\n  background: var(--primary);\n  animation: progress_bar_active 2s 0.1s;\n  border-radius: 5px;\n}\n\n@keyframes progress_bar_active {\n  0% {\n    width: 0px;\n  }\n  100% {\n    max-width: auto;\n  }\n}\n\n.developed_by {\n  padding: 10px 20px 10px 20px;\n  background: var(--secondary-dark);\n  position: sticky;\n  bottom: 0;\n  border-radius: 20px 20px 0 0;\n}\n\n.developed_by h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.developed_by img {\n  max-width: 150px;\n}\n\n.buy_this_app {\n  background: var(--primary);\n  border-radius: 50px;\n  height: 43px;\n  display: flex;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  padding: 0 18px;\n}\n\n.buy_this_app h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1rem;\n  width: 100%;\n  text-align: center;\n}\n\n.buy_this_app h2 ion-icon {\n  font-size: 1rem;\n  min-width: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUVJLG1EQUFBO0FBQUo7O0FBR0E7RUFDSSxvQkFBQTtBQUFKOztBQUVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQVI7O0FBR0k7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBSUk7RUFDSSxpQkFBQTtBQUZSOztBQU9BO0VBRUksZ0JBQUE7QUFMSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFQSjs7QUFVSTtFQUNJLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUlI7O0FBVVE7RUFDSSxlQUFBO0FBUlo7O0FBVVk7RUFDSSxpQkFBQTtBQVJoQjs7QUFhUTtFQUNJLHVCQUFBO0FBWFo7O0FBY1E7RUFDSSxXQUFBO0FBWlo7O0FBY1k7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFaaEI7O0FBZ0JZO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWRoQjs7QUFxQkk7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQW5CUjs7QUF3QlE7RUFDSSxpQkFBQTtBQXRCWjs7QUEyQkE7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBeEJKOztBQTBCSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQXhCUjs7QUE2QkE7RUFDSTtJQUNJLFVBQUE7RUExQk47RUE2QkU7SUFDSSxlQUFBO0VBM0JOO0FBQ0Y7O0FBOEJBO0VBQ0ksNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0FBNUJKOztBQTZCSTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTNCUjs7QUE4Qkk7RUFDSSxnQkFBQTtBQTVCUjs7QUFnQ0E7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGVBQUE7QUE3Qko7O0FBK0JJO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTdCUjs7QUErQlE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQTdCWiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwIDIycHggIWltcG9ydGFudDtcbn1cblxuaW9uLWhlYWRlciB7XG4gICAgLy9iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vNS5qcGcpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZWIwMWE1LCAjMzkxNDMxKTsgXG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcblxuICAgIC5pbWdfYm94IHtcbiAgICAgICAgbWluLXdpZHRoOiA3NXB4O1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgICAgbWluLWhlaWdodDogdW5zZXQ7XG5cbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgIFxufVxuXG4uY29udGVudC1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCAtIDU4cHgpO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCAtIDU4cHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB6LWluZGV4OiAxMTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIFxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDIycHggMTRweCAyMnB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxM3B4KTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcblxuICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzNXB4O1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCAtIDk1cHggLSA1N3B4KTtcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE4MHB4IC0gOTVweCAtIDU3cHgpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmxhdmVsIHtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvZ3Jlc3NfYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAucHJvZ3Jlc3NfYmFyX2FjdGl2ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzc19iYXJfYWN0aXZlIDJzIDAuMXM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG5cblxuQGtleWZyYW1lcyBwcm9ncmVzc19iYXJfYWN0aXZlIHtcbiAgICAwJSB7XG4gICAgICAgIHdpZHRoOiAwcHg7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIG1heC13aWR0aDogYXV0bztcbiAgICB9XG59XG5cbi5kZXZlbG9wZWRfYnkge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIH1cbn1cblxuLmJ1eV90aGlzX2FwcCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDAgMThweDtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyM3B4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "sGj0":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "mdzQ");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map