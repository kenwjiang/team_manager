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

/***/ "./node_modules/raw-loader/index.js!./src/app/add/add.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add/add.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"addForm\">\n        <h1>Add Player</h1>\n        <form (submit)=\"addPlayer()\">\n            <div class=\"form-group\">\n                <label for=\"name\">Player Name: </label>\n                <input type=\"text\" required minlength='3' id=\"pname\" #pname=\"ngModel\" name=\"player.name\" [(ngModel)]=\"player.name\"><br>\n                <div class=\"alert alert-warning\" *ngIf=\" (pname.invalid && (pname.dirty || pname.touched))\">\n                   <span *ngIf=\"pname.errors.required\">name is required</span>\n                   <span *ngIf=\"pname.errors.minlength\">name must be at least 2 characters</span>\n               </div>\n               <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\n                   <span>name already exists in our database</span>\n               </div>\n                <label for=\"position\">Preferred Position: </label>\n                <input type=\"text\" name=\"position\" [(ngModel)]='position'><br>\n                <button [disabled]=\"pname.invalid\" class=\"btn btn-success subBtn\" type=\"submit\" status2=\"button\">ADD</button>\n            </div>\n        </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<header>\n    <h1>Team Manager</h1>\n    <ul>\n        <li><a [routerLink]=\"['/players', 'list']\">Manage Players</a></li>\n        <li><a [routerLink]=\"['/status', 'game', '1']\">Manage Player Status</a></li>\n    </ul>\n\n</header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game1/game1.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game1/game1.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Player Status - Game 1</h1>\n    <ul>\n        <li><a [routerLink]=\"['/status/game/1']\">Game 1</a></li>\n        <li><a [routerLink]=\"['/status/game/2']\">Game 2</a></li>\n        <li><a [routerLink]=\"['/status/game/3']\">Game 3</a></li>\n    </ul>\n\n    <table class=\"table\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th>Player Name</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let player of players\">\n                <td>{{player.name}}</td>\n                <td>\n                    <button [ngClass]=\"{'playing': player.status1==='playing', 'otherBtns': player.status1!='playing'}\" (click)=\"setStatus(player, 'playing')\">Playing</button>\n                    <button [ngClass]=\"{'not_playing': player.status1==='not_playing', 'otherBtns': player.status1!='not_playing'}\" (click)=\"setStatus(player, 'not_playing')\">Not Playing</button>\n                    <button [ngClass]=\"{'undecided': player.status1==='undecided', 'otherBtns': player.status1!='undecided'}\" (click)=\"setStatus(player, 'undecided')\">Undecided</button>\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game2/game2.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game2/game2.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Player Status - Game 2</h1>\n    <ul>\n        <li><a [routerLink]=\"['/status/game/1']\">Game 1</a></li>\n        <li><a [routerLink]=\"['/status/game/2']\">Game 2</a></li>\n        <li><a [routerLink]=\"['/status/game/3']\">Game 3</a></li>\n    </ul>\n\n    <table class=\"table\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th>Player Name</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let player of players\">\n                <td>{{player.name}}</td>\n                <td>\n                    <button [ngClass]=\"{'playing': player.status2==='playing', 'otherBtns': player.status2!='playing'}\" (click)=\"setStatus(player, 'playing')\">Playing</button>\n                    <button [ngClass]=\"{'not_playing': player.status2==='not_playing', 'otherBtns': player.status2!='not_playing'}\" (click)=\"setStatus(player, 'not_playing')\">Not Playing</button>\n                    <button [ngClass]=\"{'undecided': player.status2==='undecided', 'otherBtns': player.status2!='undecided'}\" (click)=\"setStatus(player, 'undecided')\">Undecided</button>\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game3/game3.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game3/game3.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Player Status - Game 3</h1>\n    <ul>\n        <li><a [routerLink]=\"['/status/game/1']\">Game 1</a></li>\n        <li><a [routerLink]=\"['/status/game/2']\">Game 2</a></li>\n        <li><a [routerLink]=\"['/status/game/3']\">Game 3</a></li>\n    </ul>\n\n    <table class=\"table\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th>Player Name</th>\n                <th>Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let player of players\">\n                <td>{{player.name}}</td>\n                <td>\n                    <button [ngClass]=\"{'playing': player.status3==='playing', 'otherBtns': player.status3!='playing'}\" (click)=\"setStatus(player, 'playing')\">Playing</button>\n                    <button [ngClass]=\"{'not_playing': player.status3==='not_playing', 'otherBtns': player.status3!='not_playing'}\" (click)=\"setStatus(player, 'not_playing')\">Not Playing</button>\n                    <button [ngClass]=\"{'undecided': player.status3==='undecided', 'otherBtns': player.status3!='undecided'}\" (click)=\"setStatus(player, 'undecided')\">Undecided</button>\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table_container\">\n    <table class=\"table\">\n        <thead class=\"thead-dark\">\n        <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Preferred Position</th>\n            <th scope=\"col\">Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let player of players\">\n                <td>{{player.name}}</td>\n                <td>{{player.position}}</td>\n                <td><button class=\"btn btn-danger\" (click)=\"delete(player)\">Delete</button></td>\n            </tr>\n        </tbody>\n\n    </table>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/players/players.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/players/players.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"options\">\n            <ul>\n                <li><a [routerLink]=\"['list']\">List</a></li>\n                <li><a [routerLink]=\"['addplayer']\">Add Player</a></li>\n            </ul>\n        </div>\n\n        <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/status/status.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/status/status.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addForm{\n    margin: 2%;\n    border: 2px solid black;\n    background-color: white;\n}\n.addForm h1, form{\n    margin: 2%;\n}\nform label, input{\n    display: inline-block;\n}\nform label {\n    width: 25%;\n}\nform input{\n    width: 50%;\n}\n.subBtn {\n    margin-left: 50%;\n    width: 200px;\n}\n.alert{\n    width: 80%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRGb3Jte1xuICAgIG1hcmdpbjogMiU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYWRkRm9ybSBoMSwgZm9ybXtcbiAgICBtYXJnaW46IDIlO1xufVxuXG5mb3JtIGxhYmVsLCBpbnB1dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmZvcm0gbGFiZWwge1xuICAgIHdpZHRoOiAyNSU7XG59XG5mb3JtIGlucHV0e1xuICAgIHdpZHRoOiA1MCU7XG59XG4uc3ViQnRuIHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLmFsZXJ0e1xuICAgIHdpZHRoOiA4MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddComponent = class AddComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.player = { name: "" };
    }
    ngOnInit() {
    }
    addPlayer() {
        let observable = this._httpService.addPlayer({ name: this.player.name, position: this.position });
        observable.subscribe(data => {
            console.log('receiving data', data);
            if (!data['message']) {
                this.showPlayers();
            }
            else if (data['message'] == "Error") {
                this.errorMsg = "This name already exists in our database";
            }
        });
    }
    showPlayers() {
        this._router.navigate(['']);
    }
};
AddComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/add/add.component.html"),
        styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
    })
], AddComponent);



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
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _game1_game1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game1/game1.component */ "./src/app/game1/game1.component.ts");
/* harmony import */ var _game2_game2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game2/game2.component */ "./src/app/game2/game2.component.ts");
/* harmony import */ var _game3_game3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game3/game3.component */ "./src/app/game3/game3.component.ts");










