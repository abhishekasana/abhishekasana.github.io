module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");



var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbar__BackgroundWrapper",
  componentId: "sc-108a9jl-0"
})(["background-image:linear-gradient(to right,#8E2DE2,#4A00E0);box-shadow:0px 2px #FFF053;"]);
var UlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "Navbar__UlWrapper",
  componentId: "sc-108a9jl-1"
})(["list-style-type:none;margin:0;padding:0;overflow:hidden;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "Navbar__ListItem",
  componentId: "sc-108a9jl-2"
})(["float:", ";padding-right:4px;a{display:block;color:white;text-align:center;text-decoration:none;}a:hover{background-color:#111;}"], function (props) {
  return props.left ? 'left' : 'right';
});
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Navbar__ImageWrapper",
  componentId: "sc-108a9jl-3"
})(["padding:8px 10px;height:24px;width:auto;-o-transition:.5s;-ms-transition:.5s;-moz-transition:.5s;-webkit-transition:.5s;transition:.5s;&:hover{transform:scale(1.2);box-shadow:0px 0px 8px 2px ", ";}"], function (props) {
  return props.bgColor;
});
var social_list = [{
  title: 'linked-in',
  imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/linkedin.png',
  link: 'www.linkedin.com/in/abhishek-kasana-4a7836106',
  bgColor: '#0073a4'
}, {
  title: 'stackoverflow',
  imgUrl: 'https://img.icons8.com/ios/128/ffffff/stackoverflow-filled.png',
  link: 'https://stackoverflow.com/users/9057473/',
  bgColor: '#f48024'
}, {
  title: 'Android',
  imgUrl: 'https://img.icons8.com/material/128/ffffff/android-os.png',
  link: 'https://play.google.com/store/apps/dev?id=8404243559462055066',
  bgColor: '#7cb342'
}, {
  title: 'twitter',
  imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/twitter-circled.png',
  link: 'https://twitter.com/abhishekasana',
  bgColor: '#00aced'
}, {
  title: 'github',
  imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/github.png',
  link: 'https://github.com/abhishekasana',
  bgColor: '#24292d'
}];

var NavBar = function NavBar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackgroundWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UlWrapper, null, social_list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, {
      key: item.title
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWrapper, {
      src: item.imgUrl,
      bgColor: item.bgColor
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/sectionTitle.js":
/*!************************************!*\
  !*** ./components/sectionTitle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
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

SectionTitle.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

/***/ }),

/***/ "./components/taskList.js":
/*!********************************!*\
  !*** ./components/taskList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _webcomps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webcomps */ "./components/webcomps.js");
/* harmony import */ var _wrappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrappers */ "./components/wrappers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sectionTitle */ "./components/sectionTitle.js");







var StyleLink = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.a.withConfig({
  displayName: "taskList__StyleLink",
  componentId: "ksnv82-0"
})(["text-decoration:none;"]);
var UlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.ul.withConfig({
  displayName: "taskList__UlWrapper",
  componentId: "ksnv82-1"
})(["@media (max-width:767px){padding-left:0px;}"]);

var TaskList = function TaskList(props) {
  var listHeader = props.listHeader,
      taskList = props.taskList;
  var updatedTaskList = taskList.map(function (task) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, task, {
      title: task.title.split(task.hightLight)
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wrappers__WEBPACK_IMPORTED_MODULE_3__["SectionContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sectionTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: listHeader
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UlWrapper, null, updatedTaskList.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_webcomps__WEBPACK_IMPORTED_MODULE_2__["LiWrapper"], {
      key: item.title
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_webcomps__WEBPACK_IMPORTED_MODULE_2__["Span"], null, item.title[0]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleLink, {
      href: item.link
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_webcomps__WEBPACK_IMPORTED_MODULE_2__["Span"], {
      color: item.hexCode
    }, item.hightLight)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_webcomps__WEBPACK_IMPORTED_MODULE_2__["Span"], null, item.title[1]));
  })));
};

