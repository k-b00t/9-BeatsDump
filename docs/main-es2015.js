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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/album-info/album-info.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/album-info/album-info.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='albumProfile'>\n    <div class='col-12 d-none d-md-flex justify-content-center'>\n        <div>\n            <img id='albumImage' src='{{_data.cache.album[_data.cache.current.album].image}}' alt='{{_data.cache.album[_data.cache.current.album].title}}'>\n            <!-- <h2 id='artistTitle' class='text-center text-light' >{{_data.cache.artist.name}}</h2> -->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/album-list/album-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/album-list/album-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row albumContainer'>\n    <div class='col-lg-3 col-md-4 col-12' *ngFor='let album of _data.cache.album; let i = index' title='{{album.title}}'>\n        <div class='mt-5'>\n            <img class='albumImage' src='{{album.image}}' alt='' (click)='getAlbumTracks(i)'>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/artist-profile/artist-profile.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/artist-profile/artist-profile.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='artistProfile'>\n    <div class='col-12 d-none d-md-flex justify-content-center'>\n        <div>\n            <img id='artistImage' src='{{_data.cache.artist.image}}' alt='{{_data.cache.artist.name}}'>\n            <!-- <h2 id='artistTitle' class='text-center text-light' >{{_data.cache.artist.name}}</h2> -->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrousel/carrousel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrousel/carrousel.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class='logo'>\n        <img class='logoImg' src=\"../../../assets/BeatsDumpLogo3.png\" alt=\"\">\n    </div>\n    <div id='searchForm'>\n        <form class='form-inline' class='d-flex justify-content-center'>\n            <input type=\"text\" id='inputSearch' class='form-control' placeholder='Find artist and albums' autocomplete=\"off\">\n            <input type='submit' id='submitSearch' class='btn btn-warning' value='Search' (click)='search($event)'>\n        </form>\n    </div>\n    <div class='slogan bannerDiv'>\n            <img class='banner' src=\"../../../assets/slogan.png\" alt=\"\">\n    </div>\n    <ol class=\"carousel-indicators\">\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>\n\n    </ol>\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n                <div class='imageCarrousel'>\n                    <div style='background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../assets/festival1.jfif\") no-repeat; background-size: cover;  width:100%; height:100vh;'></div>\n                </div>\n            <div class=\"container\">\n                <div class=\"carousel-caption text-left\">\n                </div>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n                <div class='imageCarrousel'>\n                    <div style='background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../assets/festival.jfif\") no-repeat; background-size: cover;  width:100%; height:100vh;'></div>\n                </div>\n            <div class=\"container\">\n                <div class=\"carousel-caption\">\n                </div>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n            <div class='imageCarrousel'>\n                <div style='background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../assets/festival2.jfif\") no-repeat; background-size: cover; width:100%; height:100vh;'></div>\n            </div>\n            <div class=\"container\">\n                <div class=\"carousel-caption text-right\">\n                </div>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n                <div class='imageCarrousel'>\n                    <div style='background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../assets/festival3.jfif\") no-repeat; background-size: cover;  width:100%; height:100vh;'></div>\n                </div>\n            <div class=\"container\">\n                <div class=\"carousel-caption\">\n                </div>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n            <div class='imageCarrousel'>\n                <div style='background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../assets/festival4.jfif\") no-repeat; background-size: cover;  width:100%; height:100vh;'></div>\n            </div>\n            <div class=\"container\">\n                <div class=\"carousel-caption text-right\">\n                </div>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n            <div class='imageCarrousel'>\n                <div style='background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\"../../assets/festival5.jfif\") no-repeat; background-size: cover;   width:100%; height:100vh;'></div>\n            </div>\n            <div class=\"container\">\n                <div class=\"carousel-caption text-right\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/music-player/music-player.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/music-player/music-player.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-audio\">\n    <audio controls autoplay>\n        <source src=\"{{ getCurrentTrack() }}\" type=\"audio/mp3\">\n    </audio>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <nav class=\"navbar navbar-expand-md d-flex justify-content-between mx-3\" style='background-color:transparent;'>\n        <img src=\"../../../assets/BeatsDumpLogo2.png\" class='logoImg' (click)='redirectHome()'>\n        <p><i class=\"fas fa-search iconSearch\" data-toggle=\"modal\" data-target=\"#searchModal\"></i></p>\n        <div class=\"modal fade mt-5\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog d-flex justify-content-center\" role=\"document\">\n                <div class='modal-content border-0 p-0 m-0'>\n                    <form class=\"form-inline w-100\" style='background-color:transparent;'>\n                        <input id='inputSearch' class=\"form-control bdSuperDark\" type=\"text\" placeholder=\"Enter artist or album\" aria-label=\"Search\" autocomplete=\"off\">\n                        <button id='buttonSearch' class=\"btn\" type=\"submit\" data-dismiss=\"modal\" (click)='search($event)'>\n                            <i class=\"fas fa-search\" data-toggle=\"modal\" data-target=\"#searchModal\"></i>\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/track-list/track-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/track-list/track-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row trackListContainer'>\n    <div class='col-12 d-flex justify-content-center' *ngFor='let track of _data.cache.album[_data.cache.current.album].trackList'>\n        <div class='cardTrack d-flex justify-content-between' (click)='setCurrentTrack(track.track)'>\n            <h5 class='text-light text-justify'>{{ track.title }}</h5>\n            <h5 class='text-light text-justify'>{{ getDurationTrak(track.duration) }}</h5>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-album/view-album.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-album/view-album.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='containerViewAlbum'>\n    <app-nav-bar></app-nav-bar>\n    <div class='container'>\n        <app-album-info *ngIf=\"getterView() === true\"></app-album-info>\n        <app-track-list *ngIf=\"getterView() === true\"></app-track-list>\n        <app-music-player *ngIf=\"getterView() === true\"></app-music-player>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-artist/view-artist.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-artist/view-artist.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='containerViewArtist'>\n    <app-nav-bar></app-nav-bar>\n    <div class='container pb-5'>\n        <app-artist-profile></app-artist-profile>\n        <app-album-list></app-album-list>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-home/view-home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-home/view-home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-nav-bar></app-nav-bar> -->\n<app-carrousel></app-carrousel>\n<!-- <app-footer></app-footer> -->\n");

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
/* harmony import */ var _view_home_view_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-home/view-home.component */ "./src/app/view-home/view-home.component.ts");
/* harmony import */ var _view_artist_view_artist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-artist/view-artist.component */ "./src/app/view-artist/view-artist.component.ts");
/* harmony import */ var _view_album_view_album_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-album/view-album.component */ "./src/app/view-album/view-album.component.ts");






