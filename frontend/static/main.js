(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alerts/alerts.component.html":
/*!**********************************************!*\
  !*** ./src/app/alerts/alerts.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-inline\" *ngFor=\"let alert of alerts; let i = index;\">\r\n    <ngb-alert [type]=\"alert.type\" [dismissible]=\"false\" (click)=\"close(alert, i)\" [ngClass]=\"{'alert-dismissed': alert.dismissed}\">{{ alert.text }}</ngb-alert>\r\n</div>"

/***/ }),

/***/ "./src/app/alerts/alerts.component.ts":
/*!********************************************!*\
  !*** ./src/app/alerts/alerts.component.ts ***!
  \********************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts.service */ "./src/app/alerts/alerts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(alert) {
        this.alert = alert;
    }
    Object.defineProperty(AlertsComponent.prototype, "alerts", {
        get: function () {
            return this.alert.alerts;
        },
        enumerable: true,
        configurable: true
    });
    AlertsComponent.prototype.close = function (alert, index) {
        if (!alert.dismissed) {
            this.alert.removeByIndex(index);
        }
    };
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngb-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/alerts/alerts.component.html"),
        }),
        __metadata("design:paramtypes", [_alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/alerts/alerts.service.ts":
/*!******************************************!*\
  !*** ./src/app/alerts/alerts.service.ts ***!
  \******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlertService = /** @class */ (function () {
    function AlertService() {
        this.current_id = 0;
        this._alerts = [];
    }
    Object.defineProperty(AlertService.prototype, "alerts", {
        get: function () {
            return this._alerts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertService.prototype, "new_id", {
        get: function () {
            this.current_id++;
            return this.current_id;
        },
        enumerable: true,
        configurable: true
    });
    AlertService.prototype.clear = function () {
        for (var _i = 0, _a = this.alerts; _i < _a.length; _i++) {
            var alert_1 = _a[_i];
            if (alert_1.autodismiss_timer) {
                clearTimeout(alert_1.autodismiss_timer);
            }
        }
        this._alerts = [];
    };
    AlertService.prototype.addAlert = function (alert) {
        var _this = this;
        if (alert.autodismiss) {
            alert.autodismiss_timer = setTimeout(function () {
                _this.removeByInstance(alert);
            }, alert.autodismiss * 1000);
        }
        alert.id = this.new_id;
        this.alerts.push(alert);
    };
    AlertService.prototype.removeByIndex = function (index) {
        var _this = this;
        var alert = this._alerts[index];
        if (alert.dismissed)
            return;
        if (alert.autodismiss_timer) {
            clearTimeout(alert.autodismiss_timer);
        }
        alert.dismissed = true;
        setTimeout(function () {
            _this.removeById(alert.id);
        }, 250);
    };
    AlertService.prototype.removeByInstance = function (alert) {
        var index = this._alerts.indexOf(alert);
        if (index != -1) {
            this.removeByIndex(index);
        }
    };
    AlertService.prototype.removeById = function (id) {
        var index = 0;
        for (var _i = 0, _a = this.alerts; _i < _a.length; _i++) {
            var alert_2 = _a[_i];
            if (alert_2.id == id) {
                this._alerts.splice(index, 1);
                return;
            }
            index++;
        }
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/api/api-errorhandler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/api/api-errorhandler.service.ts ***!
  \*************************************************/
/*! exports provided: ApiErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiErrorHandler", function() { return ApiErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/api/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiErrorHandler = /** @class */ (function () {
    function ApiErrorHandler(router, alert, auth) {
        this.router = router;
        this.alert = alert;
        this.auth = auth;
    }
    ApiErrorHandler.prototype.intercept = function (request, next) {
        var _this = this;
        return next
            .handle(request)
            .do(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                switch (err.status) {
                    case 400:
                        _this.alert.addAlert({
                            type: 'danger',
                            text: err.error,
                            autodismiss: 5,
                        });
                        break;
                    case 401:
                        _this.auth.check_auto_login();
                        break;
                    case 403:
                    case 404:
                        _this.router.navigateByUrl(_this.auth.default_route);
                        break;
                }
            }
        });
    };
    ApiErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], ApiErrorHandler);
    return ApiErrorHandler;
}());

;


/***/ }),

/***/ "./src/app/api/api.config.ts":
/*!***********************************!*\
  !*** ./src/app/api/api.config.ts ***!
  \***********************************/
/*! exports provided: API_URL, OPTIONS, JSONToUrlEncoded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS", function() { return OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONToUrlEncoded", function() { return JSONToUrlEncoded; });
// export const API_URL: string = 'http://180.150.67.104:5000';
var API_URL = 'http://127.0.0.1:32450';
var OPTIONS = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
    mode: 'cors'
};
function JSONToUrlEncoded(object) {
    var data = new URLSearchParams();
    for (var key in object) {
        data.set(key, object[key]);
    }
    return data.toString();
}


/***/ }),

