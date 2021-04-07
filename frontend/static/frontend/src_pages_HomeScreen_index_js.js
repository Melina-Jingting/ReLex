/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_pages_HomeScreen_index_js"],{

/***/ "./src/common/Button/index.js":
/*!************************************!*\
  !*** ./src/common/Button/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/common/Button/styles.js\");\n\n\n\nconst Button = ({\n  color,\n  width,\n  children,\n  onClick\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {\n  color: color,\n  width: width,\n  onClick: onClick\n}, children);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://frontend/./src/common/Button/index.js?");

/***/ }),

/***/ "./src/common/Button/styles.js":
/*!*************************************!*\
  !*** ./src/common/Button/styles.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button`\n  background: ${props => props.color || '#2e186a'};\n  color: ${props => props.color ? '#2E186A' : '#fff'};\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: ${props => props.color ? '1px solid #2E186A' : '0px'};\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n\n  @media only screen and (max-width: 1024px) {\n    width: ${props => props.width ? '160px' : '100%'};\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ${props => props.width ? '140px' : '100%'};\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ${props => props.width ? '130px' : '100%'};\n  }\n`;\n\n//# sourceURL=webpack://frontend/./src/common/Button/styles.js?");

/***/ }),

/***/ "./src/common/Container/index.js":
/*!***************************************!*\
  !*** ./src/common/Container/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/common/Container/styles.js\");\n\n\n\nconst Container = ({\n  padding,\n  border,\n  children\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n  padding: padding,\n  border: border\n}, children);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);\n\n//# sourceURL=webpack://frontend/./src/common/Container/index.js?");

/***/ }),

/***/ "./src/common/Container/styles.js":
/*!****************************************!*\
  !*** ./src/common/Container/styles.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: ${props => props.padding ? \"2.8rem\" : \"0 25px\"};\n  overflow: hidden;\n  border-top: ${props => props.border ? \"1px solid #CDD1D4\" : \"\"};\n\n  @media only screen and (max-width: 1024px) {\n    max-width: 950px;\n  }\n\n  @media only screen and (max-width: 768px) {\n    max-width: 700px;\n  }\n\n  @media only screen and (max-width: 414px) {\n    max-width: 370px;\n  }\n`;\n\n//# sourceURL=webpack://frontend/./src/common/Container/styles.js?");

/***/ }),

/***/ "./src/common/ScrollToTop/index.js":
/*!*****************************************!*\
  !*** ./src/common/ScrollToTop/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _common_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/SvgIcon */ \"./src/common/SvgIcon/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/common/ScrollToTop/styles.js\");\n\n\n\n\nconst Input = () => {\n  const scrollUp = () => {\n    const element = document.getElementById(\"intro\");\n    element.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"end\",\n      inline: \"nearest\"\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Up, {\n    onClick: scrollUp\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.default, {\n    src: \"scroll-top.svg\",\n    width: \"26px\",\n    height: \"26px\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://frontend/./src/common/ScrollToTop/index.js?");

/***/ }),

