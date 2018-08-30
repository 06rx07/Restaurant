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

/***/ "./data/dishes.const.ts":
/*!******************************!*\
  !*** ./data/dishes.const.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.dishes = [\n    {\n        name: 'Bacon Backfire',\n        cost: 7.00,\n        price: 13.20,\n        cookTime: 12\n    },\n    {\n        name: 'Thunderbird',\n        cost: 5.00,\n        price: 10.90,\n        cookTime: 10\n    },\n    {\n        name: 'Burnout',\n        cost: 7.10,\n        price: 13.90,\n        cookTime: 12\n    },\n    {\n        name: 'Chook Royale',\n        cost: 4.00,\n        price: 7.50,\n        cookTime: 5\n    },\n    {\n        name: 'Smash Browns With Aioli',\n        cost: 2.00,\n        price: 5.90,\n        cookTime: 3\n    },\n    {\n        name: 'Spud Fries With Aioli',\n        cost: 1.90,\n        price: 4.90,\n        cookTime: 3\n    },\n    {\n        name: 'Chicken Fenders',\n        cost: 4.00,\n        price: 7.90,\n        cookTime: 5\n    },\n    {\n        name: 'Knuckle Berry Spin',\n        cost: 2.50,\n        price: 5.50,\n        cookTime: 2\n    },\n    {\n        name: 'Thickshake',\n        cost: 2.00,\n        price: 5.90,\n        cookTime: 5\n    },\n];\n\n\n//# sourceURL=webpack:///./data/dishes.const.ts?");

/***/ }),

/***/ "./scripts/models/cook.model.ts":
/*!**************************************!*\
  !*** ./scripts/models/cook.model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar staff_model_1 = __webpack_require__(/*! ./staff.model */ \"./scripts/models/staff.model.ts\");\nvar CookModel = (function (_super) {\n    __extends(CookModel, _super);\n    function CookModel(id, name, salary) {\n        return _super.call(this, id, name, salary) || this;\n    }\n    CookModel.prototype.cook = function (cookTime) {\n        return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                resolve(true);\n            }, cookTime);\n        });\n    };\n    return CookModel;\n}(staff_model_1.StaffModel));\nexports.CookModel = CookModel;\n\n\n//# sourceURL=webpack:///./scripts/models/cook.model.ts?");

/***/ }),

/***/ "./scripts/models/customer.model.ts":
/*!******************************************!*\
  !*** ./scripts/models/customer.model.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar settings_const_1 = __webpack_require__(/*! ../settings.const */ \"./scripts/settings.const.ts\");\nvar dishes_const_1 = __webpack_require__(/*! ../../data/dishes.const */ \"./data/dishes.const.ts\");\nvar event_handler_service_1 = __webpack_require__(/*! ../services/event-handler.service */ \"./scripts/services/event-handler.service.ts\");\nvar CustomerModel = (function () {\n    function CustomerModel(eventService) {\n        this.orderTime = settings_const_1.config.orderTime * settings_const_1.config.timeUnit;\n        this.ordered = [];\n        this.payment = 0;\n        this.served = Promise.resolve(null);\n        this.eventService = eventService;\n    }\n    CustomerModel.prototype.order = function () {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                _this.ordered = _this.getDishes();\n                _this.payment = _this.ordered.map(function (dish) { return dish.price; }).reduce(function (prev, next) { return prev + next; });\n                resolve(_this.ordered);\n            }, _this.orderTime);\n        });\n    };\n    CustomerModel.prototype.newDishServed = function (tableDish) {\n        this.eat(tableDish);\n        return true;\n    };\n    CustomerModel.prototype.eat = function (tableDish) {\n        var _this = this;\n        this.served = this.served\n            .then(function () { return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                _this.eatUpDish(tableDish);\n                resolve(tableDish);\n            }, settings_const_1.config.eatTime * settings_const_1.config.timeUnit);\n        }); });\n    };\n    CustomerModel.prototype.eatUpDish = function (tableDish) {\n        var dishIndex = this.ordered.findIndex(function (dish) { return dish.name === tableDish.name; });\n        if (dishIndex > -1) {\n            var eaten = this.ordered.splice(dishIndex, 1);\n            eaten = null;\n        }\n        if (this.ordered.length === 0) {\n            this.eventService.trigger(event_handler_service_1.EventType.EatUp, { tableId: tableDish.tableId, payment: this.payment });\n        }\n    };\n    CustomerModel.prototype.getDishes = function () {\n        var selected = [];\n        var dishNumber = Math.floor(Math.random() * dishes_const_1.dishes.length);\n        if (dishNumber === 0) {\n            dishNumber = 1;\n        }\n        while (dishNumber > 0) {\n            var dishIndex = Math.floor(Math.random() * dishes_const_1.dishes.length);\n            if (selected.indexOf(dishes_const_1.dishes[dishIndex]) > -1) {\n                continue;\n            }\n            else {\n                selected.push(dishes_const_1.dishes[dishIndex]);\n                dishNumber--;\n            }\n        }\n        return selected;\n    };\n    return CustomerModel;\n}());\nexports.CustomerModel = CustomerModel;\n\n\n//# sourceURL=webpack:///./scripts/models/customer.model.ts?");

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
eval("\nexports.__esModule = true;\nvar event_handler_service_1 = __webpack_require__(/*! ../services/event-handler.service */ \"./scripts/services/event-handler.service.ts\");\nvar RestaurantModel = (function () {\n    function RestaurantModel(initCash, eventService) {\n        this.cash = initCash;\n        this.eventService = eventService;\n        this.eventService.subScribe(event_handler_service_1.EventType.Receipt, this.receipt.bind(this));\n    }\n    RestaurantModel.getInstance = function (initCash, eventService) {\n        if (!this.instance) {\n            this.instance = new RestaurantModel(initCash, eventService);\n        }\n        return this.instance;\n    };\n    RestaurantModel.prototype.receipt = function (payment) {\n        this.cash += payment;\n        console.log('balance: ' + this.cash);\n    };\n    RestaurantModel.instance = null;\n    return RestaurantModel;\n}());\nexports.RestaurantModel = RestaurantModel;\n\n\n//# sourceURL=webpack:///./scripts/models/restaurant.model.ts?");