/***/ "./src/app/api/api.service.ts":
/*!************************************!*\
  !*** ./src/app/api/api.service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.config */ "./src/app/api/api.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    // patients
    ApiService.prototype.getPatients = function () {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/patients", _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.addPatient = function (patient) {
        return this.http
            .post(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/patients", Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(patient), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.getPatient = function (id) {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/patients/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.deletePatient = function (id) {
        return this.http
            .delete(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/patients/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.patchPatient = function (id, data) {
        return this.http
            .patch(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/patients/" + id, Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(data), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    // providers
    ApiService.prototype.getProviders = function () {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/providers", _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.addProvider = function (provider) {
        return this.http
            .post(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/providers", Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(provider), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.getProvider = function (id) {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/providers/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.deleteProvider = function (id) {
        return this.http
            .delete(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/providers/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.patchProvider = function (id, data) {
        return this.http
            .patch(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/providers/" + id, Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(data), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    // health centres
    ApiService.prototype.getHealthCentres = function () {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centres", _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.addHealthCentre = function (health_centre) {
        return this.http
            .post(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centres", Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(health_centre), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.getHealthCentre = function (id) {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centres/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.deleteHealthCentre = function (id) {
        return this.http
            .delete(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centres/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.patchHealthCentre = function (id, data) {
        return this.http
            .patch(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centres/" + id, Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(data), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    // appointments
    ApiService.prototype.getAppointments = function () {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/appointments", _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.addAppointment = function (appointment) {
        return this.http
            .post(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/appointments", Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(appointment), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.getAppointment = function (id) {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/appointments/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.deleteAppointment = function (id) {
        return this.http
            .delete(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/appointments/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.patchAppointment = function (id, data) {
        return this.http
            .patch(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/appointments/" + id, Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(data), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    // health centre ratings
    ApiService.prototype.getHealthCentreRatings = function () {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centre_ratings", _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.addHealthCentreRating = function (health_centre_rating) {
        return this.http
            .post(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centre_ratings", Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(health_centre_rating), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.getHealthCentreRating = function (id) {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centre_ratings/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.deleteHealthCentreRating = function (id) {
        return this.http
            .delete(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centre_ratings/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.patchHealthCentreRating = function (id, data) {
        return this.http
            .patch(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/health_centre_ratings/" + id, Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(data), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    // provider ratings
    ApiService.prototype.getProviderRatings = function () {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/provider_ratings", _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.addProviderRating = function (provider_rating) {
        return this.http
            .post(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/provider_ratings", Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(provider_rating), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.getProviderRating = function (id) {
        return this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/provider_ratings/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.deleteProviderRating = function (id) {
        return this.http
            .delete(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/provider_ratings/" + id, _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService.prototype.patchProviderRating = function (id, data) {
        return this.http
            .patch(_api_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/provider_ratings/" + id, Object(_api_config__WEBPACK_IMPORTED_MODULE_4__["JSONToUrlEncoded"])(data), _api_config__WEBPACK_IMPORTED_MODULE_4__["OPTIONS"]);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/api/auth.service.ts":
/*!*************************************!*\
  !*** ./src/app/api/auth.service.ts ***!
  \*************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.config */ "./src/app/api/api.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-cookie */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(http, cookies, router) {
        this.http = http;
        this.cookies = cookies;
        this.router = router;
    }
    Object.defineProperty(AuthService.prototype, "current_user", {
        get: function () {
            return this._current_user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "default_route", {
        get: function () {
            if (!this.current_user) {
                return '/login';
            }
            switch (this.current_user.type) {
                case 'admin':
                    return '/patients';
                case 'patient':
                case 'provider':
                    return '/appointments';
                default:
                    return '/login';
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.attempt_login = function () {
        var _this = this;
        this.check_login()
            .then(function () {
            if (_this.router.url == '/')
                _this.router.navigateByUrl(_this.default_route);
        }, function () {
            _this.check_auto_login();
        });
    };
    AuthService.prototype.check_auto_login = function () {
        var _this = this;
        // attempt auto login with stored credentials
        if (JSON.parse(this.cookies.get('auto_login'))) {
            // auto login worked
            this.auto_login().then(function (user) {
                if (_this.router.url == '/')
                    _this.router.navigateByUrl(_this.default_route);
                // auto login failed
            }, function () {
                _this.router.navigateByUrl('/login');
            });
        }
        else {
            // if not logged in, and no auto login
            this.router.navigateByUrl('/login');
        }
    };
    AuthService.prototype.check_login = function () {
        var _this = this;
        var request = this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/login", _api_config__WEBPACK_IMPORTED_MODULE_2__["OPTIONS"])
            .catch(function (err) {
            _this._current_user = undefined;
            throw err;
        });
        return new Promise(function (resolve, reject) {
            request.subscribe(function (user) {
                _this._current_user = user;
                resolve(user);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.auto_login = function () {
        return this.login({
            email: this.cookies.get('email'),
            password: this.cookies.get('password'),
        });
    };
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var request = this.http
            .post(_api_config__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/login", Object(_api_config__WEBPACK_IMPORTED_MODULE_2__["JSONToUrlEncoded"])(credentials), _api_config__WEBPACK_IMPORTED_MODULE_2__["OPTIONS"])
            .catch(function (err) {
            _this._current_user = undefined;
            return err;
        });
        return new Promise(function (resolve, reject) {
            request.subscribe(function (user) {
                _this._current_user = user;
                resolve(user);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var request = this.http
            .get(_api_config__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/logout", _api_config__WEBPACK_IMPORTED_MODULE_2__["OPTIONS"])
            .catch(function (err) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(undefined);
        });
        return new Promise(function (resolve, reject) {
            request.subscribe(function (response) {
                _this._current_user = undefined;
                resolve(response);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], typeof (_a = typeof angular2_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"] !== "undefined" && angular2_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]) === "function" && _a || Object, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AuthService);
    return AuthService;
    var _a;
}());



/***/ }),

/***/ "./src/app/app-browser/app-browser-panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/app-browser/app-browser-panel.component.ts ***!
  \************************************************************/
/*! exports provided: AppBrowserPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserPanel", function() { return AppBrowserPanel; });
var AppBrowserPanel = /** @class */ (function () {
    function AppBrowserPanel(_auth) {
        this._auth = _auth;
    }
    Object.defineProperty(AppBrowserPanel.prototype, "auth", {
        get: function () {
            return this._auth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppBrowserPanel.prototype, "current_user", {
        get: function () {
            return this.auth.current_user;
        },
        enumerable: true,
        configurable: true
    });
    return AppBrowserPanel;
}());



/***/ }),

/***/ "./src/app/app-browser/app-browser-toolbar/app-browser-toolbar.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/app-browser/app-browser-toolbar/app-browser-toolbar.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-browser/app-browser-toolbar/app-browser-toolbar.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/app-browser/app-browser-toolbar/app-browser-toolbar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <ng-content></ng-content>\r\n        </ul>\r\n    </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/app-browser/app-browser-toolbar/app-browser-toolbar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/app-browser/app-browser-toolbar/app-browser-toolbar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AppBrowserToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserToolbar", function() { return AppBrowserToolbar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppBrowserToolbar = /** @class */ (function () {
    function AppBrowserToolbar() {
    }
    AppBrowserToolbar = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browser-toolbar',
            template: __webpack_require__(/*! ./app-browser-toolbar.component.html */ "./src/app/app-browser/app-browser-toolbar/app-browser-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./app-browser-toolbar.component.css */ "./src/app/app-browser/app-browser-toolbar/app-browser-toolbar.component.css")],
        })
    ], AppBrowserToolbar);
    return AppBrowserToolbar;
}());



/***/ }),

/***/ "./src/app/app-browser/app-browser/app-browser.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/app-browser/app-browser/app-browser.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-browser/app-browser/app-browser.component.html":
/*!********************************************************************!*\
  !*** ./src/app/app-browser/app-browser/app-browser.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"current_user\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark\" [ngClass]=\"navbar_background\">\r\n        <a class=\"navbar-brand\" routerLink=\"{{default_route}}\">Dashboard</a>\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <ng-container [ngSwitch]=\"current_user.type\">\r\n                <ng-container *ngSwitchCase=\"'patient'\">\r\n                    <li class=\"nav-item active\"><a class=\"nav-link\" routerLink=\"/patients/{{current_user.id}}\">Show profile</a></li>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"'provider'\">\r\n                    <li class=\"nav-item active\"><a class=\"nav-link\" routerLink=\"/providers/{{current_user.id}}\">Show profile</a></li>\r\n                </ng-container>\r\n            </ng-container>\r\n            <li class=\"nav-item active\"><a class=\"nav-link\" routerLink=\"/login\" (click)=\"logout()\">Logout ({{current_user?.name}})</a></li>\r\n        </ul>\r\n        <div class=\"form-inline\">\r\n            <input class=\"form-control mr-sm-2\" placeholder=\"Search\">\r\n            <button class=\"btn btn-light my-2 my-sm-0\">Search</button>\r\n        </div>\r\n    </nav>\r\n    <!--Left nav bar-->\r\n    <nav class=\"nav nav-tabs nav-stacked bg-light sidebar\">\r\n        <ng-container *ngIf=\"current_user?.is_admin\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/patients\" routerLinkActive=\"active\">Patients</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/appointments\" routerLinkActive=\"active\">Appointments</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/providers\" routerLinkActive=\"active\">Providers</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/health_centres\" routerLinkActive=\"active\">Health Centres</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/ratings\" routerLinkActive=\"active\">Ratings</a>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"current_user?.is_patient\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/appointments\" routerLinkActive=\"active\">Appointments</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/providers\" routerLinkActive=\"active\">Providers</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/health_centres\" routerLinkActive=\"active\">Health Centres</a>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"current_user?.is_provider\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/appointments\" routerLinkActive=\"active\">Appointments</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/patients\" routerLinkActive=\"active\">Patients</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/providers\" routerLinkActive=\"active\">Providers</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/health_centres\" routerLinkActive=\"active\">Health Centres</a>\r\n        </ng-container>\r\n    </nav>\r\n    <!--Content-->\r\n    <div class=\"browser-content\">\r\n        <div class=\"alert-container\">\r\n            <ngb-alerts></ngb-alerts>\r\n        </div>\r\n        <div [@fadeAnimation]=\"getAnimationName(browser_outlet)\">\r\n            <router-outlet #browser_outlet=\"outlet\"></router-outlet>\r\n        </div>\r\n    </div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/app-browser/app-browser/app-browser.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-browser/app-browser/app-browser.component.ts ***!
  \******************************************************************/
/*! exports provided: AppBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserComponent", function() { return AppBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animations/animations */ "./src/app/router-animations/animations.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _app_browser_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppBrowserComponent = /** @class */ (function (_super) {
    __extends(AppBrowserComponent, _super);
    function AppBrowserComponent(router, alert, auth) {
        var _this = _super.call(this, auth) || this;
        _this.router = router;
        _this.alert = alert;
        return _this;
    }
    Object.defineProperty(AppBrowserComponent.prototype, "default_route", {
        get: function () {
            return this.auth.default_route;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppBrowserComponent.prototype, "navbar_background", {
        get: function () {
            if (!this.current_user) {
                return 'bg-blue-gradient';
            }
            switch (this.current_user.type) {
                case 'admin':
                    return 'bg-red-gradient';
                case 'patient':
                    return 'bg-blue-gradient';
                case 'provider':
                    return 'bg-green-gradient';
                default:
                    return 'bg-blue-gradient';
            }
        },
        enumerable: true,
        configurable: true
    });
    AppBrowserComponent.prototype.ngOnInit = function () {
        this.auth.attempt_login();
    };
    AppBrowserComponent.prototype.getAnimationName = function (outlet) {
        return outlet.isActivated ? outlet.activatedRouteData.state : '';
    };
    AppBrowserComponent.prototype.show_profile = function () {
        this.alert.addAlert({
            type: 'success',
            text: 'Testing',
        });
    };
    AppBrowserComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().then(function () {
            _this.router.navigateByUrl('/login');
        });
    };
    AppBrowserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browser',
            template: __webpack_require__(/*! ./app-browser.component.html */ "./src/app/app-browser/app-browser/app-browser.component.html"),
            styles: [__webpack_require__(/*! ./app-browser.component.css */ "./src/app/app-browser/app-browser/app-browser.component.css")],
            animations: [_router_animations_animations__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"], _router_animations_animations__WEBPACK_IMPORTED_MODULE_2__["slideAnimation"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppBrowserComponent);
    return AppBrowserComponent;
}(_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_4__["AppBrowserPanel"]));



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login-form/login-form.component */ "./src/app/components/login/login-form/login-form.component.ts");
/* harmony import */ var _components_patients_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/patients/patient-profile/patient-profile.component */ "./src/app/components/patients/patient-profile/patient-profile.component.ts");
/* harmony import */ var _components_providers_provider_profile_provider_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/providers/provider-profile/provider-profile.component */ "./src/app/components/providers/provider-profile/provider-profile.component.ts");
/* harmony import */ var _components_health_centres_health_centre_profile_health_centre_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/health-centres/health-centre-profile/health-centre-profile.component */ "./src/app/components/health-centres/health-centre-profile/health-centre-profile.component.ts");
/* harmony import */ var _app_browser_app_browser_app_browser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-browser/app-browser/app-browser.component */ "./src/app/app-browser/app-browser/app-browser.component.ts");
/* harmony import */ var _components_login_register_form_patient_register_form_patient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/register-form-patient/register-form-patient.component */ "./src/app/components/login/register-form-patient/register-form-patient.component.ts");
/* harmony import */ var _components_login_register_form_provider_register_form_provider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/register-form-provider/register-form-provider.component */ "./src/app/components/login/register-form-provider/register-form-provider.component.ts");
/* harmony import */ var _components_appointments_appointment_browser_appointment_browser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/appointments/appointment-browser/appointment-browser.component */ "./src/app/components/appointments/appointment-browser/appointment-browser.component.ts");
/* harmony import */ var _components_health_centres_health_centre_browser_health_centre_browser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/health-centres/health-centre-browser/health-centre-browser.component */ "./src/app/components/health-centres/health-centre-browser/health-centre-browser.component.ts");
/* harmony import */ var _components_patients_patient_browser_patient_browser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/patients/patient-browser/patient-browser.component */ "./src/app/components/patients/patient-browser/patient-browser.component.ts");
/* harmony import */ var _components_providers_provider_browser_provider_browser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/providers/provider-browser/provider-browser.component */ "./src/app/components/providers/provider-browser/provider-browser.component.ts");
/* harmony import */ var _components_ratings_ratings_browser_ratings_browser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ratings/ratings-browser/ratings-browser.component */ "./src/app/components/ratings/ratings-browser/ratings-browser.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'login', component: _components_login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginForm"], data: { state: 'login' } },
    { path: 'register', redirectTo: '/register_patient', pathMatch: 'full' },
    { path: 'register_patient', component: _components_login_register_form_patient_register_form_patient_component__WEBPACK_IMPORTED_MODULE_7__["RegisterFormPatient"], data: { state: 'register_patient' } },
    { path: 'register_provider', component: _components_login_register_form_provider_register_form_provider_component__WEBPACK_IMPORTED_MODULE_8__["RegisterFormProvider"], data: { state: 'register_provider' } },
    { path: '', component: _app_browser_app_browser_app_browser_component__WEBPACK_IMPORTED_MODULE_6__["AppBrowserComponent"], data: { state: 'dashboard' }, children: [
            { path: 'appointments', component: _components_appointments_appointment_browser_appointment_browser_component__WEBPACK_IMPORTED_MODULE_9__["AppointmentBrowser"], data: { state: 'appointment_browser' } },
            { path: 'patients', component: _components_patients_patient_browser_patient_browser_component__WEBPACK_IMPORTED_MODULE_11__["PatientBrowser"], data: { state: 'patient_browser' } },
            { path: 'patients/:id', component: _components_patients_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_3__["PatientProfile"], data: { state: 'patient_profile' } },
            { path: 'providers', component: _components_providers_provider_browser_provider_browser_component__WEBPACK_IMPORTED_MODULE_12__["ProviderBrowser"], data: { state: 'provider_browser' } },
            { path: 'providers/:id', component: _components_providers_provider_profile_provider_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProviderProfile"], data: { state: 'provider_profile' } },
            { path: 'health_centres', component: _components_health_centres_health_centre_browser_health_centre_browser_component__WEBPACK_IMPORTED_MODULE_10__["HealthCentreBrowser"], data: { state: 'health_centre_browser' } },
            { path: 'health_centres/:id', component: _components_health_centres_health_centre_profile_health_centre_profile_component__WEBPACK_IMPORTED_MODULE_5__["HealthCentreProfile"], data: { state: 'health_centre_profile' } },
            { path: 'ratings', component: _components_ratings_ratings_browser_ratings_browser_component__WEBPACK_IMPORTED_MODULE_13__["RatingsBrowser"], data: { state: 'ratings_browser' }, },
        ] },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host(body) {\r\n    background: #9CECFB;\r\n    /* fallback for old browsers */\r\n    /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@slideAnimation]=\"getAnimationName(outlet)\">\n\t<router-outlet #outlet=\"outlet\"></router-outlet>\t\n</div>\n\n\n\n\t"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router-animations/animations */ "./src/app/router-animations/animations.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-cookie */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(api, router, cookies, activatedRoute, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.router = router;
        _this.cookies = cookies;
        _this.activatedRoute = activatedRoute;
        _this.title = 'Health Appointment Management System';
        return _this;
    }
    AppComponent.prototype.ngOnInit = function () {
        // check if cookies exist first and set if not
        this.load_default_cookies();
        // check if logged in already
        this.auth.attempt_login();
    };
    AppComponent.prototype.load_default_cookies = function () {
        this.load_default_cookie('remember_me', String(false));
        this.load_default_cookie('auto_login', String(false));
    };
    AppComponent.prototype.load_default_cookie = function (key, value) {
        var current_value = this.cookies.get(key);
        if (!current_value) {
            this.cookies.put(key, value);
        }
    };
    AppComponent.prototype.getAnimationName = function (outlet) {
        return outlet.isActivated ? outlet.activatedRouteData.state : '';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_router_animations_animations__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"], _router_animations_animations__WEBPACK_IMPORTED_MODULE_3__["slideAnimation"]],
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], typeof (_a = typeof angular2_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] !== "undefined" && angular2_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]) === "function" && _a || Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AppComponent);
    return AppComponent;
    var _a;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_6__["AppBrowserPanel"]));



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_errorhandler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/api-errorhandler.service */ "./src/app/api/api-errorhandler.service.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/alerts/alerts.component.ts");
/* harmony import */ var _app_browser_app_browser_app_browser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-browser/app-browser/app-browser.component */ "./src/app/app-browser/app-browser/app-browser.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_appointments_appointment_browser_appointment_browser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/appointments/appointment-browser/appointment-browser.component */ "./src/app/components/appointments/appointment-browser/appointment-browser.component.ts");
/* harmony import */ var _components_appointments_appointment_form_appointment_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/appointments/appointment-form/appointment-form.component */ "./src/app/components/appointments/appointment-form/appointment-form.component.ts");
/* harmony import */ var _components_appointments_appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/appointments/appointment-list/appointment-list.component */ "./src/app/components/appointments/appointment-list/appointment-list.component.ts");
/* harmony import */ var _components_health_centres_health_centre_browser_health_centre_browser_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/health-centres/health-centre-browser/health-centre-browser.component */ "./src/app/components/health-centres/health-centre-browser/health-centre-browser.component.ts");
/* harmony import */ var _components_health_centres_health_centre_form_health_centre_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/health-centres/health-centre-form/health-centre-form.component */ "./src/app/components/health-centres/health-centre-form/health-centre-form.component.ts");
/* harmony import */ var _components_health_centres_health_centre_list_health_centre_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/health-centres/health-centre-list/health-centre-list.component */ "./src/app/components/health-centres/health-centre-list/health-centre-list.component.ts");
/* harmony import */ var _components_health_centres_health_centre_profile_health_centre_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/health-centres/health-centre-profile/health-centre-profile.component */ "./src/app/components/health-centres/health-centre-profile/health-centre-profile.component.ts");
/* harmony import */ var _components_ratings_health_centre_rating_list_health_centre_rating_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/ratings/health-centre-rating-list/health-centre-rating-list.component */ "./src/app/components/ratings/health-centre-rating-list/health-centre-rating-list.component.ts");
/* harmony import */ var _components_login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login-form/login-form.component */ "./src/app/components/login/login-form/login-form.component.ts");
/* harmony import */ var _components_forms_modal_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/forms/modal-dialog.component */ "./src/app/components/forms/modal-dialog.component.ts");
/* harmony import */ var _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/forms/modal-forms.component */ "./src/app/components/forms/modal-forms.component.ts");
/* harmony import */ var _components_patients_patient_browser_patient_browser_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/patients/patient-browser/patient-browser.component */ "./src/app/components/patients/patient-browser/patient-browser.component.ts");
/* harmony import */ var _components_patients_patient_form_patient_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/patients/patient-form/patient-form.component */ "./src/app/components/patients/patient-form/patient-form.component.ts");
/* harmony import */ var _components_patients_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/patients/patient-list/patient-list.component */ "./src/app/components/patients/patient-list/patient-list.component.ts");
/* harmony import */ var _components_patients_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/patients/patient-profile/patient-profile.component */ "./src/app/components/patients/patient-profile/patient-profile.component.ts");
/* harmony import */ var _components_providers_provider_browser_provider_browser_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/providers/provider-browser/provider-browser.component */ "./src/app/components/providers/provider-browser/provider-browser.component.ts");
/* harmony import */ var _components_providers_provider_form_provider_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/providers/provider-form/provider-form.component */ "./src/app/components/providers/provider-form/provider-form.component.ts");
/* harmony import */ var _components_providers_provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/providers/provider-list/provider-list.component */ "./src/app/components/providers/provider-list/provider-list.component.ts");
/* harmony import */ var _components_providers_provider_profile_provider_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/providers/provider-profile/provider-profile.component */ "./src/app/components/providers/provider-profile/provider-profile.component.ts");
/* harmony import */ var _components_ratings_provider_rating_list_provider_rating_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/ratings/provider-rating-list/provider-rating-list.component */ "./src/app/components/ratings/provider-rating-list/provider-rating-list.component.ts");
/* harmony import */ var _components_ratings_ratings_browser_ratings_browser_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/ratings/ratings-browser/ratings-browser.component */ "./src/app/components/ratings/ratings-browser/ratings-browser.component.ts");
/* harmony import */ var _components_login_register_form_patient_register_form_patient_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/login/register-form-patient/register-form-patient.component */ "./src/app/components/login/register-form-patient/register-form-patient.component.ts");
/* harmony import */ var _components_login_register_form_provider_register_form_provider_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/login/register-form-provider/register-form-provider.component */ "./src/app/components/login/register-form-provider/register-form-provider.component.ts");
/* harmony import */ var _components_forms_modal_body_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/forms/modal-body.component */ "./src/app/components/forms/modal-body.component.ts");
/* harmony import */ var _components_ratings_health_centre_rating_form_health_centre_rating_form_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/ratings/health-centre-rating-form/health-centre-rating-form.component */ "./src/app/components/ratings/health-centre-rating-form/health-centre-rating-form.component.ts");
/* harmony import */ var _components_ratings_provider_rating_form_provider_rating_form_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/ratings/provider-rating-form/provider-rating-form.component */ "./src/app/components/ratings/provider-rating-form/provider-rating-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_browser_app_browser_toolbar_app_browser_toolbar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./app-browser/app-browser-toolbar/app-browser-toolbar.component */ "./src/app/app-browser/app-browser-toolbar/app-browser-toolbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// services






