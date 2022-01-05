(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "P7/P":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reminder/reminder.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<ion-header>\n    <ion-toolbar>\n        <ion-title>reminder</ion-title>\n    </ion-toolbar>\n</ion-header>\n-->\n\n<ion-content (click)=\"dismiss()\">\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-list lines=\"none\">\n        <h2 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\".2s\">\n            <ion-icon class=\"zmdi zmdi-notifications-add\"></ion-icon>\n            {{'set_match_reminder' | translate}}\n        </h2>\n \n        <ion-item>\n            <div class=\"item_inner d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\".25s\">\n                <div class=\"text_box\">\n                    <h3>{{'match' | translate}} - WLS {{'vs' | translate}} CBR</h3>\n                    <p>{{'will_send_remiender_when_lineup_announced' | translate}}</p>\n                </div>\n                <ion-toggle mode=\"ios\" class=\"end\" checked></ion-toggle>\n            </div>\n        </ion-item>\n\n        <ion-item>\n            <div class=\"item_inner d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\".3s\">\n                <div class=\"text_box\">\n                    <h3>{{'tour' | translate}} - Football Premier League</h3>\n                    <p>{{'will_send_remiender_when_lineup_announced_inevery_match' | translate}}</p>\n                </div>\n                <ion-toggle mode=\"ios\" class=\"end\"></ion-toggle>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-footer>");

/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "qf33":
/*!*******************************************!*\
  !*** ./src/app/reminder/reminder.page.ts ***!
  \*******************************************/
/*! exports provided: ReminderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderPage", function() { return ReminderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reminder.page.html */ "P7/P");
/* harmony import */ var _reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reminder.page.scss */ "z5IU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ReminderPage = class ReminderPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
};
ReminderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ReminderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reminder',
        template: _raw_loader_reminder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reminder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReminderPage);



/***/ }),

/***/ "z5IU":
/*!*********************************************!*\
  !*** ./src/app/reminder/reminder.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--transparent);\n}\n\nion-list {\n  margin: 0;\n  padding: 0;\n  background: var(--bg-color);\n  border-radius: 20px 20px 0 0;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--white);\n  padding: 16px 20px 16px 20px;\n  font-size: 1rem;\n}\n\nion-list h2 ion-icon {\n  min-width: 30px;\n  font-size: 1.1rem;\n}\n\nion-list ion-item {\n  padding: 10px 20px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  background: var(--secondary-dark);\n  position: relative;\n  overflow: hidden;\n  width: calc(100% - 0px);\n  margin: 0 auto;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n  align-items: flex-start;\n}\n\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.75rem;\n  font-weight: 400;\n  padding-bottom: 5px;\n}\n\nion-list ion-item .item_inner p {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.6rem;\n}\n\nion-list ion-item .item_inner ion-toggle {\n  --background: #313D4A;\n  --background-checked: #313D4A;\n  --handle-background: var(--secondary-dark);\n  --handle-background-checked: var(--primary);\n  --handle-height: 14px;\n  --handle-width: 14px;\n  --handle-box-shadow: none;\n  height: 20px;\n  width: 36px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\nion-list ion-item:first-of-type {\n  padding-top: 20px;\n}\n\nion-list ion-item:last-of-type {\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlbWluZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDSTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUNRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ1o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQURSOztBQUdRO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FBRFo7O0FBSVk7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGaEI7O0FBS1k7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUhoQjs7QUFNWTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUFKaEI7O0FBUVE7RUFDSSxpQkFBQTtBQU5aOztBQVNRO0VBQ0ksb0JBQUE7QUFQWiIsImZpbGUiOiJyZW1pbmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG59XG5cbmlvbi1saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHggMTZweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC42cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tdG9nZ2xlIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMzMTNENEE7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMzMTNENEE7XG4gICAgICAgICAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xuICAgICAgICAgICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgLS1oYW5kbGUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgIC0taGFuZGxlLXdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgICAgIC0taGFuZGxlLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=common.js.map