const routes = [
    { path: '', component: _view_home_view_home_component__WEBPACK_IMPORTED_MODULE_3__["ViewHomeComponent"] },
    { path: 'home', component: _view_home_view_home_component__WEBPACK_IMPORTED_MODULE_3__["ViewHomeComponent"] },
    { path: 'artist/:id', component: _view_artist_view_artist_component__WEBPACK_IMPORTED_MODULE_4__["ViewArtistComponent"] },
    { path: 'album/:id', component: _view_album_view_album_component__WEBPACK_IMPORTED_MODULE_5__["ViewAlbumComponent"] },
    { path: '*', component: _view_home_view_home_component__WEBPACK_IMPORTED_MODULE_3__["ViewHomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
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
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/carrousel/carrousel.component */ "./src/app/components/carrousel/carrousel.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_artist_profile_artist_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/artist-profile/artist-profile.component */ "./src/app/components/artist-profile/artist-profile.component.ts");
/* harmony import */ var _components_album_list_album_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/album-list/album-list.component */ "./src/app/components/album-list/album-list.component.ts");
/* harmony import */ var _components_album_info_album_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/album-info/album-info.component */ "./src/app/components/album-info/album-info.component.ts");
/* harmony import */ var _components_track_list_track_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/track-list/track-list.component */ "./src/app/components/track-list/track-list.component.ts");
/* harmony import */ var _components_music_player_music_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/music-player/music-player.component */ "./src/app/components/music-player/music-player.component.ts");
/* harmony import */ var _view_home_view_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-home/view-home.component */ "./src/app/view-home/view-home.component.ts");
/* harmony import */ var _view_artist_view_artist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-artist/view-artist.component */ "./src/app/view-artist/view-artist.component.ts");
/* harmony import */ var _view_album_view_album_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-album/view-album.component */ "./src/app/view-album/view-album.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/functions.service */ "./src/app/services/functions.service.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _view_home_view_home_component__WEBPACK_IMPORTED_MODULE_13__["ViewHomeComponent"],
            _view_artist_view_artist_component__WEBPACK_IMPORTED_MODULE_14__["ViewArtistComponent"],
            _view_album_view_album_component__WEBPACK_IMPORTED_MODULE_15__["ViewAlbumComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
            _components_carrousel_carrousel_component__WEBPACK_IMPORTED_MODULE_6__["CarrouselComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_album_list_album_list_component__WEBPACK_IMPORTED_MODULE_9__["AlbumListComponent"],
            _components_album_info_album_info_component__WEBPACK_IMPORTED_MODULE_10__["AlbumInfoComponent"],
            _components_artist_profile_artist_profile_component__WEBPACK_IMPORTED_MODULE_8__["ArtistProfileComponent"],
            _components_track_list_track_list_component__WEBPACK_IMPORTED_MODULE_11__["TrackListComponent"],
            _components_music_player_music_player_component__WEBPACK_IMPORTED_MODULE_12__["MusicPlayerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [
            _services_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"],
            _services_functions_service__WEBPACK_IMPORTED_MODULE_17__["FunctionsService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/album-info/album-info.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/album-info/album-info.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".albumProfile\r\n{\r\n    padding-top: 5vh;\r\n}\r\n\r\n#albumImage\r\n{\r\n    width:100%;\r\n    max-width:600px;\r\n    height:auto;\r\n    border-radius: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGJ1bS1pbmZvL2FsYnVtLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGJ1bS1pbmZvL2FsYnVtLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bVByb2ZpbGVcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDV2aDtcclxufVxyXG5cclxuI2FsYnVtSW1hZ2Vcclxue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDo2MDBweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/album-info/album-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/album-info/album-info.component.ts ***!
  \***************************************************************/
/*! exports provided: AlbumInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumInfoComponent", function() { return AlbumInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



let AlbumInfoComponent = class AlbumInfoComponent {
    constructor(_data) {
        this._data = _data;
    }
};
AlbumInfoComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AlbumInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-album-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/album-info/album-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album-info.component.css */ "./src/app/components/album-info/album-info.component.css")).default]
    })
], AlbumInfoComponent);



