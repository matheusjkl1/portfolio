"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects.jsx":
/*!****************************!*\
  !*** ./pages/projects.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuidv4 */ \"./node_modules/uuidv4/build/lib/uuidv4.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.jsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bulma/css/bulma.css */ \"./node_modules/bulma/css/bulma.css\");\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/matheus/portifolio/pages/projects.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Projects() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      projects = _useState2[0],\n      setPorjects = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _services_api__WEBPACK_IMPORTED_MODULE_4__.default.get('/projects').then(function (response) {\n      return setPorjects(response.data);\n    })[\"catch\"](function (err) {\n      return err;\n    });\n    setLoading(false);\n  }, [loading]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"box\",\n      children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 20\n      }, this) : projects.map(function (project) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"container\",\n          children: project.name\n        }, (0,uuidv4__WEBPACK_IMPORTED_MODULE_2__.v4)(), false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Projects, \"SWI6iz4jriDWqq/8mb8Mxm65uuk=\");\n\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hKLCtDQUFRLENBQUMsSUFBRCxDQURMO0FBQUEsTUFDMUJLLE9BRDBCO0FBQUEsTUFDakJDLFVBRGlCOztBQUFBLG1CQUVETiwrQ0FBUSxDQUFDLEVBQUQsQ0FGUDtBQUFBLE1BRTFCTyxRQUYwQjtBQUFBLE1BRWhCQyxXQUZnQjs7QUFJakNULEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkSSxJQUFBQSxzREFBQSxDQUFRLFdBQVIsRUFDR08sSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjSCxXQUFXLENBQUNHLFFBQVEsQ0FBQ0MsSUFBVixDQUF6QjtBQUFBLEtBRFIsV0FFUyxVQUFDQyxHQUFEO0FBQUEsYUFBVUEsR0FBVjtBQUFBLEtBRlQ7QUFHQVAsSUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBTFEsRUFLTixDQUFDRCxPQUFELENBTE0sQ0FBVDtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFTLGVBQVMsRUFBQyxLQUFuQjtBQUFBLGdCQUNHQSxPQUFPLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsR0FDSkUsUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDRCQUNiO0FBRUUsbUJBQVMsRUFBQyxXQUZaO0FBQUEsb0JBSUdBLE9BQU8sQ0FBQ0M7QUFKWCxXQUNPZiwwQ0FBRSxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFiO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztHQTFCdUJHOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy5qc3g/ZGE0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZHY0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcHJvamVjdHMsIHNldFBvcmplY3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwaS5nZXQoJy9wcm9qZWN0cycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHNldFBvcmplY3RzKHJlc3BvbnNlLmRhdGEpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IChlcnIpKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW2xvYWRpbmddKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgIHtsb2FkaW5nID8gPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgIDogcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17djQoKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ2NCIsIk5hdmJhciIsImFwaSIsIlByb2plY3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwcm9qZWN0cyIsInNldFBvcmplY3RzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsIm1hcCIsInByb2plY3QiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.jsx\n");

/***/ })

});