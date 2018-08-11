var utils = {
    loadRestaurant: function (restaurant) {
        if (restaurant && typeof restaurant === 'object') {
            return {
                cash: utils.loadValidCash(restaurant.cash),
                seats: utils.loadValidSeats(restaurant.seats),
                staff: utils.loadValidStaff(restaurant.staff)
            }
        }
        return { cash: 0, seats: 0, staff: [] };
    },
    loadValidCash: function (cash) {
        return isNaN(cash) ? 0 : cash;
    },
    loadValidSeats: function (seats) {
        return isNaN(seats) ? 0
            : seats > 0 ? Math.round(seats) : 0;
    },
    loadValidStaff: function (staff) {
        return (Array.isArray(staff)) ? staff : [];
    }
};