/***/ "./src/common/ScrollToTop/styles.js":
/*!******************************************!*\
  !*** ./src/common/ScrollToTop/styles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Up\": () => (/* binding */ Up)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Up = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  line-height: 1.5715;\n  list-style: none;\n  position: fixed;\n  right: 100px;\n  bottom: 50px;\n  z-index: 10;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n\n  @media screen and (max-width: 1024px) {\n    display: none;\n  }\n`;\n\n//# sourceURL=webpack://frontend/./src/common/ScrollToTop/styles.js?");

/***/ }),

/***/ "./src/common/SvgIcon/index.js":
/*!*************************************!*\
  !*** ./src/common/SvgIcon/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nconst SvgIcon = ({\n  src,\n  width,\n  height\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n  src: __webpack_require__(\"./src/img/svg sync recursive ^\\\\.\\\\/.*$\")(`./${src}`),\n  alt: src,\n  with: width,\n  height: height\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgIcon);\n\n//# sourceURL=webpack://frontend/./src/common/SvgIcon/index.js?");

/***/ }),

/***/ "./src/components/LandingPage/ContentBlock/LeftContentBlock/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/LandingPage/ContentBlock/LeftContentBlock/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/withTranslation.js\");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Slide */ \"./node_modules/react-reveal/Slide.js\");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/SvgIcon */ \"./src/common/SvgIcon/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/LandingPage/ContentBlock/LeftContentBlock/styles.js\");\n\n\n\n\n\n\n\nconst LeftContentBlock = ({\n  icon,\n  title,\n  content,\n  section,\n  t,\n  id\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.LeftContentBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {\n    type: \"flex\",\n    justify: \"space-between\",\n    align: \"middle\",\n    id: id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {\n    xs: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1___default()), {\n    left: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.default, {\n    src: icon // className=\"about-block-image\"\n    ,\n    width: \"300px\",\n    height: \"300px\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {\n    xs: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1___default()), {\n    right: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h6\", null, t(title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.Content, null, t(content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.ServiceWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {\n    type: \"flex\",\n    justify: \"space-between\"\n  }, section && typeof section === \"object\" && section.map((item, id) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {\n      key: id,\n      span: 11\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.default, {\n      src: item.icon,\n      width: \"60px\",\n      height: \"60px\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.MinTitle, null, t(item.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__.MinPara, null, t(item.content)));\n  }))))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.withTranslation)()(LeftContentBlock));\n\n//# sourceURL=webpack://frontend/./src/components/LandingPage/ContentBlock/LeftContentBlock/index.js?");

/***/ }),

/***/ "./src/components/LandingPage/ContentBlock/LeftContentBlock/styles.js":
/*!****************************************************************************!*\
  !*** ./src/components/LandingPage/ContentBlock/LeftContentBlock/styles.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LeftContentBlock\": () => (/* binding */ LeftContentBlock),\n/* harmony export */   \"Content\": () => (/* binding */ Content),\n/* harmony export */   \"ContentWrapper\": () => (/* binding */ ContentWrapper),\n/* harmony export */   \"ServiceWrapper\": () => (/* binding */ ServiceWrapper),\n/* harmony export */   \"MinTitle\": () => (/* binding */ MinTitle),\n/* harmony export */   \"MinPara\": () => (/* binding */ MinPara),\n/* harmony export */   \"ServiceItem\": () => (/* binding */ ServiceItem)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/col/index.js\");\n\n\nconst LeftContentBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section`\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 4rem 0 4rem;\n  }\n`;\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`\n  margin: 1.5rem 0 2rem 0;\n`;\nconst ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n`;\nconst ServiceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n`;\nconst MinTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h6`\n  font-size: 1rem;\n  line-height: 1rem;\n  padding: 0.5rem 0;\n`;\nconst MinPara = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`\n  font-size: 0.75rem;\n`;\nconst ServiceItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(antd__WEBPACK_IMPORTED_MODULE_1__.default)`\n  margin: 2rem 0;\n  position: relative;\n`;\n\n//# sourceURL=webpack://frontend/./src/components/LandingPage/ContentBlock/LeftContentBlock/styles.js?");

/***/ }),

/***/ "./src/components/LandingPage/ContentBlock/RightContentBlock/index.js":
/*!****************************************************************************!*\
  !*** ./src/components/LandingPage/ContentBlock/RightContentBlock/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/withTranslation.js\");\n/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal */ \"./node_modules/react-reveal/index.js\");\n/* harmony import */ var _common_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/SvgIcon */ \"./src/common/SvgIcon/index.js\");\n/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Button */ \"./src/common/Button/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/LandingPage/ContentBlock/RightContentBlock/styles.js\");\n\n\n\n\n\n\n\n\nconst RightBlock = ({\n  title,\n  content,\n  button,\n  icon,\n  t,\n  id\n}) => {\n  const scrollTo = id => {\n    const element = document.getElementById(id);\n    element.scrollIntoView({\n      behavior: \"smooth\"\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.RightBlockContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {\n    type: \"flex\",\n    justify: \"space-between\",\n    align: \"middle\",\n    id: id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {\n    xs: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_1__.default, {\n    left: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h6\", null, t(title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.Content, null, t(content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.ButtonWrapper, null, button && typeof button === \"object\" && button.map((item, id) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n      key: id,\n      color: item.color,\n      width: \"true\",\n      onClick: () => scrollTo(\"about\")\n    }, t(item.title));\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {\n    xs: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_1__.default, {\n    right: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.default, {\n    src: icon // className=\"about-block-image\"\n    ,\n    width: \"300px\",\n    height: \"300px\"\n  })))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.withTranslation)()(RightBlock));\n\n//# sourceURL=webpack://frontend/./src/components/LandingPage/ContentBlock/RightContentBlock/index.js?");

/***/ }),

/***/ "./src/components/LandingPage/ContentBlock/RightContentBlock/styles.js":
/*!*****************************************************************************!*\
  !*** ./src/components/LandingPage/ContentBlock/RightContentBlock/styles.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RightBlockContainer\": () => (/* binding */ RightBlockContainer),\n/* harmony export */   \"Content\": () => (/* binding */ Content),\n/* harmony export */   \"ContentWrapper\": () => (/* binding */ ContentWrapper),\n/* harmony export */   \"ButtonWrapper\": () => (/* binding */ ButtonWrapper)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst RightBlockContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section`\n  position: relative;\n  padding: 10rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 8rem 0 6rem;\n  }\n`;\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`\n  margin: 1.5rem 0 2rem 0;\n`;\nconst ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  position: relative;\n  max-width: 540px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n`;\nconst ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n`;\n\n//# sourceURL=webpack://frontend/./src/components/LandingPage/ContentBlock/RightContentBlock/styles.js?");

/***/ }),

/***/ "./src/components/LandingPage/ContentBlock/index.js":
/*!**********************************************************!*\
  !*** ./src/components/LandingPage/ContentBlock/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _LeftContentBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeftContentBlock */ \"./src/components/LandingPage/ContentBlock/LeftContentBlock/index.js\");\n/* harmony import */ var _RightContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RightContentBlock */ \"./src/components/LandingPage/ContentBlock/RightContentBlock/index.js\");\n\n\n\n\nconst ContentBlock = props => {\n  if (props.type === \"left\") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LeftContentBlock__WEBPACK_IMPORTED_MODULE_1__.default, props);\n  if (props.type === \"right\") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RightContentBlock__WEBPACK_IMPORTED_MODULE_2__.default, props);\n  return null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentBlock);\n\n//# sourceURL=webpack://frontend/./src/components/LandingPage/ContentBlock/index.js?");

/***/ }),

/***/ "./src/components/LandingPage/LandingPageHeader/index.js":
/*!***************************************************************!*\
  !*** ./src/components/LandingPage/LandingPageHeader/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/drawer/index.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/CSSTransition.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/withTranslation.js\");\n/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/Button */ \"./src/common/Button/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/LandingPage/LandingPageHeader/styles.js\");\n\n\n\n\n\n\n\n // const SvgIcon = lazy(() => import(\"../../common/SvgIcon\"));\n// const Button = lazy(() => import(\"../../common/Button\"));\n\nconst Header = ({\n  t\n}) => {\n  const [isNavVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [isSmallScreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [visible, setVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const showDrawer = () => {\n    setVisibility(!visible);\n  };\n\n  const onClose = () => {\n    setVisibility(!visible);\n  };\n\n  const MenuItem = () => {\n    const linkedinLogin = () => {\n      const url = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ioflr7umfzey&redirect_uri=https%3A%2F%2F5sx1wjvswf.execute-api.us-east-2.amazonaws.com%2Fdefault%2Flinkedinsocial-mentor';\n      window.open(url, '_blank');\n    };\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.CustomNavLinkSmall, {\n      onClick: () => scrollTo(\"mission\")\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Span, null, t(\"Seeker\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.CustomNavLinkSmall, {\n      onClick: () => scrollTo(\"product\")\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Span, null, t(\"Mentors\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.CustomNavLinkSmall, {\n      style: {\n        width: \"180px\"\n      },\n      onClick: () => linkedinLogin(\"contact\")\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Span, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__.default, null, t(\"Contact\")))));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: \"flex\",\n    justify: \"space-between\",\n    gutter: 20\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"LookUp\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"float-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.NotHidden, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuItem, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Burger, {\n    onClick: showDrawer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Outline, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.default, {\n    in: !isSmallScreen || isNavVisible,\n    timeout: 350,\n    classNames: \"NavAnimation\",\n    unmountOnExit: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {\n    closable: false,\n    visible: visible,\n    onClose: onClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {\n    style: {\n      marginBottom: \"2.5rem\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Label, {\n    onClick: onClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Menu, null, \"Menu\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Outline, {\n    padding: \"true\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuItem, null)))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.withTranslation)()(Header));\n\n//# sourceURL=webpack://frontend/./src/components/LandingPage/LandingPageHeader/index.js?");

/***/ }),

/***/ "./src/components/LandingPage/LandingPageHeader/styles.js":
/*!****************************************************************!*\
  !*** ./src/components/LandingPage/LandingPageHeader/styles.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header),\n/* harmony export */   \"LogoContainer\": () => (/* binding */ LogoContainer),\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"NavLink\": () => (/* binding */ NavLink),\n/* harmony export */   \"CustomNavLink\": () => (/* binding */ CustomNavLink),\n/* harmony export */   \"ContactWrapper\": () => (/* binding */ ContactWrapper),\n/* harmony export */   \"Burger\": () => (/* binding */ Burger),\n/* harmony export */   \"NotHidden\": () => (/* binding */ NotHidden),\n/* harmony export */   \"Menu\": () => (/* binding */ Menu),\n/* harmony export */   \"CustomNavLinkSmall\": () => (/* binding */ CustomNavLinkSmall),\n/* harmony export */   \"Label\": () => (/* binding */ Label),\n/* harmony export */   \"Outline\": () => (/* binding */ Outline),\n/* harmony export */   \"Span\": () => (/* binding */ Span)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/MenuOutlined.js\");\n\n\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.header`\n  padding: 1rem 0.5rem;\n`;\nconst LogoContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link)`\n  display: flex;\n  padding-top: 1rem;\n`;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n  padding-right: 25px;\n  padding-left: 25px;\n  margin-right: auto;\n  margin-left: auto;\n`;\nconst NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: inline-block;\n  text-align: center;\n`;\nconst CustomNavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  width: 203px;\n  display: inline-block;\n\n  @media only screen and (max-width: 411px) {\n    width: 150px;\n  }\n\n  @media only screen and (max-width: 320px) {\n    width: 118px;\n  }\n`;\nconst ContactWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  cursor: pointer;\n  width: ${props => props.width ? '100%' : '110px'};\n  font-weight: 700;\n  text-align: center;\n  border-radius: 1.25rem;\n  display: inline-block;\n`;\nconst Burger = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  @media only screen and (max-width: 768px) {\n    display: block !important;\n  }\n  padding: 1.25rem 1.25rem;\n  display: none;\n`;\nconst NotHidden = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n`;\nconst Menu = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h5`\n  font-size: 1.37rem;\n  margin-top: -0.45rem;\n  padding: 0 1.56rem 0 0;\n  font-weight: 600;\n  border-bottom: 5px solid #111b47;\n`;\nconst CustomNavLinkSmall = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(NavLink)`\n  font-size: 1rem;\n  color: #000000;\n  transition: color 0.2s ease-in;\n  margin: 0.25rem 2rem;\n\n  @media only screen and (max-width: 768px) {\n    margin: 1.25rem 2rem;\n  }\n`;\nconst Label = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span`\n  font-size: 12px;\n  font-weight: 500;\n  color: #404041;\n  text-align: right;\n  display: flex;\n`;\nconst Outline = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.default)`\n  font-size: 22px;\n  padding-right: ${props => props.padding ? '10px' : ''};\n`;\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span`\n  cursor: pointer;\n`;\n\n//# sourceURL=webpack://frontend/./src/components/LandingPage/LandingPageHeader/styles.js?");

