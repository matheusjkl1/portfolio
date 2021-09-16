/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/projectCard.jsx":
/*!************************************!*\
  !*** ./components/projectCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ projectCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./components/loading.jsx\");\n/* harmony import */ var _projectCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectCard.module.css */ \"./components/projectCard.module.css\");\n/* harmony import */ var _projectCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_projectCard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/matheus/portifolio/components/projectCard.jsx\",\n    _s = $RefreshSig$();\n\n/* eslint-disable no-console */\n\n\n\n\n\nfunction projectCard() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      projects = _useState2[0],\n      setPorjects = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _services_api__WEBPACK_IMPORTED_MODULE_2__.api.get('/projects').then(function (response) {\n      return setPorjects(response.data);\n    })[\"catch\"](function (err) {\n      return console.error(err);\n    });\n    setLoading(false);\n  }, [loading]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: \"box \".concat((_projectCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardContent)),\n    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 18\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: projects.map(function (project) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card project-card\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-image project-card\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n              className: \"image project-card\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"\".concat(_services_api__WEBPACK_IMPORTED_MODULE_2__.apiUrl).concat(project.img),\n                alt: project.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-content\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"media\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"media-left\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                  className: \"image is-48x48\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"\".concat(_services_api__WEBPACK_IMPORTED_MODULE_2__.apiUrl).concat(project.img),\n                    alt: project.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 42,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"media-content\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"title is-4\",\n                  children: project.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 49,\n                  columnNumber: 23\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                  href: project.url,\n                  target: \"_blank\",\n                  rel: \"noreferrer\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"subtitle is-6\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                      className: \"tag is-link is-light\",\n                      children: \"Url do Projeto:\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 52,\n                      columnNumber: 27\n                    }, _this), \"\\xA0\\xA0\", project.url]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 51,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 50,\n                  columnNumber: 23\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                  href: project.gitUrl,\n                  target: \"_blank\",\n                  rel: \"noreferrer\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"subtitle is-6\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                      className: \"tag is-link is-light\",\n                      children: \"Url do repositorio:\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 59,\n                      columnNumber: 27\n                    }, _this), \"\\xA0\\xA0\", project.gitUrl]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 58,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 23\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"content\",\n              children: project.sinopse\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 17\n          }, _this)]\n        }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(), true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 15\n        }, _this);\n      })\n    }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(), false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(projectCard, \"SWI6iz4jriDWqq/8mb8Mxm65uuk=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLDRDQUNFO0FBQU0sK0JBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsY0FHR0osT0FBTyxDQUFDSSxNQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQTZCRTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBLHdCQUNHSixPQUFPLENBQUNLO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUEsV0FBd0N4Qix3Q0FBTSxFQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBYjtBQUxGLE9BQ09BLHdDQUFNLEVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJERDs7R0F0RXVCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3RDYXJkLmpzeD8xZDRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBhcGksIGFwaVVybCB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Byb2plY3RDYXJkLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q2FyZCgpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UG9yamVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXBpLmdldCgnL3Byb2plY3RzJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc2V0UG9yamVjdHMocmVzcG9uc2UuZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW2xvYWRpbmddKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YGJveCAke3N0eWxlcy5jYXJkQ29udGVudH1gfT5cbiAgICAgIHtsb2FkaW5nID8gPExvYWRpbmcgLz5cbiAgICAgICAgOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBwcm9qZWN0LWNhcmRcIiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2UgcHJvamVjdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIHByb2plY3QtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHthcGlVcmx9JHtwcm9qZWN0LmltZ31gfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy00OHg0OFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2FwaVVybH0ke3Byb2plY3QuaW1nfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj57cHJvamVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWcgaXMtbGluayBpcy1saWdodFwiPlVybCBkbyBQcm9qZXRvOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5naXRVcmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnIGlzLWxpbmsgaXMtbGlnaHRcIj5VcmwgZG8gcmVwb3NpdG9yaW86PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuZ2l0VXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnNpbm9wc2V9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiYXBpIiwiYXBpVXJsIiwiTG9hZGluZyIsInN0eWxlcyIsInByb2plY3RDYXJkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwcm9qZWN0cyIsInNldFBvcmplY3RzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNhcmRDb250ZW50IiwibWFwIiwicHJvamVjdCIsImltZyIsIm5hbWUiLCJ1cmwiLCJnaXRVcmwiLCJzaW5vcHNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projectCard.jsx\n");

/***/ }),

