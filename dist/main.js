/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --primary-blue: #181823;\n    --primary-purple: #4a4182;\n    --primary-pink: #f2dede;\n    --primary-red: #964848;\n    --nautical-blue: #1a5091;\n}\n*,\n*::after,\n*::before{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: var(--primary-purple);\n}\n\n.navbar {\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    align-items: center;\n    background-color: var(--primary-blue); \n    height: 10vh;\n}\n\n.modal {\n    visibility: hidden;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    top: 10%;\n    left: 30%;\n    max-width: 40%;\n    background-color: var(--primary-pink);\n    padding: 1em;\n    gap: 1em;\n    border-radius: 5px;\n}\n\n.modal-mobile {\n    display: none;\n}\n\n.accent {\n    font-size: 24px;\n    font-weight: 600;\n    color: var(--nautical-blue);\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0px 100px;\n    min-height: 85vh;\n}\n\n.new-game {\n    cursor: pointer;\n    transition: all ease-in 0.2s;\n}\n\n.new-game:hover {\n    transform: scale(1.05);\n}\n.info-panel {\n    font-size: 24px;\n    color: var(--primary-pink);\n}\n.bottom-side-wrapper {\n    display: flex;\n    justify-self: center;\n    gap: 100px;\n}\n.player-board,\n.numbers-column,\n.letters-row,\n.computer-board {\n    display: flex;\n}\n\n.numbers-column {\n    flex-direction: column;\n    margin-top: 30px;\n}\n\n.letter {\n    height: 30px;\n    width: 50px;\n    font-size: 24px;\n    text-align: center;\n    color: var(--primary-pink);\n}\n.number {\n    height: 50px;\n    width: 30px;\n    font-size: 24px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    color: var(--primary-pink);\n}\n.gameboard {\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: repeat(10,50px);\n    grid-template-rows:repeat(10,50px);\n    background-color: var(--primary-pink);\n    border: solid 1px black;\n}\n.cell,\n.row {\n    box-sizing: border-box;\n    border: 1px solid rgba(24,3,3,0.018);\n    width: 50px;\n    height: 50px;\n}\n.cell {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.cell:hover {\n    background-color: rgba(128,128,128,0.212);\n}\n.player-panel {\n    box-sizing: border-box;\n    border: 1px solid var(--primary-blue);\n    background-color: var(--primary-pink);\n    padding: 15px 0px;\n}\n.player-ships,\n.player-control {\n    display: flex;\n    font-size: 24px;\n    padding: 0px 15px;\n}\n.player-control {\n    justify-content: space-between;\n    height: 40px;\n    margin-top: 15px;\n}\n.player-ships {\n    justify-content: space-between;\n    height: 30px;\n}\n.player-direction {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    color: white;\n    border-radius: 2px;\n    background-color: var(--primary-red);\n    border: 1px solid var(--primary-blue);\n    transition: all ease-in 0.2s;\n}\n.player-name {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.length-selector {\n    box-sizing: border-box;\n    border-radius: 2px;\n    border: 1px solid var(--primary-blue);\n    background-color: var(--nautical-blue);\n    color: white;\n    text-align: center;\n    transition: all ease-in 0.2s;\n}\n.player-carrier {\n    width: 160px;\n}\n.player-battleship{\n    width: 120px;\n}\n.player-destroyer {\n    width: 90px;\n}\n.player-submarine{\n    width: 60px;\n}\n.player-patrol-boat {\n    width: 30px;\n}\n.unclickable {\n    pointer-events: none;\n}\n.ship-style {\n    box-sizing: border-box;\n    background-color: var(--nautical-blue);\n    border: 1px solid var(--primary-blue);\n    color: white;\n}\n.fa-circle-xmark {\n    color: white;\n}\n.invalid-placement:hover {\n    background-color: rgba(201,23,23,0.767);\n}\n.can-start {\n    display: none;\n}\n.length-selector:hover,\n.player-direction:hover {\n    cursor: pointer;\n    transform: scale(1.02);\n}\na,\na:visited,\na:focus {\n    text-decoration: none;\n    color: var(--primary-pink);\n}\n.place-ships-info:hover {\n    cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function(cssWithMappingToString) {\n  var list = [];\n  list.toString = function toString() {\n    return this.map(function(item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, void 0]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function(i) {\n  return i[1];\n};\n\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _objects_computer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/computer.js */ \"./src/objects/computer.js\");\n/* harmony import */ var _objects_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/player.js */ \"./src/objects/player.js\");\n\n\n\nconst computerBoard = document.querySelector(\".computer-array\");\nconst playerBoard = document.querySelector(\".player-array\");\nconst placeShipsInfo = document.querySelector(\".place-ships-info\");\nconst canStartGame = document.querySelector(\".can-start\");\nconst winnerLabel = document.querySelector(\".winner\");\nconst playerPanel = document.querySelector(\".player-board\");\nconst computerPanel = document.querySelector(\".computer-board\");\nconst modal = document.querySelector(\".modal\");\nconst modalMobile = document.querySelector(\".modal-mobile\");\nconst closeModalMobile = document.querySelector(\".close-modal\");\nconst lengthSelectors = document.querySelectorAll(\".length-selector\");\nlet newGame = document.querySelector(\".new-game\");\nlet player = new _objects_player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"player\");\nlet computer = new _objects_computer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"computer\");\nlet shipLength = null;\nlet shipDirection = \"V\";\nconst game = () => {\n  player = new _objects_player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"player\");\n  computer = new _objects_computer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"computer\");\n  gameStart();\n};\nconst gameStart = () => {\n  clearBoard(player);\n  renderBoard(player);\n  clearBoard(computer);\n  renderBoard(computer);\n};\nconst renderBoard = (boardName) => {\n  let targetArray = boardName.playerBoard.board;\n  const targetAppend = document.querySelector(`.${boardName.name}-array`);\n  targetArray.forEach((row, rowIndex) => {\n    const myRow = document.createElement(\"div\");\n    myRow.classList.add(\"row\");\n    row.forEach((cell, columnIndex) => {\n      const myCell = document.createElement(\"div\");\n      myCell.classList.add(\"cell\");\n      myCell.setAttribute(\"data-x\", rowIndex);\n      myCell.setAttribute(\"data-y\", columnIndex);\n      let thisCell = targetArray[rowIndex][columnIndex];\n      if (thisCell === \"x\") {\n        myCell.classList.add(\"unclickable\");\n        myCell.classList.add(\"missed-hit\");\n        myCell.classList.add(\"fa-regular\");\n        myCell.classList.add(\"fa-x\");\n      } else if (thisCell === \"s-x\") {\n        myCell.classList.add(\"unclickable\");\n        myCell.classList.add(\"correct-hit\");\n        myCell.classList.add(\"fa-regular\");\n        myCell.classList.add(\"fa-x\");\n        myCell.classList.add(\"ship-style\");\n      }\n      myRow.appendChild(myCell);\n      if (boardName.name === \"computer\") {\n        myCell.addEventListener(\"click\", (e) => {\n          if (thisCell !== \"x\" || thisCell !== \"s-x\") {\n            attackEvent(e);\n            updateBoard(boardName);\n          }\n        });\n      }\n      if (boardName.name === \"player\") {\n        if (thisCell === \"H\") {\n          myCell.classList.add(\"ship-style\");\n          myCell.classList.add(\"invalid-placement\");\n        } else if (thisCell === \"V\") {\n          myCell.classList.add(\"ship-style\");\n          myCell.classList.add(\"invalid-placement\");\n        }\n        myCell.addEventListener(\"click\", (e) => {\n          e.preventDefault();\n          placeShipEvent(e);\n          updateBoard(boardName);\n        });\n      }\n    });\n    targetAppend.appendChild(myRow);\n  });\n};\nconst checkPlayerShips = () => {\n  let targetCheck = player.playerBoard.shipsArray;\n  let response = targetCheck.every((ship) => ship.coordPairs.length > 0);\n  if (response) {\n    playerPanel.classList.add(\"hide-on-mobile\");\n    computerPanel.classList.remove(\"hide-on-mobile\");\n  }\n  return response;\n};\nconst attackEvent = (e) => {\n  let x = parseInt(e.target.getAttribute(\"data-x\"));\n  let y = parseInt(e.target.getAttribute(\"data-y\"));\n  let canAttack = checkPlayerShips();\n  if (canAttack) {\n    player.shoot(computer, x, y);\n    setTimeout(() => {\n      computerPanel.classList.remove(\"display-on-mobile\");\n      computerPanel.classList.add(\"hide-on-mobile\");\n      playerPanel.classList.remove(\"hide-on-mobile\");\n      playerPanel.classList.add(\"display-on-mobile\");\n      console.log(\"hiding the computer board after my attack and showing mine\");\n    }, 300);\n    if (computer.playerBoard.allSunk) {\n      endGame(player);\n    }\n    computer.computerShot(player);\n    setTimeout(() => {\n      playerPanel.classList.remove(\"display-on-mobile\");\n      playerPanel.classList.add(\"hide-on-mobile\");\n      computerPanel.classList.remove(\"hide-on-mobile\");\n      computerPanel.classList.add(\"display-on-mobile\");\n    }, 1e3);\n    updateBoard(player);\n    if (player.playerBoard.allSunk) {\n      endGame(computer);\n    }\n  }\n};\nconst endGame = (winnerName) => {\n  computerBoard.classList.add(\"unclickable\");\n  canStartGame.style.display = \"none\";\n  winnerLabel.style.display = \"block\";\n  if (winnerName.name === \"player\") {\n    winnerLabel.innerText = `You Won!`;\n  } else\n    winnerLabel.innerText = `You Lost! Try again? ->`;\n};\nconst placeShipEvent = (e) => {\n  let x = parseInt(e.target.getAttribute(\"data-x\"));\n  let y = parseInt(e.target.getAttribute(\"data-y\"));\n  player.placePlayerShip(shipLength, x, y, shipDirection);\n  let allShipsPlaced = checkPlayerShips();\n  if (allShipsPlaced) {\n    placeShipsInfo.style.display = \"none\";\n    canStartGame.style.display = \"block\";\n    computerBoard.classList.remove(\"unclickable\");\n    playerBoard.classList.add(\"unclickable\");\n    directionSelector.classList.add(\"unclickable\");\n  }\n  shipLength = null;\n};\nconst clearBoard = (board) => {\n  const targetDiv = board.name;\n  const targetClear = document.querySelector(`.${targetDiv}-array`);\n  targetClear.innerHTML = \"\";\n};\nconst updateBoard = (board) => {\n  clearBoard(board);\n  renderBoard(board);\n};\nnewGame.addEventListener(\"click\", () => {\n  lengthSelectors.forEach((selector) => {\n    selector.style.backgroundColor = \"#1a5091\";\n  });\n  placeShipsInfo.style.display = \"block\";\n  canStartGame.style.display = \"none\";\n  winnerLabel.style.display = \"none\";\n  playerBoard.classList.remove(\"unclickable\");\n  game();\n});\nlengthSelectors.forEach((selector) => {\n  selector.addEventListener(\"click\", (e) => {\n    shipLength = parseInt(e.target.id);\n  });\n});\nconst directionSelector = document.querySelector(\".player-direction\");\ndirectionSelector.addEventListener(\"click\", () => {\n  if (directionSelector.innerText === \"H\") {\n    shipDirection = \"V\";\n    directionSelector.innerText = \"V\";\n  } else if (directionSelector.innerText === \"V\") {\n    shipDirection = \"H\";\n    directionSelector.innerText = \"H\";\n  }\n});\nplaceShipsInfo.addEventListener(\"mouseover\", () => {\n  modal.style.visibility = \"visible\";\n});\nmodal.addEventListener(\"mouseout\", () => {\n  modal.style.visibility = \"hidden\";\n});\nmodal.addEventListener(\"mouseover\", () => {\n  modal.style.visibility = \"visible\";\n});\nplaceShipsInfo.addEventListener(\"click\", () => {\n  modalMobile.style.visibility = \"visible\";\n});\ncloseModalMobile.addEventListener(\"click\", () => {\n  modalMobile.style.visibility = \"hidden\";\n});\ngame();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/objects/computer.js":
/*!*********************************!*\
  !*** ./src/objects/computer.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Computer)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/objects/gameboard.js\");\n\nclass Computer {\n  constructor(name) {\n    this.name = name;\n    this.playerBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.computerPastShots = [];\n    this.placeRandomShips();\n  }\n  getRandomNum() {\n    return Math.floor(Math.random() * 10);\n  }\n  getRandomX() {\n    let X = this.getRandomNum();\n    return X;\n  }\n  getRandomY() {\n    let Y = this.getRandomNum();\n    return Y;\n  }\n  getRandomDirection() {\n    if (Math.random() < 0.5) {\n      return \"V\";\n    } else {\n      return \"H\";\n    }\n  }\n  placeRandomShips() {\n    let computerArray = this.playerBoard.shipsArray;\n    computerArray.forEach((compShip) => {\n      let isShipPlaced = compShip.coordPairs.length;\n      while (isShipPlaced === 0) {\n        let randomDirection = this.getRandomDirection();\n        let randomX = this.getRandomX();\n        let randomY = this.getRandomY();\n        let shipLength = compShip.ship.length;\n        this.playerBoard.placeShip(shipLength, randomX, randomY, randomDirection);\n        isShipPlaced = compShip.coordPairs.length;\n      }\n    });\n  }\n  computerShot(computerTarget) {\n    let shotIsPresent = false;\n    let attackX = this.getRandomNum();\n    let attackY = this.getRandomNum();\n    let pairShot = [attackX, attackY];\n    if (this.computerPastShots.includes(pairShot)) {\n      shotIsPresent = true;\n      attackX = this.getRandomNum();\n      attackY = this.getRandomNum();\n      pairShot = [attackX, attackY];\n    }\n    if (!shotIsPresent) {\n      computerTarget.playerBoard.shotFired(attackX, attackY);\n      this.computerPastShots.push(pairShot);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/objects/computer.js?");

/***/ }),

