import { StaffModel } from './staff.model';
import { WaiterModel } from './waiter.model';
import { CookModel } from './cook.model';
import { CustomerModel } from './customer.model';
import { EventHandlerService, EventType } from '../services/event-handler.service';

interface IRestaurant {
    cash: number;
}

export class RestaurantModel {
    public cash: number;
    private static instance: RestaurantModel = null;
    private eventService: EventHandlerService;

    private constructor(
        initCash: number,
        eventService: EventHandlerService
    ) {
        this.cash = initCash;
        this.eventService = eventService;
        this.eventService.subScribe(EventType.Receipt, this.receipt.bind(this));
    }

    public static getInstance(initCash: number, eventService: EventHandlerService): RestaurantModel {
        if (!this.instance) {
            this.instance = new RestaurantModel(initCash, eventService);
        }
        return this.instance;
    }

    public receipt(payment: number): void {
        this.cash += payment;
        console.log('balance: ' + this.cash);
    }
}