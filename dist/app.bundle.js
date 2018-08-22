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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.ts");
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

/***/ "./scripts/index.ts":
/*!**************************!*\
  !*** ./scripts/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar restaurant_model_1 = __webpack_require__(/*! ./models/restaurant.model */ \"./scripts/models/restaurant.model.ts\");\nvar cook_model_1 = __webpack_require__(/*! ./models/cook.model */ \"./scripts/models/cook.model.ts\");\nvar waiter_model_1 = __webpack_require__(/*! ./models/waiter.model */ \"./scripts/models/waiter.model.ts\");\nvar menu_model_1 = __webpack_require__(/*! ./models/menu.model */ \"./scripts/models/menu.model.ts\");\nvar customer_model_1 = __webpack_require__(/*! ./models/customer.model */ \"./scripts/models/customer.model.ts\");\nvar get_workflow_service_1 = __webpack_require__(/*! ./services/get-workflow.service */ \"./scripts/services/get-workflow.service.ts\");\nvar draw_workflow_service_1 = __webpack_require__(/*! ./services/draw-workflow.service */ \"./scripts/services/draw-workflow.service.ts\");\nvar ifeRestaurant = restaurant_model_1.RestaurantModel.getInstance({\n    cash: 100000,\n    seats: 20,\n    staff: []\n});\nvar newCook = cook_model_1.CookModel.getInstance('Bob', 4000);\nifeRestaurant.hire(newCook);\nvar newWaiter = waiter_model_1.WaiterModel.getInstance('Ali', 3000);\nifeRestaurant.hire(newWaiter);\nvar menu = menu_model_1.MenuModel.getInstance();\nvar drawWorkflowService = new draw_workflow_service_1.DrawWorkflowService();\nvar getWorkflowService = new get_workflow_service_1.GetWorkflowService(newCook, newWaiter, ifeRestaurant, drawWorkflowService);\nconsole.log('init done');\nconsole.info(\"ifeRestaurant has \" + ifeRestaurant.staff.length + \" staff: One Cook: \" + newCook.name + \", One Waiter: \" + newWaiter.name);\nconsole.log('\\n');\nifeRestaurant.assignCustomer(new customer_model_1.CustomerModel());\ngetWorkflowService.completeFlow();\n\n\n//# sourceURL=webpack:///./scripts/index.ts?");

/***/ }),

/***/ "./scripts/models/cook.model.ts":
/*!**************************************!*\
  !*** ./scripts/models/cook.model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar settings_const_1 = __webpack_require__(/*! ../settings.const */ \"./scripts/settings.const.ts\");\nvar staff_model_1 = __webpack_require__(/*! ./staff.model */ \"./scripts/models/staff.model.ts\");\nvar CookModel = (function (_super) {\n    __extends(CookModel, _super);\n    function CookModel(name, salary) {\n        var _this = _super.call(this, name, salary) || this;\n        _this.id = null;\n        return _this;\n    }\n    CookModel.getInstance = function (name, salary) {\n        if (!this.instance) {\n            this.instance = new CookModel(name, salary);\n        }\n        return this.instance;\n    };\n    CookModel.prototype.doneTask = function (task) {\n        this.cook(task);\n    };\n    CookModel.prototype.cook = function (menuItem) {\n        return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                resolve(menuItem);\n            }, menuItem.cookTime * settings_const_1.config.timeUnit);\n        });\n    };\n    CookModel.instance = null;\n    return CookModel;\n}(staff_model_1.StaffModel));\nexports.CookModel = CookModel;\n\n\n//# sourceURL=webpack:///./scripts/models/cook.model.ts?");

/***/ }),

/***/ "./scripts/models/customer.model.ts":
/*!******************************************!*\
  !*** ./scripts/models/customer.model.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar settings_const_1 = __webpack_require__(/*! ../settings.const */ \"./scripts/settings.const.ts\");\nvar dishes_const_1 = __webpack_require__(/*! ../../data/dishes.const */ \"./data/dishes.const.ts\");\nvar CustomerModel = (function () {\n    function CustomerModel() {\n        this.orderTime = settings_const_1.config.orderTime * settings_const_1.config.timeUnit;\n        this.ordered = [];\n        this.served = Promise.resolve(null);\n    }\n    CustomerModel.prototype.order = function () {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                _this.ordered = _this.getDishes();\n                resolve(_this.ordered);\n            }, _this.orderTime);\n        });\n    };\n    CustomerModel.prototype.newDishServed = function (menuItem) {\n        this.eat(menuItem);\n        return true;\n    };\n    CustomerModel.prototype.eat = function (menuItem) {\n        this.served = this.served.then(function () { return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                console.log('eat up ' + menuItem.name);\n                resolve(menuItem);\n            }, settings_const_1.config.eatTime * settings_const_1.config.timeUnit);\n        }); });\n    };\n    CustomerModel.prototype.pay = function () {\n        return this.ordered.map(function (dish) { return dish.price; }).reduce(function (prev, next) { return prev + next; });\n    };\n    CustomerModel.prototype.getDishes = function () {\n        var selected = [];\n        var dishNumber = Math.floor(Math.random() * dishes_const_1.dishes.length);\n        if (dishNumber === 0) {\n            dishNumber = 1;\n        }\n        while (dishNumber > 0) {\n            var dishIndex = Math.floor(Math.random() * dishes_const_1.dishes.length);\n            if (selected.indexOf(dishes_const_1.dishes[dishIndex]) > -1) {\n                continue;\n            }\n            else {\n                selected.push(dishes_const_1.dishes[dishIndex]);\n                dishNumber--;\n            }\n        }\n        return selected;\n    };\n    return CustomerModel;\n}());\nexports.CustomerModel = CustomerModel;\n\n\n//# sourceURL=webpack:///./scripts/models/customer.model.ts?");

