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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/address/address.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/address/address.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"content\" >\n  <div class=\"yellow bordered\" *ngIf=\"address.isMain != true\">\n    <div class=\"header\"></div>\n    <div class=\"description\">Straße: {{ address.street }}</div>\n    <div class=\"description\">Stadt: {{ address.city }}</div>\n    <div class=\"description\">Postleitzahl: {{ address.postcode }} </div>\n\n  <!--</div>\n</div>-->\n<div class=\"ui list\" *ngIf=\"address\">\n  <div class=\"item\" [ngClass]=\"{\n  active: isItActive()\n      }\">\n  <i class=\"map marker icon\" *ngIf=\"!isItMain()\"></i>\n    <i class=\"yellow star icon\" *ngIf=\"isItMain()\"></i>\n  <div class=\"content\">\n    <div class=\"header\">Land: {{address.country}}</div>\n    <button class=\"ui right floated tiny red button labeled icon\" (click)=\"removeAddress(address.id)\" ><i class=\"delete icon\"></i>\n      Löschen</button>\n    <div class=\"description\">Straße: {{ address.street }}</div>\n    <div class=\"description\">Postleitzahl: {{ address.postcode }} </div>\n    <div class=\"description\">Stadt: {{ address.city }}</div>\n  </div>\n  <div class=\"extra\">\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/address/address.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/address/address.component.ts ***!
  \****************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/address */ "./src/app/shared/address.ts");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/authentication-service */ "./src/app/shared/authentication-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AddressComponent = /** @class */ (function () {
    function AddressComponent(bs, route, router, authService, fb) {
        this.bs = bs;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
    }
    AddressComponent.prototype.ngOnInit = function () {
        var user = parseInt(localStorage.getItem('userId'));
    };
    AddressComponent.prototype.removeAddress = function (id) {
        var _this = this;
        if (confirm("Adresse wirklich löschen?")) {
            console.log(id);
            this.bs.removeAddress(this.address.id).subscribe(function (res) {
                _this.router.navigate(['../../'], { relativeTo: _this.route });
                //window.location.reload();
            });
        }
    };
    AddressComponent.prototype.isItMain = function () {
        return this.address.isMain;
    };
    AddressComponent.prototype.isItActive = function () {
        return this.address.id == this.route.snapshot.params.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_address__WEBPACK_IMPORTED_MODULE_2__["Address"])
    ], AddressComponent.prototype, "address", void 0);
    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'a.bs-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/admin/address/address.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\" >\n  <div class=\"column row\" *ngIf=\"!isLoggedIn()\">\n  <div class=\"sixteen wide column\">\n    <div class=\"ui horizontal divider\">\n      <h2>Login</h2>\n    </div>\n  </div>\n</div>\n  <div class=\"column row\" *ngIf=\"isLoggedIn()\">\n    <div class=\"sixteen wide column\">\n      <div class=\"ui horizontal divider\">\n        <h2>Logout</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"column row\">\n    <div class=\"five wide column\">\n      <!-- Platzhalter -->\n    </div>\n    <div class=\"six wide column\" *ngIf=\"!isLoggedIn()\">\n      <form  class=\"ui large form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n        <div class=\"field\">\n          <label>E-Mail</label>\n          <input type=\"email\" id=\"username\" formControlName=\"username\">\n          <div *ngIf=\"loginForm.get('username').invalid &&\n         (loginForm.get('username').dirty || loginForm.get('username').touched) &&\n         loginForm.get('username').hasError('required')\" class=\"ui negative message\">\n            Benutzername ist verpflichtend </div>\n          <div *ngIf=\"loginForm.get('username').invalid &&\n         (loginForm.get('username').dirty || loginForm.get('username').touched) &&\n         loginForm.get('username').hasError('email')\" class=\"ui negative message\">\n            E-Mail Format überprüfen </div>\n        </div>\n        <div class=\"field\">\n          <label>Passwort</label>\n          <input type=\"password\" formControlName=\"password\">\n          <div *ngIf=\"loginForm.get('password').invalid &&\n         (loginForm.get('password').dirty || loginForm.get('password').touched)\" class=\"ui negative message\">\n            Passwort ist verpflichtend </div>\n        </div>\n\n        <button type=\"submit\" class=\"ui button\" [disabled]=\"loginForm.invalid\">Login</button>\n      </form>\n    </div>\n    <div class=\"eight wide column\" *ngIf=\"isLoggedIn()\">\n      <button type=\"button\" class=\"ui button\" (click)=\"logout()\">Logout</button>\n    </div>\n    <div class=\"five wide column\">\n      <!-- Platzhalter -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/authentication-service */ "./src/app/shared/authentication-service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        //werte von loginform als array
        var val = this.loginForm.value;
        if (val.username && val.password) {
            this.authService.login(val.username, val.password).subscribe(function (res) {
                var resObj = res;
                //steht bei postman als antwort wenn man login methode macht
                if (resObj.response === 'success') {
                    _this.authService.setLocalStorage(resObj.result.token);
                    _this.router.navigateByUrl('/');
                }
            });
        }
    };
    LoginComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    /*
    isBackEndUser(){
        return this.authService.isBackendUser();
    }
    */
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/overview/overview.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/overview/overview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!addresses\" class=\"ui active dimmer\">\n  <div class=\"ui large text loader\">Daten werden geladen...</div>\n</div>\n<div class=\"ui grid\" *ngIf=\"addresses\" >\n  <div class=\"column row\" *ngIf=\"!authService.isBackendUser()\">\n    <div class=\"sixteen wide column\">\n      <div class=\"ui horizontal divider\">\n        <h3>Verwalten Sie ihre Daten</h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"column row\" >\n    <div class=\"three wide column\">\n      <!-- Platzhalter -->\n    </div>\n    <div class=\"five wide aligned column\" *ngIf=\"!authService.isBackendUser()\">\n      <!-- Addressauflistung -->\n      <h3 class=\"ui dividing header\">Bestehende Adressen</h3>\n      <div class=\"ui middle aligned selection divided list\" *ngIf=\"isOverview(param.id)\">\n        <a *ngFor=\"let address of addresses\" class=\"item bs-address\"\n           [address]=\"address\" [routerLink]=\"['update/', address.id]\">\n        </a>\n      </div>\n      <div class=\"ui middle aligned selection divided list\" *ngIf=\"!isOverview(param.id)\">\n        <a *ngFor=\"let address of addresses\" class=\"item bs-address\"\n           [address]=\"address\" [routerLink]=\"['../', address.id]\" (click)=\"window.location.reload()\">\n        </a>\n      </div>\n      </div>\n    <!-- Adressenformular -->\n    <div class=\"five wide column\">\n      <form class=\"ui form\" [formGroup]=\"addressForm\" (ngSubmit)=\"submitForm()\" *ngIf=\"!authService.isBackendUser()\">\n        <h3 class=\"ui dividing header\">Neue Adresse anlegen</h3>\n        <div class=\"two fields\">\n            <div class=\"ten wide field\">\n              <label>Addresse</label>\n              <input type=\"text\" formControlName=\"street\" id=\"street\" placeholder=\"Straße\">\n            </div>\n            <div class=\"six wide field\">\n              <label>Stadt</label>\n              <input type=\"text\" formControlName=\"city\" id=\"city\" placeholder=\"Stadt\">\n            </div>\n        </div>\n        <div class=\"two fields\">\n          <div class=\"field\">\n            <label>Postleitzahl</label>\n            <input type=\"number\" formControlName=\"postcode\" id=\"postcode\" placeholder=\"Stadt\">\n          </div>\n          <div class=\"field\">\n          <label>Land</label>\n            <select class=\"ui dropdown\" id=\"country\" formControlName=\"country\">\n              <option *ngFor=\"let country of countries\" [value]=\"country.id\">{{country.name}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"field\">\n          <div class=\"six wide field\">\n              <label>Hauptadresse?</label>\n              <input type=\"number\" formControlName=\"isMain\" id=\"isMain\" placeholder=\"(1 JA | 0 NEIN)\">\n          </div>\n          <div class=\"six wide column\">\n          </div>\n          <div class=\"two fields\">\n            <div class=\"sixteen wide field\">\n              <!-- Platzhalter -->\n            </div>\n            <div class=\"four wide right aligned field\">\n              <button type=\"submit\" class=\"ui button\" [disabled]=\"addressForm.invalid\">Speichern</button>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- Ende des Adressenformulars -->\n    </div>\n    <div class=\"three wide column\">\n      <!-- Platzhalter -->\n    </div>\n  </div>\n  <div class=\"column row\" *ngIf=\"authService.isBackendUser()\">\n    <div class=\"five wide column\">\n      <!-- Platzhalter -->\n    </div>\n    <div class=\"six wide column\">\n    <h3 class=\"ui dividing header\" *ngIf=\"authService.isBackendUser()\">Verwaltung der Bücher</h3>\n    <div class=\"ui grid\">\n      <div class=\"eight wide column\">\n        <button class=\"ui tiny yellow button labeled icon\" ><i class=\"write icon\"></i>Bücher verwalten</button>\n      </div>\n      <div class=\"eight wide right aligned column\">\n        <button class=\"ui tiny green button labeled icon\" [routerLink]=\"['../bookForm']\"><i class=\"plus icon\"></i>Buch anlegen</button>\n      </div>\n    </div>\n    </div>\n    <div class=\"five wide column\">\n      <!-- Platzhalter -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/overview/overview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/overview/overview.component.ts ***!
  \******************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/authentication-service */ "./src/app/shared/authentication-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_address_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/address-factory */ "./src/app/shared/address-factory.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(fb, bs, route, router, authService) {
        this.fb = fb;
        this.bs = bs;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.address = _shared_address_factory__WEBPACK_IMPORTED_MODULE_5__["AddressFactory"].empty();
        this.countries = [
            { 'id': 'DE', 'name': 'Deutschland' },
            { 'id': 'CH', 'name': 'Schweiz' },
            { 'id': 'AT', 'name': 'Österreich' }
        ];
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.param = this.route.snapshot.params;
        if (this.isOverview(this.param.id)) {
            this.bs.getAllAddresses(this.authService.getCurrentUserId()).subscribe(function (res) {
                _this.addresses = res;
                _this.initEmptyForm();
            });
            this.initEmptyForm();
        }
        if (!this.isOverview(this.param.id)) {
            this.bs.getAllAddresses(this.authService.getCurrentUserId()).subscribe(function (res) {
                _this.addresses = res;
                _this.idOnIndex = _this.addresses.findIndex(function (i) { return i.id === parseInt(_this.route.snapshot.params.id); });
                _this.initForm();
            });
        }
    };
    OverviewComponent.prototype.isOverview = function (id) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(id)) {
            return true;
        }
    };
    OverviewComponent.prototype.initEmptyForm = function () {
        this.addressForm = this.fb.group({
            street: "",
            city: "",
            postcode: "",
            country: "",
            isMain: false
        });
    };
    OverviewComponent.prototype.initForm = function () {
        var country;
        if (this.addresses[this.idOnIndex].country == "Schweiz") {
            country = "CH";
        }
        if (this.addresses[this.idOnIndex].country == "Österreich") {
            country = "AT";
        }
        if (this.addresses[this.idOnIndex].country == "Deutschland") {
            country = "DE";
        }
        console.log(this.addresses[this.idOnIndex].isMain);
        this.addressForm = this.fb.group({
            street: this.addresses[this.idOnIndex].street,
            city: this.addresses[this.idOnIndex].city,
            postcode: this.addresses[this.idOnIndex].postcode,
            country: country,
            isMain: this.addresses[this.idOnIndex].isMain
        });
    };
    OverviewComponent.prototype.submitForm = function () {
        var _this = this;
        var address = _shared_address_factory__WEBPACK_IMPORTED_MODULE_5__["AddressFactory"].fromObject(this.addressForm.value);
        address.user_id = this.authService.getCurrentUserId();
        if (this.isOverview(this.route.snapshot.params.id)) {
            this.bs.createAddress(address).subscribe(function (res) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
        if (!this.isOverview(this.route.snapshot.params.id)) {
            address.id = this.route.snapshot.params.id;
            this.bs.updateAddress(address).subscribe(function (res) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            });
        }
        console.log(address);
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/admin/overview/overview.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/order-list/order-list.component.ts");
/* harmony import */ var _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-overview/order-overview.component */ "./src/app/order-overview/order-overview.component.ts");
/* harmony import */ var _orderlog_list_orderlog_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orderlog-list/orderlog-list.component */ "./src/app/orderlog-list/orderlog-list.component.ts");
/* harmony import */ var _orderlog_form_orderlog_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orderlog-form/orderlog-form.component */ "./src/app/orderlog-form/orderlog-form.component.ts");
/* harmony import */ var _admin_overview_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/overview/overview.component */ "./src/app/admin/overview/overview.component.ts");