/***/ "./components/projectCard.module.css":
/*!*******************************************!*\
  !*** ./components/projectCard.module.css ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./projectCard.module.css */ \"./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/projectCard.module.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element) {\n                // These elements should always exist. If they do not,\n                // this code should fail.\n                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');\n                var parentNode = anchorElement.parentNode// Normally <head>\n                ;\n                // Each style tag should be placed right before our\n                // anchor. By inserting before and not after, we do not\n                // need to track the last inserted element.\n                parentNode.insertBefore(element, anchorElement);\n            };\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n    if (!a && b || a && !b) {\n        return false;\n    }\n    let p;\n    for(p in a){\n        if (isNamedExport && p === 'default') {\n            continue;\n        }\n        if (a[p] !== b[p]) {\n            return false;\n        }\n    }\n    for(p in b){\n        if (isNamedExport && p === 'default') {\n            continue;\n        }\n        if (!a[p]) {\n            return false;\n        }\n    }\n    return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./projectCard.module.css */ \"./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/projectCard.module.css\",\n      function () {\n        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./projectCard.module.css */ \"./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/projectCard.module.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.id, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RDYXJkLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxtQkFBTyxDQUFDLG9OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQyxxYkFBb047O0FBRXRQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHFiQUFvTjtBQUMxTjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHFiQUFvTjs7QUFFOU87O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0Q2FyZC5tb2R1bGUuY3NzPzMzNTgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3Byb2plY3RDYXJkLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3Byb2plY3RDYXJkLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL3Byb2plY3RDYXJkLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projectCard.module.css\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/projectCard.module.css":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/projectCard.module.css ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".projectCard_navUl__3BQJL {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-orient: horizontal;\\n  -moz-box-direction: normal;\\n       flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n  list-style-type: none;\\n  max-width: 100%;\\n  margin: var(--spacing-s) auto;\\n  width: var(--content-width);\\n}\\n\\n.projectCard_navClick__i6hS- {\\n  border-bottom: none;\\n  color: inherit; \\n  font-weight: bold;\\n  font-size: var(--font-size-s);\\n  margin: 0;\\n  position: relative;\\n  text-decoration: none;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/projectCard.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,iBAAa;EAAb,aAAa;EACb,2BAAmB;EAAnB,0BAAmB;OAAnB,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,qBAAqB;EACrB,eAAe;EACf,6BAA6B;EAC7B,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,6BAA6B;EAC7B,SAAS;EACT,kBAAkB;EAClB,qBAAqB;AACvB\",\"sourcesContent\":[\".navUl {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n  list-style-type: none;\\n  max-width: 100%;\\n  margin: var(--spacing-s) auto;\\n  width: var(--content-width);\\n}\\n\\n.navClick {\\n  border-bottom: none;\\n  color: inherit; \\n  font-weight: bold;\\n  font-size: var(--font-size-s);\\n  margin: 0;\\n  position: relative;\\n  text-decoration: none;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"navUl\": \"projectCard_navUl__3BQJL\",\n\t\"navClick\": \"projectCard_navClick__i6hS-\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzJdLnVzZVsyXSEuL2NvbXBvbmVudHMvcHJvamVjdENhcmQubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EscUVBQXFFLHNCQUFzQixrQkFBa0IsZ0NBQWdDLCtCQUErQiw2QkFBNkIsb0JBQW9CLGtDQUFrQywwQkFBMEIsb0JBQW9CLGtDQUFrQyxnQ0FBZ0MsR0FBRyxrQ0FBa0Msd0JBQXdCLG9CQUFvQixzQkFBc0Isa0NBQWtDLGNBQWMsdUJBQXVCLDBCQUEwQixHQUFHLE9BQU8sa0dBQWtHLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxrQ0FBa0Msa0JBQWtCLHdCQUF3QixvQkFBb0Isa0NBQWtDLDBCQUEwQixvQkFBb0Isa0NBQWtDLGdDQUFnQyxHQUFHLGVBQWUsd0JBQXdCLG9CQUFvQixzQkFBc0Isa0NBQWtDLGNBQWMsdUJBQXVCLDBCQUEwQixHQUFHLG1CQUFtQjtBQUNuMEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdENhcmQubW9kdWxlLmNzcz9iYzNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0Q2FyZF9uYXZVbF9fM0JRSkwge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogdmFyKC0tc3BhY2luZy1zKSBhdXRvO1xcbiAgd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cXG4ucHJvamVjdENhcmRfbmF2Q2xpY2tfX2k2aFMtIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDsgXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXMpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9wcm9qZWN0Q2FyZC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQW1CO0VBQW5CLDBCQUFtQjtPQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdlVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IHZhcigtLXNwYWNpbmctcykgYXV0bztcXG4gIHdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcXG59XFxuXFxuLm5hdkNsaWNrIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDsgXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXMpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJuYXZVbFwiOiBcInByb2plY3RDYXJkX25hdlVsX18zQlFKTFwiLFxuXHRcIm5hdkNsaWNrXCI6IFwicHJvamVjdENhcmRfbmF2Q2xpY2tfX2k2aFMtXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/projectCard.module.css\n");

/***/ })

});