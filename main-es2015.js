(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/date-picker-and-time/date-picker-and-time.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/date-picker-and-time/date-picker-and-time.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n<ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\n\n\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n\n<pre>Month: {{ date.month }}.{{ date.year }}</pre>\n<pre>Model: {{ model | json }}</pre>\n\n<button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\n  Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n</button>\n\n<pre>Selected time: {{time | json}}</pre>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/follow-dialog/follow-dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/follow-dialog/follow-dialog.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"closeDialog\">\n  <mat-icon (click)=\"closeDialog()\">close</mat-icon>\n</div>\n<h2 mat-dialog-title>Subscribe Email</h2>\n<div>\n  <p>Yes, share with me the arcane knowledge of the geometers and architects.</p>\n</div>\n<div>\n  <form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <mat-label> </mat-label>\n      <input matInput [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" placeholder=\"Ex. pat@example.com\">\n      <mat-hint>Errors appear instantly!</mat-hint>\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n        Please enter a valid email address\n      </mat-error>\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n        Email is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n  </form>\n</div>\n<div style=\"padding-top: 2%;text-align: center;\">\n  <button mat-raised-button (click)=\"checkEmail()\">Subscribe</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n  <!-- START:上方：靠左：Logo -->\n  <div class=\"menuLogo\">\n    <img [src]=\"imagePath\">\n  </div>\n  <!-- END:上方：靠左：Logo -->\n\n\n  <!-- START:上方：靠右：下拉選單 -->\n  <div class=\"menuList\">\n    <!-- <ng-container *ngFor=\"let menuItem of modulesList\">\n      <ng-container *ngIf=\"!menuItem.children\">\n        <a class=\"nav-link\">\n          <span class=\"icon fa\" [ngClass]=\"menuItem.icon\"></span>\n          <span class=\"text-holder\">{{menuItem.label}}</span>\n        </a>\n      </ng-container>\n      <ng-container *ngIf=\"menuItem.children.length > 0\">\n        <button mat-button [matMenuTriggerFor]=\"levelOne\" #levelOneTrigger=\"matMenuTrigger\">\n          <span class=\"icon fa\" [ngClass]=\"menuItem.icon\"></span>\n          <span>{{menuItem.label}}\n            <i class=\"fa fa-chevron-down\"></i>\n          </span>\n        </button>\n\n        <mat-menu #levelOne=\"matMenu\" direction=\"down\" yPosition=\"below\">\n          <span>\n            <ng-container *ngFor=\"let childL1 of menuItem.children\">\n              <li class=\"p-0\" *ngIf=\"!childL1.children\" mat-menu-item>\n                <a class=\"nav-link\">{{childL1.label}}\n                  <i *ngIf=\"childL1.icon\" [ngClass]=\"childL1.icon\"></i>\n                </a>\n              </li>\n              <ng-container *ngIf=\"childL1.children && childL1.children.length > 0\">\n                <li mat-menu-item [matMenuTriggerFor]=\"levelTwo\">\n                  <span class=\"icon fa\" [ngClass]=\"childL1.icon\"></span>\n                  <span>{{childL1.label}}</span>\n                </li>\n\n                <mat-menu #levelTwo=\"matMenu\">\n                  <ng-container *ngFor=\"let childL2 of childL1.children\">\n                    <li class=\"p-0\" mat-menu-item>\n                      <a class=\"nav-link\">{{childL2.label}}\n                        <i *ngIf=\"childL2.icon\" [ngClass]=\"childL2.icon\"></i>\n                      </a>\n                    </li>\n                  </ng-container>\n                </mat-menu>\n              </ng-container>\n            </ng-container>\n          </span>\n        </mat-menu>\n      </ng-container>\n    </ng-container> -->\n  </div>\n  <!-- END:上方：靠右：下拉選單 -->\n\n  <!-- START: header: HERO-IMAGE -->\n  <div class=\"heroImage\">\n    <img [src]=\"getHero()\">\n  </div>\n  <!-- END: header: HERO-IMAGE -->\n\n  <!-- START : Products banner -->\n  <div style=\"padding-left: 5%;\">\n    <h3>Products</h3>\n    <mat-grid-list cols=\"2\" class=\"matGridListProduct\">\n      <mat-grid-tile>\n        <mat-card style=\"width: 95%;max-width: 95%;\">\n          <img mat-card-image [src]=\"productPath1\" class=\"matCardImg\" rowspan=\"1\">\n          <mat-card-header style=\"text-align: left;\">\n            <mat-card-title style=\"font-weight: 400 !important ; color:rgb(196, 33, 33) ;\">Gloves</mat-card-title>\n            <mat-card-subtitle>From design to performance, color to construction or fit to feel.</mat-card-subtitle>\n            <mat-card-subtitle>from £40</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-actions>\n            <button mat-raised-button>Buy Now!</button>\n          </mat-card-actions>\n        </mat-card>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-card style=\"width: 95%;max-width: 95%;\">\n          <img mat-card-image [src]=\"productPath2\" class=\"matCardImg\" rowspan=\"1\">\n          <mat-card-header style=\"text-align: left;\">\n            <mat-card-title style=\"font-weight: 400 !important ; color:rgb(196, 33, 33) ;\">Protectives</mat-card-title>\n            <mat-card-subtitle>“Protect yourselves at all times”.</mat-card-subtitle>\n            <mat-card-subtitle>from £69</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-actions>\n            <button mat-raised-button>Buy Now!</button>\n          </mat-card-actions>\n        </mat-card>\n      </mat-grid-tile>\n    </mat-grid-list>\n    <!-- END : Products banner -->\n    <br>\n    <!-- START : Freebies banner -->\n    <div>\n      <h3>Freebies</h3>\n      <div class=\"productDiv\">\n        <!-- 商品圖片 -->\n        <div style=\"text-align: center;\">\n          <img [src]=\"freebies1\">\n        </div>\n        <!-- 商品標題 -->\n        <div class=\"productTitle\">\n          <a>Keyring</a>\n        </div>\n        <!-- 商品副標題 -->\n        <div>\n          <p>Incredible, flexible industrial rubber keyring is die-cut and stamped for authenticity and quality.</p>\n        </div>\n      </div>\n\n      <div class=\"productDiv\">\n        <!-- 商品圖片 -->\n        <div style=\"text-align: center;\">\n          <img [src]=\"freebies2\">\n        </div>\n        <!-- 商品標題 -->\n        <div class=\"productTitle\">\n          <a>Rope skipping</a>\n        </div>\n        <!-- 商品副標題 -->\n        <div>\n          <p>Super fast ball bearing swivels provide tangle-free, quick action.Weighted handles can be removed, allowing\n            you to vary your workouts.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"productDiv\">\n      <!-- 商品圖片 -->\n      <div style=\"text-align: center;\">\n        <img [src]=\"freebies3\">\n      </div>\n      <!-- 商品標題 -->\n      <div class=\"productTitle\">\n        <a>Hand wraps</a>\n      </div>\n      <!-- 商品副標題 -->\n      <div>\n        <p>Just like fighters vary in size, weight and the amount of protection you need, what’s also unique is the size\n          of their hands.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"productDiv\">\n    <!-- 商品圖片 -->\n    <div style=\"text-align: center;\">\n      <img [src]=\"freebies4\">\n    </div>\n    <!-- 商品標題 -->\n    <div class=\"productTitle\">\n      <a>Puzzle Sports Mat</a>\n    </div>\n    <!-- 商品副標題 -->\n    <div>\n      <p>Ideal and most convenient option for lining gym floors, schools, studios, workout and exercise rooms, weight\n        training areas, around heavy bags, boxing rings, cages...</p>\n    </div>\n\n  </div>\n  <!-- END : Freebies banner -->\n\n  <div style='clear:both;'></div>\n  <!-- START: contact info -->\n  <div style=\"padding-top: 2%;\">\n    <div class=\"contactDiv\">\n      <div style=\"text-align: center;height: 40%;font-weight: 500; \">\n        INFO\n      </div>\n      <div style=\"padding-left: 3%;\">\n        <div>\n          Tools to aid in motion design. Battle Axe is the life’s work of Adam Plouff.\n        </div>\n        <div style=\"text-decoration-line: underline;\">\n          <p (click)=\"openMore()\">More →</p>\n          <!--跳轉頁面  -->\n        </div>\n      </div>\n    </div>\n\n    <div class=\"contactDivMid\">\n      <div style=\"text-align: center; height: 40%;font-weight: 500;\">\n        EMAIL UPDATES\n      </div>\n      <div style=\"text-align: center;\">\n        <button mat-raised-button style=\"width: 60%; height: 40%;\" (click)=\"openFollowDialog()\">FOLLOW</button>\n        <!--dialog  -->\n      </div>\n    </div>\n\n    <div class=\"contactDiv\">\n      <div style=\"text-align: center; height: 50%;font-weight: 500;\">\n        BE FRIENDS\n      </div>\n      <div class=\"iconDiv\">\n        <!--dialog  -->\n        <div>\n          <a (click)=\"goToLink('http://www.instagram.com')\"><img [src]=\"friendIcon1\"></a>\n          <a (click)=\"goToLink('http://www.github.com')\"><img [src]=\"friendIcon2\"></a>\n          <a (click)=\"goToLink('http://www.youtube.com')\"><img [src]=\"friendIcon3\"></a>\n          <a (click)=\"goToLink('http://www.facebook.com')\"><img [src]=\"friendIcon4\"></a>\n          <a (click)=\"goToLink('http://www.medium.com')\"><img [src]=\"friendIcon5\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END: contact info -->\n\n  <!-- START: footer -->\n  <div style='clear:both;'></div>\n  <div style=\"background-color:  #e2e2e2;\">\n    <div style=\"height: 50px;\"></div>\n    <div style=\"text-align:center; font-style: italic;\">\n      {{copyRight}}\n    </div>\n    <div style=\"height: 40px;\"></div>\n  </div>\n  <!-- END: footer -->\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"searchBarLayout\">\n  <mat-card>\n    <label>請選擇條件：</label>\n    <form [formGroup]=\"options\">\n      <mat-form-field>\n        <mat-select placeholder=\"菜單類型\" formControlName=\"menuCodeControl\">\n          <mat-option value=1>無菜單</mat-option>\n          <mat-option value=2>傳統</mat-option>\n          <mat-option value=3>甜不辣</mat-option>\n          <mat-option value=4>鐵板燒</mat-option>\n          <mat-option value=5>創新</mat-option>\n          <mat-option value=6>割烹</mat-option>\n          <mat-option value=7>和牛</mat-option>\n          <mat-option value=8>懷石料理</mat-option>\n          <mat-option value=9>壽司</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </form>\n  </mat-card>\n  <mat-card id=\"searchBarOtherConditionsLayout\">\n    <section>\n      <mat-checkbox [(ngModel)]=\"parking\">停車</mat-checkbox>\n      <mat-checkbox [(ngModel)]=\"deliver\">外送</mat-checkbox>\n      <mat-checkbox [(ngModel)]=\"preFee\">先繳訂金</mat-checkbox>\n    </section>\n  </mat-card>\n  <mat-card id=\"searchBarOpenDialogLayout\">\n    <mat-icon (click)=\"openDateTimeDialog()\">calendar_today</mat-icon>\n  </mat-card>\n\n    <div>\n      <button mat-button [disabled]=\"!value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"this.options\">\n        <mat-icon>search</mat-icon>\n      </button>\n    </div>\n</div>\n<hr>\n  <div>favorite prefer menuCode is: {{options.controls['menuCodeControl'].value}}</div>\n  <div>Your favorite prefer parking is: {{parking}}</div>\n  <div>Your favorite prefer deliver is: {{deliver}}</div>\n  <div>Your favorite prefer preFee is: {{preFee}}</div>\n\n  <form style=\"border: black 2px;\">\n    <mat-form-field>\n      <input style=\"cursor: pointer;\" matInput (click)=\"openDateTimeDialog()\">\n    </mat-form-field>\n  </form>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");




