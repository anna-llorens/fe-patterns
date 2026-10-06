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

/***/ "./src/bootstrap.js"
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bootstrap: () => (/* binding */ bootstrap)\n/* harmony export */ });\n/* harmony import */ var _routes_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routes/index.js */ \"../routes/index.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header.js */ \"../components/header.js\");\n\n\n\nconst bootstrap = () => {\n  const headerDiv = document.getElementById(\"header\");\n  headerDiv.appendChild((0,_components_header_js__WEBPACK_IMPORTED_MODULE_1__.header)());\n  (0,_routes_index_js__WEBPACK_IMPORTED_MODULE_0__.navigateTo)(\"\");\n};\n\n\n//# sourceURL=webpack://container-microfrontend/./src/bootstrap.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _states_manager_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../states-manager/index.js */ \"../states-manager/index.js\");\n/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap.js */ \"./src/bootstrap.js\");\n\n\n\nwindow.stateManager = _states_manager_index_js__WEBPACK_IMPORTED_MODULE_0__.stateManager;\n\n(0,_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__.bootstrap)();\n\n\n//# sourceURL=webpack://container-microfrontend/./src/index.js?\n}");

/***/ },

/***/ "../components/button.js"
/*!*******************************!*\
  !*** ../components/button.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   button: () => (/* binding */ button)\n/* harmony export */ });\nconst button = (label, action) => {\n    const buttonDom = document.createElement(\"button\");\n    buttonDom.innerHTML = label;\n    buttonDom.addEventListener(\"click\", action);\n  \n    return buttonDom;\n  };\n\n//# sourceURL=webpack://container-microfrontend/../components/button.js?\n}");

/***/ },

/***/ "../components/header.js"
/*!*******************************!*\
  !*** ../components/header.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link.js */ \"../components/link.js\");\n\n\n\nconst header = () => {\n  const homeLink = (0,_link_js__WEBPACK_IMPORTED_MODULE_0__.mountLink)(\"Home\", \"home\");\n  const detailsLink = (0,_link_js__WEBPACK_IMPORTED_MODULE_0__.mountLink)(\"Details\", \"detail\");\n  const shipmentsLink = (0,_link_js__WEBPACK_IMPORTED_MODULE_0__.mountLink)(\"Shipments\", \"shipments\");\n  const newShipmentLink = (0,_link_js__WEBPACK_IMPORTED_MODULE_0__.mountLink)(\"New Shipment\", \"newShipment\");\n  const trackerLink = (0,_link_js__WEBPACK_IMPORTED_MODULE_0__.mountLink)(\"Tracker\", \"tracker\");\n\n  const header = document.createElement(\"header\");\n  header.appendChild(homeLink);\n  header.appendChild(detailsLink);\n  header.appendChild(shipmentsLink);\n  header.appendChild(newShipmentLink);\n  header.appendChild(trackerLink);\n  header.style.cssText = `\n        display: flex;\n        gap: 20px;\n        background-color: #d1d1d1;\n        padding: 20px;\n        `;\n\n  return header;\n};\n\n\n//# sourceURL=webpack://container-microfrontend/../components/header.js?\n}");

/***/ },

/***/ "../components/input.js"
/*!******************************!*\
  !*** ../components/input.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   input: () => (/* binding */ input)\n/* harmony export */ });\nconst input = (placeholder, value) => {\n    const inputDom = document.createElement(\"input\");\n    inputDom.placeholder = placeholder;\n    inputDom.value = value || \"\";\n  \n    return inputDom;\n  };\n\n//# sourceURL=webpack://container-microfrontend/../components/input.js?\n}");

/***/ },

/***/ "../components/link.js"
/*!*****************************!*\
  !*** ../components/link.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountLink: () => (/* binding */ mountLink)\n/* harmony export */ });\n/* harmony import */ var _routes_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes/index.js */ \"../routes/index.js\");\n\n\nconst mountLink = (label, destinationRoute) => {\n  const link = document.createElement(\"a\");\n  link.innerHTML = label;\n  link.href = \"javascript:void(0)\";\n\n  link.addEventListener(\"click\", () => (0,_routes_index_js__WEBPACK_IMPORTED_MODULE_0__.navigateTo)(destinationRoute));\n\n  return link;\n};\n\n\n//# sourceURL=webpack://container-microfrontend/../components/link.js?\n}");

/***/ },

/***/ "../components/title.js"
/*!******************************!*\
  !*** ../components/title.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   title: () => (/* binding */ title)\n/* harmony export */ });\nconst title = (content) => {\n    const title = document.createElement(\"h1\");\n    title.innerHTML = content;\n  \n    return title;\n  };\n\n//# sourceURL=webpack://container-microfrontend/../components/title.js?\n}");

/***/ },

