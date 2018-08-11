function Restaurant(restaurant) {
    var _this = this;
    var cloned = utils.loadRestaurant(restaurant);
    _this.cash = cloned.cash;
    _this.seats = cloned.seats;
    _this.staff = [];

    for (var person of cloned.staff) {
        if (person && typeof person === 'object') {
            _this.hire(new Staff(person.name, person.salary));
        }
    }
}

Restaurant.prototype.hire = function (staff) {
    var _this = this;
    staff.id = _this.staff.length + 1;
    _this.staff.push(staff);
}

Restaurant.prototype.fire = function (staff) {
    var _this = this;
    var index = _this.staff.findIndex(s => s.id === staff.id);
    if (index > -1) {
        let fired = _this.staff.splice(index, 1);
        fired = null;
    }
}