/***/ }),

/***/ "./src/app/components/album-list/album-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/album-list/album-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#artistImage\r\n{\r\n    width:100%;\r\n    max-width:500px;\r\n    height:auto;\r\n    border-radius: 50%;\r\n}\r\n\r\n.albumContainer\r\n{\r\n    margin-top: 5vh;\r\n}\r\n\r\n.albumImage\r\n{\r\n    width: 100%;\r\n    height: auto;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGJ1bS1saXN0L2FsYnVtLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsYnVtLWxpc3QvYWxidW0tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FydGlzdEltYWdlXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmFsYnVtQ29udGFpbmVyXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxufVxyXG5cclxuLmFsYnVtSW1hZ2Vcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/album-list/album-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/album-list/album-list.component.ts ***!
  \***************************************************************/
/*! exports provided: AlbumListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumListComponent", function() { return AlbumListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/functions.service */ "./src/app/services/functions.service.ts");




let AlbumListComponent = class AlbumListComponent {
    constructor(_data, _function) {
        this._data = _data;
        this._function = _function;
    }
    getAlbumTracks(index) {
        this._function.getAlbumTracks(index);
    }
};
AlbumListComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] }
];
AlbumListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-album-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/album-list/album-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album-list.component.css */ "./src/app/components/album-list/album-list.component.css")).default]
    })
], AlbumListComponent);



/***/ }),

/***/ "./src/app/components/artist-profile/artist-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/artist-profile/artist-profile.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".artistProfile\r\n{\r\n    margin-top: 5vh;\r\n}\r\n\r\n#artistImage\r\n{\r\n    width:100%;\r\n    max-width:600px;\r\n    height:auto;\r\n    border-radius: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpc3QtcHJvZmlsZS9hcnRpc3QtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcnRpc3QtcHJvZmlsZS9hcnRpc3QtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGlzdFByb2ZpbGVcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4jYXJ0aXN0SW1hZ2Vcclxue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDo2MDBweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/artist-profile/artist-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/artist-profile/artist-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: ArtistProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistProfileComponent", function() { return ArtistProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



let ArtistProfileComponent = class ArtistProfileComponent {
    constructor(_data) {
        this._data = _data;
    }
};
ArtistProfileComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
ArtistProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artist-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artist-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/artist-profile/artist-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artist-profile.component.css */ "./src/app/components/artist-profile/artist-profile.component.css")).default]
    })
], ArtistProfileComponent);



/***/ }),

