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
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar staff_model_1 = __webpack_require__(/*! ./staff.model */ \"./scripts/models/staff.model.ts\");\nvar CookModel = (function (_super) {\n    __extends(CookModel, _super);\n    function CookModel(name, salary) {\n        var _this = _super.call(this, name, salary) || this;\n        _this.id = null;\n        return _this;\n    }\n    CookModel.getInstance = function (name, salary) {\n        if (!this.instance) {\n            this.instance = new CookModel(name, salary);\n        }\n        return this.instance;\n    };\n    CookModel.prototype.doneTask = function (task) {\n        this.cook(task);\n    };\n    CookModel.prototype.cook = function (dish) {\n    };\n    CookModel.instance = null;\n    return CookModel;\n}(staff_model_1.StaffModel));\nexports.CookModel = CookModel;\n\n\n//# sourceURL=webpack:///./scripts/models/cook.model.ts?");

/***/ }),

/***/ "./scripts/models/customer.model.ts":
/*!******************************************!*\
  !*** ./scripts/models/customer.model.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar CustomerModel = (function () {\n    function CustomerModel() {\n    }\n    CustomerModel.prototype.order = function () {\n    };\n    CustomerModel.prototype.eat = function () {\n    };\n    return CustomerModel;\n}());\nexports.CustomerModel = CustomerModel;\n\n\n//# sourceURL=webpack:///./scripts/models/customer.model.ts?");

/***/ }),

/***/ "./scripts/models/dish.model.ts":
/*!**************************************!*\
  !*** ./scripts/models/dish.model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar DishModel = (function () {\n    function DishModel(name, cost, price) {\n        this.name = name;\n        this.cost = cost;\n        this.price = price;\n    }\n    return DishModel;\n}());\nexports.DishModel = DishModel;\n\n\n//# sourceURL=webpack:///./scripts/models/dish.model.ts?");

/***/ }),

/***/ "./scripts/models/index.ts":
/*!*********************************!*\
  !*** ./scripts/models/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\n__webpack_require__(/*! ./cook.model */ \"./scripts/models/cook.model.ts\");\n__webpack_require__(/*! ./customer.model */ \"./scripts/models/customer.model.ts\");\n__webpack_require__(/*! ./dish.model */ \"./scripts/models/dish.model.ts\");\n__webpack_require__(/*! ./restaurant.model */ \"./scripts/models/restaurant.model.ts\");\n__webpack_require__(/*! ./staff.model */ \"./scripts/models/staff.model.ts\");\n__webpack_require__(/*! ./waiter.model */ \"./scripts/models/waiter.model.ts\");\n\n\n//# sourceURL=webpack:///./scripts/models/index.ts?");

/***/ }),

/***/ "./scripts/models/restaurant.model.ts":
/*!********************************************!*\
  !*** ./scripts/models/restaurant.model.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar RestaurantModel = (function () {\n    function RestaurantModel(restaurant) {\n        this.cash = restaurant.cash;\n        this.seats = 1;\n        this.staff = restaurant.staff;\n    }\n    RestaurantModel.getInstance = function (restaurant) {\n        if (!this.instance) {\n            this.instance = new RestaurantModel(restaurant);\n        }\n        return this.instance;\n    };\n    RestaurantModel.prototype.hire = function (person) {\n        person.id = this.staff.length + 1;\n        this.staff.push(person);\n    };\n    RestaurantModel.prototype.fire = function (person) {\n        var index = this.staff.findIndex(function (s) { return s.id === person.id; });\n        if (index > -1) {\n            var fired = this.staff.splice(index, 1);\n            fired = null;\n        }\n    };\n    RestaurantModel.instance = null;\n    return RestaurantModel;\n}());\nexports.RestaurantModel = RestaurantModel;\n\n\n//# sourceURL=webpack:///./scripts/models/restaurant.model.ts?");

/***/ }),

/***/ "./scripts/models/staff.model.ts":
/*!***************************************!*\
  !*** ./scripts/models/staff.model.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar StaffModel = (function () {\n    function StaffModel(name, salary) {\n        this.id = null;\n        this.name = name;\n        this.salary = salary;\n    }\n    StaffModel.prototype.doneTask = function (task) {\n    };\n    return StaffModel;\n}());\nexports.StaffModel = StaffModel;\n\n\n//# sourceURL=webpack:///./scripts/models/staff.model.ts?");

/***/ }),

/***/ "./scripts/models/waiter.model.ts":
/*!****************************************!*\
  !*** ./scripts/models/waiter.model.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar staff_model_1 = __webpack_require__(/*! ./staff.model */ \"./scripts/models/staff.model.ts\");\nvar WaiterModel = (function (_super) {\n    __extends(WaiterModel, _super);\n    function WaiterModel(name, salary) {\n        var _this = _super.call(this, name, salary) || this;\n        _this.id = null;\n        return _this;\n    }\n    WaiterModel.getInstance = function (name, salary) {\n        if (!this.instance) {\n            this.instance = new WaiterModel(name, salary);\n        }\n        return this.instance;\n    };\n    WaiterModel.prototype.doneTask = function (task) {\n        (Array.isArray(task)) ? this.order(task) : this.serve(task);\n    };\n    WaiterModel.prototype.order = function (dishes) {\n    };\n    WaiterModel.prototype.serve = function (table) {\n    };\n    WaiterModel.instance = null;\n    return WaiterModel;\n}(staff_model_1.StaffModel));\nexports.WaiterModel = WaiterModel;\n\n\n//# sourceURL=webpack:///./scripts/models/waiter.model.ts?");

/***/ })

/******/ });