const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        // path: 'searchBar', component: SearchBarComponent,
        path: 'index', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
        children: []
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'thefirstboot';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share-material/share-material.module */ "./src/app/share-material/share-material.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _date_picker_and_time_date_picker_and_time_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-picker-and-time/date-picker-and-time.module */ "./src/app/date-picker-and-time/date-picker-and-time.module.ts");
/* harmony import */ var _date_picker_and_time_date_picker_and_time_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-picker-and-time/date-picker-and-time.component */ "./src/app/date-picker-and-time/date-picker-and-time.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/homepage.module */ "./src/app/homepage/homepage.module.ts");
/* harmony import */ var _follow_dialog_follow_dialog_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./follow-dialog/follow-dialog.module */ "./src/app/follow-dialog/follow-dialog.module.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"],
            _date_picker_and_time_date_picker_and_time_component__WEBPACK_IMPORTED_MODULE_9__["DatePickerAndTimeComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_6__["ShareMaterialModule"],
            _date_picker_and_time_date_picker_and_time_module__WEBPACK_IMPORTED_MODULE_8__["DatePickerAndTimeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_12__["HomepageModule"],
            _follow_dialog_follow_dialog_module__WEBPACK_IMPORTED_MODULE_13__["FollowDialogModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/date-picker-and-time/date-picker-and-time.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/date-picker-and-time/date-picker-and-time.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGUtcGlja2VyLWFuZC10aW1lL2RhdGUtcGlja2VyLWFuZC10aW1lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/date-picker-and-time/date-picker-and-time.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/date-picker-and-time/date-picker-and-time.component.ts ***!
  \************************************************************************/
/*! exports provided: DatePickerAndTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerAndTimeComponent", function() { return DatePickerAndTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let DatePickerAndTimeComponent = class DatePickerAndTimeComponent {
    constructor(calendar, dialogRef, data) {
        this.calendar = calendar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.time = { hour: 0, minute: 0 };
        this.meridian = true;
    }
    ngOnInit() {
    }
    selectToday() {
        this.model = this.calendar.getToday();
    }
    toggleMeridian() {
        this.meridian = !this.meridian;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DatePickerAndTimeComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
DatePickerAndTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date-picker-and-time',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./date-picker-and-time.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/date-picker-and-time/date-picker-and-time.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./date-picker-and-time.component.css */ "./src/app/date-picker-and-time/date-picker-and-time.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DatePickerAndTimeComponent);



/***/ }),

/***/ "./src/app/date-picker-and-time/date-picker-and-time.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/date-picker-and-time/date-picker-and-time.module.ts ***!
  \*********************************************************************/
/*! exports provided: DatePickerAndTimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerAndTimeModule", function() { return DatePickerAndTimeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share-material/share-material.module */ "./src/app/share-material/share-material.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _date_picker_and_time_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-picker-and-time.component */ "./src/app/date-picker-and-time/date-picker-and-time.component.ts");








let DatePickerAndTimeModule = class DatePickerAndTimeModule {
};
DatePickerAndTimeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_4__["ShareMaterialModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ],
        exports: [
            _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_4__["ShareMaterialModule"]
        ],
        entryComponents: [
            _date_picker_and_time_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerAndTimeComponent"],
        ]
    })
], DatePickerAndTimeModule);