/***/ "./src/app/components/carrousel/carrousel.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/carrousel/carrousel.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\r\n  position: fixed;\r\n  top: -1vh;\r\n  left: 2vw;\r\n  z-index: 100;\r\n  border-radius: 50%;\r\n\r\n}\r\n\r\n.logoImg {\r\n  width: 20vw;\r\n  min-width: 300px;\r\n  height: auto;\r\n  transform:rotate(-25deg);\r\n}\r\n\r\n.bannerDiv {\r\n  position: absolute;\r\n  top: 85vh;\r\n  width: 100%;\r\n  z-index: 100;\r\n}\r\n\r\n.banner {\r\n  display: block;\r\n  width: 90%;\r\n  max-width: 1600px;\r\n  margin:auto;\r\n  background-color: rgba(0,0,0,0.4);\r\n  box-shadow:0 0 30px 30px rgba(0,0,0,0.4);\r\n}\r\n\r\n/* CUSTOMIZE THE CAROUSEL\r\n  -------------------------------------------------- */\r\n\r\n/* Since positioning the image, we need to help out the caption */\r\n\r\n.carousel-caption {\r\n    bottom: 3rem;\r\n    z-index: 10;\r\n  }\r\n\r\n/* Declare heights because of positioning of img element */\r\n\r\n.carousel-item {\r\n    height:100vh;\r\n    /* height: 32rem; */\r\n  }\r\n\r\n.carousel-item > img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    height:100vh;\r\n    /* height: 32rem; */\r\n  }\r\n\r\n/* MARKETING CONTENT\r\n  -------------------------------------------------- */\r\n\r\n/* Center align the text within the three columns below the carousel */\r\n\r\n.marketing .col-lg-4 {\r\n    margin-bottom: 1.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n.marketing h2 {\r\n    font-weight: 400;\r\n  }\r\n\r\n.marketing .col-lg-4 p {\r\n    margin-right: .75rem;\r\n    margin-left: .75rem;\r\n  }\r\n\r\n/* Featurettes\r\n  ------------------------- */\r\n\r\n.featurette-divider {\r\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\r\n  }\r\n\r\n/* Thin out the marketing headings */\r\n\r\n.featurette-heading {\r\n    font-weight: 300;\r\n    line-height: 1;\r\n    letter-spacing: -.05rem;\r\n  }\r\n\r\n/* Search Artist \r\n-------------------------------------------------- */\r\n\r\n#searchForm {\r\n    position: absolute;\r\n    top:48vh;\r\n    width: 100%;\r\n    z-index:99;\r\n\r\n}\r\n\r\n#inputSearch {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    margin-right: 3px;\r\n    color: #ccc;\r\n    background-color: rgba(0,0,0,0.6);\r\n    border: 1px solid #ccc;\r\n    font-size: 1.4em;\r\n    text-align: center;\r\n    transition: 150ms;\r\n}\r\n\r\n#inputSearch:hover {\r\n  background-color: rgba(0,0,0,0.6);\r\n  box-shadow: 0 0 5px 5px rgba(255, 255, 0, 0.479);\r\n\r\n}\r\n\r\n#inputSearch:focus {\r\n  border: 1px solid #ccc;\r\n  box-shadow: 0 0 5px 5px rgba(255, 255, 0, 0.479);\r\n  outline: none;\r\n}\r\n\r\n#submitSearch {\r\n  margin-left: 3px;\r\n  color: #333;\r\n  background-color: rgb(255, 217, 0);\r\n  border: 1px solid #ccc;\r\n  font-size: 1.4em;\r\n  text-align: center;\r\n}\r\n\r\n#submitSearch:hover {\r\n  color: #ccc;\r\n  background-color: rgba(0,0,0,0.6);\r\n  box-shadow: 0 0 5px 5px rgba(255, 255, 0, 0.479);\r\n\r\n}\r\n\r\n#submitSearch:focus {\r\n  border: 1px solid #ccc;\r\n  outline: none;\r\n}\r\n\r\n/* RESPONSIVE CSS\r\n  -------------------------------------------------- */\r\n\r\n@media (min-width: 40em) {\r\n    /* Bump up size of carousel content */\r\n    .carousel-caption p {\r\n      margin-bottom: 1.25rem;\r\n      font-size: 1.25rem;\r\n      line-height: 1.4;\r\n    }\r\n  \r\n    .featurette-heading {\r\n      font-size: 50px;\r\n    }\r\n  }\r\n\r\n@media (min-width: 62em) {\r\n    .featurette-heading {\r\n      margin-top: 7rem;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJyb3VzZWwvY2Fycm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsd0NBQXdDO0FBQzFDOztBQUVBO3NEQUNzRDs7QUFFcEQsaUVBQWlFOztBQUNqRTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBRUEsMERBQTBEOztBQUMxRDtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7QUFFQTtzREFDb0Q7O0FBRXBELHNFQUFzRTs7QUFDdEU7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7QUFHQTs2QkFDMkI7O0FBRTNCO0lBQ0UsY0FBYyxFQUFFLHNDQUFzQztFQUN4RDs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7O0FBSUY7b0RBQ29EOztBQUVwRDtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnREFBZ0Q7O0FBRWxEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdEQUFnRDtFQUNoRCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsZ0RBQWdEOztBQUVsRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBS0U7c0RBQ29EOztBQUVwRDtJQUNFLHFDQUFxQztJQUNyQztNQUNFLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fycm91c2VsL2NhcnJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IC0xdmg7XHJcbiAgbGVmdDogMnZ3O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG59XHJcblxyXG4ubG9nb0ltZyB7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZSgtMjVkZWcpO1xyXG59XHJcblxyXG4uYmFubmVyRGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4NXZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBtYXJnaW46YXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgYm94LXNoYWRvdzowIDAgMzBweCAzMHB4IHJnYmEoMCwwLDAsMC40KTtcclxufVxyXG5cclxuLyogQ1VTVE9NSVpFIFRIRSBDQVJPVVNFTFxyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgLyogU2luY2UgcG9zaXRpb25pbmcgdGhlIGltYWdlLCB3ZSBuZWVkIHRvIGhlbHAgb3V0IHRoZSBjYXB0aW9uICovXHJcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgYm90dG9tOiAzcmVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXHJcbiAgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgLyogaGVpZ2h0OiAzMnJlbTsgKi9cclxuICB9XHJcbiAgLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIC8qIGhlaWdodDogMzJyZW07ICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1BUktFVElORyBDT05URU5UXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICBcclxuICAvKiBDZW50ZXIgYWxpZ24gdGhlIHRleHQgd2l0aGluIHRoZSB0aHJlZSBjb2x1bW5zIGJlbG93IHRoZSBjYXJvdXNlbCAqL1xyXG4gIC5tYXJrZXRpbmcgLmNvbC1sZy00IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm1hcmtldGluZyBoMiB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAubWFya2V0aW5nIC5jb2wtbGctNCBwIHtcclxuICAgIG1hcmdpbi1yaWdodDogLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogRmVhdHVyZXR0ZXNcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgLmZlYXR1cmV0dGUtZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDVyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cclxuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xyXG4gIH1cclxuICBcclxuICBcclxuXHJcbi8qIFNlYXJjaCBBcnRpc3QgXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4jc2VhcmNoRm9ybSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NDh2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDo5OTtcclxuXHJcbn1cclxuXHJcbiNpbnB1dFNlYXJjaCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcclxufVxyXG5cclxuI2lucHV0U2VhcmNoOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMCwgMC40NzkpO1xyXG5cclxufVxyXG5cclxuI2lucHV0U2VhcmNoOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDc5KTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jc3VibWl0U2VhcmNoIHtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxNywgMCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3N1Ym1pdFNlYXJjaDpob3ZlciB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDc5KTtcclxuXHJcbn1cclxuXHJcbiNzdWJtaXRTZWFyY2g6Zm9jdXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuICAvKiBSRVNQT05TSVZFIENTU1xyXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcclxuICAgIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgICBtYXJnaW4tdG9wOiA3cmVtO1xyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/carrousel/carrousel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/carrousel/carrousel.component.ts ***!
  \*************************************************************/
