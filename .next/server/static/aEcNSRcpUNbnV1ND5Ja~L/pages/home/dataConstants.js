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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UriX");


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


/***/ })

/******/ });