var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'books', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_4__["BookListComponent"] },
    { path: 'cart', component: _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_8__["OrderListComponent"] },
    { path: 'orders', component: _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_9__["OrderOverviewComponent"] },
    { path: 'books/:isbn', component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_3__["BookDetailsComponent"] },
    { path: 'orders/:id', component: _orderlog_list_orderlog_list_component__WEBPACK_IMPORTED_MODULE_10__["OrderlogListComponent"] },
    { path: 'update/:id', component: _orderlog_form_orderlog_form_component__WEBPACK_IMPORTED_MODULE_11__["OrderlogFormComponent"] },
    { path: 'admin/bookForm', component: _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__["BookFormComponent"] },
    { path: 'admin/bookForm/:isbn', component: _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__["BookFormComponent"] },
    { path: 'admin/address', component: _admin_overview_overview_component__WEBPACK_IMPORTED_MODULE_12__["OverviewComponent"] },
    { path: 'admin/address/update/:id', component: _admin_overview_overview_component__WEBPACK_IMPORTED_MODULE_12__["OverviewComponent"] },
    { path: 'login', component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui {{isLoggedIn()?'six':'four'}} item tabs inverted menu\">\r\n  <a routerLink=\"home\" routerLinkActive=\"active\" class=\"item\">Home</a>\r\n  <a routerLink=\"books\" routerLinkActive=\"active\" class=\"item\">Bücher</a>\r\n  <a *ngIf=\"isLoggedIn()\" routerLink='admin/address' routerLinkActive=\"active\" class=\"item\">Administration</a>\r\n  <a *ngIf=\"isLoggedIn()\" routerLink=\"orders\" routerLinkActive=\"active\" class=\"item\">Bestellungen</a>\r\n  <a routerLink=\"cart\" routerLinkActive=\"active\" class=\"item\"><div class=\"floating ui large red circular label\" style=\"margin: 2.7em 0em 0em -1.5em !important;\" *ngIf=\"bs.label == true\">1</div>Warenkorb</a>\r\n  <a routerLink=\"login\" routerLinkActive=\"active\" class=\"item\">{{getLoginLabel()}}</a>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/authentication-service */ "./src/app/shared/authentication-service.ts");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/book-store.service */ "./src/app/shared/book-store.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, bs) {
        this.authService = authService;
        this.bs = bs;
    }
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.getLoginLabel = function () {
        if (this.isLoggedIn()) {
            return "Logout";
        }
        return "Login";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__["BookStoreService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_list_item_book_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-list-item/book-list-item.component */ "./src/app/book-list-item/book-list-item.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/authentication-service */ "./src/app/shared/authentication-service.ts");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/order-list/order-list.component.ts");
/* harmony import */ var _order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order-list-item/order-list-item.component */ "./src/app/order-list-item/order-list-item.component.ts");
/* harmony import */ var _shared_token_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/token-interceptor.service */ "./src/app/shared/token-interceptor.service.ts");
/* harmony import */ var _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-overview/order-overview.component */ "./src/app/order-overview/order-overview.component.ts");
/* harmony import */ var _order_overview_item_order_overview_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order-overview-item/order-overview-item.component */ "./src/app/order-overview-item/order-overview-item.component.ts");
/* harmony import */ var _orderlog_item_orderlog_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./orderlog-item/orderlog-item.component */ "./src/app/orderlog-item/orderlog-item.component.ts");
/* harmony import */ var _orderlog_list_orderlog_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./orderlog-list/orderlog-list.component */ "./src/app/orderlog-list/orderlog-list.component.ts");
/* harmony import */ var _orderlog_form_orderlog_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./orderlog-form/orderlog-form.component */ "./src/app/orderlog-form/orderlog-form.component.ts");
/* harmony import */ var _admin_overview_overview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/overview/overview.component */ "./src/app/admin/overview/overview.component.ts");
/* harmony import */ var _admin_address_address_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/address/address.component */ "./src/app/admin/address/address.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__["BookListComponent"],
                _book_list_item_book_list_item_component__WEBPACK_IMPORTED_MODULE_6__["BookListItemComponent"],
                _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_12__["BookFormComponent"],
                _admin_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_15__["OrderListComponent"],
                _order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_16__["OrderListItemComponent"],
                _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_18__["OrderOverviewComponent"],
                _order_overview_item_order_overview_item_component__WEBPACK_IMPORTED_MODULE_19__["OrderOverviewItemComponent"],
                _orderlog_item_orderlog_item_component__WEBPACK_IMPORTED_MODULE_20__["OrderlogItemComponent"],
                _orderlog_list_orderlog_list_component__WEBPACK_IMPORTED_MODULE_21__["OrderlogListComponent"],
                _orderlog_form_orderlog_form_component__WEBPACK_IMPORTED_MODULE_22__["OrderlogFormComponent"],
                _admin_overview_overview_component__WEBPACK_IMPORTED_MODULE_23__["OverviewComponent"],
                _admin_address_address_component__WEBPACK_IMPORTED_MODULE_24__["AddressComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [
                _shared_book_store_service__WEBPACK_IMPORTED_MODULE_8__["BookStoreService"], _shared_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _shared_token_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-details/book-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/book-details/book-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!book\" class=\"ui active dimmer\">\n  <div class=\"ui large text loader\">Daten werden geladen...</div>\n</div>\n<div class=\"ui grid\" *ngIf=\"book\">\n  <div class=\"column row\">\n    <div class=\"sixteen wide column\">\n      <div class=\"ui horizontal divider\">\n        <h3>Detailansicht</h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"column row\">\n    <div class=\"three wide column\">\n      <!--Platzhalter-->\n    </div>\n    <div class=\"ten wide column\">\n      <div class=\"ui grid\">\n        <div class=\"column row\">\n          <div class=\"six wide column\">\n            <img class=\"ui large rounded bordered image\" *ngIf=\"book.images && book.images[0]\"\n                 [src]=\"book.images[0].url\">\n            <div class=\"column row\">\n              <div class=\"ui tiny images\">\n                <img *ngFor=\"let thumbnail of book.images\" [src]=\"thumbnail.url\">\n              </div>\n            </div>\n          </div>\n          <div class=\"ten wide column\">\n              <h1>{{ book.title }} <br/><span class=\"ui meta\" style=\"font-size: medium\">{{ book.subtitle }}</span></h1>\n            <span class=\"ui header\">von: <br></span>\n              <span *ngFor=\"let author of book.authors; last as l\">\n               {{ author.firstName }} {{ author.lastName }}<span *ngIf=\"!l\">, </span>\n              </span><br>\n            <span class=\"ui meta\">(ISBN: </span><span> {{ book.isbn }})</span><br>\n            <span class=\"ui meta\"><u>erschienen am:</u> </span><span> {{ book.published }}</span>\n              <br>\n              <br>\n              <span class=\"ui header\">Bewertungen: <br></span>\n              <i *ngFor=\"let r of getRating(book.rating)\" class=\"yellow star icon\"></i>\n            <div class=\"ui divider\"></div>\n            <span class=\"ui meta\">Preis:     </span> <span class=\"ui header\" style=\"color: brown\"> {{book.price}} € </span>\n              <span class=\"ui meta\" style=\"color: grey\"><i> inkl. MwSt.</i></span><br><br>\n              <div class=\"ui grid\">\n                <div class=\"column row\">\n                  <div class=\"six wide column\">\n                    <div class=\"ui fluid right action input\">\n                      <input type=\"number\" id=\"count\" value=\"1\">\n                      <button class=\"ui tiny orange labeled icon button\" type=\"submit\" (click)=\"addToCart()\">\n                        in den Warenkorb\n                        <i class=\"cart icon\"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"twelve wide column\">\n                    <!-- Platzhalter -->\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n        <div class=\"column row\">\n          <div class=\"sixteen wide column\">\n          <div class=\"ui divider\"></div>\n            <div class=\"ui header\">Beschreibung: </div>\n            <p>{{ book.description }}</p>\n            <div class=\"ui divider\"></div>\n          <button *ngIf=\"authService.isBackendUser()\" class=\"ui tiny red button labeled icon\" (click)=\"removeBook()\"><i class=\"remove icon\"></i>Buch löschen</button>\n          <button *ngIf=\"authService.isBackendUser()\" class=\"ui tiny yellow button labeled icon\" [routerLink]=\"['../../admin/bookForm/', book?.isbn]\"><i class=\"write icon\"></i>Buch bearbeiten</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"three wide column\">\n      <!--Platzhalter-->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-details/book-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-details/book-details.component.ts ***!
  \********************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/authentication-service */ "./src/app/shared/authentication-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(bs, route, router, authService, fb) {
        this.bs = bs;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(localStorage.getItem('userId'))) {
            var userId = parseInt(localStorage.getItem('userId'));
            this.bs.getMainAddress(userId).subscribe(function (res) {
                _this.address = res[0];
            });
            this.bs.getSingle(params['isbn']).subscribe(function (res) {
                _this.book = res;
                var percentage = Number(_this.address.taxPercentage);
                var netPrice = Number(0);
                var priceVal = Number(0);
                var sum = Number(0);
                netPrice = Number(_this.book.price);
                priceVal = netPrice * percentage;
                sum = priceVal + netPrice;
                sum = Number(sum.toFixed(2));
                _this.book.price = sum;
            });
        }
        else {
            this.bs.getSingle(params['isbn']).subscribe(function (res) {
                _this.book = res;
                var percentage = Number(0.10);
                var netPrice = Number(0);
                var priceVal = Number(0);
                var sum = Number(0);
                netPrice = Number(_this.book.price);
                priceVal = netPrice * percentage;
                sum = priceVal + netPrice;
                sum = Number(sum.toFixed(2));
                _this.book.price = sum;
            });
        }
    };
    BookDetailsComponent.prototype.removeBook = function () {
        var _this = this;
        if (confirm("Buch wirklich löschen?")) {
            this.bs.remove(this.book.isbn)
                .subscribe(function (res) { return _this.router.navigate(['../'], { relativeTo: _this.route }); });
        }
    };
    BookDetailsComponent.prototype.addToCart = function () {
        var amount = parseInt(document.getElementById('count').value);
        console.log(amount);
        this.bs.addToCart(this.book.isbn, amount);
        this.bs.setLabel();
    };
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_book__WEBPACK_IMPORTED_MODULE_2__["Book"])
    ], BookDetailsComponent.prototype, "book", void 0);
    BookDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/book-details/book-details.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_4__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/book-form/book-form-error-messages.ts":