/*! exports provided: CarrouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrouselComponent", function() { return CarrouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/functions.service */ "./src/app/services/functions.service.ts");



let CarrouselComponent = class CarrouselComponent {
    constructor(_function) {
        this._function = _function;
    }
    search(event) {
        event.preventDefault();
        const input = document.querySelector('#inputSearch').value;
        this._function.getArtistAndAlbums(input);
    }
};
CarrouselComponent.ctorParameters = () => [
    { type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] }
];
CarrouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrousel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carrousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carrousel/carrousel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carrousel.component.css */ "./src/app/components/carrousel/carrousel.component.css")).default]
    })
], CarrouselComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/music-player/music-player.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/music-player/music-player.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-audio {\r\n    position:fixed;\r\n    bottom:0px;\r\n    left:0px;\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 0 20px 20px 20px;\r\n    background-color: #0c0117;\r\n    color: #eee;\r\n    overflow: hidden;\r\n}\r\n\r\naudio\r\n{\r\n    display:block;\r\n    width:90%;\r\n    margin:auto;\r\n}\r\n\r\naudio:focus\r\n{\r\n    outline: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tdXNpYy1wbGF5ZXIvbXVzaWMtcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tdXNpYy1wbGF5ZXIvbXVzaWMtcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWF1ZGlvIHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOjBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMDExNztcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYXVkaW9cclxue1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG5hdWRpbzpmb2N1c1xyXG57XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/music-player/music-player.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/music-player/music-player.component.ts ***!
  \*******************************************************************/
/*! exports provided: MusicPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerComponent", function() { return MusicPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/functions.service */ "./src/app/services/functions.service.ts");