// modules





// components































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                // browser
                _app_browser_app_browser_app_browser_component__WEBPACK_IMPORTED_MODULE_15__["AppBrowserComponent"],
                _app_browser_app_browser_toolbar_app_browser_toolbar_component__WEBPACK_IMPORTED_MODULE_44__["AppBrowserToolbar"],
                // health centre
                _components_health_centres_health_centre_browser_health_centre_browser_component__WEBPACK_IMPORTED_MODULE_20__["HealthCentreBrowser"],
                _components_health_centres_health_centre_form_health_centre_form_component__WEBPACK_IMPORTED_MODULE_21__["HealthCentreForm"],
                _components_health_centres_health_centre_list_health_centre_list_component__WEBPACK_IMPORTED_MODULE_22__["HealthCentreList"],
                _components_health_centres_health_centre_profile_health_centre_profile_component__WEBPACK_IMPORTED_MODULE_23__["HealthCentreProfile"],
                // patient
                _components_patients_patient_browser_patient_browser_component__WEBPACK_IMPORTED_MODULE_28__["PatientBrowser"],
                _components_patients_patient_form_patient_form_component__WEBPACK_IMPORTED_MODULE_29__["PatientForm"],
                _components_patients_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_30__["PatientList"],
                _components_patients_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_31__["PatientProfile"],
                // provider
                _components_providers_provider_browser_provider_browser_component__WEBPACK_IMPORTED_MODULE_32__["ProviderBrowser"],
                _components_providers_provider_form_provider_form_component__WEBPACK_IMPORTED_MODULE_33__["ProviderForm"],
                _components_providers_provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_34__["ProviderList"],
                _components_providers_provider_profile_provider_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProviderProfile"],
                // appointment
                _components_appointments_appointment_browser_appointment_browser_component__WEBPACK_IMPORTED_MODULE_17__["AppointmentBrowser"],
                _components_appointments_appointment_form_appointment_form_component__WEBPACK_IMPORTED_MODULE_18__["AppointmentForm"],
                _components_appointments_appointment_list_appointment_list_component__WEBPACK_IMPORTED_MODULE_19__["AppointmentList"],
                // ratings
                _components_ratings_health_centre_rating_form_health_centre_rating_form_component__WEBPACK_IMPORTED_MODULE_41__["HealthCentreRatingForm"],
                _components_ratings_health_centre_rating_list_health_centre_rating_list_component__WEBPACK_IMPORTED_MODULE_24__["HealthCentreRatingList"],
                _components_ratings_provider_rating_form_provider_rating_form_component__WEBPACK_IMPORTED_MODULE_42__["ProviderRatingForm"],
                _components_ratings_provider_rating_list_provider_rating_list_component__WEBPACK_IMPORTED_MODULE_36__["ProviderRatingList"],
                _components_ratings_ratings_browser_ratings_browser_component__WEBPACK_IMPORTED_MODULE_37__["RatingsBrowser"],
                // login
                _components_login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_25__["LoginForm"],
                _components_login_register_form_patient_register_form_patient_component__WEBPACK_IMPORTED_MODULE_38__["RegisterFormPatient"],
                _components_login_register_form_provider_register_form_provider_component__WEBPACK_IMPORTED_MODULE_39__["RegisterFormProvider"],
                // modals
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalAppointmentForm"],
                _components_forms_modal_body_component__WEBPACK_IMPORTED_MODULE_40__["ModalBody"],
                _components_forms_modal_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ModalConfirm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalHealthCentreForm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalHealthCentreRatingForm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalPatientForm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalProviderForm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalProviderRatingForm"],
                // alerts
                _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_14__["AlertsComponent"],
            ],
            entryComponents: [
                // modals
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalAppointmentForm"],
                _components_forms_modal_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ModalConfirm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalHealthCentreForm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalHealthCentreRatingForm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalPatientForm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalProviderForm"],
                _components_forms_modal_forms_component__WEBPACK_IMPORTED_MODULE_27__["ModalProviderRatingForm"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_43__["CommonModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["RoutingModule"],
            ],
            providers: [
                _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
                _api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
                _api_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                angular2_cookie_core__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
                _components_forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_7__["ModalFormService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: _api_api_errorhandler_service__WEBPACK_IMPORTED_MODULE_3__["ApiErrorHandler"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/appointments/appointment-browser/appointment-browser.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/appointments/appointment-browser/appointment-browser.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-browser-toolbar *ngIf=\"current_user?.is_admin\">\r\n    <li class=\"nav-item active flex\">\r\n        <i class=\"material-icons mr-1\">library_add</i>\r\n        <a class=\"nav-link\" (click)=\"add_appointment()\">Add appointment</a>\r\n    </li>\r\n</app-browser-toolbar>\r\n<div class=\"card\" *ngIf=\"appointments\">\r\n    <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Appointments</h2>\r\n        <appointment-list [appointments]=\"appointments\" [show-providers]=\"show_providers\" [show-patients]=\"show_patients\"></appointment-list>\r\n    </div>\r\n</div>\r\n\r\n    \r\n    "

/***/ }),

/***/ "./src/app/components/appointments/appointment-browser/appointment-browser.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/appointments/appointment-browser/appointment-browser.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AppointmentBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentBrowser", function() { return AppointmentBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppointmentBrowser = /** @class */ (function (_super) {
    __extends(AppointmentBrowser, _super);
    function AppointmentBrowser(api, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.modal = modal;
        _this.appointment_form_cache = {};
        return _this;
    }
    Object.defineProperty(AppointmentBrowser.prototype, "appointments", {
        get: function () {
            return this._appointments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppointmentBrowser.prototype, "show_patients", {
        get: function () {
            return (this.current_user
                && (this.current_user.is_admin || this.current_user.is_provider));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppointmentBrowser.prototype, "show_providers", {
        get: function () {
            return (this.current_user
                && (this.current_user.is_admin || this.current_user.is_patient));
        },
        enumerable: true,
        configurable: true
    });
    AppointmentBrowser.prototype.ngOnInit = function () {
        var _this = this;
        this.appointments$ = this.api.getAppointments();
        if (!this.appointments) {
            this.appointments$.subscribe(function (appointments) {
                _this._appointments = appointments;
            });
        }
    };
    AppointmentBrowser.prototype.add_appointment = function () {
        var _this = this;
        this.modal
            .open_appointment_form('Add appointment', this.appointment_form_cache)
            .then(function (form) {
            _this.appointment_form_cache = form.onSubmit;
            _this.api.addAppointment(form.onSubmit)
                .subscribe(function (appointment) {
                _this.appointment_form_cache = {};
                _this._appointments.push(appointment);
            });
        });
    };
    AppointmentBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'appointment-browser',
            template: __webpack_require__(/*! ./appointment-browser.component.html */ "./src/app/components/appointments/appointment-browser/appointment-browser.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppointmentBrowser);
    return AppointmentBrowser;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__["AppBrowserPanel"]));



/***/ }),

/***/ "./src/app/components/appointments/appointment-form/appointment-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/appointments/appointment-form/appointment-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"form-group\" *ngIf=\"show_patients\">\r\n        <label>Patients</label>\r\n        <select formControlName=\"patient_id\" class=\"form-control\" placeholder=\"Patient\" value=\"value?.patient_name?\" required>\r\n            <option *ngFor=\"let patient of patients\" [value]=\"patient.id\">{{patient.name}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"show_providers\">\r\n        <label>Providers</label>\r\n        <select formControlName=\"provider_id\" class=\"form-control\" placeholder=\"Provider\" value=\"value?.provider_name?\" required>\r\n            <option *ngFor=\"let provider of providers\" [value]=\"provider.id\">{{provider.name}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"start_time\" type=\"text\" class=\"form-control\" placeholder=\"Start time\" id=\"inputStartTime\" required autofocus>\r\n        <label for=\"inputStartTime\">Start time</label>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"end_time\" type=\"text\" class=\"form-control\" placeholder=\"End time\" id=\"inputEndTime\" required>\r\n        <label for=\"inputEndTime\">End time</label>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"reason\" type=\"text\" class=\"form-control\" placeholder=\"Reason\" id=\"inputReason\">\r\n        <label for=\"inputReason\">Reason</label>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"comment\" type=\"text\" class=\"form-control\" placeholder=\"Comment\" id=\"inputComment\">\r\n        <label for=\"inputComment\">Comment</label>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"form.invalid\">{{button_text}}</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/appointments/appointment-form/appointment-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/appointments/appointment-form/appointment-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AppointmentForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentForm", function() { return AppointmentForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/form.component */ "./src/app/components/forms/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentForm = /** @class */ (function (_super) {
    __extends(AppointmentForm, _super);
    function AppointmentForm(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.button_text = "Submit";
        _this.show_patients = true;
        _this.show_providers = true;
        _this.value = {};
        return _this;
    }
    Object.defineProperty(AppointmentForm.prototype, "providers", {
        get: function () {
            return this._providers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppointmentForm.prototype, "patients", {
        get: function () {
            return this._patients;
        },
        enumerable: true,
        configurable: true
    });
    AppointmentForm.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'patient_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.patient_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'provider_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.provider_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'start_time': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.start_time, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'end_time': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.end_time, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'reason': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.reason || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'comment': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.comment || ""),
        });
        this.providers$ = this.api.getProviders();
        this.patients$ = this.api.getPatients();
        if (this.show_patients) {
            this.patients$.subscribe(function (patients) {
                _this._patients = patients;
                var patient_id = _this.form.get('patient_id');
                if (!patient_id.value) {
                    patient_id.setValue(patients[0].id);
                }
            });
        }
        if (this.show_providers) {
            this.providers$.subscribe(function (providers) {
                _this._providers = providers;
                var provider_id = _this.form.get('provider_id');
                if (!provider_id.value) {
                    provider_id.setValue(providers[0].id);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('button-text'),
        __metadata("design:type", String)
    ], AppointmentForm.prototype, "button_text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-patients'),
        __metadata("design:type", Boolean)
    ], AppointmentForm.prototype, "show_patients", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-providers'),
        __metadata("design:type", Boolean)
    ], AppointmentForm.prototype, "show_providers", void 0);
    AppointmentForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'appointment-form',
            template: __webpack_require__(/*! ./appointment-form.component.html */ "./src/app/components/appointments/appointment-form/appointment-form.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AppointmentForm);
    return AppointmentForm;
}(_forms_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]));



/***/ }),

/***/ "./src/app/components/appointments/appointment-list/appointment-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/appointments/appointment-list/appointment-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table datatable class=\"table row-border\" *ngIf=\"appointments\">\r\n    <thead>\r\n        <tr>\r\n            <th *ngIf=\"show_patients\">Patient name</th>\r\n            <th *ngIf=\"show_providers\">Provider name</th>\r\n            <th>Start time</th>\r\n            <th>End time</th>\r\n            <th>Reason</th>\r\n            <th>Comment</th>\r\n            <th *ngIf=\"current_user\">Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let appointment of appointments; let i = index;\">\r\n            <td *ngIf=\"show_patients\"><a routerLink=\"/patients/{{appointment.patient_id}}\">{{appointment.patient_name}}</a></td>\r\n            <td *ngIf=\"show_providers\"><a routerLink=\"/providers/{{appointment.provider_id}}\">{{appointment.provider_name}}</a></td>\r\n            <td>{{appointment.start_time}}</td>\r\n            <td>{{appointment.end_time}}</td>\r\n            <td>{{appointment.reason}}</td>\r\n            <td>{{appointment.comment}}</td>\r\n            <td *ngIf=\"current_user\">\r\n                <a (click)=\"modify(appointment, i)\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"material-icons mr-1\">edit</i></a>\r\n                <a (click)=\"delete(appointment, i)\" data-toggle=\"tooltip\" title=\"Delete\"><i class=\"material-icons\">delete_outline</i></a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/appointments/appointment-list/appointment-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/appointments/appointment-list/appointment-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AppointmentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentList", function() { return AppointmentList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppointmentList = /** @class */ (function (_super) {
    __extends(AppointmentList, _super);
    function AppointmentList(api, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.modal = modal;
        _this.show_providers = true;
        _this.show_patients = true;
        return _this;
    }
    AppointmentList.prototype.ngOnInit = function () {
    };
    AppointmentList.prototype.modify = function (appointment, index) {
        var _this = this;
        this.modal
            .open_appointment_form('Modify appointment', appointment, this.show_providers, this.show_patients)
            .then(function (form) {
            if (form.onSubmitChange) {
                _this.api.patchAppointment(appointment.id, form.onSubmitChange)
                    .subscribe(function (patched_appointment) {
                    _this.appointments[index] = patched_appointment;
                });
            }
        });
    };
    Object.defineProperty(AppointmentList.prototype, "delete_message", {
        get: function () {
            switch (this.current_user.type) {
                case 'patient':
                    return {
                        title: "Cancel appointment",
                        message: "Are you sure you want to cancel this appointment?",
                    };
                case 'provider':
                    return {
                        title: "Cancel appointment",
                        message: "Are you sure you want to cancel this patient's appointment?",
                    };
                case 'admin':
                default:
                    return {
                        title: "Delete appointment",
                        message: "Are you sure you want to delete this appointment?",
                    };
            }
        },
        enumerable: true,
        configurable: true
    });
    AppointmentList.prototype.delete = function (appointment, index) {
        var _this = this;
        var delete_message = this.delete_message;
        this.modal
            .dialog(delete_message.title, delete_message.message)
            .then(function () {
            _this.api.deleteAppointment(appointment.id)
                .subscribe(function () {
                _this.appointments.splice(index, 1);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-providers'),
        __metadata("design:type", Boolean)
    ], AppointmentList.prototype, "show_providers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-patients'),
        __metadata("design:type", Boolean)
    ], AppointmentList.prototype, "show_patients", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appointments'),
        __metadata("design:type", Array)
    ], AppointmentList.prototype, "appointments", void 0);
    AppointmentList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'appointment-list',
            template: __webpack_require__(/*! ./appointment-list.component.html */ "./src/app/components/appointments/appointment-list/appointment-list.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppointmentList);
    return AppointmentList;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__["AppBrowserPanel"]));



/***/ }),

/***/ "./src/app/components/forms/form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/forms/form.component.ts ***!
  \****************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.value = {};
        this.on_submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.on_submit_change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.all = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormComponent.prototype.submit = function () {
        this.on_submit.emit(this.form.value);
        var changes = undefined;
        if (this.form.dirty) {
            changes = {};
            for (var key in this.form.value) {
                var value = this.form.get(key);
                if (value.dirty) {
                    changes[key] = value.value;
                }
            }
            this.on_submit_change.emit(changes);
        }
        this.all.emit({
            onSubmit: this.form.value,
            onSubmitChange: changes,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('value'),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onSubmit'),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "on_submit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onSubmitChange'),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "on_submit_change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('all'),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "all", void 0);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/modal-body.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/forms/modal-body.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return ModalBody; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalBody = /** @class */ (function () {
    function ModalBody() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalBody.prototype.dismiss = function () {
        this.onClick.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", String)
    ], ModalBody.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onClick'),
        __metadata("design:type", Object)
    ], ModalBody.prototype, "onClick", void 0);
    ModalBody = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-body',
            template: "\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n    ",
        })
    ], ModalBody);
    return ModalBody;
}());



