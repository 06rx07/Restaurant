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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/services/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/services/draw-workflow.service.ts":
/*!***************************************************!*\
  !*** ./scripts/services/draw-workflow.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar canvas = document.querySelector('canvas#workflow');\nvar balance = document.querySelector('p#balance');\nvar cookItems = document.querySelector('div#cook-items');\nvar orderedItems = document.querySelector('div#customer-items');\nvar DrawWorkflowService = (function () {\n    function DrawWorkflowService() {\n        this.config = {\n            width: 1024,\n            height: 250,\n            textFillStyle: '#000000',\n            font: '14px Arial',\n            leftPos: { x: 200, y: 20 },\n            rightPos: { x: 490, y: 20 }\n        };\n        this.cookImgSrc = './assets/cook.jpeg';\n        this.waiterImg = {\n            src: './assets/waiter.jpeg',\n            height: 194,\n            width: 259\n        };\n        this.customerImgSrc = './assets/customer.jpeg';\n        this.context = canvas.getContext('2d');\n        canvas.width = this.config.width;\n        canvas.height = this.config.height;\n        this.context.font = this.config.font;\n        this.context.fillStyle = this.config.textFillStyle;\n        this.placeStaff(this.context, this.cookImgSrc, { x: 0, y: 0 });\n        this.placeStaff(this.context, this.waiterImg.src, this.config.rightPos);\n    }\n    DrawWorkflowService.prototype.placeStaff = function (context, src, position) {\n        var img = new Image();\n        img.onload = function () {\n            context.drawImage(img, position.x, position.y);\n        };\n        img.src = src;\n    };\n    DrawWorkflowService.prototype.placeCustomer = function () {\n        var _this = this;\n        var img = new Image();\n        img.onload = function () {\n            _this.context.drawImage(img, 750, 0);\n        };\n        img.src = this.customerImgSrc;\n    };\n    DrawWorkflowService.prototype.displayMenuItems = function (menuItems, option) {\n        var parentNode = (option === 'cook') ? cookItems : orderedItems;\n        for (var i = 0; i < menuItems.length; i++) {\n            parentNode.appendChild(this.getMenuItem(menuItems[i]));\n        }\n    };\n    DrawWorkflowService.prototype.getMenuItem = function (menuItem) {\n        var node = document.createElement('p');\n        var text = document.createTextNode(menuItem.name);\n        var status = document.createElement('span');\n        status.setAttribute('class', 'countdown');\n        node.appendChild(text);\n        node.appendChild(status);\n        return node;\n    };\n    DrawWorkflowService.prototype.findMenuItemStatus = function (menuItem, option) {\n        var parentNode = (option === 'cook') ? cookItems : orderedItems;\n        return Array.from(parentNode.childNodes)\n            .find(function (node) { return node['textContent'] === menuItem.name; })['childNodes'][1];\n    };\n    DrawWorkflowService.prototype.showBalance = function (cash) {\n        balance.innerHTML = '$ ' + cash;\n    };\n    DrawWorkflowService.prototype.showCountdown = function (menuItem, option) {\n        var node = this.findMenuItemStatus(menuItem, option);\n        var time = (option === 'cook') ? menuItem.cookTime : 3;\n        var initTime = time;\n        var timeInterval = setInterval(function () {\n            node.innerHTML = ' ' + initTime + 's';\n            initTime--;\n        }, 1000);\n        setTimeout(function () {\n            clearInterval(timeInterval);\n            node.setAttribute('class', 'countdown done');\n            node.innerHTML = ' done';\n        }, time * 1000);\n    };\n    DrawWorkflowService.prototype.clearDisplay = function () {\n        this.cleanNode(orderedItems);\n        this.cleanNode(cookItems);\n    };\n    DrawWorkflowService.prototype.cleanNode = function (parentNode) {\n        while (parentNode.firstChild) {\n            parentNode.removeChild(parentNode.firstChild);\n        }\n    };\n    DrawWorkflowService.prototype.moveWaiter = function (leftToRight) {\n        var _this = this;\n        return new Promise(function (resolve, reject) {\n            var startPos = (leftToRight) ? _this.config.leftPos : _this.config.rightPos;\n            var endPos = (leftToRight) ? _this.config.rightPos : _this.config.leftPos;\n            setTimeout(function () {\n                _this.context.clearRect(startPos.x, startPos.y, _this.waiterImg.width, _this.waiterImg.height);\n            }, 250);\n            setTimeout(function () {\n                _this.placeStaff(_this.context, _this.waiterImg.src, endPos);\n                resolve(true);\n            }, 500);\n        });\n    };\n    return DrawWorkflowService;\n}());\nexports.DrawWorkflowService = DrawWorkflowService;\n\n\n//# sourceURL=webpack:///./scripts/services/draw-workflow.service.ts?");

/***/ }),

