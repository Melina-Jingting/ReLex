/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_pages_HomeScreen_js"],{

/***/ "./src/common/Container/styles.js":
/*!****************************************!*\
  !*** ./src/common/Container/styles.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: ${props => props.padding ? \"2.8rem\" : \"0 25px\"};\n  overflow: hidden;\n  border-top: ${props => props.border ? \"1px solid #CDD1D4\" : \"\"};\n\n  @media only screen and (max-width: 1024px) {\n    max-width: 950px;\n  }\n\n  @media only screen and (max-width: 768px) {\n    max-width: 700px;\n  }\n\n  @media only screen and (max-width: 414px) {\n    max-width: 370px;\n  }\n`;\n\n//# sourceURL=webpack://frontend/./src/common/Container/styles.js?");

/***/ }),

/***/ "./src/pages/HomeScreen.js":
/*!*********************************!*\
  !*** ./src/pages/HomeScreen.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _common_Container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Container/styles */ \"./src/common/Container/styles.js\");\n\n\n\n\n\nconst HomeScreen = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {\n    collapseOnSelect: true,\n    expand: \"lg\",\n    bg: \"light\",\n    variant: \"light\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.default.Brand, {\n    href: \"#home\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: __webpack_require__(/*! ../img/svg/logo.svg */ \"./src/img/svg/logo.svg\"),\n    alt: \"how-it-works.svg\",\n    width: \"150\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.default.Toggle, {\n    \"aria-controls\": \"responsive-navbar-nav\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.default.Collapse, {\n    id: \"responsive-navbar-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {\n    className: \"mr-auto\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.default.Link, {\n    href: \"#memes\"\n  }, \"Contact\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Container_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Make informed career decisions\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h5\", null, \"Lookup is a data-driven software platform which presents aggregated data of real career paths and derives insights to enrich your career discovery process. Begin your journey to career fulfillment with us today!\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeScreen);\n\n//# sourceURL=webpack://frontend/./src/pages/HomeScreen.js?");

/***/ }),

/***/ "./src/img/svg/logo.svg":
/*!******************************!*\
  !*** ./src/img/svg/logo.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea00bf9f0215541f76756cb363564eac.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/logo.svg?");

/***/ })

}]);