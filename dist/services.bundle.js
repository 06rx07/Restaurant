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
eval("\nexports.__esModule = true;\nvar canvas = document.querySelector('canvas#workflow');\nvar DrawWorkflowService = (function () {\n    function DrawWorkflowService() {\n        this.config = {\n            width: 1024,\n            height: 600,\n            availableColor: '#3cb44b',\n            cookColor: '#f58231',\n            paidColor: '#0082c8',\n            textFillStyle: '#000000',\n            font: '14px Arial'\n        };\n        this.cookImgSrc = './assets/cook.jpeg';\n        this.waiterImgSrc = './assets/waiter.jpeg';\n        this.customerImgSrc = './assets/customer.jpeg';\n        this.context = canvas.getContext('2d');\n        canvas.width = this.config.width;\n        canvas.height = this.config.height;\n        this.context.font = this.config.font;\n        this.context.fillStyle = this.config.textFillStyle;\n        this.placeStaff(this.context, this.cookImgSrc, { x: 0, y: 0 });\n        this.placeStaff(this.context, this.waiterImgSrc, { x: 260, y: 20 });\n    }\n    DrawWorkflowService.prototype.placeStaff = function (context, src, position) {\n        var img = new Image();\n        img.onload = function () {\n            context.drawImage(img, position.x, position.y);\n        };\n        img.src = src;\n    };\n    DrawWorkflowService.prototype.placeCustomer = function () {\n        var _this = this;\n        var img = new Image();\n        img.onload = function () {\n            _this.context.drawImage(img, 750, 0);\n        };\n        img.src = this.customerImgSrc;\n    };\n    DrawWorkflowService.prototype.displayMenuItems = function (menuItems) {\n        for (var i = 0; i < menuItems.length; i++) {\n            this.context.fillText(menuItems[i].name, 800, (250 + i * 16));\n        }\n    };\n    return DrawWorkflowService;\n}());\nexports.DrawWorkflowService = DrawWorkflowService;\n\n\n//# sourceURL=webpack:///./scripts/services/draw-workflow.service.ts?");

/***/ }),

/***/ "./scripts/services/get-workflow.service.ts":
/*!**************************************************!*\
  !*** ./scripts/services/get-workflow.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar GetWorkflowService = (function () {\n    function GetWorkflowService(cook, waiter) {\n        this.cook = cook;\n        this.waiter = waiter;\n    }\n    GetWorkflowService.prototype.cookServe = function (menuItems, customer) {\n        var dishWorkFlow = Promise.resolve(null);\n        var _loop_1 = function (menuItem) {\n            dishWorkFlow = dishWorkFlow.then(function () { return Promise.resolve(menuItem); })\n                .then(this_1.cook.cook)\n                .then(this_1.waiter.serve)\n                .then(function (menuItem) { return customer.newDishServed(menuItem); });\n        };\n        var this_1 = this;\n        for (var _i = 0, menuItems_1 = menuItems; _i < menuItems_1.length; _i++) {\n            var menuItem = menuItems_1[_i];\n            _loop_1(menuItem);\n        }\n        return dishWorkFlow;\n    };\n    return GetWorkflowService;\n}());\nexports.GetWorkflowService = GetWorkflowService;\n\n\n//# sourceURL=webpack:///./scripts/services/get-workflow.service.ts?");

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