import { IMenuItem } from "../models/menu.model";
import { CookModel } from "../models/cook.model";
import { WaiterModel } from "../models/waiter.model";
import { CustomerModel } from "../models/customer.model";
import { RestaurantModel } from "../models/restaurant.model";
import { DrawWorkflowService } from "./draw-workflow.service";

export class GetWorkflowService {
    public cook: CookModel;
    public waiter: WaiterModel;
    public restaurant: RestaurantModel;
    public drawService: DrawWorkflowService;

    constructor(
        cook: CookModel,
        waiter: WaiterModel,
        restaurant: RestaurantModel,
        drawWorkFlowService: DrawWorkflowService,
    ) {
        this.cook = cook;
        this.waiter = waiter;
        this.restaurant = restaurant;
        this.drawService = drawWorkFlowService;
        this.drawService.showBalance(this.restaurant.cash);
    }

    public cookServe(menuItems: IMenuItem[], customer: CustomerModel): Promise<any> {
        let dishWorkFlow: Promise<any> = Promise.resolve(null);
        for (const menuItem of menuItems) {
            dishWorkFlow = dishWorkFlow.then(() => Promise.resolve(menuItem))
                .then((menuItem) => {
                    this.drawService.showCountdown(menuItem, 'cook');
                    return this.cook.cook(menuItem);
                })
                .then((menuItem) => {
                    this.drawService.moveWaiter(true).then(() => {
                        this.drawService.moveWaiter(false);
                    });
                    return this.waiter.serve(menuItem);
                })
                .then((menuItem) => customer.newDishServed(menuItem));
        }
        return dishWorkFlow;
    }

    public waiterOrder(customer: CustomerModel): Promise<IMenuItem[]> {
        return customer.order()
            .then((menuItems) => {
                this.drawService.displayMenuItems(menuItems, 'customer');
                this.drawService.moveWaiter(false);
                return this.waiter.order(menuItems);
            })
            .then((menuItems) => {
                this.drawService.displayMenuItems(menuItems, 'cook');
                return menuItems;
            });
    }

    public completePayment(customer: CustomerModel): Promise<boolean> {
        return customer.served
            .then(() => {
                this.restaurant.receipt(customer.pay());
                this.drawService.showBalance(this.restaurant.cash);
                this.restaurant.resetSeats();
                this.drawService.clearDisplay();
                return true;
            });
    }

    public completeFlow(): Promise<any> {
        const customer = this.restaurant.assignSeats();
        this.drawService.placeCustomer();
        return this.waiterOrder(customer)
            .then((menuItems) => this.cookServe(menuItems, customer))
            .then(() => this.completePayment(customer));
    }
}