/***/ "../node_modules/uuid/dist/regex.js"
/*!******************************************!*\
  !*** ../node_modules/uuid/dist/regex.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);\n\n\n//# sourceURL=webpack://container-microfrontend/../node_modules/uuid/dist/regex.js?\n}");

/***/ },

/***/ "../node_modules/uuid/dist/rng.js"
/*!****************************************!*\
  !*** ../node_modules/uuid/dist/rng.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n    return crypto.getRandomValues(rnds8);\n}\n\n\n//# sourceURL=webpack://container-microfrontend/../node_modules/uuid/dist/rng.js?\n}");

/***/ },

/***/ "../node_modules/uuid/dist/stringify.js"
/*!**********************************************!*\
  !*** ../node_modules/uuid/dist/stringify.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"../node_modules/uuid/dist/validate.js\");\n\nconst byteToHex = [];\nfor (let i = 0; i < 256; ++i) {\n    byteToHex.push((i + 0x100).toString(16).slice(1));\n}\nfunction unsafeStringify(arr, offset = 0) {\n    return (byteToHex[arr[offset + 0]] +\n        byteToHex[arr[offset + 1]] +\n        byteToHex[arr[offset + 2]] +\n        byteToHex[arr[offset + 3]] +\n        '-' +\n        byteToHex[arr[offset + 4]] +\n        byteToHex[arr[offset + 5]] +\n        '-' +\n        byteToHex[arr[offset + 6]] +\n        byteToHex[arr[offset + 7]] +\n        '-' +\n        byteToHex[arr[offset + 8]] +\n        byteToHex[arr[offset + 9]] +\n        '-' +\n        byteToHex[arr[offset + 10]] +\n        byteToHex[arr[offset + 11]] +\n        byteToHex[arr[offset + 12]] +\n        byteToHex[arr[offset + 13]] +\n        byteToHex[arr[offset + 14]] +\n        byteToHex[arr[offset + 15]]).toLowerCase();\n}\nfunction stringify(arr, offset = 0) {\n    const uuid = unsafeStringify(arr, offset);\n    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n        throw TypeError('Stringified UUID is invalid');\n    }\n    return uuid;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n\n//# sourceURL=webpack://container-microfrontend/../node_modules/uuid/dist/stringify.js?\n}");

/***/ },

/***/ "../node_modules/uuid/dist/v4.js"
/*!***************************************!*\
  !*** ../node_modules/uuid/dist/v4.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"../node_modules/uuid/dist/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"../node_modules/uuid/dist/stringify.js\");\n\n\nfunction v4(options, buf, offset) {\n    if (!buf && !options && crypto.randomUUID) {\n        return crypto.randomUUID();\n    }\n    return _v4(options, buf, offset);\n}\nfunction _v4(options, buf, offset) {\n    options = options || {};\n    const rnds = options.random ?? options.rng?.() ?? (0,_rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (rnds.length < 16) {\n        throw new Error('Random bytes length must be >= 16');\n    }\n    rnds[6] = (rnds[6] & 0x0f) | 0x40;\n    rnds[8] = (rnds[8] & 0x3f) | 0x80;\n    if (buf) {\n        offset = offset || 0;\n        if (offset < 0 || offset + 16 > buf.length) {\n            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);\n        }\n        for (let i = 0; i < 16; ++i) {\n            buf[offset + i] = rnds[i];\n        }\n        return buf;\n    }\n    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.unsafeStringify)(rnds);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n\n//# sourceURL=webpack://container-microfrontend/../node_modules/uuid/dist/v4.js?\n}");

/***/ },

/***/ "../node_modules/uuid/dist/validate.js"
/*!*********************************************!*\
  !*** ../node_modules/uuid/dist/validate.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"../node_modules/uuid/dist/regex.js\");\n\nfunction validate(uuid) {\n    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n\n//# sourceURL=webpack://container-microfrontend/../node_modules/uuid/dist/validate.js?\n}");

/***/ },

