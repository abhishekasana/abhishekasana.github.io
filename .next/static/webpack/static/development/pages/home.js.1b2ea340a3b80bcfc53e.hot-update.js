webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home/skillset.js":
/*!********************************!*\
  !*** ./pages/home/skillset.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_sectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sectionTitle */ "./components/sectionTitle.js");
/* harmony import */ var _components_webcomps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/webcomps */ "./components/webcomps.js");
/* harmony import */ var _components_wrappers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/wrappers */ "./components/wrappers.js");
/* harmony import */ var _dataConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataConstants */ "./pages/home/dataConstants.js");






var CategoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "skillset__CategoryTitle",
  componentId: "sc-12a46nl-0"
})(["font-size:1.8em;margin:0 0 0.5em;color:#54C9FF;"]);

var Skillset = function Skillset() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_wrappers__WEBPACK_IMPORTED_MODULE_4__["SectionContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sectionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "cat skills.md"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__["Row"], null, _dataConstants__WEBPACK_IMPORTED_MODULE_5__["skillsetList"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__["ColDiff"], {
      key: item.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryTitle, null, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__["UlWrapper"], {
      startPadding: 0
    }, item.value.map(function (subitem) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__["LiWrapper"], {
        key: subitem
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, subitem));
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Skillset);

/***/ })

})
//# sourceMappingURL=home.js.1b2ea340a3b80bcfc53e.hot-update.js.map