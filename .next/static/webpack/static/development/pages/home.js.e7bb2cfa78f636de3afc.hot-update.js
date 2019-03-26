webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/webcomps.js":
/*!********************************!*\
  !*** ./components/webcomps.js ***!
  \********************************/
/*! exports provided: Row, Text, Col, Span, ColDiff, LiWrapper, UlWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColDiff", function() { return ColDiff; });
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
})(["box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:column;"]);
var ColDiff = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "webcomps__ColDiff",
  componentId: "sc-41l5u6-2"
})(["box-sizing:border-box;display:flex;flex:0 1 auto;flex-basis:", ";flex-direction:column;@media (max-width:767px){flex-basis:100%;};"], function (props) {
  return props.flexbasis ? props.flexbasis : '33%';
});
var UlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "webcomps__UlWrapper",
  componentId: "sc-41l5u6-3"
})(["padding-left:", ";margin:0px;@media (max-width:767px){padding-left:12px;}"], function (props) {
  return props.startPadding ? props.startPadding : '26px';
});
var LiWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "webcomps__LiWrapper",
  componentId: "sc-41l5u6-4"
})(["color:#54C9FF;margin-bottom:.7em;list-style:none;&:before{content:'~';margin-right:1rem;};span{color:#fff;}"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "webcomps__Text",
  componentId: "sc-41l5u6-5"
})(["font-size:", ";"], function (props) {
  return props.size ? props.size : '18px';
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "webcomps__Span",
  componentId: "sc-41l5u6-6"
})(["font-size:", ";color:", " !important;"], function (props) {
  return props.size ? props.size : '18px';
}, function (props) {
  return props.color;
});


/***/ })

})
//# sourceMappingURL=home.js.e7bb2cfa78f636de3afc.hot-update.js.map