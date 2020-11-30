webpackHotUpdate_N_E("pages/events",{

/***/ "./src/pages/events.jsx":
/*!******************************!*\
  !*** ./src/pages/events.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.jsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var _components_EventList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EventList */ \"./src/components/EventList/index.jsx\");\n/* harmony import */ var _data_events_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/events.json */ \"./src/data/events.json\");\nvar _data_events_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/events.json */ \"./src/data/events.json\", 1);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/pages/events.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Events = function Events() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: _data_events_json__WEBPACK_IMPORTED_MODULE_5__[\"title\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: _data_events_json__WEBPACK_IMPORTED_MODULE_5__[\"title\"]\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: _data_events_json__WEBPACK_IMPORTED_MODULE_5__[\"title\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        children: [_data_events_json__WEBPACK_IMPORTED_MODULE_5__[\"overview\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"overview\",\n          children: _data_events_json__WEBPACK_IMPORTED_MODULE_5__[\"overview\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 22\n        }, _this), _data_events_json__WEBPACK_IMPORTED_MODULE_5__[\"description\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: _data_events_json__WEBPACK_IMPORTED_MODULE_5__[\"description\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: upcomingTitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_EventList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          content: _data_events_json__WEBPACK_IMPORTED_MODULE_5__[\"eventList\"].filter(function (a) {\n            return new Date(a.end) >= Date.parse(new Date());\n          }).sort(function (a, b) {\n            return new Date(a.end) - new Date(b.end);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: pastTitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_EventList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          content: _data_events_json__WEBPACK_IMPORTED_MODULE_5__[\"eventList\"].filter(function (a) {\n            return new Date(a.end) <= Date.parse(new Date());\n          }).sort(function (a, b) {\n            return new Date(a.end) - new Date(b.end);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Events;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\n\nvar _c;\n\n$RefreshReg$(_c, \"Events\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2V2ZW50cy5qc3g/ZTFmMyJdLCJuYW1lcyI6WyJFdmVudHMiLCJ0aXRsZSIsIm92ZXJ2aWV3IiwiZGVzY3JpcHRpb24iLCJ1cGNvbWluZ1RpdGxlIiwiZXZlbnRMaXN0IiwiZmlsdGVyIiwiYSIsIkRhdGUiLCJlbmQiLCJwYXJzZSIsInNvcnQiLCJiIiwicGFzdFRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLHNCQUNiO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRQyx1REFBS0E7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUVBLHVEQUFLQTtBQUF4QyxTQUE4QyxPQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSxxRUFBQywwREFBRDtBQUFBLDhCQUNFLHFFQUFDLDBEQUFEO0FBQVEsYUFBSyxFQUFFQSx1REFBS0E7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxtQkFDR0MsMERBQVEsaUJBQUk7QUFBRyxtQkFBUyxFQUFDLFVBQWI7QUFBQSxvQkFBeUJBLDBEQUFRQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURmLEVBRUdDLDZEQUFXLGlCQUFJO0FBQUEsb0JBQUlBLDZEQUFXQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBTUU7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFXLGlCQUFPLEVBQUVDLDJEQUFTLENBQzFCQyxNQURpQixDQUNWLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxJQUFJQyxJQUFKLENBQVNELENBQUMsQ0FBQ0UsR0FBWCxLQUFtQkQsSUFBSSxDQUFDRSxLQUFMLENBQVcsSUFBSUYsSUFBSixFQUFYLENBQTFCO0FBQUEsV0FEVSxFQUVqQkcsSUFGaUIsQ0FFWixVQUFDSixDQUFELEVBQUlLLENBQUo7QUFBQSxtQkFBVSxJQUFJSixJQUFKLENBQVNELENBQUMsQ0FBQ0UsR0FBWCxJQUFrQixJQUFJRCxJQUFKLENBQVNJLENBQUMsQ0FBQ0gsR0FBWCxDQUE1QjtBQUFBLFdBRlk7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQWFFO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0k7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBVyxpQkFBTyxFQUFFUiwyREFBUyxDQUMxQkMsTUFEaUIsQ0FDVixVQUFDQyxDQUFEO0FBQUEsbUJBQU8sSUFBSUMsSUFBSixDQUFTRCxDQUFDLENBQUNFLEdBQVgsS0FBbUJELElBQUksQ0FBQ0UsS0FBTCxDQUFXLElBQUlGLElBQUosRUFBWCxDQUExQjtBQUFBLFdBRFUsRUFFakJHLElBRmlCLENBRVosVUFBQ0osQ0FBRCxFQUFJSyxDQUFKO0FBQUEsbUJBQVUsSUFBSUosSUFBSixDQUFTRCxDQUFDLENBQUNFLEdBQVgsSUFBa0IsSUFBSUQsSUFBSixDQUFTSSxDQUFDLENBQUNILEdBQVgsQ0FBNUI7QUFBQSxXQUZZO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQSxrQkFEYTtBQUFBLENBQWY7O0tBQU1ULE07QUE4QlNBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2V2ZW50cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEV2ZW50TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0V2ZW50TGlzdCc7XG5pbXBvcnQge1xuICB0aXRsZSxcbiAgb3ZlcnZpZXcsXG4gIGRlc2NyaXB0aW9uLFxuICBldmVudHNUaXRsZSxcbiAgZXZlbnRMaXN0LFxufSBmcm9tICcuLi9kYXRhL2V2ZW50cy5qc29uJztcblxuY29uc3QgRXZlbnRzID0gKCkgPT4gKFxuICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZGVyIHRpdGxlPXt0aXRsZX0gLz5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICB7b3ZlcnZpZXcgJiYgPHAgY2xhc3NOYW1lPVwib3ZlcnZpZXdcIj57b3ZlcnZpZXd9PC9wPn1cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwPntkZXNjcmlwdGlvbn08L3A+fVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj57dXBjb21pbmdUaXRsZX08L2gyPlxuICAgICAgICA8RXZlbnRMaXN0IGNvbnRlbnQ9e2V2ZW50TGlzdFxuICAgICAgICAgIC5maWx0ZXIoKGEpID0+IG5ldyBEYXRlKGEuZW5kKSA+PSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmVuZCkgLSBuZXcgRGF0ZShiLmVuZCkpfVxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj57cGFzdFRpdGxlfTwvaDI+XG4gICAgICAgIDxFdmVudExpc3QgY29udGVudD17ZXZlbnRMaXN0XG4gICAgICAgICAgLmZpbHRlcigoYSkgPT4gbmV3IERhdGUoYS5lbmQpIDw9IERhdGUucGFyc2UobmV3IERhdGUoKSkpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZW5kKSAtIG5ldyBEYXRlKGIuZW5kKSl9XG4gICAgICAgIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/events.jsx\n");

/***/ })

})