/*!*******************************************************!*\
  !*** ./src/app/book-form/book-form-error-messages.ts ***!
  \*******************************************************/
/*! exports provided: ErrorMessage, BookFormErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormErrorMessages", function() { return BookFormErrorMessages; });
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage(forControl, forValidator, text) {
        this.forControl = forControl;
        this.forValidator = forValidator;
        this.text = text;
    }
    return ErrorMessage;
}());

var BookFormErrorMessages = [
    new ErrorMessage('title', 'required', 'Ein Buchtitel muss angegeben werden'),
    new ErrorMessage('isbn', 'required', 'Es muss eine ISBN angegeben werden'),
    new ErrorMessage('isbn', 'minlength', 'Die ISBN muss mindestens 10 Zeichen enthalten'),
    new ErrorMessage('isbn', 'maxlength', 'Eine ISBN darf höchstens 13 Zeichen haben'),
    new ErrorMessage('published', 'required', 'Es muss ein Erscheinungsdatum angegeben werden'),
    new ErrorMessage('authors', 'required', 'Es muss ein Autor angegeben werden'),
    new ErrorMessage('rating', 'min', 'Bewertung kann nur positive Werte annehmen'),
    new ErrorMessage('rating', 'max', 'Maximal 10 Sterne erlaubt')
];


/***/ }),

/***/ "./src/app/book-form/book-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-form/book-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\n  <div class=\"column row\">\n    <div class=\"sixteen wide column\">\n      <div class=\"ui horizontal divider\">\n        <h3>Buchformular</h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"column row\">\n    <div class=\"five wide column\">\n      <!-- Platzhalter -->\n    </div>\n    <div class=\"six wide column\">\n      <form  class=\"ui large form\" [formGroup]=\"bookForm\" (ngSubmit)=\"submitForm()\">\n        <input type=\"hidden\" name=\"id\">\n        <div class=\"field\">\n          <label>Buchtitel</label>\n          <input formControlName=\"title\">\n          <div *ngIf=\"errors.title\" class=\"ui negative message\"> {{ errors.title }} </div>\n        </div>\n        <div class=\"field\">\n          <label>Untertitel</label>\n          <input formControlName=\"subtitle\">\n        </div>\n        <div class=\"field\" [class.disabled]=\"isUpdatingBook\">\n          <label>ISBN-Nummer</label>\n          <input formControlName=\"isbn\">\n          <div *ngIf=\"errors.isbn\" class=\"ui negative message\">{{ errors.isbn }} </div>\n        </div>\n        <div class=\"field\">\n          <label>Price</label>\n          <input type=\"number\" formControlName=\"price\">\n          <div *ngIf=\"errors.price\" class=\"ui negative message\"> {{ errors.price }} </div>\n        </div>\n        <div class=\"field\">\n          <label>Erscheinungsdatum</label>\n          <input type=\"date\" useValueAsDate formControlName=\"published\">\n          <div *ngIf=\"errors.published\" class=\"ui negative message\">{{ errors.published }}</div>\n        </div>\n        <div class=\"field\">\n          <label>Beschreibung</label>\n          <textarea formControlName=\"description\" rows=\"3\"></textarea>\n        </div>\n        <div class=\"field\">\n          <label>Rating</label>\n          <input type=\"number\" formControlName=\"rating\">\n          <div *ngIf=\"errors.rating\" class=\"ui negative message\">{{ errors.rating }}</div>\n        </div>\n        <div class=\"field\">\n          <label>Bilder</label>\n          <div formArrayName=\"images\">\n            <div class=\"fields\" *ngFor=\"let control of images?.controls; index as i; last as l\" [formGroupName]=\"i\">\n              <input type=\"hidden\" name=\"id\">\n              <div class=\"nine wide field\">\n                <input formControlName=\"url\" placeholder=\"http://bild{{i+1}}_url\">\n              </div>\n              <div class=\"six wide field\">\n                <input formControlName=\"title\" placeholder=\"Bild{{i+1}}_Titel\">\n              </div>\n              <div class=\"one wide field\" *ngIf=\"l\">\n                <button (click)=\"addThumbnailControl()\" class=\"ui large button\" type=\"button\">+</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label>Autoren</label>\n          <div formArrayName=\"authors\">\n            <div class=\"fields\" *ngFor=\"let control of authors?.controls; index as i; last as l\" [formGroupName]=\"i\">\n              <input type=\"hidden\" name=\"id\">\n              <div class=\"nine wide field\">\n                <input formControlName=\"firstName\" placeholder=\"firstname\">\n              </div>\n              <div class=\"six wide field\">\n                <input formControlName=\"lastName\" placeholder=\"lastname\">\n              </div>\n              <div class=\"one wide field\" *ngIf=\"l\">\n                <button (click)=\"addThumbnailControlAuthors()\" class=\"ui large button\" type=\"button\">+</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"ui button\" [disabled]=\"bookForm.invalid\">Speichern</button>\n      </form>\n    </div>\n    <div class=\"five wide column\">\n      <!-- Platzhalter -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-form/book-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-form/book-form.component.ts ***!
  \**************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _book_form_error_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-form-error-messages */ "./src/app/book-form/book-form-error-messages.ts");
/* harmony import */ var _shared_book_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/book-factory */ "./src/app/shared/book-factory.ts");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");








