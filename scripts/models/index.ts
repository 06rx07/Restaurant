import { CookModel } from './cook.model';
import { CustomerModel } from './customer.model';
import { DishModel } from './dish.model';
import { RestaurantModel } from './restaurant.model';
import { StaffModel } from './staff.model';
import { WaiterModel } from './waiter.model';

const ifeRestaurant = RestaurantModel.getInstance({
    cash: 1000000,
    seats: 20,
    staff: []
});

const newCook = new CookModel("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff.length, newCook);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);

let ifeRestaurant2 = RestaurantModel.getInstance({
    cash: 1000000,
    seats: 20,
    staff: []
});