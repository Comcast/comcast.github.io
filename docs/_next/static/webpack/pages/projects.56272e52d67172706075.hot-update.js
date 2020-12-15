webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/Pagination/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/Pagination/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Pagination/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Pagination/index.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar paginate = function paginate(endPage, onPageSelect) {\n  var n = 0;\n  var pages = [];\n\n  while (n < endPage) {\n    n += 1;\n    pages.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: function onClick(e) {\n        return onPageSelect(e);\n      },\n      value: n,\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"page\"],\n      children: n\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 16\n    }, _this));\n  }\n\n  return pages;\n};\n\nvar Pagination = function Pagination(_ref) {\n  var count = _ref.count,\n      onPageSelect = _ref.onPageSelect;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"pagination\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [count, \" repo\", count > 1 && 's']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, _this), count > 10 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"\\u2190\", paginate(Math.ceil(count / 10), onPageSelect), \"\\u2192\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"page 1 of \", Math.ceil(count / 10)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nPagination.propTypes = {\n  count: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,\n  onPageSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC5qc3g/ZjE2MCJdLCJuYW1lcyI6WyJwYWdpbmF0ZSIsImVuZFBhZ2UiLCJvblBhZ2VTZWxlY3QiLCJuIiwicGFnZXMiLCJwdXNoIiwiZSIsInBhZ2UiLCJQYWdpbmF0aW9uIiwiY291bnQiLCJwYWdpbmF0aW9uIiwiTWF0aCIsImNlaWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsT0FBRCxFQUFVQyxZQUFWLEVBQTJCO0FBQzFDLE1BQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEVBQWQ7O0FBQ0EsU0FBT0QsQ0FBQyxHQUFHRixPQUFYLEVBQW9CO0FBQ2xCRSxLQUFDLElBQUksQ0FBTDtBQUNBQyxTQUFLLENBQUNDLElBQU4sZUFBVztBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGVBQU9KLFlBQVksQ0FBQ0ksQ0FBRCxDQUFuQjtBQUFBLE9BQS9CO0FBQXVELFdBQUssRUFBRUgsQ0FBOUQ7QUFBaUUsZUFBUyxFQUFFSSxzREFBNUU7QUFBQSxnQkFBbUZKO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWDtBQUNEOztBQUNELFNBQU9DLEtBQVA7QUFDRCxDQVJEOztBQVVBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVVAsWUFBVixRQUFVQSxZQUFWO0FBQUEsc0JBQ2pCO0FBQUssYUFBUyxFQUFFUSw0REFBaEI7QUFBQSw0QkFDRTtBQUFBLGlCQUFJRCxLQUFKLFdBQWdCQSxLQUFLLEdBQUcsQ0FBUixJQUFhLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdBLEtBQUssR0FBRyxFQUFSLGlCQUNDO0FBQUEsMkJBRUdULFFBQVEsQ0FBQ1csSUFBSSxDQUFDQyxJQUFMLENBQVVILEtBQUssR0FBRyxFQUFsQixDQUFELEVBQXdCUCxZQUF4QixDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBU0U7QUFBQSwrQkFBY1MsSUFBSSxDQUFDQyxJQUFMLENBQVVILEtBQUssR0FBRyxFQUFsQixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURpQjtBQUFBLENBQW5COztLQUFNRCxVO0FBY1NBLHlFQUFmO0FBRUFBLFVBQVUsQ0FBQ0ssU0FBWCxHQUF1QjtBQUNyQkosT0FBSyxFQUFFSyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURIO0FBRXJCZCxjQUFZLEVBQUVZLGlEQUFTLENBQUNHLElBQVYsQ0FBZUQ7QUFGUixDQUF2QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge1xuICBwYWdpbmF0aW9uLFxuICBwYWdlLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuY29uc3QgcGFnaW5hdGUgPSAoZW5kUGFnZSwgb25QYWdlU2VsZWN0KSA9PiB7XG4gIGxldCBuID0gMDtcbiAgY29uc3QgcGFnZXMgPSBbXTtcbiAgd2hpbGUgKG4gPCBlbmRQYWdlKSB7XG4gICAgbiArPSAxO1xuICAgIHBhZ2VzLnB1c2goPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IG9uUGFnZVNlbGVjdChlKX0gdmFsdWU9e259IGNsYXNzTmFtZT17cGFnZX0+e259PC9idXR0b24+KTtcbiAgfVxuICByZXR1cm4gcGFnZXM7XG59O1xuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgY291bnQsIG9uUGFnZVNlbGVjdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtwYWdpbmF0aW9ufT5cbiAgICA8cD57Y291bnR9IHJlcG97Y291bnQgPiAxICYmICdzJ308L3A+XG4gICAge2NvdW50ID4gMTAgJiYgKFxuICAgICAgPHA+XG4gICAgICAgICZsYXJyO1xuICAgICAgICB7cGFnaW5hdGUoTWF0aC5jZWlsKGNvdW50IC8gMTApLCBvblBhZ2VTZWxlY3QpfVxuICAgICAgICAmcmFycjtcbiAgICAgIDwvcD5cbiAgICApfVxuICAgIDxwPnBhZ2UgMSBvZiB7TWF0aC5jZWlsKGNvdW50IC8gMTApfTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25QYWdlU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.jsx\n");

/***/ })

})