var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(fb, bs, route, router) {
        this.fb = fb;
        this.bs = bs;
        this.route = route;
        this.router = router;
        this.book = _shared_book_factory__WEBPACK_IMPORTED_MODULE_5__["BookFactory"].empty();
        this.errors = {};
        this.isUpdatingBook = false;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isbn = this.route.snapshot.params['isbn'];
        if (isbn) {
            this.isUpdatingBook = true;
            this.bs.getSingle(isbn).subscribe(function (book) {
                _this.book = book;
                _this.initBook();
            });
        }
        this.initBook();
    };
    //Methode aufrufen
    BookFormComponent.prototype.initBook = function () {
        var _this = this;
        this.buildThumbnailsArray();
        this.buildAuthorThumbnailsArray();
        this.bookForm = this.fb.group({
            id: this.book.id,
            title: [this.book.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subtitle: this.book.subtitle,
            isbn: [this.book.isbn, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    //Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13)
                ]],
            price: this.book.price,
            description: this.book.description,
            rating: [this.book.rating, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(10)
                ]],
            authors: this.authors,
            images: this.images,
            published: new Date(this.book.published)
        });
        this.bookForm.statusChanges.subscribe(function () { return _this.updateErrorMessages(); });
    };
    BookFormComponent.prototype.buildThumbnailsArray = function () {
        var _this = this;
        console.log(this.book.images);
        if (this.book.images.length == 0) { //if new book had no images -> but no in edit mode
            this.book.images.push(new _shared_book__WEBPACK_IMPORTED_MODULE_7__["Image"](0, '', ''));
        }
        //für jedes der bilder gibt es kleines subformular
        this.images = this.fb.array(this.book.images.map(function (t) { return _this.fb.group({
            id: _this.fb.control(t.id),
            url: _this.fb.control(t.url),
            title: _this.fb.control(t.title)
        }); }));
        console.log(this.images);
    };
    BookFormComponent.prototype.buildAuthorThumbnailsArray = function () {
        var _this = this;
        console.log(this.book.authors);
        if (this.book.authors.length == 0) { //if new book had no images -> but no in edit mode
            this.book.authors.push(new _shared_book__WEBPACK_IMPORTED_MODULE_7__["Author"](0, '', ''));
        }
        //für jedes der bilder gibt es kleines subformular
        this.authors = this.fb.array(this.book.authors.map(function (t) { return _this.fb.group({
            id: _this.fb.control(t.id),
            firstName: _this.fb.control(t.firstName),
            lastName: _this.fb.control(t.lastName)
        }); }));
        console.log(this.authors);
    };
    BookFormComponent.prototype.addThumbnailControl = function () {
        this.images.push(this.fb.group({ url: null, title: null }));
    };
    BookFormComponent.prototype.addThumbnailControlAuthors = function () {
        this.authors.push(this.fb.group({ firstName: null, lastName: null }));
    };
    BookFormComponent.prototype.submitForm = function () {
        //wir bauen im hintergrund daten zusammen
        //haben events die feuern wenn man was schreibt
        //validieren das in echtzeit
        //dann aus daten von Formular ein Buchobjekt basteln
        //das nutzt dann service methoden für speichern und updaten
        var _this = this;
        // filter empty values
        this.bookForm.value.images = this.bookForm.value.images.filter(function (thumbnail) { return thumbnail.url; });
        // filter empty values
        this.bookForm.value.authors = this.bookForm.value.authors.filter(function (thumbnail) { return thumbnail.firstName; });
        //aus Datenstruktur von Formular Buchobjekt machen
        var book = _shared_book_factory__WEBPACK_IMPORTED_MODULE_5__["BookFactory"].fromObject(this.bookForm.value);
        //deep copy  - did not work without?? - checkt er nicht automatisch
        //nochmal zuweisen
        book.images = this.bookForm.value.images;
        //just copy the authors
        book.authors = this.bookForm.value.authors;
        console.log(book);
        //entweder buch updaten
        if (this.isUpdatingBook) {
            this.bs.update(book).subscribe(function (res) {
                _this.router.navigate(['../../books', book.isbn], { relativeTo: _this.route });
            });
        }
        else {
            //soll später die id des eingeloggten users sein
            book.user_id = 1;
            console.log(book);
            //formular zurücksetzen
            this.bs.create(book).subscribe(function (res) {
                _this.book = _shared_book_factory__WEBPACK_IMPORTED_MODULE_5__["BookFactory"].empty();
                _this.bookForm.reset(_shared_book_factory__WEBPACK_IMPORTED_MODULE_5__["BookFactory"].empty());
                _this.router.navigate(['../books'], { relativeTo: _this.route });
            });
        }
    };
    BookFormComponent.prototype.updateErrorMessages = function () {
        this.errors = {};
        for (var _i = 0, BookFormErrorMessages_1 = _book_form_error_messages__WEBPACK_IMPORTED_MODULE_4__["BookFormErrorMessages"]; _i < BookFormErrorMessages_1.length; _i++) {
            var message = BookFormErrorMessages_1[_i];
            var control = this.bookForm.get(message.forControl);
            if (control &&
                control.dirty &&
                control.invalid &&
                control.errors[message.forValidator] &&
                !this.errors[message.forControl]) {
                this.errors[message.forControl] = message.text;
            }
        }
    };
    BookFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'bs-book-form',
            template: __webpack_require__(/*! ./book-form.component.html */ "./src/app/book-form/book-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_book_store_service__WEBPACK_IMPORTED_MODULE_6__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/book-list-item/book-list-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/book-list-item/book-list-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <img class=\"ui tiny image\"\n         *ngIf=\"book?.images[0]\"\n         [src]=\"book.images[0].url\">\n    <div class=\"content\" >\n      <div class=\"header\">{{ book.title }}</div>\n      <div class=\"description\"> {{ book.subtitle }} </div>\n      <div class=\"metadata\">\n          <span *ngFor=\"let author of book.authors; last as l\">\n            {{ author.firstName }} {{ author.lastName }}<span *ngIf=\"!l\">, </span>\n          </span>\n      </div>\n      <div class=\"extra\">ISBN {{ book.isbn }}</div>\n        <div class=\"header\">Preis: {{ book.price | number:'1.2-5'}} €</div>\n    </div>"

/***/ }),

/***/ "./src/app/book-list-item/book-list-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/book-list-item/book-list-item.component.ts ***!
  \************************************************************/
/*! exports provided: BookListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListItemComponent", function() { return BookListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/authentication-service */ "./src/app/shared/authentication-service.ts");







var BookListItemComponent = /** @class */ (function () {
    function BookListItemComponent(fb, bs, route, router, authService) {
        this.fb = fb;
        this.bs = bs;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    BookListItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_book__WEBPACK_IMPORTED_MODULE_2__["Book"])
    ], BookListItemComponent.prototype, "book", void 0);
    BookListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'a.bs-book-list-item',
            template: __webpack_require__(/*! ./book-list-item.component.html */ "./src/app/book-list-item/book-list-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_book_store_service__WEBPACK_IMPORTED_MODULE_4__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], BookListItemComponent);
    return BookListItemComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"!book\" class=\"ui active dimmer\">\n  <div class=\"ui large text loader\">Daten werden geladen...</div>\n</div>-->\n<div class=\"ui grid\" *ngIf=\"books\">\n  <div *ngIf=\"!books\" class=\"ui active dimmer\">\n    <div class=\"ui large text loader\">Daten werden geladen...</div>\n  </div>\n  <div class=\"column row\">\n    <div class=\"sixteen wide column\">\n      <div class=\"ui horizontal divider\">\n        <h3>Bücherliste</h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"column row\" *ngIf=\"books\">\n    <div class=\"three wide column\">\n      <!--platzhalter-->\n    </div>\n    <div class=\"ten wide column\">\n      <div class=\"ui middle aligned selection divided list\">\n      <a *ngFor=\"let book of books\" class=\"item bs-book-list-item\"\n      [book]=\"book\" [routerLink]=\"book.isbn\"></a>\n      </div>\n    </div>\n    <div class=\"three wide column\">\n      <!--platzhalter-->\n    </div>\n  </div>\n  <p *ngIf=\"books && !books.length\">\n    Es sind keine Bücher vorhanden!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




var BookListComponent = /** @class */ (function () {
    function BookListComponent(bs) {
        this.bs = bs;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(localStorage.getItem('userId'))) {
            var userId = parseInt(localStorage.getItem('userId'));
            this.bs.getMainAddress(userId).subscribe(function (res) {
                _this.address = res[0];
            });
            this.bs.getAll().subscribe(function (res) {
                _this.books = res;
                var percentage = Number(_this.address.taxPercentage);
                var netPrice = Number(0);
                var priceVal = Number(0);
                var sum = Number(0);
                for (var i = 0; i < _this.books.length; i++) {
                    netPrice = Number(_this.books[i].price);
                    priceVal = netPrice * percentage;
                    sum = priceVal + netPrice;
                    sum = Number(sum.toFixed(2));
                    _this.books[i].price = sum;
                }
            });
        }
        else {
            this.bs.getAll().subscribe(function (res) {
                _this.books = res;
                var percentage = Number(0.10);
                var netPrice = Number(0);
                var priceVal = Number(0);
                var sum = Number(0);
                for (var i = 0; i < _this.books.length; i++) {
                    netPrice = Number(_this.books[i].price);
                    priceVal = netPrice * percentage;
                    sum = priceVal + netPrice;
                    sum = Number(sum.toFixed(2));
                    _this.books[i].price = sum;
                }
            });
        }
    };
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-home',
            template: "\n    <p>\n      home works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/order-list-item/order-list-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/order-list-item/order-list-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"ui tiny image\"\n     *ngIf=\"book?.images[0]\"\n     [src]=\"book.images[0].url\">\n<div class=\"content\">\n  <div class=\"header\">{{ book.title }}</div>\n  <div class=\"description\"> {{ book.subtitle }} </div>\n  <div class=\"metadata\">\n      <span *ngFor=\"let author of book.authors; last as l\">\n        {{ author.firstName }} {{ author.lastName }}<span *ngIf=\"!l\">, </span>\n      </span>\n  </div>\n  <div class=\"extra\">ISBN {{ book.isbn }}</div>\n    <div class=\"header\"> {{ book.price | number:'1.2-5'}} €</div>\n  <br>\n    <div class=\"ui mini left icon input\">\n      <i class=\"tags icon\"></i>\n      <input type=\"number\" value=\"{{ book.amount }}\" (keyup.enter)=\"editAmount()\" id=\"amount_{{book.id}}\">\n    </div>\n  <br>\n  <br>\n  <button class=\"ui tiny red button labeled icon\" (click)=\"removeBookFromCart(book.isbn)\" ><i class=\"delete icon\"></i>\n    Löschen</button>\n</div>\n<!--[routerLink]=\"['../../shoppingcart', book?.isbn]\"-->\n<!--(click)=\"deleteBook(book?.isbn, count)\"-->\n"

/***/ }),

/***/ "./src/app/order-list-item/order-list-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/order-list-item/order-list-item.component.ts ***!
  \**************************************************************/
/*! exports provided: OrderListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListItemComponent", function() { return OrderListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");




var OrderListItemComponent = /** @class */ (function () {
    function OrderListItemComponent(bs) {
        this.bs = bs;
    }
    OrderListItemComponent.prototype.ngOnInit = function () {
    };
    OrderListItemComponent.prototype.removeBookFromCart = function (isbn) {
        this.bs.removeBookFromCart(isbn);
        window.location.reload();
    };
    OrderListItemComponent.prototype.editAmount = function () {
        var amount = parseInt(document.getElementById('amount_' + this.book.id).value);
        this.bs.editCart(this.book.isbn, amount);
        window.location.reload();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_book__WEBPACK_IMPORTED_MODULE_2__["Book"])
    ], OrderListItemComponent.prototype, "book", void 0);
    OrderListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'a.bs-order-list-item',
            template: __webpack_require__(/*! ./order-list-item.component.html */ "./src/app/order-list-item/order-list-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__["BookStoreService"]])
    ], OrderListItemComponent);
    return OrderListItemComponent;
}());



