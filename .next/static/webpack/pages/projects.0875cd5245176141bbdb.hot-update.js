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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.jsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bulma/css/bulma.css */ \"./node_modules/bulma/css/bulma.css\");\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/matheus/portifolio/pages/projects.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Projects() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      projects = _useState2[0],\n      setPorjects = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _services_api__WEBPACK_IMPORTED_MODULE_3__.default.get('/projects').then(function (response) {\n      return setPorjects(response.data);\n    })[\"catch\"](function (err) {\n      return err;\n    });\n    setLoading(false);\n  }, [loading]);\n  console.log(projects);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: \"box\",\n      children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 20\n      }, this) : projects.map(function (project) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"container\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: project.img,\n            alt: project.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, _this), project.name]\n        }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(), true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Projects, \"SWI6iz4jriDWqq/8mb8Mxm65uuk=\");\n\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hOLCtDQUFRLENBQUMsSUFBRCxDQURMO0FBQUEsTUFDMUJPLE9BRDBCO0FBQUEsTUFDakJDLFVBRGlCOztBQUFBLG1CQUVEUiwrQ0FBUSxDQUFDLEVBQUQsQ0FGUDtBQUFBLE1BRTFCUyxRQUYwQjtBQUFBLE1BRWhCQyxXQUZnQjs7QUFJakNYLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkSyxJQUFBQSxzREFBQSxDQUFRLFdBQVIsRUFDR1EsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjSCxXQUFXLENBQUNHLFFBQVEsQ0FBQ0MsSUFBVixDQUF6QjtBQUFBLEtBRFIsV0FFUyxVQUFDQyxHQUFEO0FBQUEsYUFBVUEsR0FBVjtBQUFBLEtBRlQ7QUFHQVAsSUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBTFEsRUFLTixDQUFDRCxPQUFELENBTE0sQ0FBVDtBQU1BUyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFTLGVBQVMsRUFBQyxLQUFuQjtBQUFBLGdCQUNHRixPQUFPLGdCQUFHLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxHQUNKRSxRQUFRLENBQUNTLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsNEJBQ2I7QUFFRSxtQkFBUyxFQUFDLFdBRlo7QUFBQSxrQ0FJRTtBQUFLLGVBQUcsRUFBRUEsT0FBTyxDQUFDQyxHQUFsQjtBQUF1QixlQUFHLEVBQUVELE9BQU8sQ0FBQ0U7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQUtHRixPQUFPLENBQUNFLElBTFg7QUFBQSxXQUNPbkIsd0NBQU0sRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBYjtBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0E1QnVCSTs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanN4P2RhNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEuY3NzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQb3JqZWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGkuZ2V0KCcvcHJvamVjdHMnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRQb3JqZWN0cyhyZXNwb25zZS5kYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiAoZXJyKSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtsb2FkaW5nXSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmcgLz5cbiAgICAgICAgICA6IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdC5pbWd9IGFsdD17cHJvamVjdC5uYW1lfSAvPlxuICAgICAgICAgICAgICB7cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiTmF2YmFyIiwiYXBpIiwiTG9hZGluZyIsIlByb2plY3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwcm9qZWN0cyIsInNldFBvcmplY3RzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwcm9qZWN0IiwiaW1nIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.jsx\n");

/***/ })

});