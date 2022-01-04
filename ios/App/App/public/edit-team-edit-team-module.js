(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-team-edit-team-module"],{

/***/ "2DAJ":
/*!*********************************************!*\
  !*** ./src/app/edit-team/edit-team.page.ts ***!
  \*********************************************/
/*! exports provided: EditTeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamPage", function() { return EditTeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_team_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-team.page.html */ "NnSs");
/* harmony import */ var _edit_team_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-team.page.scss */ "YwPm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EditTeamPage = class EditTeamPage {
    constructor() { }
    ngOnInit() {
    }
};
EditTeamPage.ctorParameters = () => [];
EditTeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-team',
        template: _raw_loader_edit_team_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_team_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditTeamPage);



/***/ }),

/***/ "DvQv":
/*!***********************************************!*\
  !*** ./src/app/edit-team/edit-team.module.ts ***!
  \***********************************************/
/*! exports provided: EditTeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamPageModule", function() { return EditTeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_team_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-team-routing.module */ "E5YA");
/* harmony import */ var _edit_team_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-team.page */ "2DAJ");








let EditTeamPageModule = class EditTeamPageModule {
};
EditTeamPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _edit_team_routing_module__WEBPACK_IMPORTED_MODULE_6__["EditTeamPageRoutingModule"]
        ],
        declarations: [_edit_team_page__WEBPACK_IMPORTED_MODULE_7__["EditTeamPage"]]
    })
], EditTeamPageModule);



/***/ }),

/***/ "E5YA":
/*!*******************************************************!*\
  !*** ./src/app/edit-team/edit-team-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditTeamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamPageRoutingModule", function() { return EditTeamPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-team.page */ "2DAJ");




const routes = [
    {
        path: '',
        component: _edit_team_page__WEBPACK_IMPORTED_MODULE_3__["EditTeamPage"]
    }
];
let EditTeamPageRoutingModule = class EditTeamPageRoutingModule {
};
EditTeamPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditTeamPageRoutingModule);



/***/ }),

