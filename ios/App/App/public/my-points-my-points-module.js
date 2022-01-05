(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-points-my-points-module"],{

/***/ "+RaY":
/*!***********************************************!*\
  !*** ./src/app/my-points/my-points.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: var(--bg-color);\n}\n\n.page-title h3 {\n  color: var(--primary);\n}\n\nion-content {\n  border-radius: 25px 25px 0 0;\n  overflow: hidden;\n  --background: var(--transparent) !important;\n}\n\n.content-inner {\n  position: relative;\n  min-height: calc(100vh - 172.2px);\n  max-height: calc(100vh - 172.2px);\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 11;\n  background: var(--secondary);\n}\n\n.poins_container {\n  padding-bottom: 20px;\n}\n\n.poins_container ion-row ion-col {\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n}\n\n.poins_container ion-row ion-col::after, .poins_container ion-row ion-col::before {\n  content: \"\";\n  position: absolute;\n  top: 110px;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background: var(--secondary-light);\n}\n\n.poins_container ion-row ion-col::after {\n  background: var(--primary);\n  width: 0;\n  transition: all 0.5s;\n}\n\n.poins_container ion-row ion-col .medal {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 84px;\n  margin-bottom: 20px;\n  z-index: 999;\n}\n\n.poins_container ion-row ion-col .medal img {\n  display: block;\n  width: 60px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.poins_container ion-row ion-col .medal img:nth-child(even) {\n  display: none;\n}\n\n.poins_container ion-row ion-col .medal h2 {\n  position: absolute;\n  top: 24px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: #FFF391;\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n\n.poins_container ion-row ion-col .icon_box {\n  background: var(--secondary-light);\n  border-radius: 10px;\n  margin: 0 auto;\n  width: 19px;\n  height: 19px;\n  border: 1px solid var(--secondary-light);\n  position: relative;\n  z-index: 999;\n}\n\n.poins_container ion-row ion-col .icon_box ion-icon {\n  color: var(--white);\n  display: none;\n  font-size: 0.8rem;\n  text-align: center;\n  min-width: 16px;\n  line-height: 16px;\n}\n\n.poins_container ion-row ion-col h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.65rem;\n  font-weight: 500;\n  padding-top: 10px;\n}\n\n.poins_container ion-row ion-col.active::after {\n  width: 100%;\n}\n\n.poins_container ion-row ion-col.active .medal img:nth-child(odd) {\n  display: none;\n}\n\n.poins_container ion-row ion-col.active .medal img:nth-child(even) {\n  display: block;\n}\n\n.poins_container ion-row ion-col.active .icon_box {\n  background: var(--primary);\n}\n\n.poins_container ion-row ion-col.active .icon_box ion-icon {\n  display: block;\n}\n\n.offer {\n  background: #263228;\n  width: calc(100% - 60px);\n  margin: 0 auto;\n  border-radius: 50px;\n  padding: 4px;\n  margin-bottom: 35px;\n}\n\n.offer p {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.65rem;\n}\n\nion-list {\n  background: #21272D;\n  padding: 20px 22px;\n  border-radius: 18px;\n  width: calc(100% - 45px);\n  margin: 0 auto;\n  max-height: calc(100vh - 172.2px - 165px - 59px - 20px);\n  min-height: calc(100vh - 172.2px - 165px - 59px - 88px);\n  overflow: hidden;\n  overflow-y: auto;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1rem;\n  padding-bottom: 10px;\n}\n\nion-list ion-item {\n  padding: 14px 0px 14px 0px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n}\n\nion-list ion-item .item-inner {\n  width: 100%;\n}\n\nion-list ion-item .item-inner .icon_box {\n  background: #53606B;\n  min-width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  text-align: center;\n  margin-right: 28px;\n}\n\nion-list ion-item .item-inner .icon_box ion-icon {\n  color: var(--primary);\n  line-height: 35px;\n  height: 35px;\n  font-size: 1.1rem;\n}\n\nion-list ion-item .item-inner .text_box {\n  width: 100%;\n}\n\nion-list ion-item .item-inner .text_box h3 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.65rem;\n  line-height: 19px;\n  padding-bottom: 4px;\n  font-weight: 400;\n}\n\nion-list ion-item .item-inner .text_box p {\n  margin: 0;\n  font-size: 0.7rem;\n  color: var(--text-dark);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL215LXBvaW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQVo7O0FBRVk7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUFEaEI7O0FBSVk7RUFDSSwwQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQUZoQjs7QUFLWTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSGhCOztBQUtnQjtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBSHBCOztBQUtvQjtFQUNJLGFBQUE7QUFIeEI7O0FBT2dCO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTHBCOztBQVVZO0VBQ0ksa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUmhCOztBQVVnQjtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFScEI7O0FBWVk7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFWaEI7O0FBY2dCO0VBQ0ksV0FBQTtBQVpwQjs7QUFzQ3dCO0VBQ0ksYUFBQTtBQXBDNUI7O0FBdUN3QjtFQUNJLGNBQUE7QUFyQzVCOztBQTBDZ0I7RUFDSSwwQkFBQTtBQXhDcEI7O0FBMENvQjtFQUNJLGNBQUE7QUF4Q3hCOztBQStFQTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE1RUo7O0FBOEVJO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE1RVI7O0FBZ0ZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsdURBQUE7RUFDQSx1REFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUE3RUo7O0FBK0VJO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBN0VSOztBQWlGSTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7QUEvRVI7O0FBaUZRO0VBQ0ksV0FBQTtBQS9FWjs7QUFpRlk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBL0VoQjs7QUFpRmdCO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQS9FcEI7O0FBbUZZO0VBQ0ksV0FBQTtBQWpGaEI7O0FBbUZnQjtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBakZwQjs7QUFzRmdCO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXBGcEIiLCJmaWxlIjoibXktcG9pbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbn1cblxuLnBhZ2UtdGl0bGUgaDMge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzIuMnB4KTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcyLjJweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDExO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG59XG5cbi5wb2luc19jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICY6OmFmdGVyLFxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDExMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZWRhbCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4NHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGMzkxO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE5cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC42NXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uQSAxcyAwLjBzO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uQiAycyAwLjBzO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uQyAycyAwLjFzO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWVkYWwge1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy9Aa2V5ZnJhbWVzIGFuaW1hdGlvbkEge1xuLy8gICAgMCUge1xuLy8gICAgICAgIHdpZHRoOiAwcHg7XG4vLyAgICB9XG4vL1xuLy8gICAgMTAwJSB7XG4vLyAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICAgfVxuLy99XG4vL1xuLy9Aa2V5ZnJhbWVzIGFuaW1hdGlvbkIge1xuLy8gICAgMCUge1xuLy8gICAgICAgIHdpZHRoOiAwcHg7XG4vLyAgICB9XG4vL1xuLy8gICAgMTAwJSB7XG4vLyAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICAgfVxuLy99XG4vL1xuLy9Aa2V5ZnJhbWVzIGFuaW1hdGlvbkMge1xuLy8gICAgMCUge1xuLy8gICAgICAgIHdpZHRoOiAwcHg7XG4vLyAgICB9XG4vL1xuLy8gICAgMTAwJSB7XG4vLyAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICAgfVxuLy99XG5cbi5vZmZlciB7XG4gICAgYmFja2dyb3VuZDogIzI2MzIyODtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogLjY1cmVtO1xuICAgIH1cbn1cblxuaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6ICMyMTI3MkQ7XG4gICAgcGFkZGluZzogMjBweCAyMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ1cHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzIuMnB4IC0gMTY1cHggLSA1OXB4IC0gMjBweCk7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE3Mi4ycHggLSAxNjVweCAtIDU5cHggLSA4OHB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG5cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTRweCAwcHggMTRweCAwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cbiAgICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC5pY29uX2JveCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzUzNjA2QjtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "/akw":
/*!*******************************************************!*\
  !*** ./src/app/my-points/my-points-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MyPointsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPointsPageRoutingModule", function() { return MyPointsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_points_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-points.page */ "QCTD");




