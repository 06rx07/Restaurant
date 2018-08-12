import { RestaurantModel } from './models/restaurant.model';
import { CookModel } from './models/cook.model';
import { WaiterModel } from './models/waiter.model';
import { MenuModel, IMenuItem } from './models/menu.model';
import { CustomerModel } from './models/customer.model';

const randomDish = (menus: IMenuItem[]) => {
    const index = Math.floor(Math.random() * menus.length);
    return menus[index];
}

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
console.log('init done');
console.info(`Menu: ${menu.menus.map(menu => menu.name + ' $' + menu.price)}`);
console.info(`ifeRestaurant has ${ifeRestaurant.staff.length} staff: One Cook: ${newCook.name}, One Waiter: ${newWaiter.name}`);
console.log('\n');

// mock customer queue
for (let i = 0; i < 5; i++) {
    ifeRestaurant.assignCustomer(new CustomerModel());
}

for (let i = 0; i < 5; i++) {
    console.info(`ifeRestaurant has ${ifeRestaurant.queue.length} customers waiting`);
    const assigned = ifeRestaurant.assignSeats();
    if (assigned) {
        console.info(`one customer assigned seat`);
        const ordered = assigned.order(randomDish(menu.menus));
        newWaiter.order(ordered);
        newCook.cook(ordered);
        newWaiter.serve(ordered);
        assigned.eat(ordered);
        console.info(`customer complete eating, reseting seats.`);
        ifeRestaurant.resetSeats();
        console.log('\n');
    }
}