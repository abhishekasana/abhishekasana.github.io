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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Navbar.js


var BackgroundWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Navbar__BackgroundWrapper",
  componentId: "sc-108a9jl-0"
})(["background-image:linear-gradient(to right,#8E2DE2,#4A00E0);box-shadow:0px 2px #FFF053;"]);
var UlWrapper = external_styled_components_default.a.ul.withConfig({
  displayName: "Navbar__UlWrapper",
  componentId: "sc-108a9jl-1"
})(["list-style-type:none;margin:0;padding:0;overflow:hidden;"]);
var ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "Navbar__ListItem",
  componentId: "sc-108a9jl-2"
})(["float:", ";padding-right:4px;a{display:block;color:white;text-align:center;text-decoration:none;}a:hover{background-color:#111;}"], function (props) {
  return props.left ? 'left' : 'right';
});
var ImageWrapper = external_styled_components_default.a.img.withConfig({
  displayName: "Navbar__ImageWrapper",
  componentId: "sc-108a9jl-3"
})(["padding:8px 10px;height:24px;width:auto;-o-transition:.5s;-ms-transition:.5s;-moz-transition:.5s;-webkit-transition:.5s;transition:.5s;&:hover{transform:scale(1.2);box-shadow:0px 0px 8px 2px ", ";}"], function (props) {
  return props.bgColor;
});
var social_list = [{
  title: 'linked-in',
  imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/linkedin.png',
  link: '',
  bgColor: '#0073a4'
}, {
  title: 'stackoverflow',
  imgUrl: 'https://img.icons8.com/ios/128/ffffff/stackoverflow-filled.png',
  link: '',
  bgColor: '#f48024'
}, {
  title: 'Android',
  imgUrl: 'https://img.icons8.com/material/128/ffffff/android-os.png',
  link: '',
  bgColor: '#7cb342'
}, {
  title: 'twitter',
  imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/twitter-circled.png',
  link: '',
  bgColor: '#00aced'
}, {
  title: 'github',
  imgUrl: 'https://img.icons8.com/ios-glyphs/128/ffffff/github.png',
  link: '',
  bgColor: '#24292d'
}];

var Navbar_NavBar = function NavBar() {
  return external_react_default.a.createElement(BackgroundWrapper, null, external_react_default.a.createElement(UlWrapper, null, social_list.map(function (item) {
    return external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement("a", {
      href: item.link
    }, external_react_default.a.createElement(ImageWrapper, {
      src: item.imgUrl,
      bgColor: item.bgColor
    })));
  })));
};

/* harmony default export */ var Navbar = (Navbar_NavBar);
// CONCATENATED MODULE: ./components/Layout.js



var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Navbar, null), props.children);
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Juyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5Yp1");



var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "About"));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });