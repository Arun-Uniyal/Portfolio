webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{padding: 20px 0; margin-bottom: 90px;}\r\n.primary-menu{font-size: 22px; color: #56a5ce; border-bottom: 1px solid #ebebeb; padding-bottom: 20px;}\r\n.primary-menu li:not(:last-child) a::after {\r\n    margin: 0 30px;\r\n    display: inline-block;\r\n    content: '/';\r\n    color: #eee;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"container\">\r\n    <!-- <p class=\"text-center\"><img src=\"assets/img/logo.svg\" width=\"80\" alt=\"Arun Uniyal\"></p> -->\r\n    <nav>\r\n        <ul class=\"nav justify-content-center\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" href=\"#\">\r\n                        <svg width=\"80\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                        viewBox=\"-133.3 306 266.6 348\" style=\"enable-background:new -133.3 306 266.6 348;\" xml:space=\"preserve\">\r\n                        <style type=\"text/css\">\r\n                            .st0{fill:url(#XMLID_2_);}\r\n                        </style>\r\n                        <g id=\"XMLID_3_\">\r\n                            \r\n                                <linearGradient id=\"XMLID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"-130.2\" y1=\"-0.45\" x2=\"131.3\" y2=\"-0.45\" gradientTransform=\"matrix(1 0 0 -1 0 480)\">\r\n                                <stop  offset=\"0\" style=\"stop-color:#155A96\"/>\r\n                                <stop  offset=\"0.9944\" style=\"stop-color:#15925E\"/>\r\n                            </linearGradient>\r\n                            <path id=\"XMLID_4_\" class=\"st0\" d=\"M24.8,593.7c-24.6,35.8-51.9,53.7-82,53.7c-21.6,0-39.2-8.9-52.7-26.6s-20.3-40.5-20.3-68.4\r\n                                c0-37.8,9.9-75.5,29.7-113.2S-55.2,371-24,347.8s61.8-34.9,91.8-34.9c19.4,0,34.8,6.5,46.3,19.4c11.5,12.9,17.2,30.3,17.2,52.1\r\n                                c0,50.7-25.2,91-75.7,120.9v100.5c0,9.6,0.6,16.1,1.8,19.3s4.5,4.9,9.9,4.9c12,0,26.2-10.7,42.5-32l7.8,6.3\r\n                                c-11.2,16.1-21.4,27.4-30.5,33.9S68.4,648,58.3,648c-11.1,0-19.5-3-25.1-9.1C27.4,633,24.7,617.9,24.8,593.7z M55.6,491.9\r\n                                c18.1-9.1,31.9-21.7,41.4-37.9s14.3-34,14.3-53.5c0-20.6-6-37-18.1-49c-12-12-28.1-18-48.1-18c-36.5,0-69.7,19.3-99.7,57.8\r\n                                s-45,84.6-45,138.1c0,29.3,5.3,52.9,15.9,70.7c10.6,17.9,24.3,26.8,41,26.8c5,0,10-0.8,15-2.3c5-1.5,9.8-3.8,14.6-6.8\r\n                                c4.8-3,9.5-6.8,14-11.4c4.6-4.6,9.7-11.2,15.4-19.9c5.7-8.7,8.5-14.3,8.5-16.7V517c-5.5,0.7-10.3,1-14.2,1c-16.9,0-30.4-5-40.4-15\r\n                                c-10-10-15-23.3-15-39.9c0-16.1,4.9-31.9,14.8-47.2c9.8-15.4,23.4-27.1,40.6-35.3l3.7,5.4c-24.7,20.6-37.1,43.3-37.1,68\r\n                                c0,14.6,3.9,26.3,11.8,35c7.9,8.7,18.6,13,32.1,13h3.7v-98.4L55.6,387L55.6,491.9L55.6,491.9z\"/>\r\n                        </g>\r\n                        </svg>\r\n                </a>\r\n            </li>\r\n            \r\n        </ul>\r\n    </nav>\r\n    <nav class=\"primary-menu\"> \r\n            <ul class=\"nav justify-content-center\">\r\n                <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\">Home</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"work\" routerLinkActive=\"active\">My Work</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"services\" routerLinkActive=\"active\">Services</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"about\" routerLinkActive=\"active\">About Me</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"contact\" routerLinkActive=\"active\">Contact</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n</header>\r\n<section class=\"container\">\r\n    \r\n    <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n    </div>   \r\n</section>\r\n\r\n<cta></cta>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_work_component__ = __webpack_require__("../../../../../src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cta_cta_component__ = __webpack_require__("../../../../../src/app/cta/cta.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'work',
        component: __WEBPACK_IMPORTED_MODULE_5__work_work_component__["a" /* WorkComponent */]
    },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_6__services_services_component__["a" /* ServicesComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'work/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__error_error_component__["a" /* ErrorComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__work_work_component__["a" /* WorkComponent */],
            __WEBPACK_IMPORTED_MODULE_6__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_9__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__cta_cta_component__["a" /* CtaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/cta/cta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-section-small {\r\n    max-width: 960px;\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n.page-cta .section-title {\r\n    margin-bottom: 5px;\r\n}\r\n.text-faded, .post-excerpt {\r\n    color: #848484;\r\n}\r\n.text-large, .post-excerpt {\r\n    font-size: 30px;\r\n    line-height: 136%;\r\n}\r\n.page-cta .btn-wrap {\r\n    padding-top: 25px;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.btn, .btn-small, .btn-large, .btn-ghost-large, .btn-ghost {\r\n    padding: 17px 24px 15px;\r\n    display: inline-block;\r\n    box-shadow: 0 3px 0 #368ebb;\r\n    border-radius: 4px;\r\n    border: none;\r\n    background: #56a5ce;\r\n    transition: all linear 0.15s,false,false,false;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    color: #fff;\r\n}\r\n.btn-large, .btn-ghost-large {\r\n    padding: 22px 38px;\r\n    font-size: 26px;\r\n}\r\n.btn-wrap [class^=\"btn-\"] {\r\n    float: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cta/cta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-main-content page-cta\">\n    <div class=\"page-section-small\">\n        <h2 class=\"section-title\"><a routerLink=\"contact\">Get in Touch!</a></h2>\n        <p class=\"text-large text-faded\">I'm currently building awesome websites at CodeBridge and also looking for new work.</p>\n        <div class=\"btn-wrap\">\n            <a class=\"btn-large\" routerLink=\"contact\">Contact Me <span class=\"fa fa-chevron-right\"></span></a></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cta/cta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CtaComponent = (function () {
    function CtaComponent() {
    }
    CtaComponent.prototype.ngOnInit = function () {
    };
    return CtaComponent;
}());
CtaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cta',
        template: __webpack_require__("../../../../../src/app/cta/cta.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cta/cta.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CtaComponent);

//# sourceMappingURL=cta.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{color: #56A5CE;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-light\">\n<h1 class=\"text-center\">Page Not Found</h1>\n<br>\n<br>\n<br>\n<p class=\"text-center\"><a routerLink=\"\" class=\"btn btn-primary\">Back to Home</a></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".site-footer {\r\n    margin-top: 75px;\r\n}\r\n.site-footer-content {\r\n    padding: 40px 0 50px;\r\n    border-top: 1px solid #e5e5e5;  \r\n}\r\n.site-footer-left {\r\n    float: left;\r\n}\r\n.site-footer-social {\r\n    float: right;\r\n}\r\n\r\n.site-footer-left p, .site-footer-left a {\r\n    padding-top: 12px;\r\n    font-size: 18px;\r\n    color: #ababab;\r\n}\r\n.site-footer p, .site-footer li {\r\n    line-height: 135%;\r\n}\r\n.site-footer-copyright {\r\n    font-style: italic;\r\n}\r\n.site-footer-social ul {\r\n    display: inline-block;\r\n}\r\n.site-footer-social ul li {\r\n    margin: 0;\r\n    float: left;\r\n    list-style: none;\r\n}\r\n.site-footer-social ul li:not(:first-child) {\r\n    margin-left: 20px;\r\n}\r\n.site-footer-social li a {\r\n    width: 45px;\r\n    height: 45px;\r\n    margin-top: 3px;\r\n    padding-top: 13px; \r\n    display: inline-block;\r\n    border-radius: 1000px;\r\n    background: #f5f5f5;\r\n    text-align: center;\r\n    color: #ababab;\r\n    transition: all linear 0.15s,false,false,false;\r\n}\r\n.site-footer-social li a {\r\n    text-align: center;\r\n    color: #ababab;\r\n}\r\n.site-footer-social li a:hover {\r\n    color: #fff;\r\n}\r\n.site-footer-social .twitter:hover {\r\n    background: #55acee;\r\n}\r\n.site-footer-social .facebook:hover {\r\n    background: #3b5998;\r\n}\r\n.site-footer-social .dribbble:hover {\r\n    background: #EA4C89;\r\n}\r\n.site-footer-social .linkedin:hover {\r\n    background: #0073B2;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"site-footer\">\n    <div class=\"site-footer-content container\">\n        <div class=\"site-footer-left\">\n            <p class=\"site-footer-copyright\"> designe and developed by Arun Uniyal.</p>\n        </div>\n        <nav class=\"site-footer-social\">\n            <ul>\n                <li><a class=\"twitter\" href=\"https://twitter.com/\" target=\"_blank\"><span class=\"fa fa-twitter\"></span></a></li>\n                <li><a class=\"facebook\" href=\"https://www.facebook.com/uniyal.arun/\"><span class=\"fa fa-facebook\" target=\"_blank\"></span></a></li>\n                <li><a class=\"dribbble\" href=\"https://dribbble.com/\"><span class=\"fa fa-dribbble\" target=\"_blank\"></span></a></li>\n                <li><a class=\"linkedin\" href=\"https://uk.linkedin.com/in/\"><span class=\"fa fa-linkedin\" target=\"_blank\"></span></a></li>\n            </ul>\n        </nav>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n    .page-main-content,.testimonial {\r\n    max-width:1400px;\r\n    width:100%;\r\n    margin:0 auto;\r\n    }\r\n    \r\n    @media screen and (max-width: 1460px) {\r\n    .page-main-content,.testimonial {\r\n    width:90%;\r\n    }\r\n    }\r\n    \r\n    \r\n    \r\n    \r\n       \r\n    h1 {\r\n    font-size:56px;\r\n    }\r\n    \r\n    h2 {\r\n    font-size:40px;\r\n    }\r\n    \r\n    h3 {\r\n    font-size:32px;\r\n    }\r\n    \r\n    p {\r\n    font-size:20px;\r\n    line-height:167%;\r\n    }\r\n    \r\n    a {\r\n    color:#56a5ce;\r\n    text-decoration:none;\r\n    }\r\n    \r\n    a:hover {\r\n    text-decoration:underline;\r\n    }\r\n    \r\n    h1+h3 {\r\n    margin-top:45px;\r\n    }\r\n    \r\n   \r\n    \r\n    .btn,.btn-large,.btn-ghost {\r\n    padding:17px 24px 15px;\r\n    display:inline-block;\r\n    box-shadow:0 3px 0 #368ebb;\r\n    border-radius:4px;\r\n    border:none;\r\n    background:#56a5ce;\r\n    transition:all linear 0.15s,false,false,false;\r\n    font-size:18px;\r\n    font-weight:400;\r\n    color:#fff;\r\n    }\r\n    \r\n    .btn:hover,.btn-large:hover,.btn-ghost:hover,.btn:active,.btn-large:active,.btn-ghost:active {\r\n    cursor:pointer;\r\n    background:#78b7d8;\r\n    text-decoration:none;\r\n    }\r\n    \r\n    .btn [class^=\"fa-\"],.btn-large [class^=\"fa-\"],.btn-ghost [class^=\"fa-\"] {\r\n    line-height:0;\r\n    }\r\n    \r\n    .btn [class^=\"fa-chevron-\"],.btn-large [class^=\"fa-chevron-\"],.btn-ghost [class^=\"fa-chevron-\"] {\r\n    margin-left:2px;\r\n    position:relative;\r\n    top:3px;\r\n    font-size:16px;\r\n    }\r\n    \r\n    .btn-large {\r\n    padding:22px 38px;\r\n    font-size:26px;\r\n    }\r\n    \r\n    .btn-large [class^=\"fa-\"] {\r\n    font-size:22px;\r\n    }\r\n    \r\n    .btn-large [class^=\"fa-chevron-\"] {\r\n    font-size:21px;\r\n    }\r\n    \r\n    .btn-ghost {\r\n    box-shadow:inset 0 0 0 2px #c6c6c6;\r\n    background:none;\r\n    color:#9e9e9e;\r\n    }\r\n    \r\n    .btn-wrap {\r\n    display:inline-block;\r\n    }\r\n    \r\n    .btn-wrap [class^=\"btn-\"] {\r\n    float:left;\r\n    }\r\n    \r\n    blockquote p {\r\n    font-size:32px;\r\n    font-style:italic;\r\n    color:#4c4c4c;\r\n    line-height:130%;\r\n    }\r\n    \r\n    blockquote p:before {\r\n    margin-right:5px;\r\n    content:'\\201C';\r\n    }\r\n    \r\n    blockquote p:after {\r\n    margin-left:5px;\r\n    content:'\\201D';\r\n    }\r\n    \r\n    blockquote cite {\r\n    color:#777;\r\n    }\r\n    \r\n    blockquote cite {\r\n    margin:20px 0 0;\r\n    display:inline-block;\r\n    font-size:20px;\r\n    }\r\n    \r\n    .btn-ghost:hover,.btn-ghost:active {\r\n    box-shadow:inset 0 0 0 2px #848484;\r\n    background:none;\r\n    color:#5e5e5e;\r\n    }\r\n    \r\n    .project-snippet {\r\n    margin-bottom:67px;\r\n    }\r\n    \r\n    .project-snippet .btn {\r\n    margin-top:20px;\r\n    }\r\n    \r\n    .project-snippet .work-previews {\r\n    width:64.818181818182%;\r\n    float:left;\r\n    }\r\n    \r\n    .project-snippet-info {\r\n    width:29.636363636364%;\r\n    float:right;\r\n    }\r\n    \r\n    .project-title {\r\n    margin-bottom:16px;\r\n    font-size:32px;\r\n    font-weight:400;\r\n    }\r\n    \r\n    .project-snippet:last-child {\r\n    margin-bottom:0;\r\n    }\r\n    \r\n    @media screen and (max-width: 920px) {\r\n    .project-snippet {\r\n    text-align:center;\r\n    }\r\n    \r\n    .project-snippet .work-previews,.project-snippet-info {\r\n    max-width:100%;\r\n    width:100%;\r\n    float:none;\r\n    }\r\n    \r\n    .project-snippet .work-previews {\r\n    margin-bottom:30px;\r\n    }\r\n    }\r\n    \r\n    .work-previews {\r\n    width:100%;\r\n    margin-bottom:45px;\r\n    position:relative;\r\n    }\r\n    \r\n    .work-previews .preview-top {\r\n    width:100%;\r\n    height:40px;\r\n    padding:7px;\r\n    border-radius:4px 4px 0 0;\r\n    background:#e8e8e8;\r\n    }\r\n    \r\n    .work-previews [class^=\"circle-\"] {\r\n    width:14px;\r\n    height:14px;\r\n    margin:6px 0 0 8px;\r\n    display:inline-block;\r\n    border-radius:1000px;\r\n    }\r\n    \r\n    .work-previews [class^=\"circle-\"].circle-red {\r\n    background:#d95b6a;\r\n    }\r\n    \r\n    .work-previews [class^=\"circle-\"].circle-yellow {\r\n    background:#e0d85e;\r\n    }\r\n    \r\n    .work-previews [class^=\"circle-\"].circle-green {\r\n    background:#5bd98a;\r\n    }\r\n    \r\n    .work-previews .preview-url {\r\n    height:26px;\r\n    padding:2px 8px 0;\r\n    float:right;\r\n    border-radius:3px;\r\n    background:#fff;\r\n    font-size:14px;\r\n    color:#919191;\r\n    }\r\n    \r\n    .work-previews a {\r\n    display:block;\r\n    background:#e8e8e8;\r\n    }\r\n    \r\n    .work-previews .preview-img {\r\n    border-radius:0 0 4px 4px;\r\n    border:3px solid #e8e8e8;\r\n    border-top:none;\r\n    }\r\n    \r\n    .work-previews .preview-img img {\r\n    display:block;\r\n    box-shadow:none;\r\n    border-radius:5px;\r\n    }\r\n    \r\n    .desktop-preview .preview-url {\r\n    width:88.15789%;\r\n    }\r\n    \r\n    .mobile-preview {\r\n    max-width:300px;\r\n    width:100%;\r\n    position:absolute;\r\n    bottom:-30px;\r\n    right:-30px;\r\n    }\r\n    \r\n    .desktop-preview,.mobile-preview .preview-url {\r\n    width:100%;\r\n    }\r\n    \r\n    @media screen and (max-width: 1100px) {\r\n    .desktop-preview {\r\n    max-width:100%;\r\n    }\r\n    \r\n    .desktop-preview .preview-url {\r\n    width:100%;\r\n    }\r\n    \r\n    .work-previews [class^=\"circle-\"],.mobile-preview {\r\n    display:none;\r\n    }\r\n    }\r\n    \r\n    .page-featured {\r\n    width:90%;\r\n    max-width:1000px;\r\n    margin:0 auto;\r\n    margin-bottom:87px;\r\n    text-align:center;\r\n    }\r\n    \r\n    .page-featured img {\r\n    max-width:330px;\r\n    width:33%;\r\n    float:left;\r\n    border-radius:1000px;\r\n    }\r\n    \r\n    .page-featured h1,.page-featured h3 {\r\n    width:60.625%;\r\n    float:right;\r\n    text-align:left;\r\n    }\r\n    \r\n    .page-featured h3 {\r\n    margin-top:15px;\r\n    font-size:34px;\r\n    color:#919191;\r\n    line-height:130%;\r\n    }\r\n    \r\n    .page-featured .btn-wrap {\r\n    padding-top:54px;\r\n    display:inline-block;\r\n    text-align:center;\r\n    }\r\n    \r\n    @media screen and (max-width: 920px) {\r\n    .page-featured {\r\n    margin-bottom:60px;\r\n    }\r\n    }\r\n    \r\n    @media screen and (max-width: 700px) {\r\n    .page-featured img {\r\n    width:100%;\r\n    }\r\n    \r\n    .page-featured h1,.page-featured h3 {\r\n    width:100%;\r\n    text-align:center;\r\n    }\r\n    \r\n    .page-featured .btn-wrap {\r\n    padding-top:30px;\r\n    }\r\n    \r\n    .page-featured img,.page-featured h1,.page-featured h3,.page-featured .btn-large {\r\n    float:none;\r\n    }\r\n    }\r\n    \r\n    .section-title {\r\n    text-align:center;\r\n    }\r\n    \r\n    .section-title {\r\n    margin-bottom:37px;\r\n    }\r\n    \r\n    @media screen and (max-width: 920px) {\r\n    .page-main {\r\n    padding:30px 0 0;\r\n    }\r\n    }\r\n    \r\n    .icon-section {\r\n    text-align:center;\r\n    }\r\n    \r\n    .icon-section .btn-ghost {\r\n    margin-top:20px;\r\n    }\r\n    \r\n    .icon-section-title {\r\n    margin:20px 0 12px;\r\n    font-size:28px;\r\n    }\r\n    \r\n    .circle-icon-small {\r\n    display:inline-block;\r\n    border-radius:1000px;\r\n    background:#56a5ce;\r\n    color:#fff;\r\n    transition:all linear 0.15s,false,false,false;\r\n    }\r\n    \r\n    .circle-icon-small:hover {\r\n    background:#7ebad9;\r\n    }\r\n    \r\n    .circle-icon-small {\r\n    width:80px;\r\n    height:80px;\r\n    padding-top:25px;\r\n    font-size:32px;\r\n    }\r\n    \r\n    @media screen and (max-width: 920px) {\r\n    .icon-section .col-3 {\r\n    width:100%;\r\n    padding:0;\r\n    }\r\n    \r\n    .icon-section .col-3:hover {\r\n    background:none;\r\n    }\r\n    }\r\n    \r\n    .testimonial-section {\r\n    width:100%;\r\n    padding:60px 0;\r\n    margin:80px 0;\r\n    background:#e9f1f5;\r\n    }\r\n    \r\n    .testimonial {\r\n    max-width:960px;\r\n    text-align:center;\r\n    }\r\n    \r\n    .testimonial p {\r\n    color:#656c6f;\r\n    }\r\n    \r\n    .testimonial img {\r\n    width:60px;\r\n    margin-top:-15px;\r\n    margin-right:20px;\r\n    float:left;\r\n    border:none;\r\n    }\r\n    \r\n    .testimonial cite {\r\n    padding-top:33px;\r\n    color:#92a0a8;\r\n    line-height:130%;\r\n    }\r\n    \r\n    @media screen and (max-width: 550px) {\r\n    .testimonial-section {\r\n    padding:40px 20px;\r\n    margin:60px 0;\r\n    }\r\n    \r\n    .testimonial-section img {\r\n    display:none;\r\n    }\r\n    \r\n    .testimonial-section cite {\r\n    padding-top:0;\r\n    }\r\n    }\r\n    \r\n \r\n    hr {\r\n    height:1px;\r\n    margin:75px 0 70px;\r\n    background:#ebebeb;\r\n    }\r\n    \r\n    img {\r\n    max-width:100%;\r\n    height:auto;\r\n    border-radius:4px;\r\n    border:3px solid #ebebeb;\r\n    }\r\n    \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-main container\">\n    <div class=\"page-featured\">\n      <a routerLink=\"about\"><img src=\"/assets/img/my.jpg\" alt=\"Arun Uniyal\"></a>\n      <h1>Web Designer / WordPress Developer</h1>\n      <h3>I make bootstrap, made-to-order websites and am currently building great things for amazing clients at <a href=\"http://codebridgeinc.com\" target=\"_blank\">CodeBridge</a>.</h3><span class=\"clearfix\"></span>\n      <div class=\"btn-wrap\">\n          <a class=\"btn-large\" routerLink=\"work\">See My Work <span class=\"fa fa-chevron-right\"></span></a></div>\n    </div>\n    <div class=\"page-main-content roww\">\n      <div class=\"page-section\">\n          <hr>\n          <h2 class=\"section-title\"><a routerLink=\"work\">Featured Work</a></h2>\n          <div class=\"project-snippet\">\n              <div class=\"work-previews\">\n                  <div class=\"desktop-preview\">\n                      <div class=\"preview-top\">\n                          <span class=\"circle-red\"></span>\n                          <span class=\"circle-yellow\"></span>\n                          <span class=\"circle-green\"></span>\n                          <p class=\"preview-url\"><span class=\"fa fa-globe\"></span> https://www.ispwp.com</p>\n                      </div>\n                      <div class=\"preview-img\">\n                          <a routerLink=\"work/ISPWP\"><img src=\"assets/img/ispwp.jpg\" alt=\"Desktop Screenshot: ispwp\"></a>\n                      </div>\n                  </div>\n                  <div class=\"mobile-preview\">\n                      <div class=\"preview-top\">\n                          <p class=\"preview-url\"><span class=\"fa fa-globe\"></span> https://www.ispwp.com</p>\n                      </div>\n                      <div class=\"preview-img\">\n                          <a routerLink=\"work/ISPWP\"><img src=\"assets/img/ispwp-m.jpg\" alt=\"Mobile Screenshot: ispwp\"></a>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"project-snippet-info\">\n                  <h3 class=\"project-title\"><a routerLink=\"work/ISPWP\">ISPWP</a></h3>\n                  <p>ISPWP is an international professional wedding photographer's directory. Find one of the world's best wedding photographers for your wedding.</p>\n                  <a class=\"btn\" routerLink=\"work/ispwp\">View Case Study <span class=\"fa fa-chevron-right\"></span></a></div>\n          </div>\n      </div>\n    </div>\n    <div class=\"testimonial-section row\">\n        <blockquote class=\"testimonial\">\n            <p>Arun is not only great at design and development, but he is a problem solver always delivers an exceptional quality of work. Highly recommended.</p>\n            <cite>\n                <img class=\"img-rounded\" src=\"assets/img/client/alex.jpg\" alt=\"Alex Shelton\">\n            Alex Shelton, Founder of airwave.ai\n            </cite>\n        </blockquote>\n    </div>\n    <div class=\"page-main-content row\">\n      <div class=\"page-section\">\n          <h2 class=\"section-title\"><a href=\"services\">Services</a></h2>\n          <div class=\"cols icon-section row\">\n              <div class=\"col-md\">\n                  <a href=\"services/#web-design\"><span class=\"fa fa-desktop circle-icon-small\"></span></a>\n                  <h3 class=\"icon-section-title\"><a href=\"services/#web-design\">Web Design</a></h3>\n                  <p>A website should be an investment that gets you more customers, grows your business and works across all devices. There's more to the web than design and code, and that's exactly what I offer.</p>\n                  <a class=\"btn-ghost\" href=\"services/#web-design\">More About Web Design <span class=\"fa fa-chevron-right\"></span></a></div>\n              <div class=\"col-md\">\n                  <a href=\"services/#wordpress\"><span class=\"fa fa-wordpress circle-icon-small\"></span></a>\n                  <h3 class=\"icon-section-title\"><a href=\"services/#wordpress\">WordPress Themes</a></h3>\n                  <p>Most of my web design work is done with WordPress, but I also offer pure development on its own. Anything from theme development to fixing security holes, I'm your man.</p>\n                  <a class=\"btn-ghost\" href=\"services/#wordpress\">More About WordPress <span class=\"fa fa-chevron-right\"></span></a></div>\n              <div class=\"col-md\">\n                  <a href=\"services/#seo\"><span class=\"fa fa-search circle-icon-small\"></span></a>\n                  <h3 class=\"icon-section-title\"><a href=\"services/#seo\">SEO</a></h3>\n                  <p>I've spent the last 4+ years studying and analyzing what makes a website perform well in search engines, so I know you'll beat the competition when it comes to organic search traffic.</p>\n                  <a class=\"btn-ghost\" href=\"services/#seo\">More About SEO <span class=\"fa fa-chevron-right\"></span></a></div>\n          </div>\n      </div>\n    </div>\n  <div class=\"testimonial-section row\">\n      <blockquote class=\"testimonial\">\n          <p>Arun is an excellent web designer and faultless technician. He’s a pleasure to work with, great value for money and will always go the extra mile when necessary.</p>\n          <cite>\n<img class=\"img-rounded\" src=\"assets/img/client/chris-fenwick.jpg\" alt=\"Chris Fenwick\">\nChris Fenwick, CEO of Fenwick Studio\n</cite></blockquote>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'services',
        template: __webpack_require__("../../../../../src/app/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/services.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/work/work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  work works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    return WorkComponent;
}());
WorkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'work',
        template: __webpack_require__("../../../../../src/app/work/work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/work/work.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WorkComponent);

//# sourceMappingURL=work.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map