/***/ }),

/***/ "./scripts/models/menu.model.ts":
/*!**************************************!*\
  !*** ./scripts/models/menu.model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar dishes_const_1 = __webpack_require__(/*! ../../data/dishes.const */ \"./data/dishes.const.ts\");\nvar MenuModel = (function () {\n    function MenuModel() {\n        this.menus = [];\n        for (var _i = 0, dishes_1 = dishes_const_1.dishes; _i < dishes_1.length; _i++) {\n            var dish = dishes_1[_i];\n            this.menus.push(this.getMenuItem(dish));\n        }\n    }\n    MenuModel.getInstance = function () {\n        if (!this.instance) {\n            this.instance = new MenuModel();\n        }\n        return this.instance;\n    };\n    MenuModel.prototype.getMenuItem = function (dish) {\n        return {\n            name: dish.name,\n            price: dish.price,\n            cookTime: Math.random() * 10\n        };\n    };\n    MenuModel.instance = null;\n    return MenuModel;\n}());\nexports.MenuModel = MenuModel;\n\n\n//# sourceURL=webpack:///./scripts/models/menu.model.ts?");

/***/ }),

/***/ "./scripts/models/restaurant.model.ts":
/*!********************************************!*\
  !*** ./scripts/models/restaurant.model.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar RestaurantModel = (function () {\n    function RestaurantModel(restaurant) {\n        this.queue = [];\n        this.cash = restaurant.cash;\n        this.seats = 1;\n        this.staff = restaurant.staff;\n    }\n    RestaurantModel.getInstance = function (restaurant) {\n        if (!this.instance) {\n            this.instance = new RestaurantModel(restaurant);\n        }\n        return this.instance;\n    };\n    RestaurantModel.prototype.hire = function (person) {\n        person.id = this.staff.length + 1;\n        this.staff.push(person);\n    };\n    RestaurantModel.prototype.fire = function (person) {\n        var index = this.staff.findIndex(function (s) { return s.id === person.id; });\n        if (index > -1) {\n            var fired = this.staff.splice(index, 1);\n            fired = null;\n        }\n    };\n    RestaurantModel.prototype.assignCustomer = function (customer) {\n        this.queue.push(customer);\n    };\n    RestaurantModel.prototype.assignSeats = function () {\n        if (this.queue.length && this.seats > 0) {\n            this.seats -= 1;\n            return this.queue[0];\n        }\n        return null;\n    };\n    RestaurantModel.prototype.resetSeats = function () {\n        this.seats += 1;\n        var assigned = this.queue.splice(0, 1);\n        assigned = null;\n    };\n    RestaurantModel.prototype.receipt = function (payment) {\n        this.cash += payment;\n        console.log('balance: ' + this.cash);\n    };\n    RestaurantModel.instance = null;\n    return RestaurantModel;\n}());\nexports.RestaurantModel = RestaurantModel;\n\n\n//# sourceURL=webpack:///./scripts/models/restaurant.model.ts?");

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
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar staff_model_1 = __webpack_require__(/*! ./staff.model */ \"./scripts/models/staff.model.ts\");\nvar WaiterModel = (function (_super) {\n    __extends(WaiterModel, _super);\n    function WaiterModel(name, salary) {\n        var _this = _super.call(this, name, salary) || this;\n        _this.id = null;\n        return _this;\n    }\n    WaiterModel.getInstance = function (name, salary) {\n        if (!this.instance) {\n            this.instance = new WaiterModel(name, salary);\n        }\n        return this.instance;\n    };\n    WaiterModel.prototype.doneTask = function (task) {\n        (Array.isArray(task)) ? this.order(task) : this.serve(task);\n    };\n    WaiterModel.prototype.order = function (menuItems) {\n        return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                console.log('ordered', menuItems);\n                resolve(menuItems);\n            }, 500);\n        });\n    };\n    WaiterModel.prototype.serve = function (menuItem) {\n        return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                console.log('served ' + menuItem.name);\n                resolve(menuItem);\n            }, 500);\n        });\n    };\n    WaiterModel.prototype.receipt = function () {\n        return new Promise(function (resolve, reject) {\n            setTimeout(function () {\n                resolve(true);\n            }, 500);\n        });\n    };\n    WaiterModel.instance = null;\n    return WaiterModel;\n}(staff_model_1.StaffModel));\nexports.WaiterModel = WaiterModel;\n\n\n//# sourceURL=webpack:///./scripts/models/waiter.model.ts?");