/***/ }),

/***/ "./src/app/order-list/order-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/order-list/order-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!booksForOrder\" class=\"ui active dimmer\">\n  <div class=\"ui large text loader\">Daten werden geladen...</div>\n</div>\n<div class=\"ui grid\" *ngIf=\"booksForOrder\">\n  <div class=\"column row\">\n    <div class=\"sixteen wide column\">\n      <div class=\"ui horizontal divider\">\n        <h3>Die Übersicht ihres Warenkorb</h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"column row\">\n      <div class=\"three wide column\">\n        <!--platzhalter-->\n      </div>\n      <div class=\"seven wide column\">\n        <div class=\"ui middle aligned selection divided list\">\n          <a *ngFor=\"let book of booksForOrder\" class=\"item bs-order-list-item\"\n             [book]=\"book\">\n          </a>\n        </div>\n      </div>\n      <div class=\"three wide right aligned column\" *ngIf=\"authService.isLoggedIn()\">\n        <div class=\"ui horizontal divider\">\n          <h4>Lieferadresse</h4>\n        </div>\n        <table class=\"ui grey large table\">\n          <thead>\n          <tr>\n            <th class=\"right aligned\">{{address.country}}</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td class=\"right aligned\">{{address.street}}</td>\n          </tr>\n          <tr>\n            <td class=\"right aligned\">{{address.postcode}}</td>\n          </tr>\n          <tr>\n            <td class=\"right aligned\">{{address.city}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"three wide column\">\n      <!--platzhalter-->\n      </div>\n  </div>\n  <div class=\"ui horizontal divider\">\n    <h3> - </h3>\n  </div>\n    <div class=\" column row\">\n      <div class=\"ten wide column\">\n        <!--platzhalter-->\n      </div>\n        <div class=\"three wide right aligned column\">\n          <h3 class=\"right aligned\" *ngIf=\"authService.isLoggedIn()\">Gesamt: {{ booksForOrder[\"sum\"] | number:'1.2-5' }} € <h5 style=\"color: grey\"><i>inkl. {{address.taxPercentage * 100}} % Steuern </i></h5></h3>\n          <h3 class=\"right aligned\" *ngIf=\"!authService.isLoggedIn()\">Gesamt: {{ booksForOrder[\"sum\"] | number:'1.2-5' }} € <h5 style=\"color: grey\"><i>inkl. 10 % Steuern </i></h5></h3>\n          <button class=\"ui tiny green button labeled icon\" [routerLink]=\"['../books']\"><i class=\"search icon\"></i> <!---->\n            Weiterstöbern</button>\n          <button *ngIf=\"authService.isLoggedIn()\" class=\"ui tiny yellow button labeled icon\" (click)=\"orderIt()\"><i class=\"cart icon\"></i>\n            Bestellen </button><!--[routerLink]=\"['../../books']\"-->\n        </div>\n      <div class=\"three wide column\">\n        <!--platzhalter-->\n      </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/order-list/order-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-list/order-list.component.ts ***!
  \****************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/authentication-service */ "./src/app/shared/authentication-service.ts");
/* harmony import */ var _shared_order_factory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/order-factory.service */ "./src/app/shared/order-factory.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(bs, route, router, authService) {
        this.bs = bs;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.booksForOrder = [];
        this.order = _shared_order_factory_service__WEBPACK_IMPORTED_MODULE_5__["OrderFactory"].empty();
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs.unsetLabel();
        if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(localStorage.getItem('userId'))) {
            this.bs.getMainAddress(this.authService.getCurrentUser()).subscribe(function (res) {
                _this.address = res[0];
                _this.address.taxPercentage = Number(_this.address.taxPercentage);
                _this.getBook();
            });
        }
        else {
            var cart_1 = JSON.parse(localStorage.getItem('cart'));
            this.booksForOrder["sum"] = 0;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(cart_1.length)) {
                var _loop_1 = function (i) {
                    var isbn = cart_1[i].isbn;
                    this_1.bs.getSingle(isbn).subscribe(function (result) {
                        result.amount = cart_1[i].count;
                        result.price *= cart_1[i].count;
                        var percentage = Number(0.10);
                        var netPrice = Number(0);
                        var priceVal = Number(0);
                        var sum = Number(0);
                        netPrice = result.price;
                        priceVal = netPrice * percentage;
                        sum = priceVal + netPrice;
                        sum = Number(sum.toFixed(2));
                        result.price = sum;
                        _this.booksForOrder["sum"] += sum;
                        _this.booksForOrder.push(result);
                    });
                };
                var this_1 = this;
                for (var i = 0; i < cart_1.length; i++) {
                    _loop_1(i);
                }
            }
        }
    };
    OrderListComponent.prototype.getBook = function () {
        var _this = this;
        var cart = JSON.parse(localStorage.getItem('cart'));
        this.booksForOrder["sum"] = 0;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(cart.length)) {
            var _loop_2 = function (i) {
                var isbn = cart[i].isbn;
                this_2.bs.getSingle(isbn).subscribe(function (result) {
                    result.amount = cart[i].count;
                    result.price *= cart[i].count;
                    var percentage = Number(_this.address.taxPercentage);
                    var netPrice = Number(0);
                    var priceVal = Number(0);
                    var sum = Number(0);
                    netPrice = result.price;
                    priceVal = netPrice * percentage;
                    sum = priceVal + netPrice;
                    sum = Number(sum.toFixed(2));
                    result.price = sum;
                    _this.booksForOrder["sum"] += sum;
                    _this.booksForOrder.push(result);
                });
            };
            var this_2 = this;
            for (var i = 0; i < cart.length; i++) {
                _loop_2(i);
            }
        }
    };
    OrderListComponent.prototype.orderIt = function () {
        var _this = this;
        this.order.user_id = this.authService.getCurrentUserId();
        this.order.addressId = this.address.id;
        for (var i = 0; i < (this.booksForOrder.length); i++) {
            this.order.books.push(this.booksForOrder[i]);
        }
        this.bs.createOrder(this.order).subscribe(function (res) {
            localStorage.removeItem('cart');
            _this.router.navigate(['../books'], { relativeTo: _this.route });
        });
        console.log(this.order);
    };
    OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/order-list/order-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__["BookStoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/order-overview-item/order-overview-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/order-overview-item/order-overview-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\" *ngIf=\"order\">\n    <div class=\"column row\">\n    <!--<div class=\"\"-->\n      <div class=\"ui four top attached small steps\">\n        <div [ngClass]=\"{\n        completed: !stepOne(),\n        active: stepOne()\n            }\" class=\"step\">\n          <i class=\"payment icon\" *ngIf=\"!stepOne()\"></i>\n          <img class=\"ui tiny image\" [src]=\"bs.getImage(orderStatus[0])\" *ngIf=\"stepOne()\">\n          <div class=\"content\">\n            <div class=\"title\">Bestellungseingang</div>\n            <div class=\"description\">Choose your </div>\n          </div>\n        </div>\n        <div [ngClass]=\"{\n        completed: !stepTwo() && !stepOne(),\n        active: stepTwo()\n            }\" class=\"step\">\n          <i class=\"payment icon\" *ngIf=\"!stepTwo() && !stepOne()\"></i>\n          <img class=\"ui tiny spaced image\" [src]=\"bs.getImage(orderStatus[1])\" *ngIf=\"stepTwo() || stepOne()\">\n          <div class=\"content\">\n            <div class=\"title\">Bearbeitung</div>\n            <div class=\"description\">Choose your </div>\n          </div>\n        </div>\n        <div [ngClass]=\"{\n        completed: !stepTwo() && !stepOne() && !stepThree(),\n        active: stepThree()\n            }\" class=\"step\">\n          <i class=\"payment icon\" *ngIf=\"!stepTwo() && !stepOne() && !stepThree()\"></i>\n          <img class=\"ui tiny spaced image\" [src]=\"bs.getImage(orderStatus[2])\" *ngIf=\"stepThree() || stepOne() || stepTwo()\">\n          <div class=\"content\">\n            <div class=\"title\">Versandt</div>\n          </div>\n        </div>\n        <div [ngClass]=\"{\n        completed: stepFour()\n            }\" class=\"step\">\n          <i class=\"payment icon\" *ngIf=\"stepFour()\"></i>\n          <img class=\"ui tiny spaced image\" [src]=\"bs.getImage(orderStatus[3])\" *ngIf=\"!stepFour()\">\n          <div class=\"content\">\n            <div class=\"title\">Zugestellt</div>\n          </div>\n        </div>\n        <div [ngClass]=\"{\n        active: returnedOrder()\n            }\" class=\"step\" *ngIf=\"returnedOrder()\">\n          <img class=\"ui tiny spaced image\" [src]=\"bs.getImage(orderStatus[4])\" *ngIf=\"returnedOrder()\">\n          <div class=\"content\">\n            <div class=\"title\">Zurückgesandt</div>\n          </div>\n        </div>\n        <div [ngClass]=\"{\n        active: cancelledOrder()\n            }\" class=\"step\" *ngIf=\"cancelledOrder()\">\n          <img class=\"ui tiny spaced image\" [src]=\"bs.getImage(orderStatus[-1])\" *ngIf=\"cancelledOrder()\">\n          <div class=\"content\">\n            <div class=\"title\">Stoniert</div>\n          </div>\n        </div>\n      </div><!-- steps end -->\n        <div class=\"ui attached segment\">\n          <div class=\"ui grid\">\n            <div class=\"column inverted row\">\n              <div class=\"four wide column\">\n                <div class=\"header\">BestellID: {{order.id}}</div>\n              </div>\n              <div class=\"four wide column\">\n                <div class=\"metadata\">vom {{date}}</div>\n              </div>\n              <div class=\"four wide column\">\n                <div class=\"description\">Gesamtpreis: {{ order.grossAmount }} €</div>\n              </div>\n              <div class=\"four wide column\">\n                <div class=\"description\"> {{ order.addressId }} </div>\n              </div>\n            </div>\n\n            <div class=\"column row\">\n              <!--<img class=\"ui large rounded bordered image\" *ngIf=\"book.images && book.images[0]\"\n                   [src]=\"book.images[0].url\">-->\n              <div class=\"metadata\">\n                <span><h3>Bücher: </h3><br></span>\n                <span class=\"description\" *ngFor=\"let book of order.books; last as l\">\n                  <div>{{ book.title }}, {{ book.subtitle }} - {{ book.price }}</div>\n                <span *ngIf=\"!l\">, </span>\n                </span>\n              </div>\n            </div>\n\n          </div><!-- second ui grid ends -->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/order-overview-item/order-overview-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/order-overview-item/order-overview-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrderOverviewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderOverviewItemComponent", function() { return OrderOverviewItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/order */ "./src/app/shared/order.ts");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/authentication-service */ "./src/app/shared/authentication-service.ts");