TaskList.propTypes = {
  listHeader: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  taskList: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TaskList);

/***/ }),

/***/ "./components/webcomps.js":
/*!********************************!*\
  !*** ./components/webcomps.js ***!
  \********************************/
/*! exports provided: Row, Text, Col, Span, ColDiff, LiWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColDiff", function() { return ColDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiWrapper", function() { return LiWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
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
var LiWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "webcomps__LiWrapper",
  componentId: "sc-41l5u6-3"
})(["color:#54C9FF;margin-bottom:.7em;list-style:none;&:before{content:'~';margin-right:1rem;};span{color:#fff;}"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "webcomps__Text",
  componentId: "sc-41l5u6-4"
})(["font-size:", ";"], function (props) {
  return props.size ? props.size : '18px';
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "webcomps__Span",
  componentId: "sc-41l5u6-5"
})(["font-size:", ";color:", " !important;"], function (props) {
  return props.size ? props.size : '18px';
}, function (props) {
  return props.color;
});


/***/ }),

/***/ "./components/wrappers.js":
/*!********************************!*\
  !*** ./components/wrappers.js ***!
  \********************************/
/*! exports provided: Container, CompressContainer, SectionContainer, HalfContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompressContainer", function() { return CompressContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionContainer", function() { return SectionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HalfContainer", function() { return HalfContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/home/contactme.js":
/*!*********************************!*\
  !*** ./pages/home/contactme.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sectionTitle */ "./components/sectionTitle.js");
/* harmony import */ var _components_webcomps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/webcomps */ "./components/webcomps.js");
/* harmony import */ var _components_wrappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wrappers */ "./components/wrappers.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrappers__WEBPACK_IMPORTED_MODULE_3__["SectionContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sectionTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "cat Contact.md"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "You can get in touch via E-mail."));
});

/***/ }),

/***/ "./pages/home/dataConstants.js":
/*!*************************************!*\
  !*** ./pages/home/dataConstants.js ***!
  \*************************************/
/*! exports provided: historyList, projectsList, articlesList, skillsetList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyList", function() { return historyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsList", function() { return projectsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlesList", function() { return articlesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skillsetList", function() { return skillsetList; });
var projectsList = [{
  title: 'Void Messenger - Secure code chatting application',
  hightLight: 'Void Messenger',
  hexCode: '#EA4C89',
  link: ''
}, {
  title: 'KeyLogger - Custom windows keylogger',
  hightLight: 'KeyLogger',
  hexCode: '#EA4C89',
  link: ''
}, {
  title: 'Legal Recourse - Web application that suggest\'s the right legal representation',
  hightLight: 'Legal Recourse',
  hexCode: '#EA4C89',
  link: ''
}, {
  title: 'Mywaze - GeoSocial networking android application',
  hightLight: 'Mywaze',
  hexCode: '#EA4C89',
  link: ''
}];
var historyList = [{
  title: '2019 / Present - Software Developer - Cuemath - Bengaluru, India',
  hightLight: 'Cuemath',
  hexCode: '#DF5DFF',
  link: 'https://www.cuemath.com'
}, {
  title: '2017 - Software Developer Intern - Cuemath - Bengaluru, India',
  hightLight: 'Cuemath',
  hexCode: '#DF5DFF',
  link: 'https://www.cuemath.com'
}];
var articlesList = [{
  title: 'How to setup a virtual private server from scratch 27 Aug 2018',
  hightLight: '27 Aug 2018',
  hexCode: '#EA4C89',
  link: ''
}, {
  title: 'Basic file operations in Python 28 Nov 2017',
  hightLight: '28 Nov 2017',
  hexCode: '#EA4C89',
  link: ''
}];
var skillsetList = [{
  title: 'Languages',
  value: ['Python', 'Javascript', 'Java', 'Node.js', 'HTML5', 'CSS3', 'C++', 'SQL']
}, {
  title: 'Tools/OS',
  value: ['Vim', 'Bash', 'Docker (Currently having fun with)', 'Ubuntu(Linux)', 'Kali', 'Windows']
}, {
  title: 'Frameworks',
  value: ['Django', 'NEXT JS', 'Android', 'Flask', 'React.js']
}];
var contactMe = "I'm currently looking for remote or LDN/MTL/EU based work,\n so if you're a startup looking for an always curious passionate dev, ping me\n on Github and Twitter Or, you can get in touch via E-mail.";
var whoAmI = "I'm a massive cyberpunk nerd with an interest in open source and devops.\n In my free time I like to hack on fun projects, play / watch football with friends,\n gulp banana smoothies and take pictures (among other things, like obsessing over my Hacker News karma).";


/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_taskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/taskList */ "./components/taskList.js");
/* harmony import */ var _components_wrappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wrappers */ "./components/wrappers.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _skillset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skillset */ "./pages/home/skillset.js");
/* harmony import */ var _whoami__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./whoami */ "./pages/home/whoami.js");
/* harmony import */ var _contactme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contactme */ "./pages/home/contactme.js");
/* harmony import */ var _dataConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dataConstants */ "./pages/home/dataConstants.js");









