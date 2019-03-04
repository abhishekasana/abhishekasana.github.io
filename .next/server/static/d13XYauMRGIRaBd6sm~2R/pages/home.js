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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JN4l");


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

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

var Navbar_NavBar = function NavBar() {
  return external_react_default.a.createElement(BackgroundWrapper, null, external_react_default.a.createElement(UlWrapper, null, social_list.map(function (item) {
    return external_react_default.a.createElement(ListItem, {
      key: item.title
    }, external_react_default.a.createElement("a", {
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

/***/ "JN4l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./components/webcomps.js
var webcomps = __webpack_require__("S2si");

// EXTERNAL MODULE: ./components/wrappers.js
var wrappers = __webpack_require__("QzP2");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/sectionTitle.js
var sectionTitle = __webpack_require__("5pYx");

// CONCATENATED MODULE: ./components/taskList.js







var StyleLink = external_styled_components_default.a.a.withConfig({
  displayName: "taskList__StyleLink",
  componentId: "ksnv82-0"
})(["text-decoration:none;"]);

var taskList_TaskList = function TaskList(props) {
  var listHeader = props.listHeader,
      taskList = props.taskList;
  var updatedTaskList = taskList.map(function (task) {
    return Object(objectSpread["a" /* default */])({}, task, {
      title: task.title.split(task.hightLight)
    });
  });
  return external_react_default.a.createElement(wrappers["b" /* SectionContainer */], null, external_react_default.a.createElement(sectionTitle["a" /* default */], {
    title: listHeader
  }), external_react_default.a.createElement("ul", null, updatedTaskList.map(function (item) {
    return external_react_default.a.createElement(webcomps["b" /* LiWrapper */], {
      key: item.title
    }, external_react_default.a.createElement(webcomps["d" /* Span */], null, item.title[0]), external_react_default.a.createElement(StyleLink, {
      href: item.link
    }, external_react_default.a.createElement(webcomps["d" /* Span */], {
      color: item.hexCode
    }, item.hightLight)), external_react_default.a.createElement(webcomps["d" /* Span */], null, item.title[1]));
  })));
};

/* harmony default export */ var components_taskList = (taskList_TaskList);
// EXTERNAL MODULE: ./pages/home/skillset.js
var skillset = __webpack_require__("SCHq");

// EXTERNAL MODULE: ./pages/home/whoami.js
var whoami = __webpack_require__("uzir");

// EXTERNAL MODULE: ./pages/home/contactme.js
var contactme = __webpack_require__("xz5Z");

// EXTERNAL MODULE: ./pages/home/dataConstants.js
var dataConstants = __webpack_require__("UriX");

// CONCATENATED MODULE: ./pages/home/index.js









var TitleWrapper = external_styled_components_default.a.p.withConfig({
  displayName: "home__TitleWrapper",
  componentId: "tls23u-0"
})(["font-size:36px;opacity:0.5;font-family:'Monoton',cursive;text-align:right;margin-right:8px;@media (max-width:767px){margin-right:0px;text-align:center;}"]);

var home_Index = function Index() {
  return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(wrappers["a" /* CompressContainer */], null, external_react_default.a.createElement(whoami["default"], null), external_react_default.a.createElement(skillset["default"], null), external_react_default.a.createElement(components_taskList, {
    listHeader: "ls projects/",
    taskList: dataConstants["projectsList"]
  }), external_react_default.a.createElement(components_taskList, {
    listHeader: "history",
    taskList: dataConstants["historyList"]
  }), external_react_default.a.createElement(components_taskList, {
    listHeader: "ls articles/",
    taskList: dataConstants["articlesList"]
  }), external_react_default.a.createElement(contactme["default"], null)), external_react_default.a.createElement(TitleWrapper, null, "NEVER SETTLE"));
};

/* harmony default export */ var home = __webpack_exports__["default"] = (home_Index);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "QzP2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Container */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompressContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SectionContainer; });
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
var SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "wrappers__SectionContainer",
  componentId: "sc-1mlzmjp-2"
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

/***/ "SCHq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5pYx");
/* harmony import */ var _components_webcomps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("S2si");
/* harmony import */ var _components_wrappers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QzP2");
/* harmony import */ var _dataConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("UriX");






var CategoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "skillset__CategoryTitle",
  componentId: "sc-12a46nl-0"
})(["font-size:1.8em;margin:0 0 0.5em;color:#54C9FF;"]);

var Skillset = function Skillset() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrappers__WEBPACK_IMPORTED_MODULE_4__[/* SectionContainer */ "b"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sectionTitle__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "cat skills.md"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__[/* Row */ "c"], null, _dataConstants__WEBPACK_IMPORTED_MODULE_5__["skillsetList"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__[/* ColDiff */ "a"], {
      key: item.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryTitle, null, item.title), item.value.map(function (subitem) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__[/* LiWrapper */ "b"], {
        key: subitem
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, subitem));
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Skillset);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UriX":
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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ }),

/***/ "xz5Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5pYx");
/* harmony import */ var _components_webcomps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("S2si");
/* harmony import */ var _components_wrappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QzP2");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrappers__WEBPACK_IMPORTED_MODULE_3__[/* SectionContainer */ "b"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sectionTitle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "cat Contact.md"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "e"], null, "You can get in touch via E-mail."));
});

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });