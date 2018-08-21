import { RestaurantModel } from './models/restaurant.model';
import { CookModel } from './models/cook.model';
import { WaiterModel } from './models/waiter.model';
import { MenuModel, IMenuItem } from './models/menu.model';
import { CustomerModel } from './models/customer.model';
import { GetWorkflowService } from './services/get-workflow.service';
import { DrawWorkflowService } from './services/draw-workflow.service';

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
const getWorkflowService = new GetWorkflowService(newCook, newWaiter);
const drawWorkflowService = new DrawWorkflowService();
console.log('init done');
console.info(`Menu: ${menu.menus.map(menu => menu.name + ' $' + menu.price)}`);
console.info(`ifeRestaurant has ${ifeRestaurant.staff.length} staff: One Cook: ${newCook.name}, One Waiter: ${newWaiter.name}`);
console.log('\n');

// mock customer queue
ifeRestaurant.assignCustomer(new CustomerModel());
const customer = ifeRestaurant.assignSeats();
drawWorkflowService.placeCustomer();
const order = customer.order()
    .then(newWaiter.order)
    .then((menuItems) => {
        drawWorkflowService.displayMenuItems(menuItems);
        return getWorkflowService.cookServe(menuItems, customer);
    })
    .then(() => customer.served)
    .then(() => {
        console.log('paid');
        ifeRestaurant.receipt(customer.pay());
        ifeRestaurant.resetSeats();
    });