/***/ }),

/***/ "./src/components/LandingPage/MiddleBlock/index.js":
/*!*********************************************************!*\
  !*** ./src/components/LandingPage/MiddleBlock/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/row/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/col/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/withTranslation.js\");\n/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal */ \"./node_modules/react-reveal/index.js\");\n/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Button */ \"./src/common/Button/index.js\");\n/* harmony import */ var _video_network_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../video/network.mp4 */ \"./src/video/network.mp4\");\n/* harmony import */ var _video_network_mp4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_video_network_mp4__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/LandingPage/MiddleBlock/styles.js\");\n/* harmony import */ var _common_Container_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/Container/styles */ \"./src/common/Container/styles.js\");\n\n\n\n\n\n\n\n\n // const Button = lazy(() => import(\"../../common/Button\"));\n\nconst MiddleBlock = ({\n  title,\n  content,\n  button,\n  t\n}) => {\n  const linkedinLogin = () => {\n    const url = \"https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ioflr7umfzey&redirect_uri=https%3A%2F%2F6fxspsdl46.execute-api.us-east-2.amazonaws.com%2Fdefault%2Flinkedinsocial\";\n    window.open(url, \"_blank\");\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Container_styles__WEBPACK_IMPORTED_MODULE_5__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.MiddleBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.default, {\n    type: \"flex\",\n    justify: \"center\",\n    align: \"middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {\n    lg: 24,\n    md: 24,\n    sm: 24,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h6\", null, t(title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.Content, null, t(content)), button ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n    name: \"submit\",\n    type: \"submit\",\n    onClick: () => linkedinLogin()\n  }, t(button)) : \"\")))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.withTranslation)()(MiddleBlock));\n\n//# sourceURL=webpack://frontend/./src/components/LandingPage/MiddleBlock/index.js?");