const routes = [
    { path: "players", component: _players_players_component__WEBPACK_IMPORTED_MODULE_3__["PlayersComponent"], children: [
            { path: "list", component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"] },
            { path: 'addplayer', component: _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"] }
        ] },
    { path: "status", component: _status_status_component__WEBPACK_IMPORTED_MODULE_4__["StatusComponent"], children: [
            { path: 'game/1', component: _game1_game1_component__WEBPACK_IMPORTED_MODULE_7__["Game1Component"] },
            { path: 'game/2', component: _game2_game2_component__WEBPACK_IMPORTED_MODULE_8__["Game2Component"] },
            { path: 'game/3', component: _game3_game3_component__WEBPACK_IMPORTED_MODULE_9__["Game3Component"] }
        ] },
    { path: '', pathMatch: 'full', redirectTo: '/players/list' }
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header li {\n    list-style: none;\n    display: inline-block;\n    text-align: center;\n}\n\nheader li + li:before {\n    content: \" | \";\n    padding: 0 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaGVhZGVyIGxpICsgbGk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiB8IFwiO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



let AppComponent = class AppComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.title = "Team Manager";
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _game1_game1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game1/game1.component */ "./src/app/game1/game1.component.ts");
/* harmony import */ var _game2_game2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game2/game2.component */ "./src/app/game2/game2.component.ts");
/* harmony import */ var _game3_game3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game3/game3.component */ "./src/app/game3/game3.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _players_players_component__WEBPACK_IMPORTED_MODULE_8__["PlayersComponent"],
            _status_status_component__WEBPACK_IMPORTED_MODULE_9__["StatusComponent"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"],
            _game1_game1_component__WEBPACK_IMPORTED_MODULE_12__["Game1Component"],
            _game2_game2_component__WEBPACK_IMPORTED_MODULE_13__["Game2Component"],
            _game3_game3_component__WEBPACK_IMPORTED_MODULE_14__["Game3Component"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/game1/game1.component.css":
/*!*******************************************!*\
  !*** ./src/app/game1/game1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    background-color: white;\n    border: 2px solid black;\n}\n\n.container li {\n    list-style: none;\n    display: inline-block;\n    text-align: center;\n}\n\n.container li + li:before{\n    content: \" | \";\n    padding: 0 15px;\n}\n\nbutton{\n    margin: 0 2%;\n    border-radius: 10px;\n    box-shadow: 3px 3px black;\n    width: 150px;\n}\n\n.playing {\n    background-color: green;\n    color: white;\n}\n\n.not_playing{\n    background-color: red;\n    color: white\n}\n\n.undecided{\n    background-color: yellow;\n}\n\n.otherBtns{\n    background-color: white;\n}\n\nbutton:focus {outline:0;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTEvZ2FtZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0EsY0FBYyxTQUFTLENBQUMiLCJmaWxlIjoic3JjL2FwcC9nYW1lMS9nYW1lMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5jb250YWluZXIgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciBsaSArIGxpOmJlZm9yZXtcbiAgICBjb250ZW50OiBcIiB8IFwiO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbjogMCAyJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4ucGxheWluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubm90X3BsYXlpbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZVxufVxuXG4udW5kZWNpZGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLm90aGVyQnRuc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmJ1dHRvbjpmb2N1cyB7b3V0bGluZTowO31cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game1/game1.component.ts":
/*!******************************************!*\
  !*** ./src/app/game1/game1.component.ts ***!
  \******************************************/
/*! exports provided: Game1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game1Component", function() { return Game1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Game1Component = class Game1Component {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.players = [];
    }
    ngOnInit() {
        this.getPlayers();
    }
    getPlayers() {
        let observable = this._httpService.getPlayers();
        observable.subscribe(data => {
            console.log("getting data", data);
            this.players = data;
        });
    }
    setStatus(player, status) {
        this.player = player;
        this.player.status1 = status;
        let observable = this._httpService.updateStatus(this.player);
        observable.subscribe(data => {
            console.log('status data', data);
            this.getPlayers();
        });
    }
};
Game1Component.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Game1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game1',
        template: __webpack_require__(/*! raw-loader!./game1.component.html */ "./node_modules/raw-loader/index.js!./src/app/game1/game1.component.html"),
        styles: [__webpack_require__(/*! ./game1.component.css */ "./src/app/game1/game1.component.css")]
    })
], Game1Component);