let MusicPlayerComponent = class MusicPlayerComponent {
    constructor(_function) {
        this._function = _function;
    }
    getCurrentTrack() {
        const track = this._function.getCurrentTrack();
        this.audioNode = document.querySelector('audio');
        if (track) {
            this.audioNode.setAttribute('src', track);
            this.audioNode.load();
        }
    }
};
MusicPlayerComponent.ctorParameters = () => [
    { type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] }
];
MusicPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-music-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/music-player/music-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music-player.component.css */ "./src/app/components/music-player/music-player.component.css")).default]
    })
], MusicPlayerComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bdSuperDark {\r\n    color: #ccc;\r\n    background-color: #0c0117;\r\n    border: 1px solid #ccc;\r\n}\r\n.bdSuperDark:focus {\r\n    color: #ccc;\r\n    background-color: #0c0117;\r\n    border: 1px solid #ccc;\r\n    outline:none;\r\n    box-shadow: none;\r\n}\r\n.logoImg {\r\n    width: 200px;\r\n    height:auto;\r\n    cursor: pointer;\r\n}\r\n.iconSearch{\r\n    margin-top:5px;\r\n    font-size: 1.7em;\r\n    color: #ccc;\r\n    cursor: pointer;\r\n}\r\n#inputSearch {\r\n    width:80%;\r\n    color: #ccc;\r\n    border: 1px solid #ccc;\r\n    text-align: center;\r\n    transition: 150ms;\r\n}\r\n#inputSearch:hover {\r\n    box-shadow: 0 0 5px 5px rgba(255, 255, 0, 0.479);\r\n}\r\n#inputSearch:focus {\r\n    border: 1px solid #ccc;\r\n    box-shadow: 0 0 5px 5px rgba(255, 255, 0, 0.479);\r\n    outline: none;\r\n}\r\n#buttonSearch {\r\n    width:20%;\r\n    color: #333;\r\n    background-color: rgb(255, 217, 0);\r\n    border: 1px solid #ccc;\r\n    transition: 150ms;\r\n  }\r\n#buttonSearch:hover {\r\n    color: #ccc;\r\n    background-color: #0c0117;\r\n    box-shadow: 0 0 5px 5px rgba(255, 255, 0, 0.479);\r\n  \r\n  }\r\n#buttonSearch:focus {\r\n    border: 1px solid #ccc;\r\n    outline: none;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdEQUFnRDtJQUNoRCxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdEQUFnRDs7RUFFbEQ7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJkU3VwZXJEYXJrIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMDExNztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLmJkU3VwZXJEYXJrOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMDExNztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubG9nb0ltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmljb25TZWFyY2h7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2lucHV0U2VhcmNoIHtcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDE1MG1zO1xyXG59XHJcblxyXG4jaW5wdXRTZWFyY2g6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMCwgMC40NzkpO1xyXG59XHJcblxyXG4jaW5wdXRTZWFyY2g6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDc5KTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNidXR0b25TZWFyY2gge1xyXG4gICAgd2lkdGg6MjAlO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMTcsIDApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHRyYW5zaXRpb246IDE1MG1zO1xyXG4gIH1cclxuICBcclxuICAjYnV0dG9uU2VhcmNoOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMDExNztcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDc5KTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgI2J1dHRvblNlYXJjaDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/functions.service */ "./src/app/services/functions.service.ts");



let NavBarComponent = class NavBarComponent {
    constructor(_function) {
        this._function = _function;
    }
    search(event) {
        event.preventDefault();
        const input = document.querySelector('#inputSearch').value;
        document.querySelector('#inputSearch').value = '';
        this._function.getArtistAndAlbums(input);
    }
    redirectHome() {
        this._function.redirectHome();
    }
};
NavBarComponent.ctorParameters = () => [
    { type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/track-list/track-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/track-list/track-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".trackListContainer\r\n{\r\n    margin: 7vh 0 10vh 0;\r\n}\r\n\r\n.cardTrack\r\n{\r\n    padding-top:12px;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjay1saXN0L3RyYWNrLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2stbGlzdC90cmFjay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhY2tMaXN0Q29udGFpbmVyXHJcbntcclxuICAgIG1hcmdpbjogN3ZoIDAgMTB2aCAwO1xyXG59XHJcblxyXG4uY2FyZFRyYWNrXHJcbntcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/track-list/track-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/track-list/track-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TrackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackListComponent", function() { return TrackListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/functions.service */ "./src/app/services/functions.service.ts");




let TrackListComponent = class TrackListComponent {
    constructor(_data, _function) {
        this._data = _data;
        this._function = _function;
        this._data.cache['current'].track = null;
    }
    setCurrentTrack(url) {
        this._function.setCurrentTrack(url);
    }
    getDurationTrak(duration) {
        const minutes = Math.floor(duration / 60).toString();
        let seconds = Math.round(duration % 60).toString();
        if (seconds.length < 2)
            seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }
};
TrackListComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] }
];
TrackListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-track-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./track-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/track-list/track-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./track-list.component.css */ "./src/app/components/track-list/track-list.component.css")).default]
    })
], TrackListComponent);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataService = class DataService {
    constructor() {
        this.cache = {
            artist: '',
            album: [],
            current: {
                album: '',
                track: '',
                ready: false,
            }
        };
        // this.proxy = `http://34.244.31.95:3000/`;
        this.proxy = `https://cors-anywhere.herokuapp.com/`;
        this.url = `https://api.deezer.com/search?q=`;
    }
    ;
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/services/functions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/functions.service.ts ***!
  \***********************************************/
/*! exports provided: FunctionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsService", function() { return FunctionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");




let FunctionsService = class FunctionsService {
    constructor(router, _data) {
        this.router = router;
        this._data = _data;
    }
    ajaxPromise(proxy, url) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', proxy + url);
            req.onload = () => {
                (req.status === 200)
                    ? resolve(JSON.parse(req.responseText).data)
                    : reject(req.responseText);
            };
            req.send();
            console.log('ajaxPromise');
        });
    }
    ;
    getArtistAndAlbums(input) {
        this.ajaxPromise(this._data.proxy, this._data.url + input)
            .then((data) => {
            const dafaultPic = [
                `https://cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg`,
                `https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg`,
            ];
            const thisDefaultPic = `https://img.hebus.com/hebus_2003/12/30/preview/20031230132531_18.jpg`;
            if (dafaultPic.indexOf(data[0].artist.picture_big) !== -1)
                data[0].artist.picture_big = thisDefaultPic;
            this._data.cache['artist'] = {
                id: data[0].artist.id,
                name: data[0].artist.name,
                image: data[0].artist.picture_big
            };
            let cacheTemp = [];
            this._data.cache['album'] = [];
            data.forEach((d) => {
                if (cacheTemp.indexOf(d['album'].title) === -1) {
                    cacheTemp.push(d['album'].title);
                    this._data.cache['album'].push({
                        id: d.album.id,
                        title: d.album.title,
                        image: d.album.cover_big,
                        tracklistUrl: d.album.tracklist
                    });
                }
                ;
            });
            this.router.navigateByUrl(`/artist/${data[0].artist.name}`);
        })
            .catch((err) => { console.log(err); });
    }
    ;
    getAlbumTracks(index) {
        const trackListUrl = this._data.cache['album'][index].tracklistUrl;
        const albumTitle = this._data.cache['album'][index].title.match(/[\w\s\d]/gim).join('');
        this._data.cache['current'].album = index;
        this.ajaxPromise(this._data.proxy, trackListUrl)
            .then((data) => {
            let cacheTemp = [];
            this._data.cache['album'][index].trackList = data.map((d) => {
                if (cacheTemp.indexOf(d['title']) === -1) {
                    cacheTemp.push(d['title']);
                    return {
                        id: d['id'],
                        title: d['title'],
                        track: d['preview'],
                        duration: d['duration']
                    };
                }
                ;
            });
            this._data.cache['current'].ready = true;
            this.router.navigateByUrl(`/album/${albumTitle}`);
        })
            .catch((err) => { console.log(err); });
    }
    ;
    getAlbumTracksByAlbumName(title) {
        this.ajaxPromise(this._data.proxy, this._data.url + `album:"${title}"`)
            .then((data) => {
            const dafaultPic = `https://cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg`;
            const thisDefaultPic = `https://img.hebus.com/hebus_2003/12/30/preview/20031230132531_18.jpg`;
            if (data[0].artist.picture_big === dafaultPic)
                data[0].artist.picture_big = thisDefaultPic;
            let cacheTemp = [];
            this._data.cache['album'] = [];
            this._data.cache['current'].album = 0;
            this._data.cache['artist'] = {
                id: data[0].artist.id,
                name: data[0].artist.name,
                image: data[0].artist.picture_big
            };
            this._data.cache['album'].push({
                id: data[0].album.id,
                title: data[0].album.title,
                image: data[0].album.cover_big,
                tracklistUrl: data[0].album.tracklist
            });
            const trackListUrl = this._data.cache['album'][0].tracklistUrl;
            this.ajaxPromise(this._data.proxy, trackListUrl)
                .then((data) => {
                this._data.cache['album'][0].trackList = data.map((d) => {
                    if (cacheTemp.indexOf(d['id']) === -1) {
                        cacheTemp.push(d['id']);
                        return {
                            id: d['id'],
                            title: d['title'],
                            track: d['preview'],
                            duration: d['duration']
                        };
                    }
                    ;
                });
                this._data.cache['current'].ready = true;
            })
                .catch((err) => { console.log(err); });
        })
            .catch((err) => { console.log(err); });
    }
    ;
    setCurrentTrack(url) {
        this._data.cache['current'].track = url;
    }
    ;
    getCurrentTrack() {
        return this._data.cache['current'].track;
    }
    ;
    redirectHome() {
        this.router.navigateByUrl('/');
    }
};
FunctionsService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
FunctionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FunctionsService);

;


/***/ }),