/***/ }),

/***/ "./src/components/LandingPage/MiddleBlock/styles.js":
/*!**********************************************************!*\
  !*** ./src/components/LandingPage/MiddleBlock/styles.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MiddleBlock\": () => (/* binding */ MiddleBlock),\n/* harmony export */   \"Content\": () => (/* binding */ Content),\n/* harmony export */   \"ContentWrapper\": () => (/* binding */ ContentWrapper)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst MiddleBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section`\n  position: relative;\n  padding: 7.5rem 0 3rem;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 768px) {\n    padding: 5.5rem 0 3rem;\n  }\n`;\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`\n  padding: 0.75rem 0 0.75rem;\n`;\nconst ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  max-width: 570px;\n\n  @media only screen and (max-width: 768px) {\n    max-width: 100%;\n  }\n`;\n\n//# sourceURL=webpack://frontend/./src/components/LandingPage/MiddleBlock/styles.js?");

/***/ }),

/***/ "./src/pages/HomeScreen/index.js":
/*!***************************************!*\
  !*** ./src/pages/HomeScreen/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/IntroContent.json */ \"./src/content/IntroContent.json\");\n/* harmony import */ var _content_SearchContent_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/SearchContent.json */ \"./src/content/SearchContent.json\");\n/* harmony import */ var _content_RecommendationsContent_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content/RecommendationsContent.json */ \"./src/content/RecommendationsContent.json\");\n/* harmony import */ var _content_PlanContent_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content/PlanContent.json */ \"./src/content/PlanContent.json\");\n/* harmony import */ var _content_ReceiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content/ReceiveAdviceContent.json */ \"./src/content/ReceiveAdviceContent.json\");\n/* harmony import */ var _content_GiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content/GiveAdviceContent.json */ \"./src/content/GiveAdviceContent.json\");\n/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Container */ \"./src/common/Container/index.js\");\n/* harmony import */ var _common_ScrollToTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ScrollToTop */ \"./src/common/ScrollToTop/index.js\");\n/* harmony import */ var _components_LandingPage_MiddleBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/LandingPage/MiddleBlock */ \"./src/components/LandingPage/MiddleBlock/index.js\");\n/* harmony import */ var _components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/LandingPage/ContentBlock */ \"./src/components/LandingPage/ContentBlock/index.js\");\n/* harmony import */ var _components_LandingPage_LandingPageHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/LandingPage/LandingPageHeader */ \"./src/components/LandingPage/LandingPageHeader/index.js\");\n// import { lazy } from \"react\";\n\n\n\n\n\n\n\n\n\n\n\n\n // import { LinkedInPopUp } from 'react-linkedin-login-oauth2';\n// import LinkedInPage from '../LinkedInPage';\n// const ContactFrom = lazy(() => import(\"../components/ContactForm\"));\n// const ContentBlock = lazy(() => import(\"../components/ContentBlock\"));\n// const MiddleBlock = lazy(() => import(\"../components/MiddleBlock\"));\n// const Container = lazy(() => import(\"../common/Container\"));\n// const ScrollToTop = lazy(() => import(\"../common/ScrollToTop\"));\n\nconst HomeScreen = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Container__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_LandingPageHeader__WEBPACK_IMPORTED_MODULE_11__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_ScrollToTop__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_MiddleBlock__WEBPACK_IMPORTED_MODULE_9__.default, {\n    title: _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__.title,\n    content: _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__.text,\n    button: _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__.button // this component is the linkedin button\n\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Container__WEBPACK_IMPORTED_MODULE_7__.default, {\n    className: \"py-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: __webpack_require__(/*! ../../img/svg/how-it-works.svg */ \"./src/img/svg/how-it-works.svg\"),\n    alt: \"how-it-works.svg\",\n    width: 1000\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"right\",\n    first: \"true\",\n    title: _content_SearchContent_json__WEBPACK_IMPORTED_MODULE_2__.title,\n    content: _content_SearchContent_json__WEBPACK_IMPORTED_MODULE_2__.text,\n    button: _content_SearchContent_json__WEBPACK_IMPORTED_MODULE_2__.button,\n    icon: \"graphs.svg\",\n    id: \"intro\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"left\",\n    title: _content_RecommendationsContent_json__WEBPACK_IMPORTED_MODULE_3__.title,\n    content: _content_RecommendationsContent_json__WEBPACK_IMPORTED_MODULE_3__.text,\n    section: _content_RecommendationsContent_json__WEBPACK_IMPORTED_MODULE_3__.section,\n    icon: \"look-in-mirror.svg\",\n    id: \"about\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"right\",\n    title: _content_PlanContent_json__WEBPACK_IMPORTED_MODULE_4__.title,\n    content: _content_PlanContent_json__WEBPACK_IMPORTED_MODULE_4__.text,\n    icon: \"visualise-map.svg\",\n    id: \"mission\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"left\",\n    title: _content_ReceiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_5__.title,\n    content: _content_ReceiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_5__.text,\n    icon: \"ask-questions.svg\",\n    id: \"product\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"right\",\n    title: _content_GiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_6__.title,\n    content: _content_GiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_6__.text,\n    icon: \"answer.svg\",\n    id: \"product\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeScreen);\n\n//# sourceURL=webpack://frontend/./src/pages/HomeScreen/index.js?");