/***/ "NnSs":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-team/edit-team.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <div class=\"title-inner d-flex\">\n                <h3 class=\"ion-text-center\">Samanthateam123 </h3>\n\n                <span class=\"end\">\n<!--                    <ion-icon class=\"zmdi zmdi-close ion-text-center\"></ion-icon>-->\n                    <ion-icon class=\"zmdi zmdi-edit ion-text-center\"></ion-icon>\n                </span>\n            </div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<div class=\"background center_img\" fullscreen>\n    <img src=\"assets/images/ground.png\" class=\"crop_img\">\n</div>\n\n<ion-content fullscreen>\n    <div class=\"container\">\n        <div class=\"team_players d-flex\">\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n<!--                <p>C</p>-->\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player6.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #21b5f6\">J Caven</h3>\n                <h4>9.0</h4>\n            </div>\n        </div>\n\n        <div class=\"team_players d-flex\">\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n                <p>C</p>\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player1.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #6A37FF\">P Williamson</h3>\n                <h4>9.0</h4>\n            </div>\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n                <p>VC</p>\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player2.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #21b5f6\">B Cordero</h3>\n                <h4>9.0</h4>\n            </div>\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n<!--                <p>C</p>-->\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player4.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #6A37FF\">R Jackson</h3>\n                <h4>9.0</h4>\n            </div>\n        </div>\n\n        <div class=\"team_players d-flex\">\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n<!--                <p>C</p>-->\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player5.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #6A37FF\">K Simmons</h3>\n                <h4>9.0</h4>\n            </div>\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n<!--                <p>C</p>-->\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player7.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #21b5f6\">J Donald</h3>\n                <h4>9.0</h4>\n            </div>\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n<!--                <p>C</p>-->\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player8.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #6A37FF\">R Simmons</h3>\n                <h4>9.0</h4>\n            </div>\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n<!--                <p>C</p>-->\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player9.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #21b5f6\">L Opero</h3>\n                <h4>9.0</h4>\n            </div>\n        </div>\n\n        <div class=\"team_players d-flex\">\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n<!--                <p>C</p>-->\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player10.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #6A37FF\">W Ubon</h3>\n                <h4>9.0</h4>\n            </div>\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n<!--                <p>C</p>-->\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player12.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #21b5f6\">P Johns</h3>\n                <h4>9.0</h4>\n            </div>\n            <div class=\"player ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\".2s\">\n<!--                <p>C</p>-->\n                <div class=\"img_box center_img\">\n                    <img src=\"assets/images/players/player11.png\" class=\"crop_img\">\n                </div>\n                <h3 style=\"background: #6A37FF\">D Danie</h3>\n                <h4>9.0</h4>\n            </div>\n        </div>\n    </div>\n    <div>\n        <div style=\"display:flex;flex-direction:column;color:white;justify-content:center;align-items:center;margin-top: 12%;\">\n            <h3 style=\"color:rgb(214, 214, 231);\">Match disputés :</h3>\n            <h3>54 <a> W </a> / 46 <a style=\"color:red;\"> L </a> / 23 <a style=\"color:yellow;\"> N </a></h3>\n\n            <div class=\"verticalLineBottom\" style=\"width:80%;border-top:solid 1px white;\"></div>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <div class=\"banner\">\n        <div class=\"team-info\">\n            <!--\n            <div class=\"league\">\n                <h6>Premier {{'league' | translate}}</h6>\n            </div>-->\n            <!--<ion-row>\n                <ion-col class=\"team_1 animate__animated animate__fadeInLeft wow\" data-wow-duration=\".2s\" size=\"6\">\n                    <div class=\"team-bg\" style=\"background: linear-gradient(270deg, rgba(13,14,15,0) 10%, rgba(29,97,129,1) 100%);\"></div>\n                    <div class=\"team-detail ion-padding-start\">\n                        <h3 class=\"ion-text-start\">Wolves United</h3>\n                        <div class=\"team-logo d-flex\">\n                            <img src=\"assets/images/team_logo/team_8.png\">&nbsp;&nbsp;&nbsp;\n                            <h4>WlS</h4>\n                        </div>\n                        <h5 class=\"ion-pading-start ion-margin-start ion-text-start\">11/11 <small>{{'selection' | translate}}</small></h5>\n                    </div>\n                </ion-col>\n\n                <div class=\"timeing animate__animated animate__zoomIn wow\" data-wow-duration=\".3s\">\n                    <h6>{{'max' | translate}} 7 {{'player_from_a_team' | translate}}</h6>\n                    <p>5&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;6</p>\n                </div>\n\n                <div class=\"players_add d-flex animate__animated animate__zoomIn wow\" data-wow-duration=\".3s\">\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-circle active\"></ion-icon>\n                </div>\n\n\n                <ion-col class=\"d-flex team_2 animate__animated animate__fadeInRight wow\" data-wow-duration=\".2s\" size=\"6\">\n                    <div class=\"team-bg\" style=\"background: linear-gradient(90deg, rgba(13,14,15,0) 10%, rgba(44,27,91,1) 100%);\"></div>\n                    <div class=\"team-detail end ion-padding-end\">\n                        <h3 class=\"ion-text-end\">Cobra Guardians</h3>\n                        <div class=\"team-logo d-flex\">\n                            <h4>CBR</h4>&nbsp;&nbsp;&nbsp;\n                            <img src=\"assets/images/team_logo/team_7.png\">\n                        </div>\n                        <h5 class=\"ion-pading-end ion-margin-end ion-text-end\">85.5 <small>{{'credit' | translate}}</small></h5>\n                    </div>\n                </ion-col>\n            </ion-row>-->\n\n            <div class=\"team_info_footer\">\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <h3>Gk <span>(1)</span></h3>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <h3>Dff <span>(2)</span></h3>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <h3>Mid <span>(0)</span></h3>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <h3>St <span>(0)</span></h3>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </div>\n    </div>\n</ion-footer>");

/***/ }),