var OrderOverviewItemComponent = /** @class */ (function () {
    function OrderOverviewItemComponent(bs, router, route, authService) {
        this.bs = bs;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.booksInShoppingCart = [];
        this.orderStatus = [
            "Bestellung eingegangen",
            "in Bearbeitung",
            "Versandt",
            "Zugestellt",
            "Zurückgesandt",
            "Stoniert"
        ];
    }
    OrderOverviewItemComponent.prototype.ngOnInit = function () {
        var temp = JSON.stringify(this.order.created_at);
        this.date = temp.slice(1, 11);
        console.log(this.order.status);
        //console.log(parseInt(this.order.status));
    };
    OrderOverviewItemComponent.prototype.stepOne = function () {
        if (this.order.status == "Bestellung eingegangen") {
            return true;
        }
        return false;
    };
    OrderOverviewItemComponent.prototype.stepTwo = function () {
        if (this.order.status == "in Bearbeitung") {
            return true;
        }
        return false;
    };
    OrderOverviewItemComponent.prototype.stepThree = function () {
        if (this.order.status == "Versandt") {
            return true;
        }
        return false;
    };
    OrderOverviewItemComponent.prototype.stepFour = function () {
        if (this.order.status == "Zugestellt") {
            return true;
        }
        return false;
    };
    OrderOverviewItemComponent.prototype.cancelledOrder = function () {
        if (this.order.status == "Zurückgesandt") {
            return true;
        }
        return false;
    };
    OrderOverviewItemComponent.prototype.returnedOrder = function () {
        if (this.order.status == "Stoniert") {
            return true;
        }
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_order__WEBPACK_IMPORTED_MODULE_2__["Order"])
    ], OrderOverviewItemComponent.prototype, "order", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_book__WEBPACK_IMPORTED_MODULE_4__["Book"])
    ], OrderOverviewItemComponent.prototype, "book", void 0);
    OrderOverviewItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'a.bs-order-overview-item',
            template: __webpack_require__(/*! ./order-overview-item.component.html */ "./src/app/order-overview-item/order-overview-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], OrderOverviewItemComponent);
    return OrderOverviewItemComponent;
}());



/***/ }),

/***/ "./src/app/order-overview/order-overview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/order-overview/order-overview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\n  <div *ngIf=\"!orders\" class=\"ui active dimmer\">\n    <div class=\"ui large text loader\">Daten werden geladen...</div>\n  </div>\n  <div class=\"column row\">\n    <div class=\"three wide column\">\n      <!--platzhalter-->\n    </div>\n    <div class=\"ten wide column\">\n      <div class=\"ui grid\">\n        <div class=\"column row\" *ngIf=\"authService.isBackendUser()\">\n          <div class=\"four wide column\">\n          <span>Filtern: </span>\n            <button class=\"ui icon button\" (click)=\"sortDesc()\">\n              <i class=\"arrow alternate circle down icon\"></i>\n            </button>\n            <button class=\"ui icon button\" (click)=\"sortAsc()\">\n              <i class=\"arrow alternate circle up icon\"></i>\n            </button>\n          </div>\n            <div class=\"four wide column\">\n              <!--Platzhalter -->\n            </div>\n          <div class=\"eight wide column\">\n            <div class=\"ui compact menu\" *ngIf=\"authService.isBackendUser()\">\n              <div class=\"ui simple dropdown item\">\n                Nach Status:\n                <i class=\"dropdown icon\"></i>\n                <div class=\"menu\">\n                  <div class=\"item\" id=\"0\" (click)=\"sortByStatus(0)\">Eingegangen</div>\n                  <div class=\"item\" id=\"1\" (click)=\"sortByStatus(1)\">in Bearbeitung</div>\n                  <div class=\"item\" id=\"2\" (click)=\"sortByStatus(2)\">Versandt</div>\n                  <div class=\"item\" id=\"3\" (click)=\"sortByStatus(3)\">Zugestellt</div>\n                  <div class=\"item\" id=\"4\" (click)=\"sortByStatus(4)\">Zurückgesandt</div>\n                  <div class=\"item\" id=\"-1\" (click)=\"sortByStatus(-1)\">Stoniert</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"ui right alinged left icon input\" *ngIf=\"authService.isBackendUser()\">\n              <input type=\"number\" id=\"userID\" (keyup.enter)=\"getOrderByUserId()\" placeholder=\"filtern nach UserID...\" value=\"1\">\n              <i class=\"users icon\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div class=\"three wide column\">\n        <!--platzhalter-->\n      </div>\n  </div> <!-- End Row -->\n    <div class=\"column row\">\n      <div class=\"three wide column\">\n        <!--platzhalter-->\n      </div>\n      <div class=\"ten wide column\">\n        <div class=\"ui horizontal divider\">\n          <h3>Übersicht <span *ngIf=\"authService.isBackendUser()\">aller</span><span *ngIf=\"!authService.isBackendUser()\">ihrer</span> Bestellungen</h3>\n        </div>\n      </div>\n      <div class=\"three wide column\">\n        <!--platzhalter-->\n      </div>\n    </div>\n    <div class=\"column row\">\n      <div class=\"three wide column\">\n        <!--platzhalter-->\n      </div>\n      <div class=\"ten wide column\">\n        <div class=\"ui middle aligned selection divided list\">\n          <a *ngFor=\"let order of orders\" class=\"item bs-order-overview-item\"\n             [order]=\"order\" [routerLink]=\"order.id\">\n          </a>\n        </div>\n      </div>\n      <div class=\"three wide column\">\n        <!--platzhalter-->\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/order-overview/order-overview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/order-overview/order-overview.component.ts ***!
  \************************************************************/
/*! exports provided: OrderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderOverviewComponent", function() { return OrderOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/authentication-service */ "./src/app/shared/authentication-service.ts");




var OrderOverviewComponent = /** @class */ (function () {
    //dependency injection
    function OrderOverviewComponent(bs, authService) {
        this.bs = bs;
        this.authService = authService;
    }
    OrderOverviewComponent.prototype.ngOnInit = function () {
        //for FrontendUser
        var _this = this;
        if (this.authService.isBackendUser()) {
            this.bs.getAllOrders().subscribe(function (res) {
                _this.orders = res;
                for (var i = 0; i < res.length; i++) {
                    _this.orders[i].status = _this.bs.translateStatus(res[i].status);
                }
            });
        }
        else {
            this.bs.getOrdersWithUserId(this.authService.getCurrentUserId()).subscribe(function (res) {
                _this.orders = res;
                for (var i = 0; i < res.length; i++) {
                    _this.orders[i].status = _this.bs.translateStatus(res[i].status);
                }
            });
        }
    };
    OrderOverviewComponent.prototype.sortDesc = function () {
        var _this = this;
        this.bs.sortDesc().subscribe(function (res) {
            _this.orders = res;
            for (var i = 0; i < res.length; i++) {
                _this.orders[i].status = _this.bs.translateStatus(res[i].status);
            }
        });
    };
    OrderOverviewComponent.prototype.sortAsc = function () {
        var _this = this;
        this.bs.sortAsc().subscribe(function (res) {
            _this.orders = res;
            console.log(_this.orders);
            for (var i = 0; i < res.length; i++) {
                _this.orders[i].status = _this.bs.translateStatus(res[i].status);
            }
        });
    };
    OrderOverviewComponent.prototype.sortByStatus = function (status) {
        var _this = this;
        this.bs.sortByStatus(status).subscribe(function (res) {
            _this.orders = res;
            for (var i = 0; i < res.length; i++) {
                _this.orders[i].status = _this.bs.translateStatus(res[i].status);
            }
        });
    };
    OrderOverviewComponent.prototype.getOrderByUserId = function () {
        var _this = this;
        var userID = parseInt(document.getElementById('userID').value);
        console.log(userID);
        if (userID) {
            this.bs.getOrdersWithUserId(userID).subscribe(function (res) {
                _this.orders = res;
                for (var i = 0; i < res.length; i++) {
                    _this.orders[i].status = _this.bs.translateStatus(res[i].status);
                }
            });
        }
    };
    OrderOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-order-overview',
            template: __webpack_require__(/*! ./order-overview.component.html */ "./src/app/order-overview/order-overview.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"], _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], OrderOverviewComponent);
    return OrderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/orderlog-form/orderlog-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/orderlog-form/orderlog-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\n  <div class=\"four column row\">\n    <div class=\"four wide column\">\n\n    </div>\n    <div class=\"eight wide column\">\n      <h1>Bestellstatus updaten</h1>\n      <form class=\"ui large form\" [formGroup]=\"orderlogForm\" (ngSubmit)=\"submitForm()\">\n        <input type=\"hidden\" name=\"id\">\n        <div class=\"field four wide column\">\n          <label>Neuer Status</label>\n          <select class=\"ui dropdown\" id=\"status\" formControlName=\"status\">\n            <option *ngFor=\"let state of statusForm\" [value]=\"state.id\">{{state.name}}</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label>Kundennotiz</label>\n          <textarea formControlName=\"note\" rows=\"3\"></textarea>\n        </div>\n        <div class=\"field\" >\n          <label>Adminnotiz</label>\n          <textarea formControlName=\"adminNote\" rows=\"3\"></textarea>\n        </div>\n\n        <button type=\"submit\" class=\"ui button\" [disabled]=\"orderlogForm.invalid\">Speichern</button>\n      </form>\n    </div>\n    <div class=\"four wide column\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/orderlog-form/orderlog-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/orderlog-form/orderlog-form.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderlogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlogFormComponent", function() { return OrderlogFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/authentication-service */ "./src/app/shared/authentication-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_orderlog_factory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/orderlog-factory.service */ "./src/app/shared/orderlog-factory.service.ts");







var OrderlogFormComponent = /** @class */ (function () {
    function OrderlogFormComponent(bs, router, route, authService, fb) {
        this.bs = bs;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.fb = fb;
        this.orderlog = _shared_orderlog_factory_service__WEBPACK_IMPORTED_MODULE_6__["OrderlogFactoryService"].empty();
        this.statusForm = [{ 'id': 0, 'name': 'Eingegangen' },
            { 'id': 1, 'name': 'in Bearbeitung' },
            { 'id': 2, 'name': 'Versandt' },
            { 'id': 3, 'name': 'Zugestellt' },
            { 'id': 4, 'name': 'Zurückgesandt' },
            { 'id': -1, 'name': 'Stoniert' },
        ];
    }
    OrderlogFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.link = this.route.snapshot.params['id'];
        console.log(this.link);
        this.bs.getStatusOfOrder(this.link).subscribe(function (res) {
            _this.orderlog.status = res[0].status;
            _this.initOrder();
        });
        this.initOrder();
    };
    OrderlogFormComponent.prototype.initOrder = function () {
        this.orderlogForm = this.fb.group({
            status: "",
            note: "",
            adminNote: "",
        });
    };
    OrderlogFormComponent.prototype.submitForm = function () {
        var _this = this;
        var orderlog = _shared_orderlog_factory_service__WEBPACK_IMPORTED_MODULE_6__["OrderlogFactoryService"].fromObject(this.orderlogForm.value);
        orderlog.order_id = this.link;
        console.log(orderlog);
        this.bs.updateOrder(orderlog).subscribe(function (res) {
            _this.router.navigate(['../../orders'], { relativeTo: _this.route });
        });
    };
    OrderlogFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-orderlog-form',
            template: __webpack_require__(/*! ./orderlog-form.component.html */ "./src/app/orderlog-form/orderlog-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], OrderlogFormComponent);
    return OrderlogFormComponent;
}());



/***/ }),