/***/ "../routes/index.js"
/*!**************************!*\
  !*** ../routes/index.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ROUTES: () => (/* binding */ ROUTES),\n/* harmony export */   navigateTo: () => (/* binding */ navigateTo)\n/* harmony export */ });\n/* harmony import */ var _src_pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/home.js */ \"../src/pages/home.js\");\n/* harmony import */ var _src_pages_detail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/pages/detail.js */ \"../src/pages/detail.js\");\n/* harmony import */ var _src_pages_shipments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/pages/shipments.js */ \"../src/pages/shipments.js\");\n/* harmony import */ var _src_pages_newShipment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/pages/newShipment.js */ \"../src/pages/newShipment.js\");\n/* harmony import */ var _src_pages_tracker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/pages/tracker.js */ \"../src/pages/tracker.js\");\n\n\n\n\n\n\nconst ROUTES = {\n  \"\": _src_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.renderHomePage,\n  home: _src_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.renderHomePage,\n  detail: _src_pages_detail_js__WEBPACK_IMPORTED_MODULE_1__.renderDetailsPage,\n  shipments: _src_pages_shipments_js__WEBPACK_IMPORTED_MODULE_2__.mountShipmentsPage,\n  newShipment: _src_pages_newShipment_js__WEBPACK_IMPORTED_MODULE_3__.mountNewShipmentPage,\n  tracker: _src_pages_tracker_js__WEBPACK_IMPORTED_MODULE_4__.mountTrackingPage,\n};\n\nconst navigateTo = async (destinationRoute) => {\n  const functionDestinationRoute = ROUTES[destinationRoute];\n\n  if (!functionDestinationRoute) {\n    console.error(\"destinationRoute not defined as possible route\", ROUTES);\n  }\n\n  const rootDiv = document.getElementById(\"view\");\n  rootDiv.innerHTML = \"\";\n  await functionDestinationRoute();\n};\n\n//# sourceURL=webpack://container-microfrontend/../routes/index.js?\n}");

/***/ },

/***/ "../src/pages/detail.js"
/*!******************************!*\
  !*** ../src/pages/detail.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderDetailsPage: () => (/* binding */ renderDetailsPage)\n/* harmony export */ });\n/* harmony import */ var _components_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/title.js */ \"../components/title.js\");\n/* harmony import */ var _states_manager_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../states-manager/index.js */ \"../states-manager/index.js\");\n\n\n\nconst renderDetailsPage = () => {\n  const rootDiv = document.getElementById(\"view\");\n\n  const bodyContainer = document.createElement(\"div\");\n  const pageTitle = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(\n    \"Here you can just check the increased counter in the previous screen\"\n  );\n\n  const counter = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(_states_manager_index_js__WEBPACK_IMPORTED_MODULE_1__.stateManager.state.counter);\n\n  bodyContainer.appendChild(pageTitle);\n  bodyContainer.appendChild(counter);\n  bodyContainer.style.cssText = `\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 60vh;\n    align-items: center;\n`;\n\n  rootDiv.appendChild(bodyContainer);\n};\n\n//# sourceURL=webpack://container-microfrontend/../src/pages/detail.js?\n}");

/***/ },

/***/ "../src/pages/home.js"
/*!****************************!*\
  !*** ../src/pages/home.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage)\n/* harmony export */ });\n/* harmony import */ var _components_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/title.js */ \"../components/title.js\");\n/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button.js */ \"../components/button.js\");\n/* harmony import */ var _states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../states-manager/index.js */ \"../states-manager/index.js\");\n\n\n\n\n\nconst renderHomePage = async() => {\n  const rootDiv = document.getElementById(\"view\");\n\n\n  const bodyContainer = document.createElement(\"div\");\n  const pageTitle = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(\"Here you can increase the counter\");\n  const counterLabel = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(_states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__.stateManager.state.counter);\n  \n  const increaseCounterBtn = (0,_components_button_js__WEBPACK_IMPORTED_MODULE_1__.button)(\"Increase\", () => {\n   _states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__.stateManager.updateState({ counter: _states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__.stateManager.state.counter + 1 });\n    counterLabel.innerHTML = _states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__.stateManager.state.counter;\n  });\n\n  bodyContainer.appendChild(pageTitle);\n  bodyContainer.appendChild(counterLabel);\n  bodyContainer.appendChild(increaseCounterBtn);\n\n  bodyContainer.style.cssText = `\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 60vh;\n    align-items: center;\n`;\n\n  rootDiv.appendChild(bodyContainer);\n};\n\n//# sourceURL=webpack://container-microfrontend/../src/pages/home.js?\n}");

/***/ },

/***/ "../src/pages/newShipment.js"
/*!***********************************!*\
  !*** ../src/pages/newShipment.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountNewShipmentPage: () => (/* binding */ mountNewShipmentPage)\n/* harmony export */ });\n/* harmony import */ var _components_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/title.js */ \"../components/title.js\");\n/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button.js */ \"../components/button.js\");\n/* harmony import */ var _components_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/input.js */ \"../components/input.js\");\n/* harmony import */ var _states_manager_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../states-manager/index.js */ \"../states-manager/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"../node_modules/uuid/dist/v4.js\");\n\n\n\n\n\n\nconst mountNewShipmentPage = () => {\n  const rootDiv = document.getElementById(\"view\");\n\n  const bodyContainer = document.createElement(\"div\");\n  const pageTitle = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(\n    \"Here you can add a new random shipment. To check your shipment, you can go to shipments tab, or go to tracking tab and search for the specific shipment code\"\n  );\n\n  const shipmentItem = (0,_components_input_js__WEBPACK_IMPORTED_MODULE_2__.input)(\"Item of your shipment\");\n\n  const increaseCounterBtn = (0,_components_button_js__WEBPACK_IMPORTED_MODULE_1__.button)(\"Add\", () => {\n    _states_manager_index_js__WEBPACK_IMPORTED_MODULE_3__.stateManager.updateState({\n      shipments: [\n        ...(_states_manager_index_js__WEBPACK_IMPORTED_MODULE_3__.stateManager.state.shipments ?? []),\n        { id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), name: shipmentItem.value },\n      ],\n    });\n\n    shipmentItem.value = \"\";\n  });\n\n  bodyContainer.appendChild(pageTitle);\n  bodyContainer.appendChild(shipmentItem);\n  bodyContainer.appendChild(increaseCounterBtn);\n\n  bodyContainer.style.cssText = `\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 60vh;\n    align-items: center;\n`;\n\n  rootDiv.appendChild(bodyContainer);\n};\n\n//# sourceURL=webpack://container-microfrontend/../src/pages/newShipment.js?\n}");