/***/ "./scripts/services/get-workflow.service.ts":
/*!**************************************************!*\
  !*** ./scripts/services/get-workflow.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar queue = document.querySelector('p#queue');\nvar GetWorkflowService = (function () {\n    function GetWorkflowService(cook, waiter, restaurant, drawWorkFlowService) {\n        this.cook = cook;\n        this.waiter = waiter;\n        this.restaurant = restaurant;\n        this.drawService = drawWorkFlowService;\n        this.drawService.showBalance(this.restaurant.cash);\n    }\n    GetWorkflowService.prototype.cookServe = function (menuItems, customer) {\n        var _this = this;\n        var dishWorkFlow = Promise.resolve(null);\n        var _loop_1 = function (menuItem) {\n            dishWorkFlow = dishWorkFlow.then(function () { return Promise.resolve(menuItem); })\n                .then(function (menuItem) {\n                _this.drawService.showCountdown(menuItem, 'cook');\n                return _this.cook.cook(menuItem);\n            })\n                .then(this_1.waiter.serve)\n                .then(function (menuItem) { return customer.newDishServed(menuItem); });\n        };\n        var this_1 = this;\n        for (var _i = 0, menuItems_1 = menuItems; _i < menuItems_1.length; _i++) {\n            var menuItem = menuItems_1[_i];\n            _loop_1(menuItem);\n        }\n        return dishWorkFlow;\n    };\n    GetWorkflowService.prototype.waiterOrder = function (customer) {\n        var _this = this;\n        return customer.order()\n            .then(function (menuItems) {\n            _this.drawService.displayMenuItems(menuItems, 'customer');\n            _this.drawService.moveWaiter(false);\n            return _this.waiter.order(menuItems);\n        })\n            .then(function (menuItems) {\n            _this.drawService.displayMenuItems(menuItems, 'cook');\n            return menuItems;\n        });\n    };\n    GetWorkflowService.prototype.completePayment = function (customer) {\n        var _this = this;\n        return customer.served\n            .then(function () {\n            _this.restaurant.receipt(customer.pay());\n            _this.drawService.showBalance(_this.restaurant.cash);\n            _this.restaurant.resetSeats();\n            _this.drawService.clearDisplay();\n            return true;\n        });\n    };\n    GetWorkflowService.prototype.completeFlow = function () {\n        var _this = this;\n        var customer = this.restaurant.assignSeats();\n        if (this.restaurant.queue.length > 1) {\n            queue.innerHTML = (this.restaurant.queue.length - 1) + ' customer waiting.';\n        }\n        else {\n            queue.innerHTML = null;\n        }\n        this.drawService.placeCustomer();\n        return this.waiterOrder(customer)\n            .then(function (menuItems) { return _this.cookServe(menuItems, customer); })\n            .then(function () { return _this.completePayment(customer); });\n    };\n    return GetWorkflowService;\n}());\nexports.GetWorkflowService = GetWorkflowService;\n\n\n//# sourceURL=webpack:///./scripts/services/get-workflow.service.ts?");

/***/ }),

/***/ "./scripts/services/index.ts":
/*!***********************************!*\
  !*** ./scripts/services/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\n__webpack_require__(/*! ./draw-workflow.service */ \"./scripts/services/draw-workflow.service.ts\");\n__webpack_require__(/*! ./get-workflow.service */ \"./scripts/services/get-workflow.service.ts\");\n\n\n//# sourceURL=webpack:///./scripts/services/index.ts?");

/***/ })

/******/ });