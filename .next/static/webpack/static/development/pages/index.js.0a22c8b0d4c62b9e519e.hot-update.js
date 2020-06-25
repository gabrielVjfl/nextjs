webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\FLORI\\Documents\\nextjs\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Simple = function Simple(_ref) {
  var repos = _ref.repos;
  Simple.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, repos;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.github.com/orgs/rocketseat/repos");

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            repos = _context.sent;
            console.log(repos);
            return _context.abrupt("return", {
              repos: repos
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  if (repos.length === 0) {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }
    }, "Carregando...");
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, repos.map(function (repo) {
    return __jsx("select", {
      key: repo.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, __jsx("option", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, repo.name));
  }));
};

_c = Simple;
/* harmony default export */ __webpack_exports__["default"] = (Simple);

var _c;

$RefreshReg$(_c, "Simple");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaW1wbGUiLCJyZXBvcyIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsInJlcG8iLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWE7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFFeEJELFFBQU0sQ0FBQ0UsZUFBUCxpTUFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFRUMsS0FBSyxDQUFDLDhDQUFELENBRlA7O0FBQUE7QUFFZkMsb0JBRmU7QUFBQTtBQUFBLG1CQUlEQSxRQUFRLENBQUNDLElBQVQsRUFKQzs7QUFBQTtBQUlmSixpQkFKZTtBQU1yQkssbUJBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaO0FBTnFCLDZDQVFkO0FBQUNBLG1CQUFLLEVBQUxBO0FBQUQsYUFSYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFXSixNQUFHQSxLQUFLLENBQUNPLE1BQU4sS0FBaUIsQ0FBcEIsRUFBdUI7QUFDbkIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFQO0FBQ0g7O0FBR0csU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUpQLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUNWO0FBQVEsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVVELElBQUksQ0FBQ0UsSUFBZixDQURBLENBRFU7QUFBQSxHQUFkLENBSkksQ0FESjtBQW1CSCxDQXJDRDs7S0FBTVosTTtBQXdDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjBhMjJjOGIwZDRjNjJiOWU1MTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXHJcblxyXG5cclxuY29uc3QgU2ltcGxlID0gKHtyZXBvc30pID0+IHtcclxuXHJcbiAgICBTaW1wbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9vcmdzL3JvY2tldHNlYXQvcmVwb3NcIilcclxuICAgICBcclxuICAgICAgICBjb25zdCByZXBvcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcG9zKVxyXG4gICAgIFxyXG4gICAgICAgIHJldHVybiB7cmVwb3N9XHJcbiAgICAgfVxyXG5cclxuaWYocmVwb3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gPGgxPkNhcnJlZ2FuZG8uLi48L2gxPlxyXG59XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbntcclxuICAgIFxyXG4gICAgcmVwb3MubWFwKHJlcG8gPT4gXHJcbiAgICAgICAgPHNlbGVjdCBrZXk9e3JlcG8uaWR9PlxyXG4gICAgICAgIDxvcHRpb24gPntyZXBvLm5hbWV9PC9vcHRpb24+XHJcblxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbjwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9