/***/ }),

/***/ "./src/app/follow-dialog/follow-dialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/follow-dialog/follow-dialog.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.closeDialog{\n  float: right;\n}\n\n.closeDialog mat-icon:hover{\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sbG93LWRpYWxvZy9mb2xsb3ctZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9mb2xsb3ctZGlhbG9nL2ZvbGxvdy1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xvc2VEaWFsb2d7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5jbG9zZURpYWxvZyBtYXQtaWNvbjpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/follow-dialog/follow-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/follow-dialog/follow-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: MyErrorStateMatcher, FollowDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowDialogComponent", function() { return FollowDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let FollowDialogComponent = class FollowDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close();
    }
    checkEmail() {
        console.log('call checkEmail');
        console.log(this.emailFormControl);
        if (this.emailFormControl.value !== undefined && this.emailFormControl.value) {
            console.log('can close:' + this.emailFormControl.value);
        }
        else {
            alert('Please enter correct Email');
        }
    }
};
FollowDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
FollowDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-follow-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./follow-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/follow-dialog/follow-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./follow-dialog.component.css */ "./src/app/follow-dialog/follow-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], FollowDialogComponent);



/***/ }),

/***/ "./src/app/follow-dialog/follow-dialog.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/follow-dialog/follow-dialog.module.ts ***!
  \*******************************************************/