/***/ "./src/app/view-album/view-album.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-album/view-album.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".containerViewAlbum {\r\n    background-color: #0c0117;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1hbGJ1bS92aWV3LWFsYnVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC92aWV3LWFsYnVtL3ZpZXctYWxidW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJWaWV3QWxidW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMDExNztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/view-album/view-album.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-album/view-album.component.ts ***!
  \****************************************************/
/*! exports provided: ViewAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAlbumComponent", function() { return ViewAlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/functions.service */ "./src/app/services/functions.service.ts");





let ViewAlbumComponent = class ViewAlbumComponent {
    constructor(_data, _function, router, _path) {
        this._data = _data;
        this._function = _function;
        this.router = router;
        this._path = _path;
        this.queryString = this._path.snapshot.params.id.toUpperCase();
        if (this.queryString) {
            if (this._data.cache[`album`].length === 0) {
                this._data.cache['current'].ready = false;
                this._function.getAlbumTracksByAlbumName(this.queryString);
            }
            else if (this._data.cache[`album`][_data.cache['current'].album].title.toUpperCase().match(/[\w\s\d]/gim).join('') != this.queryString) {
                this._data.cache['current'].ready = false;
                this._function.getAlbumTracksByAlbumName(this.queryString);
            }
            ;
        }
        else {
            this.router.navigateByUrl('');
        }
        ;
        window.scrollTo(0, 0);
    }
    getterView() {
        return this._data.cache['current'].ready;
    }
};
ViewAlbumComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewAlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-album',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-album/view-album.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-album.component.css */ "./src/app/view-album/view-album.component.css")).default]
    })
], ViewAlbumComponent);



