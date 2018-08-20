import { RestaurantModel } from './models/restaurant.model';
import { CookModel } from './models/cook.model';
import { WaiterModel } from './models/waiter.model';
import { MenuModel, IMenuItem } from './models/menu.model';
import { CustomerModel } from './models/customer.model';

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
ifeRestaurant.assignCustomer(new CustomerModel());
const customer = ifeRestaurant.assignSeats();
customer.order()
    .then(newWaiter.order)
    .then((menuIems) => {
        const dishWorkFlow = Promise.resolve(true);
        for (const menuItem of menuIems) {
            dishWorkFlow.then(() => newCook.cook(menuItem))
                .then(newWaiter.serve)
                .then(customer.newDishServed);
        }
        return dishWorkFlow;
    });
    // .then(() => {
    //     return customer.served;
    // })
    // .then(() => {
    //     ifeRestaurant.receipt(customer.pay());
    //     ifeRestaurant.resetSeats();
    // });