/***/ }),

/***/ "./src/app/components/forms/modal-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/forms/modal-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ModalConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirm", function() { return ModalConfirm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalConfirm = /** @class */ (function () {
    function ModalConfirm(activeModal) {
        this.activeModal = activeModal;
    }
    ModalConfirm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-confirm',
            template: "\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">{{title}}</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>{{text}}</p>\n        </div>\n        <div class=\"modal-footer\"><button class=\"btn btn-danger btn-round\" (click)=\"activeModal.close()\">Confirm</button></div>\n    ",
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalConfirm);
    return ModalConfirm;
}());



/***/ }),

/***/ "./src/app/components/forms/modal-forms.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/forms/modal-forms.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalPatientForm, ModalProviderForm, ModalHealthCentreForm, ModalAppointmentForm, ModalHealthCentreRatingForm, ModalProviderRatingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPatientForm", function() { return ModalPatientForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProviderForm", function() { return ModalProviderForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHealthCentreForm", function() { return ModalHealthCentreForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAppointmentForm", function() { return ModalAppointmentForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHealthCentreRatingForm", function() { return ModalHealthCentreRatingForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProviderRatingForm", function() { return ModalProviderRatingForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalForm = /** @class */ (function () {
    function ModalForm(activeModal) {
        this.activeModal = activeModal;
        this.value = {};
        this.on_submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.on_submit_change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalForm.prototype.all = function (value) {
        this.activeModal.close(value);
    };
    return ModalForm;
}());
var ModalPatientForm = /** @class */ (function (_super) {
    __extends(ModalPatientForm, _super);
    function ModalPatientForm(activeModal) {
        var _this = _super.call(this, activeModal) || this;
        _this.value = {};
        _this.password_field = false;
        return _this;
    }
    ModalPatientForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <modal-body [title]=\"title\" (onClick)=\"activeModal.dismiss()\">\n        <patient-form [value]=\"value\" [password-field]=\"password_field\" (all)=\"all($event)\"></patient-form>\n    </modal-body>\n    ",
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalPatientForm);
    return ModalPatientForm;
}(ModalForm));

var ModalProviderForm = /** @class */ (function (_super) {
    __extends(ModalProviderForm, _super);
    function ModalProviderForm(activeModal) {
        var _this = _super.call(this, activeModal) || this;
        _this.value = {};
        _this.password_field = false;
        return _this;
    }
    ModalProviderForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-patient-form',
            template: "\n    <modal-body [title]=\"title\" (onClick)=\"activeModal.dismiss()\">\n        <provider-form [value]=\"value\" [password-field]=\"password_field\" (all)=\"all($event)\"></provider-form>\n    </modal-body>\n    ",
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalProviderForm);
    return ModalProviderForm;
}(ModalForm));

var ModalHealthCentreForm = /** @class */ (function (_super) {
    __extends(ModalHealthCentreForm, _super);
    function ModalHealthCentreForm(activeModal) {
        var _this = _super.call(this, activeModal) || this;
        _this.value = {};
        return _this;
    }
    ModalHealthCentreForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <modal-body [title]=\"title\" (onClick)=\"activeModal.dismiss()\">\n        <health-centre-form [value]=\"value\" (all)=\"all($event)\"></health-centre-form>\n    </modal-body>\n    ",
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalHealthCentreForm);
    return ModalHealthCentreForm;
}(ModalForm));

var ModalAppointmentForm = /** @class */ (function (_super) {
    __extends(ModalAppointmentForm, _super);
    function ModalAppointmentForm(activeModal) {
        var _this = _super.call(this, activeModal) || this;
        _this.value = {};
        _this.show_providers = true;
        _this.show_patients = true;
        return _this;
    }
    ModalAppointmentForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <modal-body [title]=\"title\" (onClick)=\"activeModal.dismiss()\">\n        <appointment-form [value]=\"value\" [show-providers]=\"show_providers\" [show-patients]=\"show_patients\" (all)=\"all($event)\"></appointment-form>\n    </modal-body>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalAppointmentForm);
    return ModalAppointmentForm;
}(ModalForm));

var ModalHealthCentreRatingForm = /** @class */ (function (_super) {
    __extends(ModalHealthCentreRatingForm, _super);
    function ModalHealthCentreRatingForm(activeModal) {
        var _this = _super.call(this, activeModal) || this;
        _this.value = {};
        _this.show_patients = false;
        _this.show_health_centres = false;
        return _this;
    }
    ModalHealthCentreRatingForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <modal-body [title]=\"title\" (onClick)=\"activeModal.dismiss()\">\n        <health-centre-rating-form [value]=\"value\" [show-patients]=\"show_patients\" [show-health-centres]=\"show_health_centres\" (all)=\"all($event)\"></health-centre-rating-form>\n    </modal-body>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalHealthCentreRatingForm);
    return ModalHealthCentreRatingForm;
}(ModalForm));

var ModalProviderRatingForm = /** @class */ (function (_super) {
    __extends(ModalProviderRatingForm, _super);
    function ModalProviderRatingForm(activeModal) {
        var _this = _super.call(this, activeModal) || this;
        _this.value = {};
        _this.show_patients = false;
        _this.show_providers = false;
        return _this;
    }
    ModalProviderRatingForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <modal-body [title]=\"title\" (onClick)=\"activeModal.dismiss()\">\n        <provider-rating-form [value]=\"value\" [show-patients]=\"show_patients\" [show-providers]=\"show_providers\" (all)=\"all($event)\"></provider-rating-form>\n    </modal-body>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalProviderRatingForm);
    return ModalProviderRatingForm;
}(ModalForm));



/***/ }),

/***/ "./src/app/components/forms/modal-forms.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/forms/modal-forms.service.ts ***!
  \*********************************************************/
/*! exports provided: ModalFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFormService", function() { return ModalFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-dialog.component */ "./src/app/components/forms/modal-dialog.component.ts");
/* harmony import */ var _modal_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-forms.component */ "./src/app/components/forms/modal-forms.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalFormService = /** @class */ (function () {
    function ModalFormService(modal) {
        this.modal = modal;
    }
    ModalFormService.prototype.open_with_animation = function (component) {
        return this.modal.open(component, {
            backdropClass: 'modal-backdrop-animation',
            windowClass: 'modal-window-animation',
        });
    };
    ModalFormService.prototype.handle_dismissal = function (modalRef) {
        return new Promise(function (resolve, reject) {
            modalRef.result
                .then(function (data) { return resolve(data); })
                .catch(function (error) { });
        });
    };
    ModalFormService.prototype.open_modal_form = function (component, value, title) {
        var modalRef = this.open_with_animation(component);
        modalRef.componentInstance.value = value;
        modalRef.componentInstance.title = title;
        return modalRef;
    };
    ModalFormService.prototype.open_health_centre_form = function (title, health_centre) {
        if (health_centre === void 0) { health_centre = {}; }
        var modalRef = this.open_modal_form(_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__["ModalHealthCentreForm"], health_centre, title);
        return this.handle_dismissal(modalRef);
    };
    ModalFormService.prototype.open_provider_form = function (title, provider, password_field) {
        if (provider === void 0) { provider = {}; }
        if (password_field === void 0) { password_field = false; }
        var modalRef = this.open_modal_form(_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__["ModalProviderForm"], provider, title);
        modalRef.componentInstance.password_field = password_field;
        return this.handle_dismissal(modalRef);
    };
    ModalFormService.prototype.open_patient_form = function (title, patient, password_field) {
        if (patient === void 0) { patient = {}; }
        if (password_field === void 0) { password_field = false; }
        var modalRef = this.open_modal_form(_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__["ModalPatientForm"], patient, title);
        modalRef.componentInstance.password_field = password_field;
        return this.handle_dismissal(modalRef);
    };
    ModalFormService.prototype.open_appointment_form = function (title, appointment, show_providers, show_patients) {
        if (appointment === void 0) { appointment = {}; }
        if (show_providers === void 0) { show_providers = true; }
        if (show_patients === void 0) { show_patients = true; }
        var modalRef = this.open_modal_form(_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__["ModalAppointmentForm"], appointment, title);
        modalRef.componentInstance.show_patients = show_patients;
        modalRef.componentInstance.show_providers = show_providers;
        return this.handle_dismissal(modalRef);
    };
    ModalFormService.prototype.open_health_centre_rating_form = function (title, health_centre_rating, show_patients, show_health_centres) {
        if (health_centre_rating === void 0) { health_centre_rating = {}; }
        if (show_patients === void 0) { show_patients = false; }
        if (show_health_centres === void 0) { show_health_centres = false; }
        var modalRef = this.open_modal_form(_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__["ModalHealthCentreRatingForm"], health_centre_rating, title);
        modalRef.componentInstance.show_patients = show_patients;
        modalRef.componentInstance.show_health_centres = show_health_centres;
        return this.handle_dismissal(modalRef);
    };
    ModalFormService.prototype.open_provider_rating_form = function (title, provider_rating, show_patients, show_providers) {
        if (provider_rating === void 0) { provider_rating = {}; }
        if (show_patients === void 0) { show_patients = false; }
        if (show_providers === void 0) { show_providers = false; }
        var modalRef = this.open_modal_form(_modal_forms_component__WEBPACK_IMPORTED_MODULE_3__["ModalProviderRatingForm"], provider_rating, title);
        modalRef.componentInstance.show_patients = show_patients;
        modalRef.componentInstance.show_providers = show_providers;
        return this.handle_dismissal(modalRef);
    };
    ModalFormService.prototype.dialog = function (title, text) {
        var modalRef = this.open_with_animation(_modal_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ModalConfirm"]);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        return this.handle_dismissal(modalRef);
    };
    ModalFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalFormService);
    return ModalFormService;
}());



/***/ }),

/***/ "./src/app/components/health-centres/health-centre-browser/health-centre-browser.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/health-centres/health-centre-browser/health-centre-browser.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-browser-toolbar *ngIf=\"current_user?.is_admin\">\r\n    <li class=\"nav-item active flex\">\r\n        <i class=\"material-icons mr-1\">library_add</i>\r\n        <a class=\"nav-link\" (click)=\"add_health_centre()\">Add health centre</a>\r\n    </li>\r\n</app-browser-toolbar>\r\n<div class=\"card\" *ngIf=\"health_centres\">\r\n    <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Health Centres</h2>\r\n        <health-centre-list [health-centres]=\"health_centres\"></health-centre-list>\r\n    </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/components/health-centres/health-centre-browser/health-centre-browser.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/health-centres/health-centre-browser/health-centre-browser.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: HealthCentreBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCentreBrowser", function() { return HealthCentreBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HealthCentreBrowser = /** @class */ (function (_super) {
    __extends(HealthCentreBrowser, _super);
    function HealthCentreBrowser(api, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.modal = modal;
        return _this;
    }
    HealthCentreBrowser.prototype.ngOnInit = function () {
        var _this = this;
        this.health_centres$ = this.api.getHealthCentres();
        this.health_centres$.subscribe(function (health_centres) {
            _this._health_centres = health_centres;
        });
    };
    Object.defineProperty(HealthCentreBrowser.prototype, "health_centres", {
        get: function () {
            return this._health_centres;
        },
        enumerable: true,
        configurable: true
    });
    HealthCentreBrowser.prototype.add_health_centre = function () {
        var _this = this;
        this.modal.open_health_centre_form('Add health centre')
            .then(function (form) {
            _this.api.addHealthCentre(form.onSubmit)
                .subscribe(function (health_centre) {
                _this._health_centres.push(health_centre);
            });
        });
    };
    HealthCentreBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'health-centre-browser',
            template: __webpack_require__(/*! ./health-centre-browser.component.html */ "./src/app/components/health-centres/health-centre-browser/health-centre-browser.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HealthCentreBrowser);
    return HealthCentreBrowser;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__["AppBrowserPanel"]));

;


/***/ }),

/***/ "./src/app/components/health-centres/health-centre-form/health-centre-form.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/health-centres/health-centre-form/health-centre-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n    <div class='form-label-group'>\r\n        <input formControlName=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"inputName\" required autofocus>\r\n        <label for=\"inputName\">Name</label>\r\n    </div>\r\n    <div class='form-label-group'>\r\n        <input formControlName=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address\" id=\"inputAddress\" required>\r\n        <label for=\"inputAddress\">Address</label>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"form.invalid\">Submit</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/health-centres/health-centre-form/health-centre-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/health-centres/health-centre-form/health-centre-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: HealthCentreForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCentreForm", function() { return HealthCentreForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/form.component */ "./src/app/components/forms/form.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HealthCentreForm = /** @class */ (function (_super) {
    __extends(HealthCentreForm, _super);
    function HealthCentreForm() {
        return _super.call(this) || this;
    }
    HealthCentreForm.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.value.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.value.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    HealthCentreForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'health-centre-form',
            template: __webpack_require__(/*! ./health-centre-form.component.html */ "./src/app/components/health-centres/health-centre-form/health-centre-form.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HealthCentreForm);
    return HealthCentreForm;
}(_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]));



