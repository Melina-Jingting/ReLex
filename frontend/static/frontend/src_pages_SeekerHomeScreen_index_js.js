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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/IntroContent.json */ \"./src/content/IntroContent.json\");\n/* harmony import */ var _content_SearchContent_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/SearchContent.json */ \"./src/content/SearchContent.json\");\n/* harmony import */ var _content_RecommendationsContent_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content/RecommendationsContent.json */ \"./src/content/RecommendationsContent.json\");\n/* harmony import */ var _content_PlanContent_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content/PlanContent.json */ \"./src/content/PlanContent.json\");\n/* harmony import */ var _content_ReceiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content/ReceiveAdviceContent.json */ \"./src/content/ReceiveAdviceContent.json\");\n/* harmony import */ var _content_GiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content/GiveAdviceContent.json */ \"./src/content/GiveAdviceContent.json\");\n/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Container */ \"./src/common/Container/index.js\");\n/* harmony import */ var _common_ScrollToTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ScrollToTop */ \"./src/common/ScrollToTop/index.js\");\n/* harmony import */ var _components_LandingPage_MiddleBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/LandingPage/MiddleBlock */ \"./src/components/LandingPage/MiddleBlock/index.js\");\n/* harmony import */ var _components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/LandingPage/ContentBlock */ \"./src/components/LandingPage/ContentBlock/index.js\");\n/* harmony import */ var _components_LandingPage_LandingPageHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/LandingPage/LandingPageHeader */ \"./src/components/LandingPage/LandingPageHeader/index.js\");\n// import { lazy } from \"react\";\n\n\n\n\n\n\n\n\n\n\n\n\n // import { LinkedInPopUp } from 'react-linkedin-login-oauth2';\n// import LinkedInPage from '../LinkedInPage';\n// const ContactFrom = lazy(() => import(\"../components/ContactForm\"));\n// const ContentBlock = lazy(() => import(\"../components/ContentBlock\"));\n// const MiddleBlock = lazy(() => import(\"../components/MiddleBlock\"));\n// const Container = lazy(() => import(\"../common/Container\"));\n// const ScrollToTop = lazy(() => import(\"../common/ScrollToTop\"));\n\nconst HomeScreen = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Container__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_LandingPageHeader__WEBPACK_IMPORTED_MODULE_11__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_ScrollToTop__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_MiddleBlock__WEBPACK_IMPORTED_MODULE_9__.default, {\n    title: _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__.title,\n    content: _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__.text,\n    button: _content_IntroContent_json__WEBPACK_IMPORTED_MODULE_1__.button // this component is the linkedin button\n    ,\n    linkedin_url: \"https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ioflr7umfzey&redirect_uri=https%3A%2F%2F6fxspsdl46.execute-api.us-east-2.amazonaws.com%2Fdefault%2Flinkedinsocial\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Container__WEBPACK_IMPORTED_MODULE_7__.default, {\n    className: \"py-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: __webpack_require__(/*! ../../img/svg/how-it-works.svg */ \"./src/img/svg/how-it-works.svg\"),\n    alt: \"how-it-works.svg\",\n    width: 1000\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"right\",\n    first: \"true\",\n    title: _content_SearchContent_json__WEBPACK_IMPORTED_MODULE_2__.title,\n    content: _content_SearchContent_json__WEBPACK_IMPORTED_MODULE_2__.text,\n    button: _content_SearchContent_json__WEBPACK_IMPORTED_MODULE_2__.button,\n    icon: \"graphs.svg\",\n    id: \"intro\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"left\",\n    title: _content_RecommendationsContent_json__WEBPACK_IMPORTED_MODULE_3__.title,\n    content: _content_RecommendationsContent_json__WEBPACK_IMPORTED_MODULE_3__.text,\n    section: _content_RecommendationsContent_json__WEBPACK_IMPORTED_MODULE_3__.section,\n    icon: \"look-in-mirror.svg\",\n    id: \"about\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"right\",\n    title: _content_PlanContent_json__WEBPACK_IMPORTED_MODULE_4__.title,\n    content: _content_PlanContent_json__WEBPACK_IMPORTED_MODULE_4__.text,\n    icon: \"visualise-map.svg\",\n    id: \"mission\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"left\",\n    title: _content_ReceiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_5__.title,\n    content: _content_ReceiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_5__.text,\n    icon: \"ask-questions.svg\",\n    id: \"product\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingPage_ContentBlock__WEBPACK_IMPORTED_MODULE_10__.default, {\n    type: \"right\",\n    title: _content_GiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_6__.title,\n    content: _content_GiveAdviceContent_json__WEBPACK_IMPORTED_MODULE_6__.text,\n    icon: \"answer.svg\",\n    id: \"product\"\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeScreen);\n\n//# sourceURL=webpack://frontend/./src/pages/SeekerHomeScreen/index.js?");

/***/ })

}]);