/***/ "./src/objects/gameboard.js":
/*!**********************************!*\
  !*** ./src/objects/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/objects/ship.js\");\n\nclass GameBoard {\n  constructor() {\n    this.board = this.createBoard(10);\n    this.shipsArray = [\n      {\n        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, \"Patrol Boat\"),\n        coordPairs: []\n      },\n      {\n        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, \"Submarine\"),\n        coordPairs: []\n      },\n      {\n        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, \"Destroyer\"),\n        coordPairs: []\n      },\n      {\n        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, \"Battleship\"),\n        coordPairs: []\n      },\n      {\n        ship: new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, \"Carrier\"),\n        coordPairs: []\n      }\n    ];\n    this.hitCoords = {\n      missedHits: [],\n      shipHits: []\n    };\n    this.allSunk = false;\n  }\n  createBoard(size) {\n    let board = [];\n    for (let i = 0; i < size; i++) {\n      board[i] = [];\n      for (let j = 0; j < size; j++) {\n        board[i][j] = \"o\";\n      }\n    }\n    return board;\n  }\n  placeShip(ship, positionX, positionY, direction) {\n    if (direction === \"H\") {\n      let columnValid = true;\n      for (let i = positionX; i < positionX + ship; i++) {\n        if (this.board[i][positionY] !== \"o\" || positionX + ship > 10) {\n          columnValid = false;\n          break;\n        }\n      }\n      if (columnValid) {\n        if (ship === 1 && this.shipsArray[0].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[0].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"H\";\n            positionX++;\n            ship--;\n          }\n          return this.board;\n        }\n        if (ship === 2 && this.shipsArray[1].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[1].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"H\";\n            positionX++;\n            ship--;\n          }\n          return this.board;\n        }\n        if (ship === 3 && this.shipsArray[2].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[2].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"H\";\n            positionX++;\n            ship--;\n          }\n          return this.board;\n        }\n        if (ship === 4 && this.shipsArray[3].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[3].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"H\";\n            positionX++;\n            ship--;\n          }\n          return this.board;\n        }\n        if (ship === 5 && this.shipsArray[4].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[4].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"H\";\n            positionX++;\n            ship--;\n          }\n        }\n      }\n    } else if (direction === \"V\") {\n      let rowValid = true;\n      for (let j = positionY; j < positionY + ship; j++) {\n        if (this.board[positionX][j] !== \"o\" || positionY + ship > 10) {\n          rowValid = false;\n          break;\n        }\n      }\n      if (rowValid) {\n        if (ship === 1 && this.shipsArray[0].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[0].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"V\";\n            positionY++;\n            ship--;\n          }\n          return this.board;\n        }\n        if (ship === 2 && this.shipsArray[1].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[1].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"V\";\n            positionY++;\n            ship--;\n          }\n          return this.board;\n        }\n        if (ship === 3 && this.shipsArray[2].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[2].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"V\";\n            positionY++;\n            ship--;\n          }\n          return this.board;\n        }\n        if (ship === 4 && this.shipsArray[3].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[3].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"V\";\n            positionY++;\n            ship--;\n          }\n          return this.board;\n        }\n        if (ship === 5 && this.shipsArray[4].coordPairs.length === 0) {\n          while (ship !== 0) {\n            this.shipsArray[4].coordPairs.push({ positionX, positionY });\n            this.board[positionX][positionY] = \"V\";\n            positionY++;\n            ship--;\n          }\n          return this.board;\n        }\n      }\n    }\n  }\n  shotFired(coordX, coordY) {\n    let allowedToHit = false;\n    let shipHit = false;\n    if (this.board[coordX][coordY] !== \"x\" && this.board[coordX][coordY] !== \"sx\") {\n      allowedToHit = true;\n    }\n    this.shipsArray.forEach((singleShip) => {\n      for (let i = 0; i < singleShip.coordPairs.length; i++) {\n        if (singleShip.coordPairs[i].positionX == coordX && singleShip.coordPairs[i].positionY == coordY) {\n          shipHit = true;\n          singleShip.ship.hit();\n          singleShip.ship.isDestroyed();\n          this.checkIfAllDestroyed();\n        }\n      }\n    });\n    if (shipHit && allowedToHit) {\n      this.board[coordX][coordY] = \"sx\";\n      this.hitCoords.shipHits.push({ coordX, coordY });\n    }\n    if (!shipHit && allowedToHit) {\n      this.board[coordX][coordY] = \"x\";\n      this.hitCoords.missedHits.push({ coordX, coordY });\n    }\n  }\n  checkIfAllDestroyed() {\n    let allSunk = true;\n    for (let i = 0; i < this.shipsArray.length; i++) {\n      let existingShips = this.shipsArray[i].coordPairs.length;\n      if (existingShips > 0) {\n        if (this.shipsArray[i].ship.sunk === false) {\n          allSunk = false;\n          break;\n        }\n      }\n    }\n    if (allSunk) {\n      this.allSunk = true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/objects/gameboard.js?");

/***/ }),

/***/ "./src/objects/player.js":
/*!*******************************!*\
  !*** ./src/objects/player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/objects/gameboard.js\");\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.playerBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n  placePlayerShip(playerL, playerX, playerY, playerD) {\n    this.playerBoard.placeShip(playerL, playerX, playerY, playerD);\n    let placedShips = this.playerBoard.shipsArray.filter(\n      (ship) => ship.coordPairs.length > 0\n    );\n  }\n  shoot(enemyBoard, enemyX, enemyY) {\n    enemyBoard.playerBoard.shotFired(enemyX, enemyY);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/objects/player.js?");

/***/ }),

/***/ "./src/objects/ship.js":
/*!*****************************!*\
  !*** ./src/objects/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length, name, hits = 0) {\n    this.length = length;\n    this.name = name;\n    this.hits = hits;\n    this.sunk = false;\n  }\n  hit() {\n    if (this.hits === this.length) {\n      return;\n    } else\n      this.hits++;\n  }\n  isDestroyed() {\n    if (this.hits === this.length) {\n      return this.sunk = true;\n    } else {\n      return this.sunk = false;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/objects/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;