/*! exports provided: FollowDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowDialogModule", function() { return FollowDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share-material/share-material.module */ "./src/app/share-material/share-material.module.ts");




let FollowDialogModule = class FollowDialogModule {
};
FollowDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_3__["ShareMaterialModule"],
        ],
        exports: [
            _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_3__["ShareMaterialModule"]
        ],
    })
], FollowDialogModule);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.menuList{\n  float:right;\n  padding: 1%;\n  padding-right: 5%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n  /* background-color: aqua; */\n}\n\n.menuLogo{\n  float: left;\n}\n\n.menuLogo img{\n  height: 100px;\n}\n\n.heroImage{\n  padding-bottom: 2%;\n  text-align: center;\n}\n\n.matGridListProduct{\n  max-width: 1000px;\n  text-align: center;\n}\n\n.matCardImg{\n  max-width: 320px;\n}\n\n.matCardFreebiesImg{\n  max-width: 200px;\n}\n\n.productDiv{\n  max-width: 250px;\n  float: left;\n  padding: 1%;;\n}\n\n.productDiv img {\n  max-height: 168px;\n}\n\n.productDiv div{\n  word-break: break-all;\n  word-wrap: break-word;\n  color: grey;\n}\n\n.productTitle {\n  font-weight: 500;\n  font-size: 110%;\n  color:black !important;\n}\n\n.iconDiv{\n  text-align: center;\n  cursor: pointer;\n}\n\n.iconDiv img {\n  max-width: 30px;\n  padding: 1%;\n}\n\n.iconDiv img:hover{\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n}\n\n.contactDiv{\n  float: left;\n  width: 33%;\n  padding: 1%;\n  height: 150px;\n}\n\n.contactDiv p:hover{\n  cursor: pointer;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  float: left;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n.contactDivMid{\n  float: left;\n  width: 34%;\n  padding: 1%;\n  height: 150px;\n\n}\n\n.contactDivMid button:hover{\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsdUNBQStCO1VBQS9CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7O0FBRWY7O0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubWVudUxpc3R7XG4gIGZsb2F0OnJpZ2h0O1xuICBwYWRkaW5nOiAxJTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xufVxuXG4ubWVudUxvZ297XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm1lbnVMb2dvIGltZ3tcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmhlcm9JbWFnZXtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXRHcmlkTGlzdFByb2R1Y3R7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXRDYXJkSW1ne1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuXG4ubWF0Q2FyZEZyZWViaWVzSW1ne1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4ucHJvZHVjdERpdntcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDElOztcbn1cbi5wcm9kdWN0RGl2IGltZyB7XG4gIG1heC1oZWlnaHQ6IDE2OHB4O1xufVxuLnByb2R1Y3REaXYgZGl2e1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgY29sb3I6IGdyZXk7XG59XG4ucHJvZHVjdFRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMTAlO1xuICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xufVxuXG4uaWNvbkRpdntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbkRpdiBpbWcge1xuICBtYXgtd2lkdGg6IDMwcHg7XG4gIHBhZGRpbmc6IDElO1xufVxuLmljb25EaXYgaW1nOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG59XG5cbi5jb250YWN0RGl2e1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogMSU7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uY29udGFjdERpdiBwOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG5cbi5jb250YWN0RGl2TWlke1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM0JTtcbiAgcGFkZGluZzogMSU7XG4gIGhlaWdodDogMTUwcHg7XG5cbn1cbi5jb250YWN0RGl2TWlkIGJ1dHRvbjpob3ZlcntcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/app/homepage/menu.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _follow_dialog_follow_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../follow-dialog/follow-dialog.component */ "./src/app/follow-dialog/follow-dialog.component.ts");





let HomepageComponent = class HomepageComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.modulesList = _menu__WEBPACK_IMPORTED_MODULE_2__["ModulesList"];
        this.copyRight = 'Copyright © 2020 Boxing Lin Inc';
        this.getAllImagePath();
    }
    ngOnInit() {
    }
    getAllImagePath() {
        this.imagePath = 'assets/images/boxing-glove-icon.jpg';
        this.hero = 'assets/images/boxing_header.jpg';
        this.productPath1 = 'assets/images/glove01.jpg';
        this.productPath2 = 'assets/images/protective01.jpg';
        this.freebies1 = 'assets/images/freebies1.jpg';
        this.freebies2 = 'assets/images/freebies2.jpg';
        this.freebies3 = 'assets/images/freebies3.jpg';
        this.freebies4 = 'assets/images/freebies4.jpg';
        this.friendIcon1 = 'assets/images/instagramIcon.png';
        this.friendIcon2 = 'assets/images/githubIcon.png';
        this.friendIcon3 = 'assets/images/youtubeIcon.png';
        this.friendIcon4 = 'assets/images/facebookIcon.png';
        this.friendIcon5 = 'assets/images/mediumIcon.png';
    }
    getHero() {
        return this.hero;
    }
    openFollowDialog() {
        const dialogRef = this.dialog.open(_follow_dialog_follow_dialog_component__WEBPACK_IMPORTED_MODULE_4__["FollowDialogComponent"], {
            width: '500px',
            disableClose: true,
            data: { emailAddress: this.emailAddress }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.emailAddress = result;
            console.log(this.emailAddress);
        });
    }
    openMore() {
        alert('OpenMore');
    }
    goToLink(url) {
        window.open(url, '_blank');
        console.log(url);
    }
};
HomepageComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share-material/share-material.module */ "./src/app/share-material/share-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _follow_dialog_follow_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../follow-dialog/follow-dialog.component */ "./src/app/follow-dialog/follow-dialog.component.ts");