/***/ }),

/***/ "./src/app/game2/game2.component.css":
/*!*******************************************!*\
  !*** ./src/app/game2/game2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    background-color: white;\n    border: 2px solid black;\n}\n\n.container li {\n    list-style: none;\n    display: inline-block;\n    text-align: center;\n}\n\n.container li + li:before{\n    content: \" | \";\n    padding: 0 15px;\n}\n\nbutton{\n    margin: 0 2%;\n    border-radius: 10px;\n    box-shadow: 3px 3px black;\n    width: 150px;\n}\n\n.playing {\n    background-color: green;\n    color: white;\n}\n\n.not_playing{\n    background-color: red;\n    color: white\n}\n\n.undecided{\n    background-color: yellow;\n}\n\n.otherBtns{\n    background-color: white;\n}\n\nbutton:focus {outline:0;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTIvZ2FtZTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0EsY0FBYyxTQUFTLENBQUMiLCJmaWxlIjoic3JjL2FwcC9nYW1lMi9nYW1lMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5jb250YWluZXIgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciBsaSArIGxpOmJlZm9yZXtcbiAgICBjb250ZW50OiBcIiB8IFwiO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbjogMCAyJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4ucGxheWluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubm90X3BsYXlpbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZVxufVxuXG4udW5kZWNpZGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLm90aGVyQnRuc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmJ1dHRvbjpmb2N1cyB7b3V0bGluZTowO31cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game2/game2.component.ts":
/*!******************************************!*\
  !*** ./src/app/game2/game2.component.ts ***!
  \******************************************/
/*! exports provided: Game2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game2Component", function() { return Game2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Game2Component = class Game2Component {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.players = [];
    }
    ngOnInit() {
        this.getPlayers();
    }
    getPlayers() {
        let observable = this._httpService.getPlayers();
        observable.subscribe(data => {
            console.log("getting data", data);
            this.players = data;
        });
    }
    setStatus(player, status) {
        this.player = player;
        this.player.status2 = status;
        let observable = this._httpService.updateStatus(this.player);
        observable.subscribe(data => {
            console.log('status data', data);
        });
    }
};
Game2Component.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Game2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game2',
        template: __webpack_require__(/*! raw-loader!./game2.component.html */ "./node_modules/raw-loader/index.js!./src/app/game2/game2.component.html"),
        styles: [__webpack_require__(/*! ./game2.component.css */ "./src/app/game2/game2.component.css")]
    })
], Game2Component);



/***/ }),

