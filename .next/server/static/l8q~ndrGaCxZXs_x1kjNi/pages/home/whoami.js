module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("uzir");


/***/ }),

/***/ "5pYx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "sectionTitle__TitleWrapper",
  componentId: "ivouv4-0"
})(["font-size:2.2em;margin:0px 0px .5em;font-weight:500;& >:first-child{color:#FFF053;};& > *{display:inline;};@media(max-width:767px){font-size:1.8em;}"]);
var SpanWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "sectionTitle__SpanWrapper",
  componentId: "ivouv4-1"
})(["display:inline-block;"]);

var SectionTitle = function SectionTitle(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpanWrapper, null, "zerodark@kasana:~$"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpanWrapper, null, "\xA0", title));
};

/* harmony default export */ __webpack_exports__["a"] = (SectionTitle);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "QzP2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Container */
/* unused harmony export CompressContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SectionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HalfContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "wrappers__Container",
  componentId: "sc-1mlzmjp-0"
})(["height:inherit;margin:0 auto;padding:16px;"]);
var CompressContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Container).withConfig({
  displayName: "wrappers__CompressContainer",
  componentId: "sc-1mlzmjp-1"
})(["@media (min-width:768px){width:80%;margin:16px;}"]);
var HalfContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Container).withConfig({
  displayName: "wrappers__HalfContainer",
  componentId: "sc-1mlzmjp-2"
})(["@media (min-width:768px){max-width:1028px;margin:32px;}"]);
var SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "wrappers__SectionContainer",
  componentId: "sc-1mlzmjp-3"
})(["margin-bottom:2em !important;"]);


/***/ }),

/***/ "S2si":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Text; });
/* unused harmony export Col */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LiWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UlWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "webcomps__Row",
  componentId: "sc-41l5u6-0"
})(["box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;"]);
var Col = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "webcomps__Col",
  componentId: "sc-41l5u6-1"
})(["box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:column;"]);
var ColDiff = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "webcomps__ColDiff",
  componentId: "sc-41l5u6-2"
})(["box-sizing:border-box;display:flex;flex:0 1 auto;flex-basis:33%;flex-direction:column;@media (max-width:767px){flex-basis:100%;};"]);
var UlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "webcomps__UlWrapper",
  componentId: "sc-41l5u6-3"
})(["padding-left:", ";margin:0px;@media (max-width:767px){padding-left:12px;}"], function (props) {
  return props.startPadding ? props.startPadding : '26px';
});
var LiWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "webcomps__LiWrapper",
  componentId: "sc-41l5u6-4"
})(["color:#54C9FF;margin-bottom:.7em;list-style:none;&:before{content:'~';margin-right:1rem;};span{color:#fff;}"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "webcomps__Text",
  componentId: "sc-41l5u6-5"
})(["font-size:", ";"], function (props) {
  return props.size ? props.size : '18px';
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "webcomps__Span",
  componentId: "sc-41l5u6-6"
})(["font-size:", ";color:", " !important;"], function (props) {
  return props.size ? props.size : '18px';
}, function (props) {
  return props.color;
});


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "uzir":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5pYx");
/* harmony import */ var _components_webcomps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("S2si");
/* harmony import */ var _components_wrappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QzP2");





var Whoami = function Whoami() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrappers__WEBPACK_IMPORTED_MODULE_3__[/* SectionContainer */ "b"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sectionTitle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "whoami"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "e"], null, "My name is Abhishek Kasana, I'm a 23 years old full stack developer based in Bengaluru, India."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "e"], null, "WIP"));
};

/* harmony default export */ __webpack_exports__["default"] = (Whoami);

/***/ })

/******/ });