/***/ }),

/***/ "./src/img/svg/answer.svg":
/*!********************************!*\
  !*** ./src/img/svg/answer.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f92e16273c092bbbd583ac1dfe70062f.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/answer.svg?");

/***/ }),

/***/ "./src/img/svg/ask-questions.svg":
/*!***************************************!*\
  !*** ./src/img/svg/ask-questions.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fca7caaa8752997955531ac978e5d679.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/ask-questions.svg?");

/***/ }),

/***/ "./src/img/svg/developer.svg":
/*!***********************************!*\
  !*** ./src/img/svg/developer.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb63ce7e0b3feba8ebc7c7f00dd7ffc6.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/developer.svg?");

/***/ }),

/***/ "./src/img/svg/github.svg":
/*!********************************!*\
  !*** ./src/img/svg/github.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ba4a27cc397a15fea384261a2f4c6df.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/github.svg?");

/***/ }),

/***/ "./src/img/svg/graphs.svg":
/*!********************************!*\
  !*** ./src/img/svg/graphs.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb18519522a84d37c170d56b588cdf7a.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/graphs.svg?");

/***/ }),

/***/ "./src/img/svg/how-it-works.svg":
/*!**************************************!*\
  !*** ./src/img/svg/how-it-works.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9f542eb21b5c961994bd2e4016e26ce.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/how-it-works.svg?");

/***/ }),

