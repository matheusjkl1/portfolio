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

/***/ "./components/projectContent.jsx":
/*!***************************************!*\
  !*** ./components/projectContent.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.module.css */ \"./components/content.module.css\");\n/* harmony import */ var _content_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/matheus/portifolio/components/projectContent.jsx\",\n    _s = $RefreshSig$();\n\n // import Link from 'next/link';\n\n\n\nfunction ProjectContent() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      setData = _useState[0];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _services_api__WEBPACK_IMPORTED_MODULE_2__.default.get('/').then(function (response) {\n      return setData(response.data);\n    })[\"catch\"](function (err) {\n      return \"ops! ocorreu um erro\".concat(err);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_content_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainContent),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"oi\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProjectContent, \"MyHJkqWbCG9d9pnA9EJvDFhrd0w=\");\n\n_c = ProjectContent;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RDb250ZW50LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFFZSxTQUFTSyxjQUFULEdBQTBCO0FBQUE7O0FBQUEsa0JBQ3JCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FEYTtBQUFBLE1BQ2hDSSxPQURnQzs7QUFHdkNMLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkRyxJQUFBQSxzREFBQSxDQUNPLEdBRFAsRUFFR0ksSUFGSCxDQUVRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjSCxPQUFPLENBQUNHLFFBQVEsQ0FBQ0MsSUFBVixDQUFyQjtBQUFBLEtBRlIsV0FHUyxVQUFDQyxHQUFEO0FBQUEsMkNBQWlDQSxHQUFqQztBQUFBLEtBSFQ7QUFJRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVSLHdFQUFoQjtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBZHVCRTs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0Q29udGVudC5qc3g/ZDVhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29udGVudC5tb2R1bGUuY3NzJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vc2VydmljZXMvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdENvbnRlbnQoKSB7XG4gIGNvbnN0IFtzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwaVxuICAgICAgLmdldCgnLycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHNldERhdGEocmVzcG9uc2UuZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycikgPT4gKGBvcHMhIG9jb3JyZXUgdW0gZXJybyR7ZXJyfWApKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRlbnR9PlxuICAgICAgPGgxPm9pPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiYXBpIiwiUHJvamVjdENvbnRlbnQiLCJzZXREYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsIm1haW5Db250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projectContent.jsx\n");

/***/ })

});