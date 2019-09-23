/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_main__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



var init = function init() {
  if (_modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].pageName("home")) {
    _pages_home__WEBPACK_IMPORTED_MODULE_1__["home"].init();
  }
};

window.onload = init;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\src\\assets\\js\\modules\\main.js: Identifier 'token' has already been declared (150:8)\n\n\u001b[0m \u001b[90m 148 | \u001b[39m\t\t\u001b[36mconst\u001b[39m token \u001b[33m=\u001b[39m \u001b[32m\"267545657.62f8a58.b42b65c64ea44256aa50a490a6e5bb7c\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 149 | \u001b[39m\t\t\u001b[36mconst\u001b[39m link \u001b[33m=\u001b[39m \u001b[32m\"https://api.instagram.com/v1/users/self/media/recent/?access_token=\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 150 | \u001b[39m\t\t\u001b[36mconst\u001b[39m token \u001b[33m=\u001b[39m \u001b[32m\"267545657.62f8a58.b42b65c64ea44256aa50a490a6e5bb7c\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m\t\t      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 151 | \u001b[39m\t\t\u001b[36mconst\u001b[39m instagramList \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mquerySelector(\u001b[32m\".instagram-list\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 152 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 153 | \u001b[39m\t\tfetch(link \u001b[33m+\u001b[39m token)\u001b[0m\n    at Parser.raise (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:6325:17)\n    at ScopeHandler.checkRedeclarationInScope (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:3759:12)\n    at ScopeHandler.declareName (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:3725:12)\n    at Parser.checkLVal (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:8021:22)\n    at Parser.parseVarId (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:10502:10)\n    at Parser.parseVar (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:10477:12)\n    at Parser.parseVarStatement (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:10299:10)\n    at Parser.parseStatementContent (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:9896:21)\n    at Parser.parseStatement (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:9829:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\rafae\\Desktop\\Gulp\\gulp-webpack\\node_modules\\@babel\\parser\\lib\\index.js:10405:25)");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home", function() { return home; });
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_main__WEBPACK_IMPORTED_MODULE_0__);

var home = {
  init: function init() {
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].pageLoader(5);
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].minifiedHeader();
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].getFileName();
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].getParent();
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].orderList(".list");
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].instagram();
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].bannerControl();
    console.log("Página: Home");
  }
};


/***/ })
/******/ ]);