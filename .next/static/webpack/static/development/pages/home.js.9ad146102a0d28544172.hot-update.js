webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/webcomps.js":
/*!********************************!*\
  !*** ./components/webcomps.js ***!
  \********************************/
/*! exports provided: Row, Text, Col, Span, LiWrapper, UlWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiWrapper", function() { return LiWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlWrapper", function() { return UlWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "webcomps__Row",
  componentId: "sc-41l5u6-0"
})(["box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;"]);
var Col = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "webcomps__Col",
  componentId: "sc-41l5u6-1"
})(["box-sizing:border-box;display:flex;flex:0 1 auto;flex-basis:", ";flex-direction:column;@media (max-width:767px){flex-basis:100%;};"], function (props) {
  return props.flexbasis ? props.flexbasis : '100%';
});
var UlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "webcomps__UlWrapper",
  componentId: "sc-41l5u6-2"
})(["padding-left:", ";margin:0px;@media (max-width:767px){padding-left:12px;}"], function (props) {
  return props.startPadding ? props.startPadding : '26px';
});
var LiWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "webcomps__LiWrapper",
  componentId: "sc-41l5u6-3"
})(["color:#54C9FF;margin-bottom:.7em;list-style:none;&:before{content:'~';margin-right:1rem;};span{color:#fff;}"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "webcomps__Text",
  componentId: "sc-41l5u6-4"
})(["font-size:", ";"], function (props) {
  return props.size ? props.size : '18px';
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "webcomps__Span",
  componentId: "sc-41l5u6-5"
})(["font-size:", ";color:", " !important;"], function (props) {
  return props.size ? props.size : '18px';
}, function (props) {
  return props.color;
});


/***/ }),

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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      flexbasis: "33%",
      key: item.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryTitle, null, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_webcomps__WEBPACK_IMPORTED_MODULE_3__["UlWrapper"], {
      startPadding: "0px"
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
//# sourceMappingURL=home.js.9ad146102a0d28544172.hot-update.js.map