/***/ "./src/img/svg/instagram.svg":
/*!***********************************!*\
  !*** ./src/img/svg/instagram.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0c61969af4444eccd8f52a961b5eba7.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/instagram.svg?");

/***/ }),

/***/ "./src/img/svg/linkedin.svg":
/*!**********************************!*\
  !*** ./src/img/svg/linkedin.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cfae69826a7ca25bee3bb7eb998c0952.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/linkedin.svg?");

/***/ }),

/***/ "./src/img/svg/logo.svg":
/*!******************************!*\
  !*** ./src/img/svg/logo.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eeaf8e4cd1d743a66e8e80eaa9158804.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/logo.svg?");

/***/ }),

/***/ "./src/img/svg/look-in-mirror.svg":
/*!****************************************!*\
  !*** ./src/img/svg/look-in-mirror.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50a9bd158a8ccc5ff3f546fbb344455e.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/look-in-mirror.svg?");

/***/ }),

/***/ "./src/img/svg/mailbox.svg":
/*!*********************************!*\
  !*** ./src/img/svg/mailbox.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"87d24d3d6034aa446b06aa0f63cd6789.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/mailbox.svg?");

/***/ }),

/***/ "./src/img/svg/medium.svg":
/*!********************************!*\
  !*** ./src/img/svg/medium.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2db761c9ebbbc8cbf57c1f0ddcf3f1f.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/medium.svg?");

/***/ }),