let HomepageModule = class HomepageModule {
};
HomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _follow_dialog_follow_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FollowDialogComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_3__["ShareMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        exports: [
            _share_material_share_material_module__WEBPACK_IMPORTED_MODULE_3__["ShareMaterialModule"]
        ],
        entryComponents: [
            _follow_dialog_follow_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FollowDialogComponent"]
        ]
    })
], HomepageModule);



/***/ }),

/***/ "./src/app/homepage/menu.ts":
/*!**********************************!*\
  !*** ./src/app/homepage/menu.ts ***!
  \**********************************/
/*! exports provided: ModulesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesList", function() { return ModulesList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ModulesList = [{
        label: 'User',
        children: [{
                label: 'User 1',
                children: [{
                        label: 'User 5'
                    }, {
                        label: 'User 6'
                    }, {
                        label: 'User 7'
                    }]
            }, {
                label: 'User 2',
                children: [{
                        label: 'User 8'
                    }, {
                        label: 'User 9'
                    }, {
                        label: 'User 10'
                    }]
            }, {
                label: 'User 3'
            }, {
                label: 'User 4'
            }]
    }, {
        label: 'Management',
        children: [{
                label: 'Management 1',
                children: [{
                        label: 'Management 2'
                    }, {
                        label: 'Management 3'
                    }, {
                        label: 'Management 4'
                    }]
            }]
    }, {
        label: 'Admin',
        children: [{
                label: 'Admin 1'
            }, {
                label: 'Admin 2'
            }, {
                label: 'Admin 3'
            }, {
                label: 'Admin 4'
            }]
    }];


/***/ }),