/***/ "YwPm":
/*!***********************************************!*\
  !*** ./src/app/edit-team/edit-team.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  min-height: 55px !important;\n}\nion-header ion-toolbar ion-title {\n  position: absolute !important;\n  top: -7px;\n  left: 0;\n  width: 100%;\n  padding: 0 17px !important;\n  min-height: 55px !important;\n  line-height: normal;\n}\nion-header ion-toolbar ion-title .title-inner {\n  position: relative;\n  min-height: 74px;\n}\nion-header ion-toolbar ion-title .title-inner h3 {\n  position: absolute !important;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  font-weight: 300;\n  font-size: 0.95rem;\n  letter-spacing: 0.5px;\n}\nion-header ion-toolbar ion-title .title-inner span ion-icon {\n  font-size: 0.95rem;\n  background: #e6e6e647;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n  margin-top: 10px;\n}\nion-header ion-toolbar ion-title .title-inner span ion-icon.zmdi-edit {\n  background: var(--primary);\n}\n.background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n}\n.background img {\n  top: 0;\n  min-height: unset;\n  bottom: unset;\n}\nion-content {\n  --background: var(--transparent);\n}\n.container {\n  padding: 85px 20px 0 20px;\n}\n.container .team_players {\n  width: 100%;\n  padding-bottom: 24px;\n}\n.container .team_players:nth-child(4), .container .team_players:nth-child(2) {\n  width: calc(100% - 65px);\n  margin: 0 auto;\n}\n.container .team_players .player {\n  position: relative;\n  max-width: 60px;\n  min-width: 60px;\n  margin: 0 auto;\n  min-height: 70px;\n}\n.container .team_players .player .img_box {\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 2px solid var(--bg-color);\n}\n.container .team_players .player p {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: var(--secondary);\n  border-radius: 50%;\n  color: var(--white);\n  min-width: 15px;\n  height: 15px;\n  z-index: 99;\n  margin: 0;\n  font-size: 0.4rem;\n  align-items: center;\n  text-align: center;\n  line-height: 15px;\n}\n.container .team_players .player h3 {\n  color: var(--white);\n  font-size: 0.55rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding: 4px 4px;\n  border-radius: 5px;\n  position: absolute;\n  bottom: 28px;\n  left: 0;\n  right: 0;\n  font-weight: 400;\n  margin: 0 auto;\n}\n.container .team_players .player h4 {\n  font-size: 0.65rem;\n  color: var(--white);\n  font-weight: 400;\n}\n.banner .team-info {\n  display: block;\n  background: var(--bg-color);\n  position: relative;\n  border-radius: 20px 20px 0 0;\n  overflow: hidden;\n  width: calc(100% - 0px);\n  margin: 0 auto;\n}\n.banner .team-info .league {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  z-index: 99;\n  padding: 0 14px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  min-height: 30px;\n  margin: 0 auto;\n  background: url('cardhead.png');\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.banner .team-info .league h6 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.6rem;\n  font-weight: 300;\n  margin: auto;\n}\n.banner .team-info .timeing {\n  position: absolute;\n  z-index: 99;\n  top: 12px;\n  left: 0;\n  right: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0 auto;\n  max-width: 143px;\n}\n.banner .team-info .timeing h6 {\n  color: var(--text-light);\n  margin: 0;\n  font-size: 0.6rem;\n  font-weight: 400;\n  min-height: 33px;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 1px;\n  display: -webkit-box !important;\n  overflow: hidden;\n  text-align: center;\n}\n.banner .team-info .timeing p {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.85rem;\n  font-weight: 400;\n  text-align: center;\n}\n.banner .team-info ion-row {\n  position: relative;\n}\n.banner .team-info ion-row .players_add {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 19px;\n  margin: 0 auto;\n  width: calc(100% - 195px);\n  z-index: 99;\n}\n.banner .team-info ion-row .players_add ion-icon {\n  color: var(--text-dark);\n  opacity: 0.5;\n  font-size: 0.85rem;\n  padding: 2px;\n}\n.banner .team-info ion-row .players_add ion-icon.active {\n  color: var(--primary);\n  opacity: 1;\n}\n.banner .team-info ion-row ion-col {\n  padding: 0;\n  padding: 12px 5px;\n  position: relative;\n}\n.banner .team-info ion-row ion-col .team-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.banner .team-info ion-row ion-col .team-detail {\n  position: relative;\n  z-index: 99;\n}\n.banner .team-info ion-row ion-col .team-detail h3 {\n  margin: 0;\n  color: var(--white);\n  text-transform: uppercase;\n  font-size: 0.6rem;\n  font-weight: 300;\n  min-height: 20px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.banner .team-info ion-row ion-col .team-detail .team-logo {\n  padding-bottom: 18px;\n}\n.banner .team-info ion-row ion-col .team-detail .team-logo img {\n  width: 47px;\n  min-width: 47px;\n  margin: 0 8px;\n}\n.banner .team-info ion-row ion-col .team-detail .team-logo h4 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.8rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.banner .team-info ion-row ion-col h5 {\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--white);\n  font-size: 0.7rem;\n}\n.banner .team-info ion-row ion-col h5 small {\n  display: block;\n  font-weight: 300;\n  padding-top: 4px;\n  font-size: 0.5rem;\n  color: var(--text-light);\n  letter-spacing: 0;\n}\n.banner .team-info .team_info_footer {\n  background: var(--bg-color) !important;\n  padding: 17px 10px;\n}\n.banner .team-info .team_info_footer ion-row ion-col {\n  padding: 0 5px;\n}\n.banner .team-info .team_info_footer ion-row ion-col h3 {\n  margin: 0;\n  padding: 0;\n  color: var(--white);\n  font-size: 0.74rem;\n  font-weight: 500;\n  text-align: center;\n  text-transform: uppercase;\n}\n.banner .team-info .team_info_footer ion-row ion-col h3 span {\n  color: var(--text-dark);\n  font-weight: 400;\n  font-size: 0.6rem;\n  padding: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtdGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKO0FBQ0k7RUFDSSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFDWTtFQUNJLDZCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDaEI7QUFJZ0I7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGcEI7QUFHb0I7RUFDSSwwQkFBQTtBQUR4QjtBQVNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQU5KO0FBUUk7RUFDSSxNQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBTlI7QUFVQTtFQUNJLGdDQUFBO0FBUEo7QUFZQTtFQUNJLHlCQUFBO0FBVEo7QUFXSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBQVRSO0FBV1E7RUFFSSx3QkFBQTtFQUNBLGNBQUE7QUFWWjtBQWFRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVhaO0FBYVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBWGhCO0FBY1k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBWmhCO0FBZVk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBYmhCO0FBZ0JZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZGhCO0FBc0JJO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBbkJSO0FBcUJRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFuQlo7QUFxQlk7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQW5CaEI7QUF5QlE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUF2Qlo7QUF5Qlk7RUFDSSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF2QmhCO0FBMEJZO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBeEJoQjtBQTZCUTtFQUNJLGtCQUFBO0FBM0JaO0FBNkJZO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBM0JoQjtBQTZCZ0I7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUEzQnBCO0FBNkJvQjtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQTNCeEI7QUFpQ1k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQS9CaEI7QUFpQ2dCO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBL0JwQjtBQWtDZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFoQ3BCO0FBa0NvQjtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFoQ3hCO0FBbUNvQjtFQUVJLG9CQUFBO0FBbEN4QjtBQW9Dd0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFsQzVCO0FBcUN3QjtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBbkM1QjtBQXdDZ0I7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBdENwQjtBQXdDb0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQXRDeEI7QUE2Q1E7RUFDSSxzQ0FBQTtFQUNBLGtCQUFBO0FBM0NaO0FBOENnQjtFQUNJLGNBQUE7QUE1Q3BCO0FBOENvQjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQTVDeEI7QUE4Q3dCO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTVDNUIiLCJmaWxlIjoiZWRpdC10ZWFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAgIG1pbi1oZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcblxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgbWluLWhlaWdodDogNTVweCAhaW1wb3J0YW50O1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuXG4gICAgICAgIC50aXRsZS1pbm5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA3NHB4O1xuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY0NztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgJi56bWRpLWVkaXR7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgaW1nIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgICAgICAgYm90dG9tOiB1bnNldDtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbn1cblxuXG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDg1cHggMjBweCAwIDIwcHg7XG5cbiAgICAudGVhbV9wbGF5ZXJzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuXG4gICAgICAgICY6bnRoLWNoaWxkKDQpLFxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjVweCk7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA3MHB4O1xuXG4gICAgICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC40cmVtO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNTVyZW07XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDI4cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4uYmFubmVyIHtcbiAgICAudGVhbS1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgLmxlYWd1ZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9jYXJkaGVhZC5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAudGltZWluZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTQzcHg7XG5cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzNweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLnBsYXllcnNfYWRkIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE5cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE5NXB4KTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuODVyZW07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcblxuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCA1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgLnRlYW0tYmcge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGVhbS1kZXRhaWwge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudGVhbS1sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQ3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcblxuICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLnRlYW1faW5mb19mb290ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxN3B4IDEwcHg7XG5cbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcblxuICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=edit-team-edit-team-module.js.map