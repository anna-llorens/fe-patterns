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

/***/ "../components/button.js"
/*!*******************************!*\
  !*** ../components/button.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   button: () => (/* binding */ button)\n/* harmony export */ });\nconst button = (label, action) => {\n    const buttonDom = document.createElement(\"button\");\n    buttonDom.innerHTML = label;\n    buttonDom.addEventListener(\"click\", action);\n  \n    return buttonDom;\n  };\n\n//# sourceURL=webpack://container/../components/button.js?\n}");

/***/ },

/***/ "../components/header.js"
/*!*******************************!*\
  !*** ../components/header.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link.js */ \"../components/link.js\");\n\n\nconst header = () => {\n  const homeLink = (0,_link_js__WEBPACK_IMPORTED_MODULE_0__.mountLink)(\"Home\", \"home\");\n  const shipmentsLink = (0,_link_js__WEBPACK_IMPORTED_MODULE_0__.mountLink)(\"Shipments\", \"shipments\");\n  const trackerLink = (0,_link_js__WEBPACK_IMPORTED_MODULE_0__.mountLink)(\"Tracker\", \"tracker\");\n\n  const header = document.createElement(\"header\");\n  header.appendChild(homeLink);\n  header.appendChild(shipmentsLink);\n  header.appendChild(trackerLink);\n  header.style.cssText = `\n        display: flex;\n        gap: 20px;\n        background-color: #d1d1d1;\n        padding: 20px;\n        `;\n\n  return header;\n};\n\n\n//# sourceURL=webpack://container/../components/header.js?\n}");

/***/ },

/***/ "../components/link.js"
/*!*****************************!*\
  !*** ../components/link.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountLink: () => (/* binding */ mountLink)\n/* harmony export */ });\n/* harmony import */ var _routes_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes/index.js */ \"../routes/index.js\");\n\n\nconst mountLink = (label, destinationRoute) => {\n  const link = document.createElement(\"a\");\n  link.innerHTML = label;\n  link.href = \"javascript:void(0)\";\n\n  link.addEventListener(\"click\", () => (0,_routes_index_js__WEBPACK_IMPORTED_MODULE_0__.navigateTo)(destinationRoute));\n\n  return link;\n};\n\n\n//# sourceURL=webpack://container/../components/link.js?\n}");

/***/ },

/***/ "../components/title.js"
/*!******************************!*\
  !*** ../components/title.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   title: () => (/* binding */ title)\n/* harmony export */ });\nconst title = (content) => {\n    const title = document.createElement(\"h1\");\n    title.innerHTML = content;\n  \n    return title;\n  };\n\n//# sourceURL=webpack://container/../components/title.js?\n}");

/***/ },

/***/ "../routes/index.js"
/*!**************************!*\
  !*** ../routes/index.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ROUTES: () => (/* binding */ ROUTES),\n/* harmony export */   navigateTo: () => (/* binding */ navigateTo)\n/* harmony export */ });\n/* harmony import */ var _container_src_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/src/home.js */ \"./src/home.js\");\n\n\nconst loadShipmentsPage = async (rootDiv) => {\n  const { mountShipmentsPage } = await __webpack_require__.e(/*! import() */ \"webpack_container_remote_shipments_ShipmentsIndex\").then(() => (__webpack_require__.t(/*! shipments/ShipmentsIndex */ \"webpack/container/remote/shipments/ShipmentsIndex\", 23)));\n  mountShipmentsPage(rootDiv);\n};\n\nconst loadTrackingPage = async (rootDiv) => {\n  const { mountTrackingPage } = await __webpack_require__.e(/*! import() */ \"webpack_container_remote_tracker_TrackerIndex\").then(() => (__webpack_require__.t(/*! tracker/TrackerIndex */ \"webpack/container/remote/tracker/TrackerIndex\", 23)));\n  mountTrackingPage(rootDiv);\n};\n\nconst ROUTES = {\n  \"\": _container_src_home_js__WEBPACK_IMPORTED_MODULE_0__.mountHomePage,\n  home: _container_src_home_js__WEBPACK_IMPORTED_MODULE_0__.mountHomePage,\n  tracking: loadTrackingPage,\n  tracker: loadTrackingPage,\n  shipments: loadShipmentsPage,\n};\n\nconst navigateTo = async (destinationRoute) => {\n  const functionDestinationRoute = ROUTES[destinationRoute];\n\n  if (!functionDestinationRoute) {\n    console.error(\"destinationRoute not defined as possible route\", ROUTES);\n    return;\n  }\n\n  const rootDiv = document.getElementById(\"view\");\n  rootDiv.innerHTML = \"\";\n  await functionDestinationRoute(rootDiv);\n};\n\n\n//# sourceURL=webpack://container/../routes/index.js?\n}");

