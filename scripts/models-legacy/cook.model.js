function Cook(name, salary) {
    Staff.call(this, name, salary);
}

Cook.prototype = Object.create(Staff.prototype);
Cook.prototype.constructor = Cook;

Cook.prototype.doneTask = function (task) {
    var _this = this;
    Staff.prototype.doneTask.call(_this, task);
    _this.cook(task);
}

Cook.prototype.cook = function (dish) {

}