var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "home__TitleWrapper",
  componentId: "tls23u-0"
})(["font-size:36px;opacity:0.5;font-family:'Monoton',cursive;text-align:right;margin-right:8px;@media (max-width:767px){margin-right:0px;text-align:center;}"]);

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrappers__WEBPACK_IMPORTED_MODULE_3__["HalfContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_whoami__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_skillset__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_taskList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    listHeader: "ls projects/",
    taskList: _dataConstants__WEBPACK_IMPORTED_MODULE_8__["projectsList"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_taskList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    listHeader: "history",
    taskList: _dataConstants__WEBPACK_IMPORTED_MODULE_8__["historyList"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_taskList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    listHeader: "ls articles/",
    taskList: _dataConstants__WEBPACK_IMPORTED_MODULE_8__["articlesList"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contactme__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleWrapper, null, "NEVER SETTLE"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/home/skillset.js":
/*!********************************!*\
  !*** ./pages/home/skillset.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sectionTitle */ "./components/sectionTitle.js");
/* harmony import */ var _components_webcomps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/webcomps */ "./components/webcomps.js");
/* harmony import */ var _components_wrappers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/wrappers */ "./components/wrappers.js");
/* harmony import */ var _dataConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataConstants */ "./pages/home/dataConstants.js");






var CategoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "skillset__CategoryTitle",
  componentId: "sc-12a46nl-0"
})(["font-size:1.8em;margin:0 0 0.5em;color:#54C9FF;"]);

var Skillset = function Skillset() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrappers__WEBPACK_IMPORTED_MODULE_4__["SectionContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "cat skills.md"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__["Row"], null, _dataConstants__WEBPACK_IMPORTED_MODULE_5__["skillsetList"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__["ColDiff"], {
      key: item.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryTitle, null, item.title), item.value.map(function (subitem) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__["LiWrapper"], {
        key: subitem
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, subitem));
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Skillset);

/***/ }),

/***/ "./pages/home/whoami.js":
/*!******************************!*\
  !*** ./pages/home/whoami.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sectionTitle */ "./components/sectionTitle.js");
/* harmony import */ var _components_webcomps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/webcomps */ "./components/webcomps.js");
/* harmony import */ var _components_wrappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wrappers */ "./components/wrappers.js");





var Whoami = function Whoami() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrappers__WEBPACK_IMPORTED_MODULE_3__["SectionContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sectionTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "whoami"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "My name is Abhishek Kasana, I'm a 23 years old full stack developer based in Bengaluru, India."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "WIP"));
};

/* harmony default export */ __webpack_exports__["default"] = (Whoami);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/home/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/webprojects/portfolio/pages/home/index.js */"./pages/home/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map