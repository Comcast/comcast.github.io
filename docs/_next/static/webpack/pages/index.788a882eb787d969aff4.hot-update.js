webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ArticleList/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ArticleList/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/ArticleList/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/ArticleList/index.jsx\",\n    _this = undefined;\n\n/* eslint-disable no-bitwise */\n\n\n\nvar ArticleList = function ArticleList(_ref) {\n  var content = _ref.content;\n  var articles = content.map(function (_ref2) {\n    var title = _ref2.title,\n        date = _ref2.date,\n        image = _ref2.image,\n        url = _ref2.url;\n\n    var hashCode = function hashCode(s) {\n      return s.split('').reduce(function (a, b) {\n        var newA = (a << 5) - a + b.charCodeAt(0);\n        return newA & newA;\n      }, 0);\n    };\n\n    function intToRGB(i) {\n      var c = (i & 0x00FFFFFF).toString(16).toUpperCase();\n      return c;\n    }\n\n    console.log(intToRGB(hashCode('Googles Kelsey Hightower offers tips on how to centralize and evolve IT practices by Matt Asay')));\n    console.log('2', hashCode('Podcast: The Business of Cloud Native with Emily Omier and Nithya Ruff'));\n    console.log('3', hashCode('GPL Initiative Grows Over 40%; More Than 60 Companies Have Joined the Campaign for Greater Predictability in Open Source Licensing'));\n    var backgroundImage = image ? \"url(\".concat(image, \")\") : 'linear-gradient(90deg, rgba(253,185,19,.5) 16%, rgba(243,112,33,.5) 16%, rgba(243,112,33,.5) 33%, rgba(180,40,70,.5) 33%, rgba(180,40,70,.5) 49%, rgba(100,95,170,.5) 49%, rgba(100,95,170,.5) 66%, rgba(0,137,207,.5) 66%, rgba(0,137,207,.5) 82%, rgba(13,177,75,.5) 82%), url(\"/images/blog/_default-blog001.jpg\")';\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"article\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleLink\"],\n        href: url,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleImage\"],\n          style: {\n            backgroundImage: backgroundImage\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleTitle\"],\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleDate\"],\n          children: date\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)\n    }, \"articles\".concat(date), false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"articleList\"],\n    children: articles\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ArticleList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleList);\nArticleList.propTypes = {\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QvaW5kZXguanN4PzdiZjQiXSwibmFtZXMiOlsiQXJ0aWNsZUxpc3QiLCJjb250ZW50IiwiYXJ0aWNsZXMiLCJtYXAiLCJ0aXRsZSIsImRhdGUiLCJpbWFnZSIsInVybCIsImhhc2hDb2RlIiwicyIsInNwbGl0IiwicmVkdWNlIiwiYSIsImIiLCJuZXdBIiwiY2hhckNvZGVBdCIsImludFRvUkdCIiwiaSIsImMiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRJbWFnZSIsImFydGljbGUiLCJhcnRpY2xlTGluayIsImFydGljbGVJbWFnZSIsImFydGljbGVUaXRsZSIsImFydGljbGVEYXRlIiwiYXJ0aWNsZUxpc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQVNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ25DLE1BQU1DLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksaUJBS3ZCO0FBQUEsUUFKSkMsS0FJSSxTQUpKQSxLQUlJO0FBQUEsUUFISkMsSUFHSSxTQUhKQSxJQUdJO0FBQUEsUUFGSkMsS0FFSSxTQUZKQSxLQUVJO0FBQUEsUUFESkMsR0FDSSxTQURKQSxHQUNJOztBQUNKLFFBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUSxFQUFSLEVBQVlDLE1BQVosQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFBRSxZQUFNQyxJQUFJLEdBQUksQ0FBQ0YsQ0FBQyxJQUFJLENBQU4sSUFBV0EsQ0FBWixHQUFpQkMsQ0FBQyxDQUFDRSxVQUFGLENBQWEsQ0FBYixDQUE5QjtBQUErQyxlQUFPRCxJQUFJLEdBQUdBLElBQWQ7QUFBcUIsT0FBbkcsRUFBcUcsQ0FBckcsQ0FBUDtBQUFBLEtBQWpCOztBQUVBLGFBQVNFLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ25CLFVBQU1DLENBQUMsR0FBRyxDQUFDRCxDQUFDLEdBQUcsVUFBTCxFQUNQRSxRQURPLENBQ0UsRUFERixFQUVQQyxXQUZPLEVBQVY7QUFHQSxhQUFPRixDQUFQO0FBQ0Q7O0FBRURHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFRLENBQUNSLFFBQVEsQ0FBQyxnR0FBRCxDQUFULENBQXBCO0FBQ0FhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUJkLFFBQVEsQ0FBQyx3RUFBRCxDQUF6QjtBQUNBYSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaLEVBQWlCZCxRQUFRLENBQUMsb0lBQUQsQ0FBekI7QUFFQSxRQUFNZSxlQUFlLEdBQUdqQixLQUFLLGlCQUFVQSxLQUFWLFNBQXFCLHVUQUFsRDtBQUVBLHdCQUNFO0FBQVMsZUFBUyxFQUFFa0IseURBQXBCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFQyw2REFBZDtBQUEyQixZQUFJLEVBQUVsQixHQUFqQztBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRW1CLDhEQUFoQjtBQUE4QixlQUFLLEVBQUU7QUFBRUgsMkJBQWUsRUFBZkE7QUFBRjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFFSSw4REFBZjtBQUFBLG9CQUE4QnZCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFHLG1CQUFTLEVBQUV3Qiw2REFBZDtBQUFBLG9CQUE0QnZCO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYseUJBQTZDQSxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFTRCxHQTlCZ0IsQ0FBakI7QUFnQ0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUV3Qiw2REFBcEI7QUFBQSxjQUNHM0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQXRDRDs7S0FBTUYsVztBQXdDU0EsMEVBQWY7QUFFQUEsV0FBVyxDQUFDOEIsU0FBWixHQUF3QjtBQUN0QjdCLFNBQU8sRUFBRThCLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JDO0FBREwsQ0FBeEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlTGlzdC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge1xuICBhcnRpY2xlTGlzdCxcbiAgYXJ0aWNsZSxcbiAgYXJ0aWNsZVRpdGxlLFxuICBhcnRpY2xlTGluayxcbiAgYXJ0aWNsZUltYWdlLFxuICBhcnRpY2xlRGF0ZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgQXJ0aWNsZUxpc3QgPSAoeyBjb250ZW50IH0pID0+IHtcbiAgY29uc3QgYXJ0aWNsZXMgPSBjb250ZW50Lm1hcCgoe1xuICAgIHRpdGxlLFxuICAgIGRhdGUsXG4gICAgaW1hZ2UsXG4gICAgdXJsLFxuICB9KSA9PiB7XG4gICAgY29uc3QgaGFzaENvZGUgPSAocykgPT4gcy5zcGxpdCgnJykucmVkdWNlKChhLCBiKSA9PiB7IGNvbnN0IG5ld0EgPSAoKGEgPDwgNSkgLSBhKSArIGIuY2hhckNvZGVBdCgwKTsgcmV0dXJuIG5ld0EgJiBuZXdBOyB9LCAwKTtcblxuICAgIGZ1bmN0aW9uIGludFRvUkdCKGkpIHtcbiAgICAgIGNvbnN0IGMgPSAoaSAmIDB4MDBGRkZGRkYpXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnRvVXBwZXJDYXNlKCk7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhpbnRUb1JHQihoYXNoQ29kZSgnR29vZ2xlcyBLZWxzZXkgSGlnaHRvd2VyIG9mZmVycyB0aXBzIG9uIGhvdyB0byBjZW50cmFsaXplIGFuZCBldm9sdmUgSVQgcHJhY3RpY2VzIGJ5IE1hdHQgQXNheScpKSk7XG4gICAgY29uc29sZS5sb2coJzInLCBoYXNoQ29kZSgnUG9kY2FzdDogVGhlIEJ1c2luZXNzIG9mIENsb3VkIE5hdGl2ZSB3aXRoIEVtaWx5IE9taWVyIGFuZCBOaXRoeWEgUnVmZicpKTtcbiAgICBjb25zb2xlLmxvZygnMycsIGhhc2hDb2RlKCdHUEwgSW5pdGlhdGl2ZSBHcm93cyBPdmVyIDQwJTsgTW9yZSBUaGFuIDYwIENvbXBhbmllcyBIYXZlIEpvaW5lZCB0aGUgQ2FtcGFpZ24gZm9yIEdyZWF0ZXIgUHJlZGljdGFiaWxpdHkgaW4gT3BlbiBTb3VyY2UgTGljZW5zaW5nJykpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gaW1hZ2UgPyBgdXJsKCR7aW1hZ2V9KWAgOiAnbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1MywxODUsMTksLjUpIDE2JSwgcmdiYSgyNDMsMTEyLDMzLC41KSAxNiUsIHJnYmEoMjQzLDExMiwzMywuNSkgMzMlLCByZ2JhKDE4MCw0MCw3MCwuNSkgMzMlLCByZ2JhKDE4MCw0MCw3MCwuNSkgNDklLCByZ2JhKDEwMCw5NSwxNzAsLjUpIDQ5JSwgcmdiYSgxMDAsOTUsMTcwLC41KSA2NiUsIHJnYmEoMCwxMzcsMjA3LC41KSA2NiUsIHJnYmEoMCwxMzcsMjA3LC41KSA4MiUsIHJnYmEoMTMsMTc3LDc1LC41KSA4MiUpLCB1cmwoXCIvaW1hZ2VzL2Jsb2cvX2RlZmF1bHQtYmxvZzAwMS5qcGdcIiknO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YXJ0aWNsZX0ga2V5PXtgYXJ0aWNsZXMke2RhdGV9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17YXJ0aWNsZUxpbmt9IGhyZWY9e3VybH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FydGljbGVJbWFnZX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlIH19IC8+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17YXJ0aWNsZVRpdGxlfT57dGl0bGV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2FydGljbGVEYXRlfT57ZGF0ZX08L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YXJ0aWNsZUxpc3R9PlxuICAgICAge2FydGljbGVzfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0O1xuXG5BcnRpY2xlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5hcnJheU9mLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ArticleList/index.jsx\n");

/***/ })

})