/***/ "./src/app/search-bar/search-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#searchBarLayout {\n  width: 300px;\n  max-height: 300px;\n  /* position: relative;\n  top: 50%;\n  left: 50%;\n  margin: -150px 0 0 -150px; */\n}\n\n#searchBarOtherConditionsLayout {\n  width: 300px;\n  height: 114px;\n  padding-top: 17%;\n  /* position: relative;\n  top: 50%;\n  left: 50%;\n  margin: -150px 0 0 -150px; */\n}\n\n#searchBarOpenDialogLayout {\n  background-color: blanchedalmond;\n  max-width:80px ;\n  padding-left: 9%;\n\n  /* position: relative;\n  height: 114px;\n  max-width: 300px;\n  top: 50%;\n  left: 50%;\n  margin: -150px 0 0 -150px; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCOzs7OEJBRzRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEI7Ozs4QkFHNEI7QUFDOUI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGdCQUFnQjs7RUFFaEI7Ozs7OzhCQUs0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaEJhckxheW91dCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luOiAtMTUwcHggMCAwIC0xNTBweDsgKi9cbn1cblxuI3NlYXJjaEJhck90aGVyQ29uZGl0aW9uc0xheW91dCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMTRweDtcbiAgcGFkZGluZy10b3A6IDE3JTtcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0xNTBweCAwIDAgLTE1MHB4OyAqL1xufVxuI3NlYXJjaEJhck9wZW5EaWFsb2dMYXlvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgbWF4LXdpZHRoOjgwcHggO1xuICBwYWRkaW5nLWxlZnQ6IDklO1xuXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMTRweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luOiAtMTUwcHggMCAwIC0xNTBweDsgKi9cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _date_picker_and_time_date_picker_and_time_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../date-picker-and-time/date-picker-and-time.component */ "./src/app/date-picker-and-time/date-picker-and-time.component.ts");





let SearchBarComponent = class SearchBarComponent {
    constructor(fb, dialog) {
        this.dialog = dialog;
        this.value = '';
        this.options = fb.group({
            menuCodeControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
        this.parking = false;
        this.deliver = false;
        this.preFee = false;
        this.menuCode = this.options.controls.menuCodeControl.value;
    }
    openDateTimeDialog() {
        const dialogRef = this.dialog.open(_date_picker_and_time_date_picker_and_time_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerAndTimeComponent"], {
            width: '500px',
            data: { hourNumber: this.hourNumber, minNumber: this.minNumber }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.minNumber = result.minNumber;
            this.hourNumber = result.hourNumber;
        });
    }
};
SearchBarComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-bar.component.css */ "./src/app/search-bar/search-bar.component.css")).default]
    })
], SearchBarComponent);



/***/ }),

/***/ "./src/app/share-material/share-material.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/share-material/share-material.module.ts ***!
  \*********************************************************/
/*! exports provided: ShareMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareMaterialModule", function() { return ShareMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");












let ShareMaterialModule = class ShareMaterialModule {
};
ShareMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"]
        ],
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ShareMaterialModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Lin/Angular-workspace/thefirstboot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map