/***/ }),

/***/ "./src/app/components/health-centres/health-centre-list/health-centre-list.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/health-centres/health-centre-list/health-centre-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table datatable class=\"table row-border\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th>Name</th>\r\n\t\t\t<th>Address</th>\r\n\t\t\t<th>Rating</th>\r\n\t\t\t<th *ngIf=\"current_user?.is_admin\">Actions</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngFor=\"let health_centre of health_centres; let i = index;\">\r\n\t\t\t<td><a routerLink=\"/health_centres/{{health_centre.id}}\">{{health_centre.name}}</a></td>\r\n\t\t\t<td>{{health_centre.address}}</td>\r\n\t\t\t<td>{{health_centre.rating}}</td>\r\n\t\t\t<td *ngIf=\"current_user?.is_admin\">\r\n\t\t\t\t<a (click)=\"modify(health_centre, i)\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"material-icons mr-1\">edit</i></a>\r\n\t\t\t\t<a (click)=\"delete(health_centre, i)\" data-toggle=\"tooltip\" title=\"Delete\"><i class=\"material-icons\">delete_outline</i></a>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/health-centres/health-centre-list/health-centre-list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/health-centres/health-centre-list/health-centre-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: HealthCentreList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCentreList", function() { return HealthCentreList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HealthCentreList = /** @class */ (function (_super) {
    __extends(HealthCentreList, _super);
    function HealthCentreList(api, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.modal = modal;
        return _this;
    }
    HealthCentreList.prototype.ngOnInit = function () {
    };
    HealthCentreList.prototype.modify = function (health_centre, index) {
        var _this = this;
        this.modal
            .open_health_centre_form('Modify health centre', health_centre)
            .then(function (form) {
            if (form.onSubmitChange) {
                _this.api.patchHealthCentre(health_centre.id, form.onSubmitChange)
                    .subscribe(function (patched_health_centre) {
                    _this.health_centres[index] = patched_health_centre;
                });
            }
        });
    };
    HealthCentreList.prototype.delete = function (health_centre, index) {
        var _this = this;
        this.modal
            .dialog("Delete health centre", "Are you sure you want to delete this health centre?")
            .then(function () {
            _this.api.deleteHealthCentre(health_centre.id)
                .subscribe(function () {
                _this.health_centres.splice(index, 1);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('health-centres'),
        __metadata("design:type", Array)
    ], HealthCentreList.prototype, "health_centres", void 0);
    HealthCentreList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'health-centre-list',
            template: __webpack_require__(/*! ./health-centre-list.component.html */ "./src/app/components/health-centres/health-centre-list/health-centre-list.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HealthCentreList);
    return HealthCentreList;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__["AppBrowserPanel"]));

;


/***/ }),

/***/ "./src/app/components/health-centres/health-centre-profile/health-centre-profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/health-centres/health-centre-profile/health-centre-profile.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"health_centre\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <h2 class=\"card-title\">Health centre profile</h2>\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Address</th>\r\n                        <th>Rating</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>{{health_centre.name}}</td>\r\n                        <td>{{health_centre.address}}</td>\r\n                        <td>{{health_centre.rating}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"current_user?.type == 'admin'\" class=\"card\">\r\n        <div class=\"card-body\">\r\n            <h2 class=\"card-title\">Modify details</h2>\r\n            <health-centre-form [value]=\"health_centre\" (onSubmitChange)=\"patch_health_centre($event)\"></health-centre-form>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <h2 class=\"card-title\">Providers</h2>\r\n            <provider-list [providers]=\"health_centre.providers\"></provider-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/health-centres/health-centre-profile/health-centre-profile.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/health-centres/health-centre-profile/health-centre-profile.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: HealthCentreProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCentreProfile", function() { return HealthCentreProfile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HealthCentreProfile = /** @class */ (function (_super) {
    __extends(HealthCentreProfile, _super);
    function HealthCentreProfile(api, route, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.route = route;
        return _this;
    }
    HealthCentreProfile.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.id = id;
        this.health_centre$ = this.api.getHealthCentre(id);
        this.health_centre$.subscribe(function (health_centre) {
            _this._health_centre = health_centre;
        });
    };
    Object.defineProperty(HealthCentreProfile.prototype, "health_centre", {
        get: function () {
            return this._health_centre;
        },
        enumerable: true,
        configurable: true
    });
    HealthCentreProfile.prototype.patch_health_centre = function (health_centre) {
        var _this = this;
        this.api.patchHealthCentre(this.id, health_centre)
            .subscribe(function (health_centre) {
            _this._health_centre = health_centre;
        });
    };
    HealthCentreProfile = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'health-centre-profile',
            template: __webpack_require__(/*! ./health-centre-profile.component.html */ "./src/app/components/health-centres/health-centre-profile/health-centre-profile.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HealthCentreProfile);
    return HealthCentreProfile;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_4__["AppBrowserPanel"]));



/***/ }),

/***/ "./src/app/components/login/login-form/login-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/login/login-form/login-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login-form/login-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/login/login-form/login-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Sign In</h5>\r\n            <form (ngSubmit)=\"login()\" class=\"form-signin\" #login_form=\"ngForm\">\r\n                <div class=\"form-label-group\">\r\n                    <input [(ngModel)]=\"credentials.email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" id=\"inputEmail\" required autofocus>\r\n                    <label for=\"inputEmail\">Email address</label>\r\n                </div>\r\n                <div class=\"form-label-group\">\r\n                    <input [(ngModel)]=\"credentials.password\" type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"inputPassword\" required>\r\n                    <label for=\"inputPassword\">Password</label>\r\n                </div>\r\n                <div class=\"custom-control custom-checkbox mb-3\">\r\n                    <input [(ngModel)]=\"remember_me\" [checked]=\"remember_me\" name=\"remember_me\" type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\r\n                </div>\r\n                <div class=\"custom-control custom-checkbox mb-3\">\r\n                    <input [(ngModel)]=\"auto_login\" [checked]=\"auto_login\" name=\"auto_login\" type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck2\">Auto login</label>\r\n                </div>\r\n                <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!login_form.valid\">Sign in</button>\r\n                <hr class=\"my-4\">\r\n                <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" routerLink=\"/register\">Register</button>\r\n            </form>\r\n        </div>\r\n        </div>\r\n        <ngb-alerts></ngb-alerts>\r\n    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login-form/login-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/login/login-form/login-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-cookie */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginForm = /** @class */ (function () {
    function LoginForm(auth, router, cookies) {
        this.auth = auth;
        this.router = router;
        this.cookies = cookies;
        this.credentials = {
            email: undefined,
            password: undefined,
        };
    }
    LoginForm.prototype.ngOnInit = function () {
        this.remember_me = JSON.parse(this.cookies.get('remember_me'));
        this.auto_login = JSON.parse(this.cookies.get('auto_login'));
        if (this.remember_me) {
            this.credentials.email = this.cookies.get('email');
            this.credentials.password = this.cookies.get('password');
        }
    };
    Object.defineProperty(LoginForm.prototype, "remember_me", {
        get: function () {
            return this._remember_me;
        },
        set: function (remember_me) {
            this._remember_me = remember_me;
            this.cookies.put('remember_me', String(remember_me));
            if (!remember_me) {
                this.auto_login = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginForm.prototype, "auto_login", {
        get: function () {
            return this._auto_login;
        },
        set: function (auto_login) {
            this._auto_login = auto_login;
            this.cookies.put('auto_login', String(auto_login));
            if (auto_login) {
                this.remember_me = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    LoginForm.prototype.store_credentials = function () {
        if (this.remember_me) {
            this.cookies.put('email', this.credentials.email);
            this.cookies.put('password', this.credentials.password);
        }
        else {
            this.cookies.remove('email');
            this.cookies.remove('password');
        }
        this.cookies.put('remember_me', String(this.remember_me));
        this.cookies.put('auto_login', String(this.auto_login));
    };
    LoginForm.prototype.login = function () {
        var _this = this;
        this.auth.login({
            email: this.credentials.email,
            password: this.credentials.password,
        }).then(function (user) {
            _this.store_credentials();
            switch (user.type) {
                case 'admin':
                    _this.router.navigateByUrl('/patients');
                    break;
                case 'patient':
                case 'provider':
                default:
                    _this.router.navigateByUrl('/appointments');
                    break;
            }
        }, function (err) {
        });
    };
    LoginForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/components/login/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/components/login/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_api_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], typeof (_a = typeof angular2_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"] !== "undefined" && angular2_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"]) === "function" && _a || Object])
    ], LoginForm);
    return LoginForm;
    var _a;
}());

;


/***/ }),

/***/ "./src/app/components/login/register-form-patient/register-form-patient.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/login/register-form-patient/register-form-patient.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/register-form-patient/register-form-patient.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/login/register-form-patient/register-form-patient.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Register as patient</h5>\r\n            <patient-form (onSubmit)=\"register($event)\" [button-text]=\"'Submit'\" [password-field]=\"true\"></patient-form>\r\n            <hr class=\"my-4\">\r\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" routerLink=\"/register_provider\">Register as provider</button>\r\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" routerLink=\"/login\">Login</button>\r\n        </div>\r\n        </div>\r\n        <ngb-alerts></ngb-alerts>\r\n    </div>\r\n    </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/components/login/register-form-patient/register-form-patient.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/login/register-form-patient/register-form-patient.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegisterFormPatient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormPatient", function() { return RegisterFormPatient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-cookie */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterFormPatient = /** @class */ (function () {
    function RegisterFormPatient(api, cookies, router) {
        this.api = api;
        this.cookies = cookies;
        this.router = router;
    }
    RegisterFormPatient.prototype.ngOnInit = function () {
    };
    RegisterFormPatient.prototype.register = function (patient) {
        var _this = this;
        this.api.addPatient(patient)
            .subscribe(function (patient) {
            _this.cookies.put('email', patient.email);
            _this.cookies.remove('password');
            _this.router.navigateByUrl('/login');
        });
    };
    RegisterFormPatient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-form-patient',
            template: __webpack_require__(/*! ./register-form-patient.component.html */ "./src/app/components/login/register-form-patient/register-form-patient.component.html"),
            styles: [__webpack_require__(/*! ./register-form-patient.component.css */ "./src/app/components/login/register-form-patient/register-form-patient.component.css")],
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], typeof (_a = typeof angular2_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"] !== "undefined" && angular2_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"]) === "function" && _a || Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterFormPatient);
    return RegisterFormPatient;
    var _a;
}());



/***/ }),

/***/ "./src/app/components/login/register-form-provider/register-form-provider.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/login/register-form-provider/register-form-provider.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/register-form-provider/register-form-provider.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/login/register-form-provider/register-form-provider.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Register as provider</h5>\r\n            <provider-form (onSubmit)=\"register(event$)\" [button-text]=\"'Submit'\" [password-field]=\"true\"></provider-form>\r\n            <hr class=\"my-4\">\r\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" routerLink=\"/register_patient\">Register as patient</button>\r\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\" routerLink=\"/login\">Login</button>\r\n        </div>\r\n        </div>\r\n        <ngb-alerts></ngb-alerts>\r\n    </div>\r\n    </div>\r\n</div>\r\n        "

/***/ }),

/***/ "./src/app/components/login/register-form-provider/register-form-provider.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/login/register-form-provider/register-form-provider.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RegisterFormProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormProvider", function() { return RegisterFormProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-cookie */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterFormProvider = /** @class */ (function () {
    function RegisterFormProvider(api, cookies, router) {
        this.api = api;
        this.cookies = cookies;
        this.router = router;
    }
    RegisterFormProvider.prototype.ngOnInit = function () {
    };
    RegisterFormProvider.prototype.register = function (provider) {
        var _this = this;
        this.api.addProvider(provider)
            .subscribe(function (provider) {
            _this.cookies.put('email', provider.email);
            _this.cookies.remove('password');
            _this.router.navigateByUrl('/login');
        });
    };
    RegisterFormProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-form-provider',
            template: __webpack_require__(/*! ./register-form-provider.component.html */ "./src/app/components/login/register-form-provider/register-form-provider.component.html"),
            styles: [__webpack_require__(/*! ./register-form-provider.component.css */ "./src/app/components/login/register-form-provider/register-form-provider.component.css")],
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], typeof (_a = typeof angular2_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"] !== "undefined" && angular2_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"]) === "function" && _a || Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterFormProvider);
    return RegisterFormProvider;
    var _a;
}());



/***/ }),

/***/ "./src/app/components/patients/patient-browser/patient-browser.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/patients/patient-browser/patient-browser.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"patients\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <h2 class=\"card-title\">Patients</h2>\r\n            <patient-list [patients]=\"patients\"></patient-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/components/patients/patient-browser/patient-browser.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/patients/patient-browser/patient-browser.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PatientBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientBrowser", function() { return PatientBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientBrowser = /** @class */ (function () {
    function PatientBrowser(api) {
        this.api = api;
    }
    PatientBrowser.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.patients) {
            this.patients$ = this.api.getPatients();
            this.patients$.subscribe(function (patients) { return _this.patients = patients; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('patients'),
        __metadata("design:type", Array)
    ], PatientBrowser.prototype, "patients", void 0);
    PatientBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'patient-browser',
            template: __webpack_require__(/*! ./patient-browser.component.html */ "./src/app/components/patients/patient-browser/patient-browser.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], PatientBrowser);
    return PatientBrowser;
}());

;


/***/ }),