/***/ }),

/***/ "./src/app/view-artist/view-artist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/view-artist/view-artist.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".containerViewArtist {\r\n    background-color: #0c0117;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1hcnRpc3Qvdmlldy1hcnRpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYXJ0aXN0L3ZpZXctYXJ0aXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyVmlld0FydGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwMTE3O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/view-artist/view-artist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/view-artist/view-artist.component.ts ***!
  \******************************************************/
/*! exports provided: ViewArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewArtistComponent", function() { return ViewArtistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/functions.service */ "./src/app/services/functions.service.ts");





let ViewArtistComponent = class ViewArtistComponent {
    constructor(_data, _function, router, _path) {
        this._data = _data;
        this._function = _function;
        this.router = router;
        this._path = _path;
        this.queryString = this._path.snapshot.params.id.toUpperCase();
        if (this.queryString) {
            this._function.getArtistAndAlbums(this.queryString);
        }
        else {
            this.router.navigateByUrl('');
        }
        ;
    }
    ;
};
ViewArtistComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewArtistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-artist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-artist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-artist/view-artist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-artist.component.css */ "./src/app/view-artist/view-artist.component.css")).default]
    })
], ViewArtistComponent);



/***/ }),

/***/ "./src/app/view-home/view-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-home/view-home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctaG9tZS92aWV3LWhvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/view-home/view-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-home/view-home.component.ts ***!
  \**************************************************/
/*! exports provided: ViewHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHomeComponent", function() { return ViewHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewHomeComponent = class ViewHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-home/view-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-home.component.css */ "./src/app/view-home/view-home.component.css")).default]
    })
], ViewHomeComponent);



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

module.exports = __webpack_require__(/*! C:\Users\admin\OneDrive\Cursos\Web\Neoland\12-Online-Music-Player\StereoOnline\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map