/***/ },

/***/ "../states-manager/index.js"
/*!**********************************!*\
  !*** ../states-manager/index.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stateManager: () => (/* binding */ stateManager)\n/* harmony export */ });\nconst stateManager = {\n  state: { counter: 0, shipments: [] },\n\n  updateState(newState) {\n    this.state = { ...this.state, ...newState };\n  },\n\n  getState() {\n    return { ...this.state };\n  },\n};\n\n//# sourceURL=webpack://container/../states-manager/index.js?\n}");

/***/ },

/***/ "./src/bootstrap.js"
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bootstrap: () => (/* binding */ bootstrap)\n/* harmony export */ });\n/* harmony import */ var _routes_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routes/index.js */ \"../routes/index.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header.js */ \"../components/header.js\");\n\n\n\nconst bootstrap = () => {\n  const headerDiv = document.getElementById(\"header\");\n  headerDiv.appendChild((0,_components_header_js__WEBPACK_IMPORTED_MODULE_1__.header)());\n  (0,_routes_index_js__WEBPACK_IMPORTED_MODULE_0__.navigateTo)(\"\");\n};\n\n\n//# sourceURL=webpack://container/./src/bootstrap.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountHomePage: () => (/* binding */ mountHomePage)\n/* harmony export */ });\n/* harmony import */ var _components_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/title.js */ \"../components/title.js\");\n/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button.js */ \"../components/button.js\");\n/* harmony import */ var _states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../states-manager/index.js */ \"../states-manager/index.js\");\n\n\n\n\nconst mountHomePage = async (rootDiv) => {\n  const bodyContainer = document.createElement(\"div\");\n  const pageLocation = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(\"This is main home page\");\n  const pageTitle = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(\"Here you can increase the counter\");\n  const counterLabel = (0,_components_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(_states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__.stateManager.state.counter);\n\n  const increaseCounterBtn = (0,_components_button_js__WEBPACK_IMPORTED_MODULE_1__.button)(\"Increase\", () => {\n    _states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__.stateManager.updateState({ counter: _states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__.stateManager.state.counter + 1 });\n    counterLabel.innerHTML = _states_manager_index_js__WEBPACK_IMPORTED_MODULE_2__.stateManager.state.counter;\n  });\n\n  bodyContainer.appendChild(pageLocation);\n  bodyContainer.appendChild(pageTitle);\n  bodyContainer.appendChild(counterLabel);\n  bodyContainer.appendChild(increaseCounterBtn);\n\n  bodyContainer.style.cssText = `\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 60vh;\n    align-items: center;\n`;\n\n  rootDiv.appendChild(bodyContainer);\n};\n\n\n//# sourceURL=webpack://container/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _states_manager_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../states-manager/index.js */ \"../states-manager/index.js\");\n/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap.js */ \"./src/bootstrap.js\");\n\n\n\nwindow.stateManager = _states_manager_index_js__WEBPACK_IMPORTED_MODULE_0__.stateManager;\n\n(0,_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__.bootstrap)();\n\n\n//# sourceURL=webpack://container/./src/index.js?\n}");

/***/ },