/***/ "./src/app/game3/game3.component.css":
/*!*******************************************!*\
  !*** ./src/app/game3/game3.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    background-color: white;\n    border: 2px solid black;\n}\n\n.container li {\n    list-style: none;\n    display: inline-block;\n    text-align: center;\n}\n\n.container li + li:before{\n    content: \" | \";\n    padding: 0 15px;\n}\n\nbutton{\n    margin: 0 2%;\n    border-radius: 10px;\n    box-shadow: 3px 3px black;\n    width: 150px;\n}\n\n.playing {\n    background-color: green;\n    color: white;\n}\n\n.not_playing{\n    background-color: red;\n    color: white\n}\n\n.undecided{\n    background-color: yellow;\n}\n\n.otherBtns{\n    background-color: white;\n}\n\nbutton:focus {outline:0;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTMvZ2FtZTMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0EsY0FBYyxTQUFTLENBQUMiLCJmaWxlIjoic3JjL2FwcC9nYW1lMy9nYW1lMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5jb250YWluZXIgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciBsaSArIGxpOmJlZm9yZXtcbiAgICBjb250ZW50OiBcIiB8IFwiO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbjogMCAyJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4ucGxheWluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubm90X3BsYXlpbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZVxufVxuXG4udW5kZWNpZGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLm90aGVyQnRuc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmJ1dHRvbjpmb2N1cyB7b3V0bGluZTowO31cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game3/game3.component.ts":
/*!******************************************!*\
  !*** ./src/app/game3/game3.component.ts ***!
  \******************************************/
/*! exports provided: Game3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game3Component", function() { return Game3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Game3Component = class Game3Component {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.players = [];
    }
    ngOnInit() {
        this.getPlayers();
    }
    getPlayers() {
        let observable = this._httpService.getPlayers();
        observable.subscribe(data => {
            console.log("getting data", data);
            this.players = data;
        });
    }
    setStatus(player, status) {
        this.player = player;
        this.player.status3 = status;
        let observable = this._httpService.updateStatus(this.player);
        observable.subscribe(data => {
            console.log('status data', data);
        });
    }
};
Game3Component.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Game3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game3',
        template: __webpack_require__(/*! raw-loader!./game3.component.html */ "./node_modules/raw-loader/index.js!./src/app/game3/game3.component.html"),
        styles: [__webpack_require__(/*! ./game3.component.css */ "./src/app/game3/game3.component.css")]
    })
], Game3Component);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    addPlayer(data) {
        return this._http.post('/team', data);
    }
    getPlayers() {
        return this._http.get('/team');
    }
    getProduct(data) {
        return this._http.get('/team/' + data.id);
    }
    updateStatus(data) {
        console.log(data);
        return this._http.put('/team', data);
    }
    delete(data) {
        console.log(data);
        return this._http.delete('/team/' + data._id);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ListComponent = class ListComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.players = [];
    }
    ngOnInit() {
        this.getPlayers();
    }
    getPlayers() {
        let observable = this._httpService.getPlayers();
        observable.subscribe(data => {
            console.log('receiving player data', data);
            this.players = data;
        });
    }
    delete(player) {
        if (confirm("Are you sure you want to delete this player?")) {
            let observable = this._httpService.delete(player);
            observable.subscribe(data => {
                console.log('receiving data', data);
                if (!data['message']) {
                    this.getPlayers();
                }
            });
        }
    }
};
ListComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html"),
        styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/players/players.component.css":
/*!***********************************************!*\
  !*** ./src/app/players/players.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options li {\n    list-style: none;\n    display: inline-block;\n    text-align: center;\n}\n\n.options li + li:before {\n    content: \" | \";\n    padding: 0 15px;\n}\n\n.container {\n    border: 2px solid black;\n    background-color: white;\n    margin: 2%;\n}\n\n.options {\n    margin: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVycy9wbGF5ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXJzL3BsYXllcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb25zIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcHRpb25zIGxpICsgbGk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiB8IFwiO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5jb250YWluZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMiU7XG59XG5cbi5vcHRpb25zIHtcbiAgICBtYXJnaW46IDIlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlayersComponent = class PlayersComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-players',
        template: __webpack_require__(/*! raw-loader!./players.component.html */ "./node_modules/raw-loader/index.js!./src/app/players/players.component.html"),
        styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/players/players.component.css")]
    })
], PlayersComponent);



/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatusComponent = class StatusComponent {
    constructor() { }
    ngOnInit() {
    }
};
StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status',
        template: __webpack_require__(/*! raw-loader!./status.component.html */ "./node_modules/raw-loader/index.js!./src/app/status/status.component.html"),
        styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
    })
], StatusComponent);



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
const environment = {
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/mean_stack/team_manager/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map