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
/* harmony import */ var _pages_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _pages_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _pages_department__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _pages_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
// Modules
 // Pages








var init = function init() {
  if (!_modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].pageName("error")) {
    _pages_pages__WEBPACK_IMPORTED_MODULE_1__["pages"].init();
  }

  if (_modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].pageName("category")) {
    _pages_category__WEBPACK_IMPORTED_MODULE_2__["category"].init();
  }

  if (_modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].pageName("department")) {
    _pages_department__WEBPACK_IMPORTED_MODULE_3__["department"].init();
  }

  if (_modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].pageName("home")) {
    _pages_home__WEBPACK_IMPORTED_MODULE_4__["home"].init();
  }

  if (_modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].pageName("login")) {
    _pages_login__WEBPACK_IMPORTED_MODULE_5__["login"].init();
  }

  if (_modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].pageName("product")) {
    _pages_product__WEBPACK_IMPORTED_MODULE_6__["product"].init();
  }
};

window.onload = init;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
var main = {
  // Função de loader da página;
  pageLoader: function pageLoader() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var loader = document.querySelector(".loader");

    if (!!loader) {
      if (time == 0) {
        main.remove(loader);
      } else {
        var seconds = time * 1000;
        setTimeout(function () {
          return main.remove(loader);
        }, seconds);
      }
    }
  },
  // Função para validar a classe da tag body de cada página ativa;
  pageName: function pageName(className) {
    var body = document.getElementsByTagName("body")[0];
    return body.classList.contains(className);
  },
  // Remover o elemento
  remove: function remove(element) {
    element.parentNode.removeChild(element);
  },
  // Inserir o elemento What antes de um elemento Where
  outBefore: function outBefore(what, where) {
    where.parentNode.insertBefore(what, where);
  },
  // Inserir o elemento What depois de um elemento Where
  outAfter: function outAfter(what, where) {
    where.parentNode.insertBefore(what, where.nextSibling);
  },
  // Inserir o elemento What como primeiro filho do elemento Where
  inBefore: function inBefore(what, where) {
    where.insertBefore(what, where.firstChild);
  },
  // Inserir elemento What como ultimo filho do elemento Where
  inAfter: function inAfter(what, where) {
    where.insertBefore(what, where.lastChild);
  },
  minifiedHeader: function minifiedHeader() {
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".header");
      parseInt(pageYOffset) >= header.clientHeight ? header.classList.add("minified") : header.classList.remove("minified");
    });
  },
  instagram: function instagram() {
    var link = "https://api.instagram.com/v1/users/self/media/recent/?access_token=";
    var token = "267545657.62f8a58.b42b65c64ea44256aa50a490a6e5bb7c";
    var instagramList = document.querySelector(".instagram-list");

    if (!!instagramList) {
      fetch(link + token).then(function (res) {
        return res.json();
      }).then(function (res) {
        res.data.forEach(function (element) {
          try {
            var image = document.createElement("img");
            image.classList.add("instagram-list-image");
            image.id = element.id; // image.src = element.images.thumbnail.url;

            image.src = element.images.low_resolution.url; // image.src = element.images.standard_resolution.url;

            var elInstagramListItem = document.createElement("li");
            elInstagramListItem.classList.add("instagram-list-item");
            elInstagramListItem.appendChild(image);
            instagramList.appendChild(elInstagramListItem);
          } catch (err) {
            console.log(err);
          }
        });
      }).catch(function (err) {
        console.log("u");
        alert("Sorry, there are no results for your search");
      });
    }

    setTimeout(function () {
      var instagramListItem = document.querySelectorAll(".instagram-list-item");
      console.log("Instagram Itens: " + instagramListItem.length);
    }, 1000);
  },
  createCarousel: function createCarousel() {
    var bannerList = $(".banner-list");
    var instagramList = $(".instagram-list");

    if (!!bannerList) {
      bannerList.each(function () {
        $(".banner-list-item", $(this)).addClass(function (index) {
          return "position-" + index;
        });
      });
    }
  }
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var pages = {
  init: function init() {
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].pageLoader(3);
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].minifiedHeader();
  }
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var category = {
  init: function init() {
    console.log("Page: Category");
  }
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "department", function() { return department; });
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var department = {
  init: function init() {
    console.log("Page: Department");
  }
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "home", function() { return home; });
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var home = {
  init: function init() {
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].instagram();
    _modules_main__WEBPACK_IMPORTED_MODULE_0__["main"].createCarousel();
    console.log("Page: Home");
  }
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var login = {
  init: function init() {
    console.log("Page: Login");
  }
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product", function() { return product; });
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var product = {
  init: function init() {
    console.log("Page: Product");
  }
};


/***/ })
/******/ ]);