const routes = [
    {
        path: '',
        component: _my_points_page__WEBPACK_IMPORTED_MODULE_3__["MyPointsPage"]
    }
];
let MyPointsPageRoutingModule = class MyPointsPageRoutingModule {
};
MyPointsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyPointsPageRoutingModule);



/***/ }),

/***/ "QCTD":
/*!*********************************************!*\
  !*** ./src/app/my-points/my-points.page.ts ***!
  \*********************************************/
/*! exports provided: MyPointsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPointsPage", function() { return MyPointsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_points_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-points.page.html */ "Z99w");
/* harmony import */ var _my_points_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-points.page.scss */ "+RaY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MyPointsPage = class MyPointsPage {
    constructor() { }
    ngOnInit() {
    }
};
MyPointsPage.ctorParameters = () => [];
MyPointsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-points',
        template: _raw_loader_my_points_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_points_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyPointsPage);



/***/ }),

/***/ "Z99w":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-points/my-points.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"page-title\">\n        <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">{{'you_are_on_livel' | translate}} 89</h2>\n        <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\".8s\">8,871 {{'points' | translate}}</h3>\n    </div>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"content-inner\">\n        <div class=\"poins_container\">\n            <ion-row class=\"ion-text-center\">\n                <ion-col size=\"4\" class=\"active\"> \n                    <div class=\"medal animate__animated animate__zoomIn wow\"  data-wow-duration=\"0.3s\">\n                        <img src=\"assets/images/medal2.png\">\n                        <img src=\"assets/images/medal1.png\">\n                        <h2 class=\"ion-text-center\">88</h2>\n                    </div>\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-check\"></ion-icon>\n                    </div>\n                    <h3>8800 {{'points' | translate}}</h3>\n                </ion-col>\n\n                <ion-col size=\"4\" class=\"active\">\n                    <div class=\"medal animate__animated animate__zoomIn wow\"  data-wow-duration=\"0.4s\">\n                        <img src=\"assets/images/medal2.png\">\n                        <img src=\"assets/images/medal1.png\">\n                        <h2 class=\"ion-text-center\">89</h2>\n                    </div>\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-check\"></ion-icon>\n                    </div>\n\n                    <h3>8900 {{'points' | translate}}</h3>\n                </ion-col>\n\n                <ion-col size=\"4\">\n                    <div class=\"medal animate__animated animate__zoomIn wow\"  data-wow-duration=\"0.5s\">\n                        <img src=\"assets/images/medal2.png\">\n                        <img src=\"assets/images/medal1.png\">\n                        <h2 class=\"ion-text-center\">90</h2>\n                    </div>\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-check\"></ion-icon>\n                    </div>\n\n                    <h3>9000 {{'points' | translate}}</h3>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class=\"offer ion-text-center animate__animated animate__zoomIn wow\"  data-wow-duration=\"0.55s\">\n            <p>{{'earn' | translate}} 129 {{'more_points_to_reach_level' | translate}} 90</p>\n        </div>\n\n        <ion-list lines=\"none\" class=\"animate__animated animate__zoomIn wow\"  data-wow-duration=\"0.6s\">\n            <h2>{{'how_it_works' | translate}}?</h2>\n            <ion-item>\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-fire\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h3>You'll get 10 points on every paid match you joined.</h3>\n                        <p>i.e joinned 2 match = 20 points</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-thumb-up\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h3>If you joined and won the contest you'll get 1.5x of points.</h3>\n                        <p>i.e Earned 300 points x1.5 = 450 points</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class=\"item-inner d-flex\">\n                    <div class=\"icon_box\">\n                        <ion-icon class=\"zmdi zmdi-thumb-down\"></ion-icon>\n                    </div>\n                    <div class=\"text_box\">\n                        <h3>If you joined and won the contest you'll get 1.0x of points</h3>\n                        <p>i.e Earned 300 points x1.0 = 300 points</p>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>");

/***/ }),

/***/ "zUih":
/*!***********************************************!*\
  !*** ./src/app/my-points/my-points.module.ts ***!
  \***********************************************/
/*! exports provided: MyPointsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPointsPageModule", function() { return MyPointsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _my_points_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-points-routing.module */ "/akw");
/* harmony import */ var _my_points_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-points.page */ "QCTD");








let MyPointsPageModule = class MyPointsPageModule {
};
MyPointsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _my_points_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyPointsPageRoutingModule"]
        ],
        declarations: [_my_points_page__WEBPACK_IMPORTED_MODULE_7__["MyPointsPage"]]
    })
], MyPointsPageModule);



/***/ })

}]);
//# sourceMappingURL=my-points-my-points-module.js.map