/***/ "./src/app/orderlog-item/orderlog-item.component.html":
/*!************************************************************!*\
  !*** ./src/app/orderlog-item/orderlog-item.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"ui grid middle aligned\">\n  <div class=\"column row\">\n    <div class=\"two wide column\">\n      <img class=\"ui small circular image bordered\" [src]=\"bs.getImage(orderlog.status)\">\n    </div>\n    <div class=\"twelve wide column\">\n      <div class=\"header\">Aktualisiert am: {{ orderlog.updated_at }} </div>\n      <div class=\"metadata\">\n        Kundennotiz: {{orderlog.note}}\n      </div>\n      <div class=\"metadata\" *ngIf=\"authService.isBackendUser()\">\n        Adminnotiz: {{orderlog.adminNote}}\n      </div>\n      <div class=\"header\">Status: {{ orderlog.status }} </div>\n    </div>\n  </div>\n</div>\n<br>\n"

/***/ }),

/***/ "./src/app/orderlog-item/orderlog-item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/orderlog-item/orderlog-item.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderlogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlogItemComponent", function() { return OrderlogItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/authentication-service */ "./src/app/shared/authentication-service.ts");
/* harmony import */ var _shared_orderlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/orderlog */ "./src/app/shared/orderlog.ts");






var OrderlogItemComponent = /** @class */ (function () {
    function OrderlogItemComponent(bs, router, route, authService) {
        this.bs = bs;
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    OrderlogItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_orderlog__WEBPACK_IMPORTED_MODULE_5__["Orderlog"])
    ], OrderlogItemComponent.prototype, "orderlog", void 0);
    OrderlogItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'div.bs-orderlog-item',
            template: __webpack_require__(/*! ./orderlog-item.component.html */ "./src/app/orderlog-item/orderlog-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_2__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], OrderlogItemComponent);
    return OrderlogItemComponent;
}());



/***/ }),

/***/ "./src/app/orderlog-list/orderlog-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/orderlog-list/orderlog-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\n  <div *ngIf=\"!orderlogs\" class=\"ui active dimmer\">\n    <div class=\"ui large text loader\">Daten werden geladen...</div>\n  </div>\n  <div class=\"column row\">\n    <div class=\"three wide column\">\n      <!--platzhalter-->\n    </div>\n    <div class=\"ten wide column\">\n<button *ngIf=\"authService.isBackendUser()\" class=\"ui tiny yellow button labeled icon\" [routerLink]=\"['../../update/', this.route.snapshot.params['id']]\"><i class=\"write icon\"></i>\n  Status updaten</button>\n    </div>\n    <div class=\"three wide column\">\n      <!--platzhalter-->\n    </div>\n  </div>\n <div class=\"column row\">\n   <div class=\"sixteen wide column\">\n    <div class=\"ui horizontal divider\">\n      <h3>Bestellstatus-Historie</h3>\n    </div>\n   </div>\n </div>\n  <div class=\"column row\">\n    <div class=\"three wide column\">\n      <!--platzhalter-->\n    </div>\n    <div class=\"ten wide column\">\n      <div class=\"content\" *ngIf=\"orderlogs\">\n        <div class=\"ui middle aligned divided list\">\n          <div *ngFor=\"let orderlog of orderlogs\" class=\"item bs-orderlog-item\"\n             [orderlog]=\"orderlog\" >\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"three wide column\">\n      <!--platzhalter-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/orderlog-list/orderlog-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/orderlog-list/orderlog-list.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlogListComponent", function() { return OrderlogListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/order */ "./src/app/shared/order.ts");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/book-store.service */ "./src/app/shared/book-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/authentication-service */ "./src/app/shared/authentication-service.ts");






var OrderlogListComponent = /** @class */ (function () {
    function OrderlogListComponent(bs, router, route, authService) {
        this.bs = bs;
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    OrderlogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Route zerlegen
        var params = this.route.snapshot.params;
        this.bs.getOrderlogs(params['id']).subscribe(function (res) {
            _this.orderlogs = res;
            for (var i = 0; i < res.length; i++) {
                _this.orderlogs[i].status = _this.bs.translateStatus(res[i].status);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_order__WEBPACK_IMPORTED_MODULE_2__["Order"])
    ], OrderlogListComponent.prototype, "order", void 0);
    OrderlogListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-orderlog-list',
            template: __webpack_require__(/*! ./orderlog-list.component.html */ "./src/app/orderlog-list/orderlog-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_3__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], OrderlogListComponent);
    return OrderlogListComponent;
}());



/***/ }),

/***/ "./src/app/shared/address-factory.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/address-factory.ts ***!
  \*******************************************/
/*! exports provided: AddressFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressFactory", function() { return AddressFactory; });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address */ "./src/app/shared/address.ts");

var AddressFactory = /** @class */ (function () {
    function AddressFactory() {
    }
    AddressFactory.empty = function () {
        return new _address__WEBPACK_IMPORTED_MODULE_0__["Address"](null, "", 0, "", "", 0, false, null);
    };
    AddressFactory.fromObject = function (rawBook) {
        return new _address__WEBPACK_IMPORTED_MODULE_0__["Address"](rawBook.id, rawBook.street, rawBook.postcode, rawBook.city, rawBook.country, rawBook.taxPercentage, rawBook.isMain, rawBook.user_id);
    };
    return AddressFactory;
}());



/***/ }),

/***/ "./src/app/shared/address.ts":
/*!***********************************!*\
  !*** ./src/app/shared/address.ts ***!
  \***********************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(id, street, postcode, city, country, taxPercentage, isMain, user_id) {
        this.id = id;
        this.street = street;
        this.postcode = postcode;
        this.city = city;
        this.country = country;
        this.taxPercentage = taxPercentage;
        this.isMain = isMain;
        this.user_id = user_id;
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/shared/authentication-service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/authentication-service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.api = 'http://bookstore19.s1610456009.student.kwmhgb.at/api/auth';
    }
    //wir schicken in payload als json mit
    //postrequest bei dem er das an rest service schickt, da sollten wir dann token zurückbekommen
    AuthService.prototype.login = function (email, password) {
        return this.http.post(this.api + "/login", {
            'email': email,
            'password': password
        });
    };
    //setzt vorraus wir sind eingeloggt
    AuthService.prototype.setCurrentUserId = function () {
        var _this = this;
        //aktuell eingeloggten Benutzer holen
        //Benutzer in local storage speichern
        this.http.get(this.api + "/user").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(3)).subscribe(function (res) {
            _this.user = res;
            localStorage.setItem('userId', res.result.id.toString());
            localStorage.setItem('role', res.result.role.toString());
            //console.log("give user in authservice");
            //console.log(res.result.id.toString());
        });
    };
    //userid aus localstorage holen
    AuthService.prototype.getCurrentUserId = function () {
        return parseInt(localStorage.getItem("userId"));
    };
    AuthService.prototype.getCurrentUser = function () {
        return parseInt(localStorage.getItem("role"));
    };
    //Token in localStorage speichern
    AuthService.prototype.setLocalStorage = function (token) {
        var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
        localStorage.setItem('token', token);
        this.setCurrentUserId();
    };
    //abmelden in Frontend
    //zerstört aktuellen Webtoken
    AuthService.prototype.logout = function () {
        this.http.post(this.api + "/logout", {});
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        localStorage.removeItem("tax");
    };
    //Helfermethode die schaut ob es token gibt
    AuthService.prototype.isLoggedIn = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(localStorage.getItem("token"))) {
            var token = localStorage.getItem("token");
            var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
            var expirationDate = new Date(0);
            expirationDate.setUTCSeconds(decodedToken.exp);
            if (expirationDate < new Date()) {
                console.log("token expired");
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                localStorage.removeItem("role");
                localStorage.removeItem("tax");
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    };
    //controlling the BE and FE View
    AuthService.prototype.isBackendUser = function () {
        if (this.getCurrentUser() == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    //gegenteil
    AuthService.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    AuthService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/author.ts":
/*!**********************************!*\
  !*** ./src/app/shared/author.ts ***!
  \**********************************/
