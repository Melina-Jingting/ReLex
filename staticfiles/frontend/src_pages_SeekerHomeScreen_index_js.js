/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_pages_SeekerHomeScreen_index_js"],{

/***/ "./src/pages/SeekerHomeScreen/index.js":
/*!*********************************************!*\
  !*** ./src/pages/SeekerHomeScreen/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/IntroContent.json */ \"./src/content/IntroContent.json\");\n/* harmony import */ var _content_DiscoverContent_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/DiscoverContent.json */ \"./src/content/DiscoverContent.json\");\n/* harmony import */ var _content_RoleModelContent_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content/RoleModelContent.json */ \"./src/content/RoleModelContent.json\");\n/* harmony import */ var _content_CompareContent_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content/CompareContent.json */ \"./src/content/CompareContent.json\");\n/* harmony import */ var _content_ReceiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content/ReceiveAdviceContent.json */ \"./src/content/ReceiveAdviceContent.json\");\n/* harmony import */ var _content_GiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content/GiveAdviceContent.json */ \"./src/content/GiveAdviceContent.json\");\n/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Container */ \"./src/common/Container/index.js\");\n/* harmony import */ var _common_ScrollToTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ScrollToTop */ \"./src/common/ScrollToTop/index.js\");\n/* harmony import */ var _components_LandingPage_MiddleBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/LandingPage/MiddleBlock */ \"./src/components/LandingPage/MiddleBlock/index.js\");\n/* harmony import */ var _components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/LandingPage/ContentBlock */ \"./src/components/LandingPage/ContentBlock/index.js\");\n/* harmony import */ var _components_LandingPage_LandingPageHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/LandingPage/LandingPageHeader */ \"./src/components/LandingPage/LandingPageHeader/index.js\");\n/* harmony import */ var _video_ProductVid_mp4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../video/ProductVid.mp4 */ \"./src/video/ProductVid.mp4\");\n/* harmony import */ var _video_ProductVid_mp4__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_video_ProductVid_mp4__WEBPACK_IMPORTED_MODULE_12__);\n// import { lazy } from \"react\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import { LinkedInPopUp } from 'react-linkedin-login-oauth2';\n// import LinkedInPage from '../LinkedInPage';\n// const ContactFrom = lazy(() => import(\"../components/ContactForm\"));\n// const ContentBlock = lazy(() => import(\"../components/ContentBlock\"));\n// const MiddleBlock = lazy(() => import(\"../components/MiddleBlock\"));\n// const Container = lazy(() => import(\"../common/Container\"));\n// const ScrollToTop = lazy(() => import(\"../common/ScrollToTop\"));\n\nconst SeekerHomeScreen = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Container__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_LandingPageHeader__WEBPACK_IMPORTED_MODULE_11__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_ScrollToTop__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Container__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"video\", {\n    autoPlay: true,\n    loop: true,\n    muted: true,\n    style: {\n      position: \"absolute\",\n      // width: \"100%\",\n      // left: \"50%\",\n      // height: \"100%\",\n      objectFit: \"fill\",\n      // transform: \"translate(-50%, -50%)\",\n      zIndex: \"-1\",\n      opacity: \"0.3\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"source\", {\n    src: (_video_ProductVid_mp4__WEBPACK_IMPORTED_MODULE_12___default()),\n    type: \"video/mp4\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_MiddleBlock__WEBPACK_IMPORTED_MODULE_9__.default, {\n    title: _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__.title,\n    content: _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__.text,\n    button: _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__.button // this component is the linkedin button\n    ,\n    linkedin_url: \"https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ioflr7umfzey&redirect_uri=https%3A%2F%2F6fxspsdl46.execute-api.us-east-2.amazonaws.com%2Fdefault%2Flinkedinsocial\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"right\",\n    first: \"true\",\n    title: _content_DiscoverContent_json__WEBPACK_IMPORTED_MODULE_2__.title,\n    content: _content_DiscoverContent_json__WEBPACK_IMPORTED_MODULE_2__.text,\n    icon: \"look-in-mirror.svg\",\n    id: \"intro\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"left\",\n    title: _content_RoleModelContent_json__WEBPACK_IMPORTED_MODULE_3__.title,\n    content: _content_RoleModelContent_json__WEBPACK_IMPORTED_MODULE_3__.text,\n    section: _content_RoleModelContent_json__WEBPACK_IMPORTED_MODULE_3__.section,\n    icon: \"visualise-map.svg\",\n    id: \"about\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"right\",\n    title: _content_CompareContent_json__WEBPACK_IMPORTED_MODULE_4__.title,\n    content: _content_CompareContent_json__WEBPACK_IMPORTED_MODULE_4__.text,\n    icon: \"graphs.svg\",\n    id: \"mission\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeekerHomeScreen);\n\n//# sourceURL=webpack://frontend/./src/pages/SeekerHomeScreen/index.js?");

/***/ }),

/***/ "./src/video/ProductVid.mp4":
/*!**********************************!*\
  !*** ./src/video/ProductVid.mp4 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d0daed8b0f36ebde79d70305052ad529.mp4\";\n\n//# sourceURL=webpack://frontend/./src/video/ProductVid.mp4?");

/***/ }),

/***/ "./src/content/CompareContent.json":
/*!*****************************************!*\
  !*** ./src/content/CompareContent.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Weight your options\",\"text\":\"Compare the long term benefits of choosing one education or experience over another\",\"button\":\"Get Started\"}');\n\n//# sourceURL=webpack://frontend/./src/content/CompareContent.json?");

/***/ }),

/***/ "./src/content/DiscoverContent.json":
/*!******************************************!*\
  !*** ./src/content/DiscoverContent.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Discover possibilities\",\"text\":\"Get an overview of career paths available to you based on the paths of those who shared the same education and experiences.\"}');\n\n//# sourceURL=webpack://frontend/./src/content/DiscoverContent.json?");

/***/ }),

/***/ "./src/content/GiveAdviceContent.json":
/*!********************************************!*\
  !*** ./src/content/GiveAdviceContent.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Pay it forward\",\"text\":\"Help others find out more about the job you held or are holding, by answering their queries. They might buy you a coffee, and you could choose to save it or let us donate it to partnering educational charities\"}');\n\n//# sourceURL=webpack://frontend/./src/content/GiveAdviceContent.json?");

/***/ }),

/***/ "./src/content/ReceiveAdviceContent.json":
/*!***********************************************!*\
  !*** ./src/content/ReceiveAdviceContent.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Need targetted advice?\",\"text\":\"We know the pain of networking for the sake of more information. The fear of rejection, feeling like it\\'s a one-sided relationship. The truth is, many people are just \\\\\"glad to help\\\\\". We connect you with someone from the role you\\'re considering who has agreed to answer your queries. If you appreciate the advice, thank them with a cup of coffee!\"}');\n\n//# sourceURL=webpack://frontend/./src/content/ReceiveAdviceContent.json?");

/***/ }),

/***/ "./src/content/RoleModelContent.json":
/*!*******************************************!*\
  !*** ./src/content/RoleModelContent.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"Learn from others\\' successes\",\"text\":\"Gain insights on what it took for others to land the job you’re aiming for to see if or how you can stand a chance\",\"button\":\"Get Started\"}');\n\n//# sourceURL=webpack://frontend/./src/content/RoleModelContent.json?");

/***/ })

}]);