/***/ "./src/img/svg/notes.svg":
/*!*******************************!*\
  !*** ./src/img/svg/notes.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"75dfac2bf3bf83a43664b73c19f20e2c.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/notes.svg?");

/***/ }),

/***/ "./src/img/svg/product-launch.svg":
/*!****************************************!*\
  !*** ./src/img/svg/product-launch.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ca4c4f7b352c3a179f79a35fa0566ae1.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/product-launch.svg?");

/***/ }),

/***/ "./src/img/svg/scroll-top.svg":
/*!************************************!*\
  !*** ./src/img/svg/scroll-top.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd638e8984a702c8313cc705769f52d7.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/scroll-top.svg?");

/***/ }),

/***/ "./src/img/svg/twitter.svg":
/*!*********************************!*\
  !*** ./src/img/svg/twitter.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74eca293a479c375370419f5c29d4b8a.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/twitter.svg?");

/***/ }),

/***/ "./src/img/svg/visualise-map.svg":
/*!***************************************!*\
  !*** ./src/img/svg/visualise-map.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d7341601aef0ccf9db5698ed6b086269.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/visualise-map.svg?");

/***/ }),

/***/ "./src/img/svg/waving.svg":
/*!********************************!*\
  !*** ./src/img/svg/waving.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c85b56a10d2aca224339e0ad3a004950.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/waving.svg?");

/***/ }),

/***/ "./src/img/svg/whiteboard-map.svg":
/*!****************************************!*\
  !*** ./src/img/svg/whiteboard-map.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa6e6f43e16b94ffbf9c5716f47bfe30.svg\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/whiteboard-map.svg?");

/***/ }),

/***/ "./src/video/network.mp4":
/*!*******************************!*\
  !*** ./src/video/network.mp4 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d28831bc5d9eeb4a9a44805181faaeed.mp4\";\n\n//# sourceURL=webpack://frontend/./src/video/network.mp4?");

/***/ }),

/***/ "./src/content/GiveAdviceContent.json":
/*!********************************************!*\
  !*** ./src/content/GiveAdviceContent.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Pay it forward\",\"text\":\"Help others find out more about the job you held or are holding, by answering their queries. They might buy you a coffee, and you could choose to save it or let us donate it to partnering educational charities\"}');\n\n//# sourceURL=webpack://frontend/./src/content/GiveAdviceContent.json?");

/***/ }),