/***/ "./src/app/components/patients/patient-form/patient-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/patients/patient-form/patient-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"inputName\" required autofocus>\r\n        <label for=\"inputName\">Name</label>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email address\" id=\"inputEmail\" required>\r\n        <label for=\"inputEmail\">Email address</label>\r\n        <small *ngIf=\"form.get('email').errors?.email && form.get('email').touched\">Invalid email</small>\r\n    </div>\r\n    <div class=\"form-label-group\" *ngIf=\"password_field\">\r\n        <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"inputPassword\" required>\r\n        <label for=\"inputPassword\">Password</label>\r\n        <small *ngIf=\"form.get('password').errors?.minlength && form.get('password').touched\">Password must be a minimum of 8 characters</small>\r\n    </div>\r\n    <div class=\"form-label-group\" *ngIf=\"password_field\">\r\n        <input formControlName=\"confirm_password\" type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" id=\"inputConfirmPassword\" required>\r\n        <label for=\"inputConfirmPassword\">Confirm password</label>\r\n        <small *ngIf=\"form.errors?.confirm_password && form.get('confirm_password').touched\">Password doesn't match</small>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"phone\" type=\"phone\" class=\"form-control\" placeholder=\"Phone\" id=\"inputPhone\" required>\r\n        <label for=\"inputPhone\">Phone</label>\r\n        <small *ngIf=\"(phone.errors?.minlength || phone.error?.maxlength) && phone.touched\">Phone must be 8 digits</small>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"medicare\" type=\"type\" class=\"form-control\" placeholder=\"Medicare\" id=\"inputMedicare\" required>\r\n        <label for=\"inputMedicare\">Medicare</label>\r\n        <small *ngIf=\"(medicare.errors?.minlength || medicare.error?.maxlength) && form.get('medicare').touched\">Medicare must have 10 characters</small>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"form.invalid\">{{button_text}}</button>\r\n</form>\r\n    "

/***/ }),

/***/ "./src/app/components/patients/patient-form/patient-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/patients/patient-form/patient-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: PatientForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientForm", function() { return PatientForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/form.component */ "./src/app/components/forms/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientForm = /** @class */ (function (_super) {
    __extends(PatientForm, _super);
    function PatientForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.button_text = 'Submit';
        _this.password_field = false;
        _this.value = {};
        return _this;
    }
    PatientForm.prototype.ngOnInit = function () {
        this.create_form();
    };
    Object.defineProperty(PatientForm.prototype, "phone", {
        get: function () {
            return this.form.get('phone');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientForm.prototype, "medicare", {
        get: function () {
            return this.form.get('medicare');
        },
        enumerable: true,
        configurable: true
    });
    PatientForm.prototype.create_form = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            ]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.phone, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8),
            ]),
            'medicare': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.medicare, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
            ]),
        });
        if (this.password_field) {
            this.form.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.password, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
            ]));
            this.form.addControl('confirm_password', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.value.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            this.form.setValidators([this.check_password]);
        }
    };
    PatientForm.prototype.check_password = function (group) {
        var pass = group.get('password').value;
        var confirm_pass = group.get('confirm_password').value;
        if (pass != confirm_pass && pass && confirm_pass) {
            return { confirm_password: true };
        }
        else {
            return null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('button-text'),
        __metadata("design:type", String)
    ], PatientForm.prototype, "button_text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('password-field'),
        __metadata("design:type", Boolean)
    ], PatientForm.prototype, "password_field", void 0);
    PatientForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'patient-form',
            template: __webpack_require__(/*! ./patient-form.component.html */ "./src/app/components/patients/patient-form/patient-form.component.html")
        })
    ], PatientForm);
    return PatientForm;
}(_forms_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]));



/***/ }),

/***/ "./src/app/components/patients/patient-list/patient-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/patients/patient-list/patient-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table datatable class=\"table row-border\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th>Name</th>\r\n\t\t\t<th>Email</th>\r\n\t\t\t<th>Phone</th>\r\n\t\t\t<th>Medicare</th>\r\n\t\t\t<th *ngIf=\"current_user?.is_admin\">Actions</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr *ngFor=\"let patient of patients; let i = index;\">\r\n\t\t\t<td><a routerLink=\"/patients/{{patient.id}}\">{{patient.name}}</a></td>\r\n\t\t\t<td>{{patient.email}}</td>\r\n\t\t\t<td>{{patient.phone}}</td>\r\n\t\t\t<td>{{patient.medicare}}</td>\r\n\t\t\t<td *ngIf=\"current_user?.is_admin\">\r\n                <a (click)=\"modify(patient, i)\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"material-icons mr-1\">edit</i></a>\r\n                <a (click)=\"delete(patient, i)\" data-toggle=\"tooltip\" title=\"Delete\"><i class=\"material-icons\">delete_outline</i></a>\r\n            </td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/patients/patient-list/patient-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/patients/patient-list/patient-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: PatientList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientList", function() { return PatientList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientList = /** @class */ (function (_super) {
    __extends(PatientList, _super);
    function PatientList(api, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.modal = modal;
        return _this;
    }
    PatientList.prototype.ngOnInit = function () {
    };
    PatientList.prototype.modify = function (patient, index) {
        var _this = this;
        this.modal
            .open_patient_form('Modify patient', patient)
            .then(function (form) {
            if (form.onSubmitChange) {
                _this.api.patchPatient(patient.id, form.onSubmitChange)
                    .subscribe(function (patched_patient) {
                    _this.patients[index] = patched_patient;
                });
            }
        });
    };
    PatientList.prototype.delete = function (patient, index) {
        var _this = this;
        this.modal
            .dialog("Delete patient", "Are you sure you want to delete this patient?")
            .then(function () {
            _this.api.deletePatient(patient.id)
                .subscribe(function () {
                _this.patients.splice(index, 1);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('patients'),
        __metadata("design:type", Array)
    ], PatientList.prototype, "patients", void 0);
    PatientList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'patient-list',
            template: __webpack_require__(/*! ./patient-list.component.html */ "./src/app/components/patients/patient-list/patient-list.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PatientList);
    return PatientList;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_2__["AppBrowserPanel"]));

;


/***/ }),

/***/ "./src/app/components/patients/patient-profile/patient-profile.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/patients/patient-profile/patient-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"patient\">\r\n<app-browser-toolbar *ngIf=\"show_toolbar\">\r\n    <li class=\"nav-item active flex\">\r\n        <i class=\"material-icons mr-1\">edit</i>\r\n        <a class=\"nav-link\" (click)=\"modify_patient()\">Modify profile</a>\r\n    </li>\r\n</app-browser-toolbar>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Patient Profile</h2>\r\n        <table class=\"table table-hover row-border\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Email</th>\r\n                    <th>Phone</th>\r\n                    <th>Medicare</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>{{patient.name}}</td>\r\n                    <td>{{patient.email}}</td>\r\n                    <td>{{patient.phone}}</td>\r\n                    <td>{{patient.medicare}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Appointments</h2>\r\n        <appointment-list *ngIf=\"patient.appointments\" [show-patients]=\"false\" [appointments]=\"patient.appointments\"></appointment-list>\r\n    </div>\r\n</div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/patients/patient-profile/patient-profile.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/patients/patient-profile/patient-profile.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PatientProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfile", function() { return PatientProfile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatientProfile = /** @class */ (function (_super) {
    __extends(PatientProfile, _super);
    function PatientProfile(api, route, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.route = route;
        _this.modal = modal;
        return _this;
    }
    PatientProfile.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.id = id;
        this.patient$ = this.api.getPatient(id);
        this.patient$.subscribe(function (patient) {
            _this._patient = patient;
        });
    };
    Object.defineProperty(PatientProfile.prototype, "patient", {
        get: function () {
            return this._patient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientProfile.prototype, "show_toolbar", {
        get: function () {
            return (this.current_user
                && (this.current_user.is_patient && this.current_user.id == this.id));
        },
        enumerable: true,
        configurable: true
    });
    PatientProfile.prototype.modify_patient = function () {
        var _this = this;
        this.modal
            .open_patient_form("Modify profile", this.patient, true)
            .then(function (form) {
            if (form.onSubmitChange) {
                _this.api.patchPatient(_this.id, form.onSubmitChange)
                    .subscribe(function (patient) {
                    _this._patient = patient;
                });
            }
        });
    };
    PatientProfile = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'patient-profile',
            template: __webpack_require__(/*! ./patient-profile.component.html */ "./src/app/components/patients/patient-profile/patient-profile.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_5__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], PatientProfile);
    return PatientProfile;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__["AppBrowserPanel"]));



/***/ }),

/***/ "./src/app/components/providers/provider-browser/provider-browser.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/providers/provider-browser/provider-browser.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"providers\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Providers</h2>\r\n        <provider-list [providers]=\"providers\"></provider-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n        "

/***/ }),

/***/ "./src/app/components/providers/provider-browser/provider-browser.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/providers/provider-browser/provider-browser.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProviderBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderBrowser", function() { return ProviderBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProviderBrowser = /** @class */ (function () {
    function ProviderBrowser(api) {
        this.api = api;
    }
    ProviderBrowser.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.providers) {
            this.providers$ = this.api.getProviders();
            this.providers$.subscribe(function (providers) { return _this.providers = providers; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('providers'),
        __metadata("design:type", Array)
    ], ProviderBrowser.prototype, "providers", void 0);
    ProviderBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'provider-browser',
            template: __webpack_require__(/*! ./provider-browser.component.html */ "./src/app/components/providers/provider-browser/provider-browser.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ProviderBrowser);
    return ProviderBrowser;
}());

;


/***/ }),

/***/ "./src/app/components/providers/provider-form/provider-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/providers/provider-form/provider-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"inputName\" required autofocus>\r\n        <label for=\"inputName\">Name</label>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email address\" id=\"inputEmail\" required>\r\n        <label for=\"inputEmail\">Email address</label>\r\n        <small *ngIf=\"form.get('email').errors?.email && form.get('email').touched\">Invalid email</small>\r\n    </div>\r\n    <div class=\"form-label-group\" *ngIf=\"password_field\">\r\n        <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"inputPassword\" required>\r\n        <label for=\"inputPassword\">Password</label>\r\n        <small *ngIf=\"form.get('password').errors?.minlength && form.get('password').touched\">Password must be a minimum of 8 characters</small>\r\n    </div>\r\n    <div class=\"form-label-group\" *ngIf=\"password_field\">\r\n        <input formControlName=\"confirm_password\" type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" id=\"inputConfirmPassword\" required>\r\n        <label for=\"inputConfirmPassword\">Confirm password</label>\r\n        <small *ngIf=\"form.errors?.confirm_password && form.get('confirm_password').touched\">Password doesn't match</small>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"phone\" type=\"phone\" class=\"form-control\" placeholder=\"Phone\" id=\"inputPhone\" required>\r\n        <label for=\"inputPhone\">Phone</label>\r\n        <small *ngIf=\"(form.get('phone').errors?.minlength || form.get('phone').errors?.maxlength )&& form.get('phone').touched\">Phone must be 8 digits</small>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"provider_number\" type=\"type\" class=\"form-control\" placeholder=\"Provider number\" id=\"inputProviderNumber\" required>\r\n        <label for=\"inputProviderNumber\">Provider number</label>\r\n        <small *ngIf=\"form.get('provider_number').errors?.minlength && form.get('provider_number').touched\">Provider number must have at least 10 characters</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Provider type</label>\r\n        <select formControlName=\"provider_type\" class=\"form-control\" required>\r\n            <option *ngFor=\"let provider_type of provider_types\" [value]=\"provider_type\">{{provider_type}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"health_centres$ | async as health_centres\">\r\n        <label>Health Centre</label>\r\n        <select formControlName=\"health_centre_id\" class=\"form-control\" placeholder=\"Health centre\" value=\"value?.health_centre_name?\" required>\r\n            <option *ngFor=\"let health_centre of health_centres\" [value]=\"health_centre.id\">{{health_centre.name}}</option>\r\n        </select>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"form.invalid\">{{button_text}}</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/providers/provider-form/provider-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/providers/provider-form/provider-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProviderForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderForm", function() { return ProviderForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/form.component */ "./src/app/components/forms/form.component.ts");
/* harmony import */ var _models_provider_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/provider.model */ "./src/app/models/provider.model.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProviderForm = /** @class */ (function (_super) {
    __extends(ProviderForm, _super);
    function ProviderForm(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.button_text = 'Submit';
        _this.password_field = false;
        _this.value = {};
        return _this;
    }
    Object.defineProperty(ProviderForm.prototype, "health_centres$", {
        get: function () {
            return this._health_centres$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProviderForm.prototype, "provider_types", {
        get: function () {
            return _models_provider_model__WEBPACK_IMPORTED_MODULE_2__["ProviderTypes"];
        },
        enumerable: true,
        configurable: true
    });
    ProviderForm.prototype.ngOnInit = function () {
        var _this = this;
        this.create_form();
        this._health_centres$ = this.api.getHealthCentres();
        this.health_centres$.subscribe(function (health_centres) {
            var health_centre_id = _this.form.get('health_centre_id');
            if (!health_centre_id.value)
                health_centre_id.setValue(health_centres[0].id);
        });
    };
    ProviderForm.prototype.create_form = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.value.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.value.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
            ]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.value.phone, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8),
            ]),
            'provider_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.value.provider_number, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10),
            ]),
            'provider_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.value.provider_type || this.provider_types[0], [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            'health_centre_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.value.health_centre_id, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
        });
        if (this.password_field) {
            this.form.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.value.password, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
            ]));
            this.form.addControl('confirm_password', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.value.password, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
            this.form.setValidators([this.check_password]);
        }
    };
    ProviderForm.prototype.check_password = function (group) {
        var pass = group.get('password').value;
        var confirm_pass = group.get('confirm_password').value;
        if (pass != confirm_pass && pass && confirm_pass) {
            return { confirm_password: true };
        }
        else {
            return null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('button-text'),
        __metadata("design:type", String)
    ], ProviderForm.prototype, "button_text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('password-field'),
        __metadata("design:type", Boolean)
    ], ProviderForm.prototype, "password_field", void 0);
    ProviderForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'provider-form',
            template: __webpack_require__(/*! ./provider-form.component.html */ "./src/app/components/providers/provider-form/provider-form.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProviderForm);
    return ProviderForm;
}(_forms_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]));



/***/ }),

