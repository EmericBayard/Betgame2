(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"],{

/***/ "GOi3":
/*!*********************************************************!*\
  !*** ./src/app/my-profile/my-profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function() { return MyProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile.page */ "RJJZ");




const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }
];
let MyProfilePageRoutingModule = class MyProfilePageRoutingModule {
};
MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyProfilePageRoutingModule);



/***/ }),

/***/ "IptF":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.module.ts ***!
  \*************************************************/
/*! exports provided: MyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile-routing.module */ "GOi3");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-profile.page */ "RJJZ");








let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyProfilePageRoutingModule"]
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"]]
    })
], MyProfilePageModule);



/***/ }),

/***/ "P2Tq":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n\nion-header {\n  background: url('5.jpg');\n}\n\n.page-title {\n  padding-bottom: 35px;\n}\n\n.page-title .text_box {\n  width: 100%;\n}\n\n.page-title .text_box h3 {\n  min-height: unset;\n}\n\n.page-title .img_container {\n  position: relative;\n  min-width: 106px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.page-title .img_container ion-icon {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  background: var(--primary);\n  color: var(--white);\n  font-size: 1.1rem;\n  min-width: 30px;\n  text-align: center;\n  height: 30px;\n  border-radius: 50%;\n  line-height: 31px;\n  z-index: 99;\n}\n\n.page-title .img_container .img_box {\n  min-width: 90px;\n  max-width: 90px;\n  height: 90px;\n  border-radius: 50%;\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 195px);\n  max-height: calc(100vh - 195px);\n  overflow: hidden;\n  overflow-y: auto;\n  padding-top: 15px;\n  z-index: 11;\n  background: var(--secondary);\n}\n\n.form ion-list {\n  padding-top: 12px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.form ion-list ion-item {\n  border: none !important;\n  margin-bottom: 25px;\n}\n\n.form ion-list ion-item h2 {\n  margin: 0;\n  color: var(--primary);\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n\n.form ion-list ion-item.item-datetime ion-icon {\n  color: var(--text-light);\n  min-width: 24px;\n  font-size: 1rem;\n  padding: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL215LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFDSTtFQUNJLFdBQUE7QUFDUjs7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBRFI7O0FBR1E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURaOztBQUlRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGWjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQU5KOztBQVVJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUFI7O0FBU1E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FBUFo7O0FBU1k7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUGhCOztBQVlZO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFWaEIiLCJmaWxlIjoibXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbi81LmpwZyk7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcblxuICAgIC50ZXh0X2JveCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmltZ19jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi13aWR0aDogMTA2cHg7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWdfYm94IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTBweDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cbi5jb250ZW50LWlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE5NXB4KTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTk1cHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICB6LWluZGV4OiAxMTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuXG4uZm9ybSB7XG4gICAgaW9uLWxpc3QgeyBcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7IFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pdGVtLml0ZW0tZGF0ZXRpbWUge1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "RJJZ":
/*!***********************************************!*\
  !*** ./src/app/my-profile/my-profile.page.ts ***!
  \***********************************************/
/*! exports provided: MyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePage", function() { return MyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-profile.page.html */ "uPVF");
/* harmony import */ var _my_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile.page.scss */ "P2Tq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let MyProfilePage = class MyProfilePage {
    constructor(alertController, navCtrl) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Logout',
                message: 'Are you sure you want to logout?',
                mode: 'md',
                cssClass: 'animate__animated animate__zoomIn',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.navCtrl.navigateRoot(['./sign-in']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
MyProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-profile',
        template: _raw_loader_my_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyProfilePage);



/***/ }),

/***/ "uPVF":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n    <div class=\"page-title d-flex\">\n        <div class=\"text_box\">\n            <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">{{'my_profile' | translate}}</h2>\n            <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".55s\">{{'everything_about_you' | translate}}</h3>\n        </div>\n        <div class=\"img_container d-flex\">\n            <ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\n            <div class=\"img_box center_img end\">\n                <img src=\"assets/images/users/user1.png\" class=\"crop_img\">\n            </div>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"content-inner\">\n        <div class=\"form\">\n            <ion-list class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                    <div class=\"item_inner\">\n                        <ion-label>Pseudo</ion-label>\n                        <ion-input mode=\"md\" type=\"name\" placeholder=\"{{'enter_full_name' | translate}}\" readonly value=\"Samanthateam123\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                    <div class=\"item_inner\">\n                        <ion-label>{{'email_address' | translate}}</ion-label>\n                        <ion-input mode=\"md\" type=\"email\" placeholder=\"{{'enter_email_address' | translate}}\" readonly value=\"samantha@mail.com\"></ion-input>\n                    </div>\n                </ion-item>\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                    <div class=\"item_inner\">\n                        <ion-label>{{'phone_number' | translate}}</ion-label>\n                        <div class=\"input-box d-flex\">\n                            <ion-input mode=\"md\" type=\"text\" placeholder=\"{{'enter_phone_number' | translate}}\" readonly value=\"+1 987 654 3210\"></ion-input>\n                        </div>\n                    </div>\n                </ion-item>\n\n                <!--\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                    <div class=\"item_inner\">\n                        <ion-label>{{'birthdate' | translate}}</ion-label>\n                        <div class=\"input-box d-flex\">\n                            <ion-datetime mode=\"ios\" displayFormat=\"DD MMMM YYYY\" placeholder=\"{{'select_birthdate' | translate}}\"></ion-datetime>\n                           <ion-icon class=\"zmdi zmdi-calendar-alt end ion-text-end\"></ion-icon>\n                        </div>\n                    </div>\n                </ion-item>   \n-->\n\n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                    <div class=\"item_inner\">\n                        <ion-label>{{'birthdate' | translate}}</ion-label>\n                        <div class=\"input-box d-flex\">\n                            <ion-input mode=\"md\" type=\"text\" placeholder=\"{{'select_birthdate' | translate}}\" readonly value=\"22 Jun 1990\"></ion-input>\n                        </div>\n                    </div>\n                </ion-item>    \n                \n                <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\" (click)=\"logout()\">\n                    <div class=\"item_inner\">\n                      <h2>{{'logout' | translate}}</h2>\n                    </div>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=my-profile-my-profile-module.js.map