/***/ },

/***/ "../src/pages/shipments.js"
/*!*********************************!*\
  !*** ../src/pages/shipments.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountShipmentsPage: () => (/* binding */ mountShipmentsPage)\n/* harmony export */ });\n/* harmony import */ var _components_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/title.js */ \"../components/title.js\");\n/* harmony import */ var _states_manager_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../states-manager/index.js */ \"../states-manager/index.js\");\n\n\n\nconst mountShipmentsPage = () => {\n  const rootDiv = document.getElementById(\"view\");\n\n  const bodyContainer = document.createElement(\"div\");\n  const pageTitle = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(\"Shipments\");\n\n  const shipments = document.createElement(\"div\");\n  shipments.innerHTML = JSON.stringify(_states_manager_index_js__WEBPACK_IMPORTED_MODULE_1__.stateManager.state.shipments);\n\n  bodyContainer.appendChild(pageTitle);\n  bodyContainer.appendChild(shipments);\n\n  bodyContainer.style.cssText = `\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 60vh;\n    align-items: center;\n`;\n\n  rootDiv.appendChild(bodyContainer);\n};\n\n//# sourceURL=webpack://container-microfrontend/../src/pages/shipments.js?\n}");

/***/ },

/***/ "../src/pages/tracker.js"
/*!*******************************!*\
  !*** ../src/pages/tracker.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountTrackingPage: () => (/* binding */ mountTrackingPage)\n/* harmony export */ });\n/* harmony import */ var _components_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/title.js */ \"../components/title.js\");\n/* harmony import */ var _components_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/input.js */ \"../components/input.js\");\n/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button.js */ \"../components/button.js\");\n/* harmony import */ var _states_manager_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../states-manager/index.js */ \"../states-manager/index.js\");\n\n\n\n\n\nconst mountTrackingPage = () => {\n  const rootDiv = document.getElementById(\"view\");\n\n  const bodyContainer = document.createElement(\"div\");\n  const pageTitle = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(\"Tracking\");\n\n  const foundShipment = document.createElement(\"div\");\n\n  const shipmentItemSearch = (0,_components_input_js__WEBPACK_IMPORTED_MODULE_1__.input)(\"Search for your shipment\");\n\n  const searchBtn = (0,_components_button_js__WEBPACK_IMPORTED_MODULE_2__.button)(\"Search\", () => {\n    if (!shipmentItemSearch.value) {\n      return;\n    }\n\n    const filteredShipment = _states_manager_index_js__WEBPACK_IMPORTED_MODULE_3__.stateManager.state.shipments.filter(\n      (ship) => ship.id === shipmentItemSearch.value\n    )[0];\n\n    if (!filteredShipment) {\n      foundShipment.innerHTML = `Shipment with ID ${shipmentItemSearch.value} was not found`;\n      return;\n    }\n\n    foundShipment.innerHTML = JSON.stringify(filteredShipment);\n  });\n\n  bodyContainer.appendChild(pageTitle);\n  bodyContainer.appendChild(shipmentItemSearch);\n  bodyContainer.appendChild(searchBtn);\n  bodyContainer.appendChild(foundShipment);\n  bodyContainer.style.cssText = `\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 60vh;\n    align-items: center;\n`;\n\n  rootDiv.appendChild(bodyContainer);\n};\n\n//# sourceURL=webpack://container-microfrontend/../src/pages/tracker.js?\n}");

/***/ },

/***/ "../states-manager/index.js"
/*!**********************************!*\
  !*** ../states-manager/index.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stateManager: () => (/* binding */ stateManager)\n/* harmony export */ });\nconst stateManager = {\n  state: { counter: 0, shipments: [] },\n\n  updateState(newState) {\n    this.state = { ...this.state, ...newState };\n  },\n\n  getState() {\n    return { ...this.state };\n  },\n};\n\n//# sourceURL=webpack://container-microfrontend/../states-manager/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;