/***/ "./src/content/IntroContent.json":
/*!***************************************!*\
  !*** ./src/content/IntroContent.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Build a fulfilling career with LookUp\",\"text\":\"Discover the career meant for you and connect with people who have been there, done that.\",\"button\":\"Sign in with Linkedin\"}');\n\n//# sourceURL=webpack://frontend/./src/content/IntroContent.json?");

/***/ }),

/***/ "./src/content/PlanContent.json":
/*!**************************************!*\
  !*** ./src/content/PlanContent.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Visualize your goals\",\"text\":\"Add career goals to your dashboard to see a comparison between your chosen paths, and recommendations for skills you can pick up to better your chances of success\",\"button\":\"Get Started\"}');\n\n//# sourceURL=webpack://frontend/./src/content/PlanContent.json?");

/***/ }),

/***/ "./src/content/ReceiveAdviceContent.json":
/*!***********************************************!*\
  !*** ./src/content/ReceiveAdviceContent.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Need targetted advice?\",\"text\":\"We know the pain of networking for the sake of more information. The fear of rejection, feeling like it\\'s a one-sided relationship. The truth is, many people are just \\\\\"glad to help\\\\\". We connect you with someone from the role you\\'re considering who has agreed to answer your queries. If you appreciate the advice, thank them with a cup of coffee!\"}');\n\n//# sourceURL=webpack://frontend/./src/content/ReceiveAdviceContent.json?");

/***/ }),

/***/ "./src/content/RecommendationsContent.json":
/*!*************************************************!*\
  !*** ./src/content/RecommendationsContent.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Not sure where you\\'re headed?\",\"text\":\"Gain inspiration by discovering the paths of the people who shared similar experiences, skills and interests. We use our wealth of real data and matching algorithms to find paths we think could resonate with you\",\"button\":\"Get Started\"}');\n\n//# sourceURL=webpack://frontend/./src/content/RecommendationsContent.json?");

/***/ }),

/***/ "./src/content/SearchContent.json":
/*!****************************************!*\
  !*** ./src/content/SearchContent.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Gain richer insights when you search\",\"text\":\"At LookUp, we let you see how people landed your dream job, and where they move on to after that. We provide rich analysis on the companies, titles, skills and income.\"}');\n\n//# sourceURL=webpack://frontend/./src/content/SearchContent.json?");

/***/ }),

/***/ "./src/img/svg sync recursive ^\\.\\/.*$":
/*!************************************!*\
  !*** ./src/img/svg/ sync ^\.\/.*$ ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./answer.svg\": \"./src/img/svg/answer.svg\",\n\t\"./ask-questions.svg\": \"./src/img/svg/ask-questions.svg\",\n\t\"./developer.svg\": \"./src/img/svg/developer.svg\",\n\t\"./github.svg\": \"./src/img/svg/github.svg\",\n\t\"./graphs.svg\": \"./src/img/svg/graphs.svg\",\n\t\"./how-it-works.svg\": \"./src/img/svg/how-it-works.svg\",\n\t\"./instagram.svg\": \"./src/img/svg/instagram.svg\",\n\t\"./linkedin.svg\": \"./src/img/svg/linkedin.svg\",\n\t\"./logo.svg\": \"./src/img/svg/logo.svg\",\n\t\"./look-in-mirror.svg\": \"./src/img/svg/look-in-mirror.svg\",\n\t\"./mailbox.svg\": \"./src/img/svg/mailbox.svg\",\n\t\"./medium.svg\": \"./src/img/svg/medium.svg\",\n\t\"./notes.svg\": \"./src/img/svg/notes.svg\",\n\t\"./product-launch.svg\": \"./src/img/svg/product-launch.svg\",\n\t\"./scroll-top.svg\": \"./src/img/svg/scroll-top.svg\",\n\t\"./twitter.svg\": \"./src/img/svg/twitter.svg\",\n\t\"./visualise-map.svg\": \"./src/img/svg/visualise-map.svg\",\n\t\"./waving.svg\": \"./src/img/svg/waving.svg\",\n\t\"./whiteboard-map.svg\": \"./src/img/svg/whiteboard-map.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img/svg sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://frontend/./src/img/svg/_sync_^\\.\\/.*$?");

/***/ })

}]);