/***/ "webpack/container/reference/shipments"
/*!*****************************************************************!*\
  !*** external "shipments@http://localhost:3001/remoteEntry.js" ***!
  \*****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const __webpack_error__ = new Error();
module.exports = new Promise((resolve, reject) => {
	if(typeof shipments !== "undefined") return resolve();
	__webpack_require__.l("http://localhost:3001/remoteEntry.js", (event) => {
		if(typeof shipments !== "undefined") return resolve();
		const errorType = event && (event.type === 'load' ? 'missing' : event.type);
		const realSrc = event && event.target && event.target.src;
		__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
		__webpack_error__.name = 'ScriptExternalLoadError';
		__webpack_error__.type = errorType;
		__webpack_error__.request = realSrc;
		__webpack_error__.event = event;
		reject(__webpack_error__);
	}, "shipments");
}).then(() => (shipments));

/***/ },

/***/ "webpack/container/reference/tracker"
/*!***************************************************************!*\
  !*** external "tracker@http://localhost:3002/remoteEntry.js" ***!
  \***************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const __webpack_error__ = new Error();
module.exports = new Promise((resolve, reject) => {
	if(typeof tracker !== "undefined") return resolve();
	__webpack_require__.l("http://localhost:3002/remoteEntry.js", (event) => {
		if(typeof tracker !== "undefined") return resolve();
		const errorType = event && (event.type === 'load' ? 'missing' : event.type);
		const realSrc = event && event.target && event.target.src;
		__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
		__webpack_error__.name = 'ScriptExternalLoadError';
		__webpack_error__.type = errorType;
		__webpack_error__.request = realSrc;
		__webpack_error__.event = event;
		reject(__webpack_error__);
	}, "tracker");
}).then(() => (tracker));

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		const getProto = Object.getPrototypeOf;
/******/ 		let leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			const ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			const def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => (undefined);
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		const inProgress = {};
/******/ 		const dataWebpackPrefix = "container:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			let script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					const s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			const onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				const doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode?.removeChild(script);
/******/ 				doneFns?.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			const timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		const chunkMapping = {
/******/ 			"webpack_container_remote_shipments_ShipmentsIndex": [
/******/ 				"webpack/container/remote/shipments/ShipmentsIndex"
/******/ 			],
/******/ 			"webpack_container_remote_tracker_TrackerIndex": [
/******/ 				"webpack/container/remote/tracker/TrackerIndex"
/******/ 			]
/******/ 		};
/******/ 		const idToExternalAndNameMapping = {
/******/ 			"webpack/container/remote/shipments/ShipmentsIndex": [
/******/ 				"default",
/******/ 				"./ShipmentsIndex",
/******/ 				"webpack/container/reference/shipments"
/******/ 			],
/******/ 			"webpack/container/remote/tracker/TrackerIndex": [
/******/ 				"default",
/******/ 				"./TrackerIndex",
/******/ 				"webpack/container/reference/tracker"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					let getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					const data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					const onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_require__.m[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					const handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							const promise = fn(arg1, arg2);
/******/ 							if(promise?.then) {
/******/ 								const p = promise.then((result) => (next(result, d)), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					const onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 					const onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 					const onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		const initPromises = {};
/******/ 		const initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			let initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			const scope = __webpack_require__.S[name];
/******/ 			const warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			const uniqueName = "container";
/******/ 			const register = (name, version, factory, eager) => {
/******/ 				const versions = scope[name] = scope[name] || {};
/******/ 				const activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			const initExternal = (id) => {
/******/ 				const handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					const module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					const initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					const initResult = initFn(module);
/******/ 					if(initResult?.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			const promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					initExternal("webpack/container/reference/shipments");
/******/ 					initExternal("webpack/container/reference/tracker");
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				let installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("main" == chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							const promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							const error = new Error();
/******/ 							const loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										const errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										const realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										error.event = event;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(__webpack_require__.p + __webpack_require__.u(chunkId), loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = self["webpackChunkcontainer"] = self["webpackChunkcontainer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
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