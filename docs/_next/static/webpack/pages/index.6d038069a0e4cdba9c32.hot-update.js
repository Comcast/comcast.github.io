webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/EventCountdown/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/EventCountdown/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ \"./src/components/Icon/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/EventCountdown/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/EventCountdown/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar monthLongName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nvar Countdown = function Countdown(_ref) {\n  _s();\n\n  var time = _ref.time;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Date.parse(time) - Date.parse(new Date())),\n      countdown = _useState[0],\n      setCountdown = _useState[1];\n\n  var getTimeLeft = function getTimeLeft(timestamp) {\n    var total = Date.parse(timestamp) - Date.parse(new Date());\n    var seconds = Math.floor(total / 1000 % 60);\n    var minutes = Math.floor(total / 1000 / 60 % 60);\n    var hours = Math.floor(total / (1000 * 60 * 60) % 24);\n    var days = Math.floor(total / (1000 * 60 * 60 * 24));\n    return {\n      total: total,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var interval = null;\n    interval = setInterval(function () {\n      setCountdown(getTimeLeft(countdown).total - 1000);\n    }, 1000);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [countdown]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [countdown, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(countdown).seconds\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 10\n      }, _this), \" seconds\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(countdown).minutes\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 10\n      }, _this), \" minutes\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(countdown).hours\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 10\n      }, _this), \" hours\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: getTimeLeft(countdown).days\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 10\n      }, _this), \" days\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Countdown, \"6srfHoTKKdzUT1HMlCI8ERukyQk=\");\n\n_c = Countdown;\nCountdown.propTypes = {\n  time: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n\nvar EventCountdown = function EventCountdown(_ref2) {\n  var content = _ref2.content;\n  var events = content.map(function (_ref3) {\n    var name = _ref3.name,\n        description = _ref3.description,\n        start = _ref3.start,\n        end = _ref3.end,\n        image = _ref3.image,\n        url = _ref3.url;\n    var begin = new Date(start);\n    var beginMonth = monthLongName[begin.getMonth()];\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"event\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventImage\"],\n          children: image ? 'image' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"messages\",\n            color: \"blue\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 58\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventInfo\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventTitle\"],\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventDate\"],\n            children: beginMonth\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Countdown, {\n            time: start\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventDescription\"],\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)\n    }, \"events\".concat(name), false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"eventList\"],\n    children: events\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = EventCountdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventCountdown);\nEventCountdown.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf.isRequired\n};\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Countdown\");\n$RefreshReg$(_c2, \"EventCountdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRDb3VudGRvd24vaW5kZXguanN4P2YwZDgiXSwibmFtZXMiOlsibW9udGhMb25nTmFtZSIsIkNvdW50ZG93biIsInRpbWUiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJwYXJzZSIsImNvdW50ZG93biIsInNldENvdW50ZG93biIsImdldFRpbWVMZWZ0IiwidGltZXN0YW1wIiwidG90YWwiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsImhvdXJzIiwiZGF5cyIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkV2ZW50Q291bnRkb3duIiwiY29udGVudCIsImV2ZW50cyIsIm1hcCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXJ0IiwiZW5kIiwiaW1hZ2UiLCJ1cmwiLCJiZWdpbiIsImJlZ2luTW9udGgiLCJnZXRNb250aCIsImV2ZW50IiwiZXZlbnRMaW5rIiwiZXZlbnRJbWFnZSIsImV2ZW50SW5mbyIsImV2ZW50VGl0bGUiLCJldmVudERhdGUiLCJldmVudERlc2NyaXB0aW9uIiwiZXZlbnRMaXN0IiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVdBLElBQU1BLGFBQWEsR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQ3BCLE1BRG9CLEVBQ1osUUFEWSxFQUNGLFdBREUsRUFDVyxTQURYLEVBQ3NCLFVBRHRCLEVBQ2tDLFVBRGxDLENBQXRCOztBQUdBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0lDLHNE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LHVCQUF5Q0QsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBY0QsR0F6QmMsQ0FBZjtBQTJCQSxzQkFDRTtBQUFTLGFBQVMsRUFBRWdCLDJEQUFwQjtBQUFBLGNBQ0dsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBakNEOztNQUFNRixjO0FBbUNTQSw2RUFBZjtBQUVBQSxjQUFjLENBQUNKLFNBQWYsR0FBMkI7QUFDekJLLFNBQU8sRUFBRUosaURBQVMsQ0FBQ3dCLE9BQVYsQ0FBa0J0QjtBQURGLENBQTNCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRXZlbnRDb3VudGRvd24vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuaW1wb3J0IHtcbiAgZXZlbnRMaXN0LFxuICBldmVudCxcbiAgZXZlbnRJbmZvLFxuICBldmVudFRpdGxlLFxuICBldmVudExpbmssXG4gIGV2ZW50RGVzY3JpcHRpb24sXG4gIGV2ZW50SW1hZ2UsXG4gIGV2ZW50RGF0ZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgbW9udGhMb25nTmFtZSA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG4gICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG5jb25zdCBDb3VudGRvd24gPSAoeyB0aW1lIH0pID0+IHtcbiAgY29uc3QgW2NvdW50ZG93biwgc2V0Q291bnRkb3duXSA9IHVzZVN0YXRlKERhdGUucGFyc2UodGltZSkgLSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpKTtcblxuICBjb25zdCBnZXRUaW1lTGVmdCA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IERhdGUucGFyc2UodGltZXN0YW1wKSAtIERhdGUucGFyc2UobmV3IERhdGUoKSk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gMTAwMCkgJSA2MCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gMTAwMCAvIDYwKSAlIDYwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRvdGFsIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodG90YWwgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsLFxuICAgICAgZGF5cyxcbiAgICAgIGhvdXJzLFxuICAgICAgbWludXRlcyxcbiAgICAgIHNlY29uZHMsXG4gICAgfTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpbnRlcnZhbCA9IG51bGw7XG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDb3VudGRvd24oZ2V0VGltZUxlZnQoY291bnRkb3duKS50b3RhbCAtIDEwMDApO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2NvdW50ZG93bl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD57Y291bnRkb3dufVxuICAgICAgPHA+PHN0cm9uZz57Z2V0VGltZUxlZnQoY291bnRkb3duKS5zZWNvbmRzfTwvc3Ryb25nPiBzZWNvbmRzPC9wPlxuICAgICAgPHA+PHN0cm9uZz57Z2V0VGltZUxlZnQoY291bnRkb3duKS5taW51dGVzfTwvc3Ryb25nPiBtaW51dGVzPC9wPlxuICAgICAgPHA+PHN0cm9uZz57Z2V0VGltZUxlZnQoY291bnRkb3duKS5ob3Vyc308L3N0cm9uZz4gaG91cnM8L3A+XG4gICAgICA8cD48c3Ryb25nPntnZXRUaW1lTGVmdChjb3VudGRvd24pLmRheXN9PC9zdHJvbmc+IGRheXM8L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Db3VudGRvd24ucHJvcFR5cGVzID0ge1xuICB0aW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBFdmVudENvdW50ZG93biA9ICh7IGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCBldmVudHMgPSBjb250ZW50Lm1hcCgoe1xuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgc3RhcnQsXG4gICAgZW5kLFxuICAgIGltYWdlLFxuICAgIHVybCxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGJlZ2luID0gbmV3IERhdGUoc3RhcnQpO1xuICAgIGNvbnN0IGJlZ2luTW9udGggPSBtb250aExvbmdOYW1lW2JlZ2luLmdldE1vbnRoKCldO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17ZXZlbnR9IGtleT17YGV2ZW50cyR7bmFtZX1gfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtldmVudExpbmt9IGhyZWY9e3VybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V2ZW50SW1hZ2V9PntpbWFnZSA/ICdpbWFnZScgOiA8SWNvbiB0eXBlPVwibWVzc2FnZXNcIiBjb2xvcj1cImJsdWVcIiAvPn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXZlbnRJbmZvfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2V2ZW50VGl0bGV9PntuYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2V2ZW50RGF0ZX0+e2JlZ2luTW9udGh9PC9wPlxuICAgICAgICAgICAgPENvdW50ZG93biB0aW1lPXtzdGFydH0gLz5cbiAgICAgICAgICAgIHsvKiA8cD57RGF0ZS5wYXJzZShmaW5hbCl9IHtiZWdpbk1vbnRofSB7YmVnaW5EYXRlfSwge2JlZ2luRnVsbFllYXJ9PC9wPiAqL31cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZXZlbnREZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtldmVudExpc3R9PlxuICAgICAge2V2ZW50c31cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudENvdW50ZG93bjtcblxuRXZlbnRDb3VudGRvd24ucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuYXJyYXlPZi5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EventCountdown/index.jsx\n");

/***/ })

})