/***/ "./src/app/components/providers/provider-list/provider-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/providers/provider-list/provider-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table datatable [dtOptions]=\"dtOptions\" class=\"table row-border\">\r\n    <thead>\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Email</th>\r\n            <th>Phone</th>\r\n            <th>Health centre</th>\r\n            <th>Provider number</th>\r\n            <th>Provider type</th>\r\n            <th>Rating</th>\r\n            <th *ngIf=\"current_user?.is_admin\">Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let provider of providers; let i = index;\">\r\n            <td><a routerLink=\"/providers/{{provider.id}}\">{{provider.name}}</a></td>\r\n            <td>{{provider.email}}</td>\r\n            <td>{{provider.phone}}</td>\r\n            <td><a routerLink=\"/health_centres/{{provider.health_centre_id}}\">{{provider.health_centre_name}}</a></td>\r\n            <td>{{provider.provider_number}}</td>\r\n            <td>{{provider.provider_type}}</td>\r\n            <td>{{provider.rating}}</td>\r\n            <td *ngIf=\"current_user?.is_admin\">\r\n                <a (click)=\"modify(provider, i)\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"material-icons mr-1\">edit</i></a>\r\n                <a (click)=\"delete(provider, i)\" data-toggle=\"tooltip\" title=\"Delete\"><i class=\"material-icons\">delete_outline</i></a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n    "

/***/ }),

/***/ "./src/app/components/providers/provider-list/provider-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/providers/provider-list/provider-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProviderList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderList", function() { return ProviderList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProviderList = /** @class */ (function (_super) {
    __extends(ProviderList, _super);
    function ProviderList(api, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.modal = modal;
        _this.dtOptions = {};
        return _this;
    }
    ProviderList.prototype.ngOnInit = function () {
        this.dtOptions = {
            autoWidth: false,
            responsive: true,
        };
    };
    ProviderList.prototype.modify = function (provider, index) {
        var _this = this;
        this.modal
            .open_provider_form('Modify provider', provider)
            .then(function (form) {
            if (form.onSubmitChange) {
                _this.api.patchProvider(provider.id, form.onSubmitChange)
                    .subscribe(function (patched_provider) {
                    _this.providers[index] = patched_provider;
                });
            }
        });
    };
    ProviderList.prototype.delete = function (provider, index) {
        var _this = this;
        this.modal
            .dialog("Delete provider", "Are you sure you want to delete this provider?")
            .then(function () {
            _this.api.deleteProvider(provider.id)
                .subscribe(function () {
                _this.providers.splice(index, 1);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('providers'),
        __metadata("design:type", Array)
    ], ProviderList.prototype, "providers", void 0);
    ProviderList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'provider-list',
            template: __webpack_require__(/*! ./provider-list.component.html */ "./src/app/components/providers/provider-list/provider-list.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_2__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ProviderList);
    return ProviderList;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_4__["AppBrowserPanel"]));

;


/***/ }),

/***/ "./src/app/components/providers/provider-profile/provider-profile.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/providers/provider-profile/provider-profile.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"provider\">\r\n<app-browser-toolbar *ngIf=\"show_toolbar\">\r\n    <li class=\"nav-item active flex\" *ngIf=\"current_user?.is_patient\">\r\n        <i class=\"material-icons mr-1\">library_add</i>\r\n        <a class=\"nav-link\" (click)=\"add_appointment()\">Make appointment</a>\r\n    </li>\r\n    <li class=\"nav-item active flex\" *ngIf=\"current_user?.is_provider && current_user?.id == id\">\r\n        <i class=\"material-icons mr-1\">edit</i>\r\n        <a class=\"nav-link\" (click)=\"modify_profile()\">Modify profile</a>\r\n    </li>\r\n</app-browser-toolbar>\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Provider profile</h2>\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Email</th>\r\n                    <th>Phone</th>\r\n                    <th>Provider number</th>\r\n                    <th>Provider type</th>\r\n                    <th>Rating</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>{{provider.name}}</td>\r\n                    <td>{{provider.email}}</td>\r\n                    <td>{{provider.phone}}</td>\r\n                    <td>{{provider.provider_number}}</td>\r\n                    <td>{{provider.provider_type}}</td>\r\n                    <td>{{provider.rating}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"card\" >\r\n    <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Appointments</h2>\r\n        <appointment-list *ngIf=\"provider.appointments\" [show-providers]=\"false\" [show-patients]=\"show_patients\" [appointments]=\"provider.appointments\"></appointment-list>\r\n    </div>\r\n</div>\r\n</ng-container>\r\n\r\n\r\n    "

/***/ }),

/***/ "./src/app/components/providers/provider-profile/provider-profile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/providers/provider-profile/provider-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProviderProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderProfile", function() { return ProviderProfile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
/* harmony import */ var _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../alerts/alerts.service */ "./src/app/alerts/alerts.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProviderProfile = /** @class */ (function (_super) {
    __extends(ProviderProfile, _super);
    function ProviderProfile(api, route, modal, alert, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.route = route;
        _this.modal = modal;
        _this.alert = alert;
        _this.appointment_cache = {};
        return _this;
    }
    ProviderProfile.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.id = id;
        this.provider$ = this.api.getProvider(id);
        this.provider$.subscribe(function (provider) {
            _this._provider = provider;
        });
    };
    Object.defineProperty(ProviderProfile.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProviderProfile.prototype, "show_toolbar", {
        get: function () {
            if (this.current_user) {
                if (this.current_user.is_patient)
                    return true; // make appointmnet
                if (this.current_user.is_provider && this.id == this.current_user.id)
                    return true; // modify own profile
                return false;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProviderProfile.prototype, "show_patients", {
        get: function () {
            if (this.current_user && this.current_user.is_patient) {
                return false;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    ProviderProfile.prototype.modify_profile = function () {
        var _this = this;
        this.modal
            .open_provider_form("Modify profile", this.provider, true)
            .then(function (form) {
            if (form.onSubmitChange) {
                _this.api.patchProvider(_this.id, form.onSubmitChange)
                    .subscribe(function (provider) {
                    _this._provider = provider;
                });
            }
        });
    };
    ProviderProfile.prototype.add_appointment = function () {
        var _this = this;
        this.modal
            .open_appointment_form("Make appointment", __assign({}, (this.appointment_cache), { patient_id: this.current_user.id, provider_id: this.provider.id }), false, false)
            .then(function (form) {
            _this.appointment_cache = form.onSubmit;
            _this.api.addAppointment(form.onSubmit)
                .subscribe(function (appointment) {
                _this.provider.appointments.push(appointment);
            });
        });
    };
    ProviderProfile.prototype.modify_appointment = function (appointment, index) {
        var _this = this;
        this.modal
            .open_appointment_form("Modify appointment", appointment, false, false)
            .then(function (form) {
            if (form.onSubmitChange) {
                _this.api.patchAppointment(appointment.id, form.onSubmitChange)
                    .subscribe(function (patched_appointment) {
                    _this.provider.appointments[index] = patched_appointment;
                });
            }
        });
    };
    ProviderProfile.prototype.delete_appointment = function (appointment, index) {
        var _this = this;
        this.modal
            .dialog("Cancel appointment", "Are you sure you want to cancel this appointment?")
            .then(function () {
            _this.api.deleteAppointment(appointment.id)
                .subscribe(function (response) {
                _this.provider.appointments.splice(index, 1);
                _this.alert.addAlert({
                    type: 'success',
                    text: String(response),
                    autodismiss: 2.5,
                });
            });
        });
    };
    ProviderProfile = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'provider-profile',
            template: __webpack_require__(/*! ./provider-profile.component.html */ "./src/app/components/providers/provider-profile/provider-profile.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_5__["ModalFormService"],
            _alerts_alerts_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ProviderProfile);
    return ProviderProfile;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__["AppBrowserPanel"]));



/***/ }),

/***/ "./src/app/components/ratings/health-centre-rating-form/health-centre-rating-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/ratings/health-centre-rating-form/health-centre-rating-form.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"form-group\" *ngIf=\"show_patients\">\r\n        <label>Patients</label>\r\n        <select formControlName=\"patient_id\" class=\"form-control\" placeholder=\"Patient\" value=\"value?.patient_name?\" required>\r\n            <option *ngFor=\"let patient of patients\" [value]=\"patient.id\">{{patient.name}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"show_health_centres\">\r\n        <label>Health centres</label>\r\n        <select formControlName=\"health_centre_id\" class=\"form-control\" placeholder=\"Health centre\" value=\"value?.health_centre_name?\" required>\r\n            <option *ngFor=\"let health_centre of health_centres\" [value]=\"health_centre.id\">{{health_centre.name}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"rating\" type=\"number\" class=\"form-control\" placeholder=\"Rating\" id=\"inputRating\">\r\n        <label for=\"inputRating\">Rating</label>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"comment\" type=\"text\" class=\"form-control\" placeholder=\"Comment\" id=\"inputComment\">\r\n        <label for=\"inputComment\">Comment</label>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"form.invalid\">{{button_text}}</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/ratings/health-centre-rating-form/health-centre-rating-form.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/ratings/health-centre-rating-form/health-centre-rating-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: HealthCentreRatingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCentreRatingForm", function() { return HealthCentreRatingForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/form.component */ "./src/app/components/forms/form.component.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HealthCentreRatingForm = /** @class */ (function (_super) {
    __extends(HealthCentreRatingForm, _super);
    function HealthCentreRatingForm(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.button_text = 'Submit';
        _this.show_patients = false;
        _this.show_health_centres = false;
        _this.value = {};
        return _this;
    }
    Object.defineProperty(HealthCentreRatingForm.prototype, "patients", {
        get: function () {
            return this._patients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthCentreRatingForm.prototype, "health_centres", {
        get: function () {
            return this._health_centres;
        },
        enumerable: true,
        configurable: true
    });
    HealthCentreRatingForm.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'patient_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.value.patient_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'health_centre_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.value.health_centre_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'rating': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.value.rating || 5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'comment': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.value.comment || ""),
        });
        this.patients$ = this.api.getPatients();
        this.patients$.subscribe(function (patients) {
            _this._patients = patients;
            var patient_id = _this.form.get('patient_id');
            if (!patient_id.value) {
                patient_id.setValue(patients[0].id);
            }
        });
        this.health_centres$ = this.api.getHealthCentres();
        this.health_centres$.subscribe(function (health_centres) {
            _this._health_centres = health_centres;
            var health_centre_id = _this.form.get('health_centre_id');
            if (!health_centre_id.value) {
                health_centre_id.setValue(health_centres[0].id);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('button-text'),
        __metadata("design:type", String)
    ], HealthCentreRatingForm.prototype, "button_text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-patients'),
        __metadata("design:type", Boolean)
    ], HealthCentreRatingForm.prototype, "show_patients", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-health-centres'),
        __metadata("design:type", Boolean)
    ], HealthCentreRatingForm.prototype, "show_health_centres", void 0);
    HealthCentreRatingForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'health-centre-rating-form',
            template: __webpack_require__(/*! ./health-centre-rating-form.component.html */ "./src/app/components/ratings/health-centre-rating-form/health-centre-rating-form.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HealthCentreRatingForm);
    return HealthCentreRatingForm;
}(_forms_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]));



/***/ }),

/***/ "./src/app/components/ratings/health-centre-rating-list/health-centre-rating-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/ratings/health-centre-rating-list/health-centre-rating-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table datatable class=\"table row-border\">\r\n    <thead>\r\n        <tr>\r\n            <th>Patient name</th>\r\n            <th>Health centre name</th>\r\n            <th>Rating</th>\r\n            <th>Comment</th>\r\n            <th *ngIf=\"current_user?.is_admin\">Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let rating of health_centre_ratings; let i = index;\">\r\n            <td><a routerLink=\"/patients/{{rating.patient_id}}\">{{rating.patient_name}}</a></td>\r\n            <td><a routerLink=\"/health_centres/{{rating.health_centre_id}}\">{{rating.health_centre_name}}</a></td>\r\n            <td>{{rating.rating}}</td>\r\n            <td>{{rating.comment}}</td>\r\n            <td *ngIf=\"current_user?.is_admin\">\r\n                <a (click)=\"modify(rating, i)\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"material-icons mr-1\">edit</i></a>\r\n                <a (click)=\"delete(rating, i)\" data-toggle=\"tooltip\" title=\"Delete\"><i class=\"material-icons\">delete_outline</i></a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/components/ratings/health-centre-rating-list/health-centre-rating-list.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/ratings/health-centre-rating-list/health-centre-rating-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: HealthCentreRatingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCentreRatingList", function() { return HealthCentreRatingList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HealthCentreRatingList = /** @class */ (function (_super) {
    __extends(HealthCentreRatingList, _super);
    function HealthCentreRatingList(api, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.modal = modal;
        return _this;
    }
    HealthCentreRatingList.prototype.modify = function (health_centre_rating, index) {
        var _this = this;
        this.modal
            .open_health_centre_rating_form('Modify rating', health_centre_rating)
            .then(function (form) {
            if (form.onSubmitChange) {
                _this.api
                    .patchHealthCentreRating(health_centre_rating.id, form.onSubmitChange)
                    .subscribe(function (patched_health_centre_rating) {
                    _this.health_centre_ratings[index] = patched_health_centre_rating;
                });
            }
        });
    };
    HealthCentreRatingList.prototype.delete = function (health_centre_rating, index) {
        var _this = this;
        this.modal
            .dialog('Delete rating', 'Are you sure you want to delete this rating?')
            .then(function () {
            _this.api
                .deleteHealthCentreRating(health_centre_rating.id)
                .subscribe(function () {
                _this.health_centre_ratings.splice(index, 1);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('health-centre-ratings'),
        __metadata("design:type", Array)
    ], HealthCentreRatingList.prototype, "health_centre_ratings", void 0);
    HealthCentreRatingList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'health-centre-rating-list',
            template: __webpack_require__(/*! ./health-centre-rating-list.component.html */ "./src/app/components/ratings/health-centre-rating-list/health-centre-rating-list.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_2__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HealthCentreRatingList);
    return HealthCentreRatingList;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_3__["AppBrowserPanel"]));



/***/ }),

/***/ "./src/app/components/ratings/provider-rating-form/provider-rating-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/ratings/provider-rating-form/provider-rating-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"submit()\" [formGroup]=\"form\">\r\n    <div class=\"form-group\" *ngIf=\"show_patients\">\r\n        <label>Patients</label>\r\n        <select formControlName=\"patient_id\" class=\"form-control\" placeholder=\"Patient\" value=\"value?.patient_name?\" required>\r\n            <option *ngFor=\"let patient of patients\" [value]=\"patient.id\">{{patient.name}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"show_providers\">\r\n        <label>Providers</label>\r\n        <select formControlName=\"provider_id\" class=\"form-control\" placeholder=\"Provider\" value=\"value?.provider_name?\" required>\r\n            <option *ngFor=\"let provider of providers\" [value]=\"provider.id\">{{provider.name}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"rating\" type=\"number\" class=\"form-control\" placeholder=\"Rating\" id=\"inputRating\">\r\n        <label for=\"inputRating\">Rating</label>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <input formControlName=\"comment\" type=\"text\" class=\"form-control\" placeholder=\"Comment\" id=\"inputComment\">\r\n        <label for=\"inputComment\">Comment</label>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"form.invalid\">{{button_text}}</button>\r\n</form>"

/***/ }),

/***/ "./src/app/components/ratings/provider-rating-form/provider-rating-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/ratings/provider-rating-form/provider-rating-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProviderRatingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderRatingForm", function() { return ProviderRatingForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forms_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/form.component */ "./src/app/components/forms/form.component.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProviderRatingForm = /** @class */ (function (_super) {
    __extends(ProviderRatingForm, _super);
    function ProviderRatingForm(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.button_text = 'Submit';
        _this.show_patients = false;
        _this.show_providers = false;
        _this.value = {};
        return _this;
    }
    Object.defineProperty(ProviderRatingForm.prototype, "patients", {
        get: function () {
            return this._patients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProviderRatingForm.prototype, "providers", {
        get: function () {
            return this._providers;
        },
        enumerable: true,
        configurable: true
    });
    ProviderRatingForm.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'patient_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.value.patient_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'provider_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.value.provider_id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'rating': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.value.rating || 5, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'comment': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.value.comment || ""),
        });
        this.patients$ = this.api.getPatients();
        this.patients$.subscribe(function (patients) {
            _this._patients = patients;
            var patient_id = _this.form.get('patient_id');
            if (!patient_id.value) {
                patient_id.setValue(patients[0].id);
            }
        });
        this.providers$ = this.api.getProviders();
        this.providers$.subscribe(function (providers) {
            _this._providers = providers;
            var provider_id = _this.form.get('provider_id');
            if (!provider_id.value) {
                provider_id.setValue(providers[0].id);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('button-text'),
        __metadata("design:type", String)
    ], ProviderRatingForm.prototype, "button_text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-patients'),
        __metadata("design:type", Boolean)
    ], ProviderRatingForm.prototype, "show_patients", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-providers'),
        __metadata("design:type", Boolean)
    ], ProviderRatingForm.prototype, "show_providers", void 0);
    ProviderRatingForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'provider-rating-form',
            template: __webpack_require__(/*! ./provider-rating-form.component.html */ "./src/app/components/ratings/provider-rating-form/provider-rating-form.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProviderRatingForm);
    return ProviderRatingForm;
}(_forms_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]));



