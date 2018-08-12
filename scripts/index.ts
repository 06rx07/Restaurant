import { RestaurantModel } from './models/restaurant.model';
import { CookModel } from './models/cook.model';
import { WaiterModel } from './models/waiter.model';
import { MenuModel } from './models/menu.model';

// init restaurant settings
const ifeRestaurant = RestaurantModel.getInstance({
    cash: 100000,
    seats: 20,
    staff: []
});

const newCook = CookModel.getInstance('Bob', 4000);
ifeRestaurant.hire(newCook);

const newWaiter = WaiterModel.getInstance('Ali', 3000);
ifeRestaurant.hire(newWaiter);

const menu = MenuModel.getInstance();
console.log(menu);