/***/ }),

/***/ "./scripts/services/draw-workflow.service.ts":
/*!***************************************************!*\
  !*** ./scripts/services/draw-workflow.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar canvas = document.querySelector('canvas#workflow');\nvar balance = document.querySelector('p#balance');\nvar DrawWorkflowService = (function () {\n    function DrawWorkflowService() {\n        this.config = {\n            width: 1024,\n            height: 600,\n            availableColor: '#3cb44b',\n            cookColor: '#f58231',\n            paidColor: '#0082c8',\n            textFillStyle: '#000000',\n            font: '14px Arial'\n        };\n        this.cookImgSrc = './assets/cook.jpeg';\n        this.waiterImgSrc = './assets/waiter.jpeg';\n        this.customerImgSrc = './assets/customer.jpeg';\n        this.context = canvas.getContext('2d');\n        canvas.width = this.config.width;\n        canvas.height = this.config.height;\n        this.context.font = this.config.font;\n        this.context.fillStyle = this.config.textFillStyle;\n        this.placeStaff(this.context, this.cookImgSrc, { x: 0, y: 0 });\n        this.placeStaff(this.context, this.waiterImgSrc, { x: 490, y: 20 });\n    }\n    DrawWorkflowService.prototype.placeStaff = function (context, src, position) {\n        var img = new Image();\n        img.onload = function () {\n            context.drawImage(img, position.x, position.y);\n        };\n        img.src = src;\n    };\n    DrawWorkflowService.prototype.placeCustomer = function () {\n        var _this = this;\n        var img = new Image();\n        img.onload = function () {\n            _this.context.drawImage(img, 750, 0);\n        };\n        img.src = this.customerImgSrc;\n    };\n    DrawWorkflowService.prototype.displayMenuItems = function (menuItems) {\n        for (var i = 0; i < menuItems.length; i++) {\n            this.context.fillText(menuItems[i].name, 800, (250 + i * 16));\n        }\n    };\n    DrawWorkflowService.prototype.showBalance = function (cash) {\n        balance.innerHTML = '$ ' + cash;\n    };\n    return DrawWorkflowService;\n}());\nexports.DrawWorkflowService = DrawWorkflowService;\n\n\n//# sourceURL=webpack:///./scripts/services/draw-workflow.service.ts?");

/***/ }),

/***/ "./scripts/services/get-workflow.service.ts":
/*!**************************************************!*\
  !*** ./scripts/services/get-workflow.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar GetWorkflowService = (function () {\n    function GetWorkflowService(cook, waiter, restaurant, drawWorkFlowService) {\n        this.cook = cook;\n        this.waiter = waiter;\n        this.restaurant = restaurant;\n        this.drawService = drawWorkFlowService;\n    }\n    GetWorkflowService.prototype.cookServe = function (menuItems, customer) {\n        var dishWorkFlow = Promise.resolve(null);\n        var _loop_1 = function (menuItem) {\n            dishWorkFlow = dishWorkFlow.then(function () { return Promise.resolve(menuItem); })\n                .then(this_1.cook.cook)\n                .then(this_1.waiter.serve)\n                .then(function (menuItem) { return customer.newDishServed(menuItem); });\n        };\n        var this_1 = this;\n        for (var _i = 0, menuItems_1 = menuItems; _i < menuItems_1.length; _i++) {\n            var menuItem = menuItems_1[_i];\n            _loop_1(menuItem);\n        }\n        return dishWorkFlow;\n    };\n    GetWorkflowService.prototype.waiterOrder = function (customer) {\n        return customer.order()\n            .then(this.waiter.order);\n    };\n    GetWorkflowService.prototype.completePayment = function (customer) {\n        var _this = this;\n        return customer.served\n            .then(function () {\n            _this.restaurant.receipt(customer.pay());\n            _this.drawService.showBalance(_this.restaurant.cash);\n            _this.restaurant.resetSeats();\n            return true;\n        });\n    };\n    GetWorkflowService.prototype.completeFlow = function () {\n        var _this = this;\n        var customer = this.restaurant.assignSeats();\n        this.drawService.placeCustomer();\n        return this.waiterOrder(customer)\n            .then(function (menuItems) { return _this.cookServe(menuItems, customer); })\n            .then(function () { return _this.completePayment(customer); });\n    };\n    return GetWorkflowService;\n}());\nexports.GetWorkflowService = GetWorkflowService;\n\n\n//# sourceURL=webpack:///./scripts/services/get-workflow.service.ts?");

/***/ }),

/***/ "./scripts/settings.const.ts":
/*!***********************************!*\
  !*** ./scripts/settings.const.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.config = {\n    timeUnit: 1000,\n    eatTime: 3,\n    orderTime: 3\n};\n\n\n//# sourceURL=webpack:///./scripts/settings.const.ts?");

/***/ })

/******/ });