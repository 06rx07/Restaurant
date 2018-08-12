import { RestaurantModel } from './models/restaurant.model';
import { CookModel } from './models/cook.model';

const ifeRestaurant = RestaurantModel.getInstance({
    cash: 1000000,
    seats: 20,
    staff: []
});

const newCook = CookModel.getInstance("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff.length, newCook);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);

let ifeRestaurant2 = RestaurantModel.getInstance({
    cash: 1000000,
    seats: 20,
    staff: []
});