/***/ }),

/***/ "./src/app/components/ratings/provider-rating-list/provider-rating-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/ratings/provider-rating-list/provider-rating-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table datatable class=\"table row-border\">\r\n    <thead>\r\n        <tr>\r\n            <th>Patient name</th>\r\n            <th>Provider name</th>\r\n            <th>Rating</th>\r\n            <th>Comment</th>\r\n            <th *ngIf=\"current_user?.is_admin\">Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let rating of provider_ratings; let i = index;\">\r\n            <td><a routerLink=\"/patients/{{rating.patient_id}}\">{{rating.patient_name}}</a></td>\r\n            <td><a routerLink=\"/providers/{{rating.provider_id}}\">{{rating.provider_name}}</a></td>\r\n            <td>{{rating.rating}}</td>\r\n            <td>{{rating.comment}}</td>\r\n            <td *ngIf=\"current_user?.is_admin\">\r\n                <a (click)=\"modify(rating, i)\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"material-icons mr-1\">edit</i></a>\r\n                <a (click)=\"delete(rating, i)\" data-toggle=\"tooltip\" title=\"Delete\"><i class=\"material-icons\">delete_outline</i></a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/components/ratings/provider-rating-list/provider-rating-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/ratings/provider-rating-list/provider-rating-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProviderRatingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderRatingList", function() { return ProviderRatingList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProviderRatingList = /** @class */ (function (_super) {
    __extends(ProviderRatingList, _super);
    function ProviderRatingList(api, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.modal = modal;
        return _this;
    }
    ProviderRatingList.prototype.modify = function (provider_rating, index) {
        var _this = this;
        this.modal
            .open_provider_rating_form('Modify rating', provider_rating)
            .then(function (form) {
            if (form.onSubmitChange) {
                _this.api
                    .patchProviderRating(provider_rating.id, form.onSubmitChange)
                    .subscribe(function (patched_provider_rating) {
                    _this.provider_ratings[index] = patched_provider_rating;
                });
            }
        });
    };
    ProviderRatingList.prototype.delete = function (provider_rating, index) {
        var _this = this;
        this.modal
            .dialog('Delete rating', 'Are you sure you want to delete this rating?')
            .then(function () {
            _this.api
                .deleteProviderRating(provider_rating.id)
                .subscribe(function () {
                _this.provider_ratings.splice(index, 1);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('provider-ratings'),
        __metadata("design:type", Array)
    ], ProviderRatingList.prototype, "provider_ratings", void 0);
    ProviderRatingList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'provider-rating-list',
            template: __webpack_require__(/*! ./provider-rating-list.component.html */ "./src/app/components/ratings/provider-rating-list/provider-rating-list.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProviderRatingList);
    return ProviderRatingList;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_1__["AppBrowserPanel"]));



/***/ }),

/***/ "./src/app/components/ratings/ratings-browser/ratings-browser.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/ratings/ratings-browser/ratings-browser.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"current_user?.is_admin\">\r\n<app-browser-toolbar *ngIf=\"current_user?.is_admin\">\r\n    <li class=\"nav-item active flex\">\r\n        <i class=\"material-icons mr-1\">library_add</i>\r\n        <a class=\"nav-link\" (click)=\"add_health_centre_rating()\">Add health centre rating</a>\r\n    </li>\r\n    <li class=\"nav-item active flex\">\r\n        <i class=\"material-icons mr-1\">library_add</i>\r\n        <a class=\"nav-link\" (click)=\"add_provider_rating()\">Add provider rating</a>\r\n    </li>\r\n</app-browser-toolbar>\r\n<div class=\"card\" *ngIf=\"health_centre_ratings?.length\">\r\n    <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Health centre ratings</h2>\r\n        <health-centre-rating-list [health-centre-ratings]=\"health_centre_ratings\"></health-centre-rating-list>\r\n    </div>\r\n</div>\r\n<div class=\"card\" *ngIf=\"provider_ratings?.length\">\r\n    <div class=\"card-body\">\r\n        <h2 class=\"card-title\">Provider ratings</h2>\r\n        <provider-rating-list [provider-ratings]=\"provider_ratings\"></provider-rating-list>\r\n    </div>\r\n</div>\r\n</div>\r\n        "

/***/ }),

/***/ "./src/app/components/ratings/ratings-browser/ratings-browser.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/ratings/ratings-browser/ratings-browser.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RatingsBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsBrowser", function() { return RatingsBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-browser/app-browser-panel.component */ "./src/app/app-browser/app-browser-panel.component.ts");
/* harmony import */ var _api_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/auth.service */ "./src/app/api/auth.service.ts");
/* harmony import */ var _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/modal-forms.service */ "./src/app/components/forms/modal-forms.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RatingsBrowser = /** @class */ (function (_super) {
    __extends(RatingsBrowser, _super);
    function RatingsBrowser(api, modal, auth) {
        var _this = _super.call(this, auth) || this;
        _this.api = api;
        _this.modal = modal;
        return _this;
    }
    Object.defineProperty(RatingsBrowser.prototype, "health_centre_ratings", {
        get: function () {
            return this._health_centre_ratings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RatingsBrowser.prototype, "provider_ratings", {
        get: function () {
            return this._provider_ratings;
        },
        enumerable: true,
        configurable: true
    });
    RatingsBrowser.prototype.ngOnInit = function () {
        var _this = this;
        this.health_centre_ratings$ = this.api.getHealthCentreRatings();
        this.health_centre_ratings$.subscribe(function (health_centre_ratings) {
            _this._health_centre_ratings = health_centre_ratings;
        });
        this.provider_ratings$ = this.api.getProviderRatings();
        this.provider_ratings$.subscribe(function (provider_ratings) {
            _this._provider_ratings = provider_ratings;
        });
    };
    RatingsBrowser.prototype.add_health_centre_rating = function () {
        var _this = this;
        this.modal
            .open_health_centre_rating_form('Add health centre rating', {}, true, true)
            .then(function (form) {
            _this.api.addHealthCentreRating(form.onSubmit)
                .subscribe(function (health_centre_rating) {
                _this._health_centre_ratings.push(health_centre_rating);
            });
        });
    };
    RatingsBrowser.prototype.add_provider_rating = function () {
        var _this = this;
        this.modal
            .open_provider_rating_form('Add provider rating', {}, true, true)
            .then(function (form) {
            _this.api.addProviderRating(form.onSubmit)
                .subscribe(function (provider_rating) {
                _this._provider_ratings.push(provider_rating);
            });
        });
    };
    RatingsBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ratings-browser',
            template: __webpack_require__(/*! ./ratings-browser.component.html */ "./src/app/components/ratings/ratings-browser/ratings-browser.component.html"),
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _forms_modal_forms_service__WEBPACK_IMPORTED_MODULE_4__["ModalFormService"],
            _api_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RatingsBrowser);
    return RatingsBrowser;
}(_app_browser_app_browser_panel_component__WEBPACK_IMPORTED_MODULE_2__["AppBrowserPanel"]));



/***/ }),

/***/ "./src/app/models/provider.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/provider.model.ts ***!
  \******************************************/
/*! exports provided: ProviderTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderTypes", function() { return ProviderTypes; });
var ProviderTypes = [
    'General Practitioner',
    'Physiotherapist',
    'Pathologist',
    'Pharmacist',
];


/***/ }),

/***/ "./src/app/router-animations/animation-metadata.ts":
/*!*********************************************************!*\
  !*** ./src/app/router-animations/animation-metadata.ts ***!
  \*********************************************************/
/*! exports provided: fadeTransitionData, slideLeftTransitionData, slideRightTransitionData, slideUpTransitionData, slideDownTransitionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeTransitionData", function() { return fadeTransitionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideLeftTransitionData", function() { return slideLeftTransitionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideRightTransitionData", function() { return slideRightTransitionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUpTransitionData", function() { return slideUpTransitionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideDownTransitionData", function() { return slideDownTransitionData; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// get meta data for sliding animations
// NOTE: decorators don't work with functions
// export function getSlideTransitionData(
//     horizontal: boolean, displacement: number, 
//     hideDuration: number = 0.3, showDuration: number = 0.3
// ): (AnimationQueryMetadata | AnimationGroupMetadata)[] {
//     let translateDirection: string = horizontal ? 'translateX' : 'translateY';
//     let transitionData = [
//         group([ // for parallel animations
//             query(':enter, :leave', style({ position: 'fixed', width:'1200px' })
//             , { optional: true }),
//             query(':enter', [
//                 style({ transform: `${translateDirection}(${displacement}%)`, opacity: 0 }),
//                 group([
//                     animate(`${showDuration}s ease-in-out`, style({ transform: `${translateDirection}(0%)` })),
//                     animate(`${showDuration}s`, style({ opacity: 1 })),
//                 ]),
//             ], { optional: true }),
//             query(':leave', [
//                 style({ transform: `${translateDirection}(0%)`, opacity: 1 }),
//                 group([
//                     animate(`${hideDuration}s ease-in-out`, style({ transform: `${translateDirection}(${-displacement}%)` })),
//                     animate(`${hideDuration}s`, style({ opacity: 0 })),
//                 ]),
//             ], { optional: true }),
//         ])
//     ];
//     return transitionData;
// }
// all transition metadata
var fadeTransitionData = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '1200px' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.15s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.15s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ], { optional: true }),
];
var slideLeftTransitionData = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '1200px' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)", opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        ]),
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)", opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)" })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        ]),
    ], { optional: true }),
]);
var slideRightTransitionData = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '1200px' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(100%)", opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)" })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        ]),
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(0%)", opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateX(-100%)" })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        ]),
    ], { optional: true }),
]);
var slideUpTransitionData = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '1200px' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(-100%)", opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        ]),
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)", opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.15s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(10%)" })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.1s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        ]),
    ], { optional: true }),
]);
var slideDownTransitionData = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '1200px' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(100%)", opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)" })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.3s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        ]),
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(0%)", opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.15s ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "translateY(-10%)" })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.1s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        ]),
    ], { optional: true }),
]);


/***/ }),

/***/ "./src/app/router-animations/animations.ts":
/*!*************************************************!*\
  !*** ./src/app/router-animations/animations.ts ***!
  \*************************************************/
/*! exports provided: fadeAnimation, slideAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideAnimation", function() { return slideAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animation_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-metadata */ "./src/app/router-animations/animation-metadata.ts");


var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', _animation_metadata__WEBPACK_IMPORTED_MODULE_1__["fadeTransitionData"])
]);
var slideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideAnimation', [
    // transition('workout => scrum', slideLeftTransitionData),
    // transition('scrum => workout', slideRightTransitionData),
    // transition('scrum => scrum-item', slideDownTransitionData),
    // transition('workout => workout-item', slideDownTransitionData),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => login', _animation_metadata__WEBPACK_IMPORTED_MODULE_1__["slideLeftTransitionData"]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('login => *', _animation_metadata__WEBPACK_IMPORTED_MODULE_1__["slideRightTransitionData"]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('register_patient => register_provider', _animation_metadata__WEBPACK_IMPORTED_MODULE_1__["slideRightTransitionData"]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('register_provider => register_patient', _animation_metadata__WEBPACK_IMPORTED_MODULE_1__["slideLeftTransitionData"]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', _animation_metadata__WEBPACK_IMPORTED_MODULE_1__["fadeTransitionData"])
]);


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\acidi\Downloads\hospital-website-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map