/*! exports provided: Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
var Author = /** @class */ (function () {
    function Author(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Author;
}());



/***/ }),

/***/ "./src/app/shared/book-factory.ts":
/*!****************************************!*\
  !*** ./src/app/shared/book-factory.ts ***!
  \****************************************/
/*! exports provided: BookFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFactory", function() { return BookFactory; });
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ "./src/app/shared/book.ts");

var BookFactory = /** @class */ (function () {
    function BookFactory() {
    }
    BookFactory.empty = function () {
        return new _book__WEBPACK_IMPORTED_MODULE_0__["Book"](null, '', '', [], new Date(), 0, '', 0, [{ id: 0, url: '', title: '' }], '', 20.99, 1);
    };
    BookFactory.fromObject = function (rawBook) {
        return new _book__WEBPACK_IMPORTED_MODULE_0__["Book"](rawBook.id, rawBook.isbn, rawBook.title, rawBook.authors, typeof (rawBook.published) === 'string' ?
            new Date(rawBook.published) : rawBook.published, rawBook.user_id, rawBook.subtitle, rawBook.rating, rawBook.images, rawBook.description, rawBook.price, rawBook.amount);
    };
    return BookFactory;
}());



/***/ }),

/***/ "./src/app/shared/book-store.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/book-store.service.ts ***!
  \**********************************************/
/*! exports provided: BookStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStoreService", function() { return BookStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var BookStoreService = /** @class */ (function () {
    function BookStoreService(http) {
        this.http = http;
        this.api = 'http://bookstore19.s1610456009.student.kwmhgb.at/api';
        this.cart = [];
    }
    BookStoreService.prototype.addToCart = function (isbn, count) {
        //finds Index of isbn if exists
        var isbnOnIndex = this.cart.findIndex(function (i) { return i.isbn === isbn; });
        if (this.cart.length == 0 || isbnOnIndex == -1) {
            this.BookInCart = { isbn: isbn, count: count };
            this.cart.push(this.BookInCart);
        }
        //raises only the count of the book by the count if the isbn exists
        else {
            this.cart[isbnOnIndex].count += count;
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
    };
    BookStoreService.prototype.createOrder = function (order) {
        return this.http.post(this.api + "/order", order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.updateOrder = function (orderlog) {
        return this.http.put(this.api + "/update/" + orderlog.order_id, orderlog)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.sortDesc = function () {
        return this.http.get(this.api + "/orders/sortDesc")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.sortAsc = function () {
        return this.http.get(this.api + "/orders/sortAsc")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.sortByStatus = function (status) {
        return this.http.get(this.api + "/orders/by/" + status)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getOrderlogs = function (id) {
        return this.http.get(this.api + "/orders/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getAllOrders = function () {
        return this.http.get(this.api + "/orders")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getOrdersWithUserId = function (id) {
        return this.http.get(this.api + "/orders/findbyuser/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.removeBookFromCart = function (isbn) {
        var cart = JSON.parse(localStorage.getItem("cart"));
        for (var i = 0; i < cart.length; i++) {
            console.log();
            if (cart[i].isbn == isbn) {
                cart.splice(Number(i), 1);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };
    BookStoreService.prototype.editCart = function (isbn, count) {
        var cart = JSON.parse(localStorage.getItem("cart"));
        //finds Index of isbn if exists
        console.log(isbn);
        console.log(count);
        var isbnOnIndex = cart.findIndex(function (i) { return i.isbn === isbn; });
        console.log(isbnOnIndex);
        console.log(cart);
        //raises only the count of the book by the count if the isbn exists
        cart[isbnOnIndex].count = count;
        localStorage.setItem('cart', JSON.stringify(cart));
        //this.orderlist.render();
    };
    BookStoreService.prototype.translateStatus = function (status) {
        if (status === 0) {
            return status = "Bestellung eingegangen";
        }
        if (status === 1) {
            return status = "in Bearbeitung";
        }
        if (status === 2) {
            return status = "Versandt";
        }
        if (status === 3) {
            return status = "Zugestellt";
        }
        if (status === 4) {
            return status = "Zurückgesandt";
        }
        if (status === -1) {
            return status = "Stoniert";
        }
    };
    BookStoreService.prototype.getImage = function (status) {
        if (status == "Bestellung eingegangen") {
            return "assets/images/delivery-0.png";
        }
        if (status == "in Bearbeitung") {
            return "assets/images/delivery-1.png";
        }
        if (status == "Versandt") {
            return "assets/images/delivery-2.png";
        }
        if (status == "Zugestellt") {
            return "assets/images/delivery-3.png";
        }
        if (status == "Zurückgesandt") {
            return "assets/images/delivery-4.png";
        }
        if (status == "Stoniert") {
            return "assets/images/delivery-failed.png";
        }
    };
    BookStoreService.prototype.setLabel = function () {
        return this.label = true;
    };
    BookStoreService.prototype.unsetLabel = function () {
        return this.label = false;
    };
    BookStoreService.prototype.createAddress = function (address) {
        return this.http.post(this.api + "/admin/address", address)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.updateAddress = function (address) {
        return this.http.put(this.api + "/admin/address/update/" + address.id, address)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.removeAddress = function (id) {
        return this.http.delete(this.api + "/admin/address/update/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getAllAddresses = function (userId) {
        return this.http.get(this.api + "/admin/address/" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getMainAddress = function (userId) {
        return this.http.get(this.api + "/admin/mainaddress/" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    /*
    * Book Functions
    */
    BookStoreService.prototype.getAll = function () {
        return this.http.get(this.api + "/books")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getSingle = function (isbn) {
        return this.http.get(this.api + "/book/" + isbn)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.getStatusOfOrder = function (id) {
        return this.http.get(this.api + "/order/getStatus/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.create = function (book) {
        return this.http.post(this.api + "/book", book)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.update = function (book) {
        return this.http.put(this.api + "/book/" + book.isbn, book)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.remove = function (isbn) {
        return this.http.delete(this.api + "/book/" + isbn)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    BookStoreService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    BookStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BookStoreService);
    return BookStoreService;
}());



/***/ }),

/***/ "./src/app/shared/book.ts":
/*!********************************!*\
  !*** ./src/app/shared/book.ts ***!
  \********************************/
/*! exports provided: Image, Author, Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ "./src/app/shared/image.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _image__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author */ "./src/app/shared/author.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return _author__WEBPACK_IMPORTED_MODULE_1__["Author"]; });



var Book = /** @class */ (function () {
    function Book(id, isbn, title, authors, published, user_id, subtitle, rating, images, description, price, amount) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.user_id = user_id;
        this.subtitle = subtitle;
        this.rating = rating;
        this.images = images;
        this.description = description;
        this.price = price;
        this.amount = amount;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/shared/image.ts":
/*!*********************************!*\
  !*** ./src/app/shared/image.ts ***!
  \*********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image(id, url, title) {
        this.id = id;
        this.url = url;
        this.title = title;
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/shared/order-factory.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/order-factory.service.ts ***!
  \*************************************************/
/*! exports provided: OrderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFactory", function() { return OrderFactory; });
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order */ "./src/app/shared/order.ts");

var OrderFactory = /** @class */ (function () {
    function OrderFactory() {
    }
    OrderFactory.empty = function () {
        return new _order__WEBPACK_IMPORTED_MODULE_0__["Order"](null, 0, []);
    };
    OrderFactory.fromObject = function (rawOrder) {
        return new _order__WEBPACK_IMPORTED_MODULE_0__["Order"](rawOrder.id, rawOrder.user_id, rawOrder.addressId, rawOrder.books, rawOrder.status, rawOrder.created_at);
    };
    return OrderFactory;
}());



/***/ }),

/***/ "./src/app/shared/order.ts":
/*!*********************************!*\
  !*** ./src/app/shared/order.ts ***!
  \*********************************/
/*! exports provided: Book, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ "./src/app/shared/book.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _book__WEBPACK_IMPORTED_MODULE_0__["Book"]; });


var Order = /** @class */ (function () {
    function Order(user_id, addressId, books, status, created_at, id) {
        this.user_id = user_id;
        this.addressId = addressId;
        this.books = books;
        this.status = status;
        this.created_at = created_at;
        this.id = id;
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/shared/orderlog-factory.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/orderlog-factory.service.ts ***!
  \****************************************************/
/*! exports provided: OrderlogFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlogFactoryService", function() { return OrderlogFactoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orderlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderlog */ "./src/app/shared/orderlog.ts");



var OrderlogFactoryService = /** @class */ (function () {
    function OrderlogFactoryService() {
    }
    OrderlogFactoryService.empty = function () {
        return new _orderlog__WEBPACK_IMPORTED_MODULE_2__["Orderlog"]();
    };
    OrderlogFactoryService.fromObject = function (rawOrder) {
        return new _orderlog__WEBPACK_IMPORTED_MODULE_2__["Orderlog"](rawOrder.note, rawOrder.adminNote, rawOrder.status, rawOrder.order_id, rawOrder.updated_at);
    };
    OrderlogFactoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], OrderlogFactoryService);
    return OrderlogFactoryService;
}());



/***/ }),

/***/ "./src/app/shared/orderlog.ts":
/*!************************************!*\
  !*** ./src/app/shared/orderlog.ts ***!
  \************************************/
/*! exports provided: Order, Orderlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orderlog", function() { return Orderlog; });
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order */ "./src/app/shared/order.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _order__WEBPACK_IMPORTED_MODULE_0__["Order"]; });


var Orderlog = /** @class */ (function () {
    function Orderlog(note, adminNote, status, updated_at, order_id) {
        this.note = note;
        this.adminNote = adminNote;
        this.status = status;
        this.updated_at = updated_at;
        this.order_id = order_id;
    }
    return Orderlog;
}());



/***/ }),

/***/ "./src/app/shared/token-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/token-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService() {
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Domenic/PhpstormProjects/AngularApp/bookstore19/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map