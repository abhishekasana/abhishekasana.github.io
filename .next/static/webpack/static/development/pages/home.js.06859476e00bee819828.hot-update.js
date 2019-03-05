webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/taskList.js":
/*!********************************!*\
  !*** ./components/taskList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _webcomps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webcomps */ "./components/webcomps.js");
/* harmony import */ var _wrappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrappers */ "./components/wrappers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _sectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sectionTitle */ "./components/sectionTitle.js");







var StyleLink = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.withConfig({
  displayName: "taskList__StyleLink",
  componentId: "ksnv82-0"
})(["text-decoration:none;"]);
var UlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].ul.withConfig({
  displayName: "taskList__UlWrapper",
  componentId: "ksnv82-1"
})(["@media (max-width:767px){margin-left:0px;}"]);

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

/***/ })

})
//# sourceMappingURL=home.js.06859476e00bee819828.hot-update.js.map