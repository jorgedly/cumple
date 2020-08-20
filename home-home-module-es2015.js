(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen class=\"ion-padding background\" scroll-y=\"false\">\r\n  <ion-slides pager=\"true\">\r\n\r\n    <ion-slide>\r\n      <div class=\"title\">\r\n        <h1>Ciao di nuovo!</h1>\r\n      </div>\r\n      <ion-card *ngIf=\"!valido\">\r\n        <ion-card-content>\r\n          <ion-input type=\"number\" value=\"\"></ion-input>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Contrasena</ion-label>\r\n            <ion-input [(ngModel)]=\"contra\"></ion-input>\r\n          </ion-item>\r\n          <ion-button fill=\"clear\" expand=\"full\" (click)=\"enviar()\">Enviar</ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card *ngIf=\"valido\">\r\n        <ion-card-content>\r\n          <p>Para la <i>alumna</i> favorita 🤗</p>\r\n          <img src=\"https://cumple-emi.s3.amazonaws.com/fotos/certificate.png\" alt=\"certificate\">\r\n          <p>Y en este segmento de la pagina, coloco al fin que hoy que comenzas el curso de World Learning y ya despues\r\n            de la carta y video, se termino lo de Natural English: FELICIDADES!!!!</p>\r\n          <p>Te digo de nuevo que me alegro tanto por vos, por estar acompanandote en el camino, y en general de que\r\n            tambien estes en mi vida, que esta paginita sea el recordatorio tambien ❤️️</p>\r\n          <p>De aqui en adelante a darle con todo al curso, despues de todo, que mas da un par de examenes mas :')</p>\r\n          <p>Las barritas son por si te de hambre de noche noche, ya que vas a terminar tarde 😅 y los chocolates y\r\n            gomitas por si tu regalo de Natural English no lleva lo que querias jaja</p>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <div class=\"title\">\r\n        <h1>Hallo!</h1>\r\n      </div>\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <img src=\"https://cumple-emi.s3.amazonaws.com/fotos/helado.png\" alt=\"helado\">\r\n          <p>Seguramente estas muy ocupada con todo lo que tenes que llenar de tu formulario, y te queria invitar a un\r\n            helado, ojala salga de dos bolitas al menos.</p>\r\n          <p>Posdatas:</p>\r\n          <ul>\r\n            <li>Queria que lo recibieras en la tarde con el calor, pero pues no siempre me salen las cosas a la primera\r\n              xd</li>\r\n            <li>Si queres dale una cucharada a tu hermanita, ya que ella me ayudo en la tarde</li>\r\n            <li>Voy a ser un excelente programador, como te daras cuenta por mis capacidades artisticas con un touchpad\r\n              y paint (ref <a\r\n                href=\"https://www.google.com/search?q=una+persona+que+me+quiere+mucho+me+trajo+esta+playera\">playera de\r\n                regalo</a>)</li>\r\n            <li>Al fin pude colocar un dominio a tu pagina! Ahora solo es <i>cumple punto te ka</i></li>\r\n            <li><b>Creo que ya completaste todos los requisitos verdad? Ya merito! :')</b></li>\r\n          </ul>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <div class=\"title\">\r\n        <h1>안녕하세요, 에미!</h1>\r\n      </div>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>On a day like today...</ion-card-title>\r\n          <ion-card-subtitle>\r\n            <ion-icon [name]=\"datum.type\"></ion-icon>\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <div [innerHtml]=\"datum.event\"></div>\r\n          <ion-button fill=\"clear\" expand=\"full\" (click)=\"updateWiki()\">\r\n            See another\r\n          </ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Your quote for today (the word T o k i o is still banned?)</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <p>{{quote}}</p>\r\n          <ion-button fill=\"clear\" expand=\"full\" (click)=\"updateQuote()\">\r\n            See another\r\n          </ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Your birth-<i>time</i>(because... time 😜) is in about...</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          {{date}}\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Repeater</ion-card-title>\r\n          <ion-card-subtitle>People say that you need to recall something 30 times to remember permanently\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n\r\n          <ion-row>\r\n            <ion-col size-xs=\"12\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" size-xl=\"5\">\r\n              <ion-input [(ngModel)]=\"message\" placeholder=\"La Emi can do anyting!\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size-xs=\"12\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" size-xl=\"5\">\r\n              <ion-input [(ngModel)]=\"counter\" type=\"number\" placeholder=\"2\"></ion-input>\r\n            </ion-col>\r\n            <ion-col size-xs=\"12\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" size-xl=\"2\">\r\n              <ion-button (click)=\"repeat()\">Go!</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\">\r\n              <p *ngFor=\"let me of messages\">{{me}}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <div class=\"title\">\r\n        <h1>생신을 축하드립니다!</h1>\r\n      </div>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Translate</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-row>\r\n            <ion-col size-xs=\"12\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" size-xl=\"5\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>From</ion-label>\r\n                    <ion-select interface=\"action-sheet\" (ionChange)=\"changeFrom($event)\" [value]=\"from\">\r\n                      <ion-select-option *ngFor=\"let option of select_options\" [value]=\"option\">\r\n                        {{option}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-textarea debounce=\"2000\" (ionChange)=\"changeInput($event)\"\r\n                      placeholder=\"Ex: I'm managing what's being called korean\"></ion-textarea>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size-xs=\"12\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" size-xl=\"2\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-button fill=\"outline\" expand=\"block\" (click)=\"updateQuote()\">\r\n                    <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col size-xs=\"12\" size-sm=\"5\" size-md=\"5\" size-lg=\"5\" size-xl=\"5\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>To</ion-label>\r\n                    <ion-select interface=\"action-sheet\" (ionChange)=\"changeTo($event)\" [value]=\"to\">\r\n                      <ion-select-option *ngFor=\"let option of select_mapping[from]\" [value]=\"option\">{{option}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-textarea disabled readonly [(ngModel)]=\"out\">\r\n                    </ion-textarea>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <div class=\"title\">\r\n        <h1>사랑해!</h1>\r\n      </div>\r\n      <ion-card>\r\n        <img [src]=\"cat_dog\" />\r\n        <ion-card-header>\r\n          <ion-card-title>Cat (or Dog, who knows) photo of the day</ion-card-title>\r\n          <ion-card-subtitle>\r\n            My momma always said, \"Life was like a box of chocolates. You never know which cat or dog you're gonna get.\"\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-button fill=\"clear\" expand=\"full\" (click)=\"updateCatDog()\">\r\n            See another\r\n          </ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card *ngIf=\"nasa.media_type === 'image'\">\r\n        <img [src]=\"nasa.url\" />\r\n        <ion-card-header>\r\n          <ion-card-title>Nasa photo of the day</ion-card-title>\r\n          <ion-card-subtitle>\r\n            {{nasa.title}}\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <div class=\"title\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <div class=\"title\">\r\n              <h1>♪ ♫</h1>\r\n              <h1>생일 축하합니다</h1>\r\n              <h1>생일 축하합니다</h1>\r\n              <h1>사랑하는 <b>에미</b> 씨</h1>\r\n              <h1>생일 축하합니다</h1>\r\n              <h1>♪ ♫</h1>\r\n            </div>\r\n            <div>\r\n              <p>I tried to get delivered to you a cake but all the pastry shops told me that they can't reach Sumpango\r\n                :'( (however, yesterday I told you that whatever happen I'll give you a cake, so... xd)\r\n              </p>\r\n              <img src=\"https://iambaker.net/wp-content/uploads/2018/01/birthday-cake-BLOG1.jpg\" alt=\"pastel\">\r\n              <p>Y ahora la unica parte en espaniol, porque queria practicar mi ingles (nocierto, no tengo enies ni\r\n                tildes)</p>\r\n              <p>Se que dentro de un anio vas a estar empezando a cumplir lo que siempre has querido, mira que estoy\r\n                segurisimo que vos podes hacer lo que sea que te propongas, ya sabes que para lo que sea aqui estoy 😊\r\n              </p>\r\n              <p>Y otra vez, te quiero mucho</p>\r\n            </div>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ion-slide>\r\n\r\n  </ion-slides>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n  overflow-y: scroll;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n.title {\n  font-family: \"Gaegu\";\n  font-size: 72;\n}\n\n.background {\n  --background: url('toppng.com-sakura-png-cherry-blossom-vector-transparent-1275x1168.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9EZXNrdG9wL2N1bXBsZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLDBGQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUgaDIge1xyXG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDUwJTtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDYwcHggMCA0MHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5iIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XHJcbn1cclxuXHJcbnAgYiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJHYWVndVwiO1xyXG4gIGZvbnQtc2l6ZTogNzI7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3RvcHBuZy5jb20tc2FrdXJhLXBuZy1jaGVycnktYmxvc3NvbS12ZWN0b3ItdHJhbnNwYXJlbnQtMTI3NXgxMTY4LnBuZyk7XHJcbn1cclxuIiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2lwZXItc2xpZGUgaDIge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA2MHB4IDAgNDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xufVxuXG5wIGIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJHYWVndVwiO1xuICBmb250LXNpemU6IDcyO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvdG9wcG5nLmNvbS1zYWt1cmEtcG5nLWNoZXJyeS1ibG9zc29tLXZlY3Rvci10cmFuc3BhcmVudC0xMjc1eDExNjgucG5nKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_consumming_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/consumming.service */ "./src/app/services/consumming.service.ts");



let HomePage = class HomePage {
    constructor(consumming) {
        this.consumming = consumming;
        this.valido = false;
        this.contra = '';
        this.messages = [];
        this.countDownDate = new Date("May 21, 2021 13:00:00").getTime();
        this.date = '';
        this.datum = {};
        this.quote = '';
        this.from = 'English';
        this.to = 'Korean';
        this.text = '';
        this.out = '';
        this.cat_dog = '';
        this.counter = 0;
        this.message = '';
        this.nasa = {};
        this.select_options = ['English', 'Español', 'Korean'];
        this.select_mapping = {
            'English': ['Español', 'Korean', 'Doge', 'Emoji'],
            'Español': ['English', 'Korean'],
            'Korean': ['Español', 'English'],
        };
        this.methodMapping = {
            'English': {
                'Español': 'enes',
                'Korean': 'enko',
                'Doge': 'doge',
                'Emoji': 'emoji',
            },
            'Español': {
                'English': 'esen',
                'Korean': 'esko'
            },
            'Korean': {
                'English': 'koen',
                'Español': 'koes'
            }
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateWiki();
            this.updateQuote();
            this.updateNasa();
            this.updateCatDog();
            const x = setInterval(() => {
                const now = new Date().getTime();
                const distance = this.countDownDate - now;
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                this.date = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                if (distance < 0) {
                    clearInterval(x);
                }
            }, 1000);
        });
    }
    updateWiki() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const now = new Date();
            this.datum = (yield this.consumming.wiki(now.getMonth() + 1, now.getDate()));
        });
    }
    updateQuote() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.quote = (yield this.consumming.affirmation());
            this.quote = `"${this.quote}"`;
        });
    }
    changeFrom(event) {
        this.from = event.detail.value;
        this.translate();
    }
    changeTo(event) {
        this.to = event.detail.value;
        this.translate();
    }
    changeInput(event) {
        this.text = event.detail.value;
        this.translate();
    }
    translate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.text.length > 0) {
                if (this.from.length > 0 &&
                    this.to.length > 0 &&
                    this.methodMapping[this.from][this.to]) {
                    this.out = (yield this.consumming.translate(this.text, this.methodMapping[this.from][this.to]));
                }
                else {
                    this.out = '';
                }
            }
        });
    }
    updateNasa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.nasa = (yield this.consumming.nasa());
        });
    }
    updateCatDog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cat_dog = (yield this.consumming.catDog());
        });
    }
    repeat() {
        this.messages.length = 0;
        for (let i = 0; i < this.counter; i++) {
            this.messages.push(`${i + 1}) ${this.message}`);
        }
        this.message = '';
    }
    enviar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.valido = (yield this.consumming.enviar(this.contra));
            this.contra = '';
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_consumming_service__WEBPACK_IMPORTED_MODULE_2__["ConsummingService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/services/consumming.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/consumming.service.ts ***!
  \************************************************/
/*! exports provided: ConsummingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsummingService", function() { return ConsummingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let ConsummingService = class ConsummingService {
    constructor(http) {
        this.http = http;
        this.url = 'https://cumple-emi.herokuapp.com/';
    }
    wiki(month, day) {
        return this.http.post(`${this.url}datum`, { month, day }).toPromise();
    }
    affirmation() {
        return this.http.get(`${this.url}quote`).toPromise();
    }
    translate(text, endpoint) {
        return this.http.post(`${this.url}${endpoint}`, { text }).toPromise();
    }
    nasa() {
        return this.http.get(`${this.url}nasa`).toPromise();
    }
    catDog() {
        return this.http.get(`${this.url}cat_dog`).toPromise();
    }
    enviar(password) {
        return this.http.post(`${this.url}pass`, { password }).toPromise();
    }
};
ConsummingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConsummingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConsummingService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map