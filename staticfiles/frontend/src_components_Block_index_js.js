/*! For license information please see src_components_Block_index_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_Block_index_js"],{"./src/components/Block/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Block/styles.js");\n\n\n\n\nconst Block = ({\n  title,\n  content,\n  t\n}) => {\n  return /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/React.createElement((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_0___default()), {\n    left: true\n  }, /*#__PURE__*/React.createElement("h6", null, t(title)), /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.TextWrapper, null, /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Content, null, t(content)))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.withTranslation)()(Block));\n\n//# sourceURL=webpack://frontend/./src/components/Block/index.js?')},"./src/components/Block/styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Content": () => (/* binding */ Content),\n/* harmony export */   "Container": () => (/* binding */ Container),\n/* harmony export */   "TextWrapper": () => (/* binding */ TextWrapper)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`\n  margin-top: 1.5rem;\n`;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  position: relative;\n  max-width: 700px;\n`;\nconst TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  border-radius: 3rem;\n  max-width: 400px;\n`;\n\n//# sourceURL=webpack://frontend/./src/components/Block/styles.js?')}}]);