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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/models/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/models/cook.model.ts":
/*!**************************************!*\
  !*** ./scripts/models/cook.model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar staff_model_1 = __webpack_require__(/*! ./staff.model */ \"./scripts/models/staff.model.ts\");\nvar CookModel = (function (_super) {\n    __extends(CookModel, _super);\n    function CookModel(name, salary) {\n        var _this = _super.call(this, name, salary) || this;\n        _this.id = null;\n        return _this;\n    }\n    CookModel.prototype.doneTask = function (task) {\n        this.cook(task);\n    };\n    CookModel.prototype.cook = function (dish) {\n    };\n    return CookModel;\n}(staff_model_1.StaffModel));\nexports.CookModel = CookModel;\n\n\n//# sourceURL=webpack:///./scripts/models/cook.model.ts?");

/***/ }),

/***/ "./scripts/models/index.ts":
/*!*********************************!*\
  !*** ./scripts/models/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar cook_model_1 = __webpack_require__(/*! ./cook.model */ \"./scripts/models/cook.model.ts\");\nvar restaurant_model_1 = __webpack_require__(/*! ./restaurant.model */ \"./scripts/models/restaurant.model.ts\");\nvar ifeRestaurant = restaurant_model_1.RestaurantModel.getInstance({\n    cash: 1000000,\n    seats: 20,\n    staff: []\n});\nvar newCook = new cook_model_1.CookModel(\"Tony\", 10000);\nifeRestaurant.hire(newCook);\nconsole.log(ifeRestaurant.staff.length, newCook);\nifeRestaurant.fire(newCook);\nconsole.log(ifeRestaurant.staff);\nvar ifeRestaurant2 = restaurant_model_1.RestaurantModel.getInstance({\n    cash: 1000000,\n    seats: 20,\n    staff: []\n});\n\n\n//# sourceURL=webpack:///./scripts/models/index.ts?");

/***/ }),

/***/ "./scripts/models/restaurant.model.ts":
/*!********************************************!*\
  !*** ./scripts/models/restaurant.model.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar RestaurantModel = (function () {\n    function RestaurantModel(restaurant) {\n        this.cash = restaurant.cash;\n        this.seats = restaurant.seats;\n        this.staff = restaurant.staff;\n    }\n    RestaurantModel.getInstance = function (restaurant) {\n        if (!this.instance) {\n            this.instance = new RestaurantModel(restaurant);\n        }\n        return this.instance;\n    };\n    RestaurantModel.prototype.hire = function (person) {\n        person.id = this.staff.length + 1;\n        this.staff.push(person);\n    };\n    RestaurantModel.prototype.fire = function (person) {\n        var index = this.staff.findIndex(function (s) { return s.id === person.id; });\n        if (index > -1) {\n            var fired = this.staff.splice(index, 1);\n            fired = null;\n        }\n    };\n    RestaurantModel.instance = null;\n    return RestaurantModel;\n}());\nexports.RestaurantModel = RestaurantModel;\n\n\n//# sourceURL=webpack:///./scripts/models/restaurant.model.ts?");

/***/ }),

/***/ "./scripts/models/staff.model.ts":
/*!***************************************!*\
  !*** ./scripts/models/staff.model.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar StaffModel = (function () {\n    function StaffModel(name, salary) {\n        this.id = null;\n        this.name = name;\n        this.salary = salary;\n    }\n    StaffModel.prototype.doneTask = function (task) {\n    };\n    return StaffModel;\n}());\nexports.StaffModel = StaffModel;\n\n\n//# sourceURL=webpack:///./scripts/models/staff.model.ts?");

/***/ })

/******/ });