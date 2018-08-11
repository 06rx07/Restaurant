function Waiter(name, salary) {
    Staff.call(this, name, salary);
}

Waiter.prototype = Object.create(Staff.prototype);
Waiter.prototype.constructor = Waiter;

Waiter.prototype.doneTask = function (task) {
    var _this = this;
    Staff.prototype.doneTask.call(_this, task);
    if (Array.isArray(task)) {
        _this.order(task);
    } else {
        _this.serve(task);
    }
}

Waiter.prototype.order = function (dishes) {

}

Waiter.prototype.serve = function (table) {

}