/***/ }),

/***/ "./scripts/models/staff.model.ts":
/*!***************************************!*\
  !*** ./scripts/models/staff.model.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar StaffModel = (function () {\n    function StaffModel(id, name, salary) {\n        this.id = null;\n        this.id = id;\n        this.name = name;\n        this.salary = salary;\n    }\n    StaffModel.prototype.doneTask = function (task) {\n    };\n    return StaffModel;\n}());\nexports.StaffModel = StaffModel;\n\n\n//# sourceURL=webpack:///./scripts/models/staff.model.ts?");

/***/ }),

/***/ "./scripts/models/waiter.model.ts":
/*!****************************************!*\
  !*** ./scripts/models/waiter.model.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar staff_model_1 = __webpack_require__(/*! ./staff.model */ \"./scripts/models/staff.model.ts\");\nvar WaiterModel = (function (_super) {\n    __extends(WaiterModel, _super);\n    function WaiterModel(id, name, salary) {\n        return _super.call(this, id, name, salary) || this;\n    }\n    WaiterModel.prototype.move = function (moveTime) {\n        return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                resolve(true);\n            }, moveTime);\n        });\n    };\n    return WaiterModel;\n}(staff_model_1.StaffModel));\nexports.WaiterModel = WaiterModel;\n\n\n//# sourceURL=webpack:///./scripts/models/waiter.model.ts?");

/***/ }),

/***/ "./scripts/services/event-handler.service.ts":
/*!***************************************************!*\
  !*** ./scripts/services/event-handler.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar EventType;\n(function (EventType) {\n    EventType[EventType[\"CustomerIn\"] = 0] = \"CustomerIn\";\n    EventType[EventType[\"CustomerOut\"] = 1] = \"CustomerOut\";\n    EventType[EventType[\"NewOrder\"] = 2] = \"NewOrder\";\n    EventType[EventType[\"DishesToCook\"] = 3] = \"DishesToCook\";\n    EventType[EventType[\"DishesDone\"] = 4] = \"DishesDone\";\n    EventType[EventType[\"NewDishes\"] = 5] = \"NewDishes\";\n    EventType[EventType[\"EatUp\"] = 6] = \"EatUp\";\n    EventType[EventType[\"Receipt\"] = 7] = \"Receipt\";\n})(EventType = exports.EventType || (exports.EventType = {}));\nvar EventHandlerService = (function () {\n    function EventHandlerService() {\n        var _this = this;\n        this.eventObservers = [];\n        this.trigger = function (type, data) {\n            for (var _i = 0, _a = _this.eventObservers[type].observers; _i < _a.length; _i++) {\n                var fn = _a[_i];\n                fn(data);\n            }\n        };\n        this.subScribe = function (type, fn) {\n            _this.eventObservers[type].observers.push(fn);\n        };\n        for (var i = 0; i <= 7; i++) {\n            this.eventObservers.push({ observers: [] });\n        }\n    }\n    return EventHandlerService;\n}());\nexports.EventHandlerService = EventHandlerService;\n\n\n//# sourceURL=webpack:///./scripts/services/event-handler.service.ts?");

/***/ }),

/***/ "./scripts/settings.const.ts":
/*!***********************************!*\
  !*** ./scripts/settings.const.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.config = {\n    timeUnit: 1000,\n    eatTime: 3,\n    orderTime: 3,\n    serveTime: 0.5,\n    seats: 7,\n    queueLimit: 10,\n    waiterNumber: 5,\n    cookNumber: 3,\n    initCash: 10000\n};\n\n\n//# sourceURL=webpack:///./scripts/settings.const.ts?");

/***/ })

/******/ });