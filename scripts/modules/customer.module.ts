import { CustomerModel } from "../models/customer.model";
import { DrawWorkflowService } from "../services/draw-workflow.service";
import { EventHandlerService, EventType } from "../services/event-handler.service";
import { ITableDish } from "../models/dish.model";
import { config } from '../settings.const';

interface ISeatStatus {
    customer: CustomerModel;
    tableId: number;
}

export class CustomerModule {
    private queue: number = 0;
    private seatList: ISeatStatus[] = [];
    private toEatList: ITableDish[][] = [];
    private drawService: DrawWorkflowService;
    private eventService: EventHandlerService;

    constructor(
        drawService: DrawWorkflowService,
        eventService: EventHandlerService
    ) {
        this.drawService = drawService;
        this.eventService = eventService;
        this.eventService.subScribe(EventType.CustomerIn, this.receiveCustomer);
        this.eventService.subScribe(EventType.CustomerOut, this.resetTable);
        this.eventService.subScribe(EventType.NewDishes, this.receiveDishes);
        this.initTable();
    }

    public initTable() {
        for (let i = 0; i < config.seats; i++) {
            this.seatList.push({ customer: null, tableId: i });
        }
    }

    public receiveCustomer = () => {
        console.log('receive customer');
        if (this.queue <= config.queueLimit) {
            this.queue += 1;
            this.assignTable();
        }
    }

    public assignTable = () => {
        const validSeats = this.seatList.findIndex(seat => !seat.customer);
        console.log(validSeats, this.seatList);
        if (validSeats > -1) {
            this.queue -= 1;
            this.seatList[validSeats].customer = new CustomerModel(this.eventService);
            this.seatList[validSeats].customer.order()
                .then((menuItems) => {
                    const tableDishes: ITableDish[] = menuItems.map(menuItem => ({ ...menuItem, ...{ tableId: validSeats } }));
                    this.eventService.trigger(EventType.NewOrder, tableDishes);
                });
        }
    }

    public resetTable = (tableId: number) => {
        console.log('customer leave: ', tableId);
        this.seatList[tableId].customer = null;
        if (this.queue > 0) {
            this.assignTable();
        }
    }

    public receiveDishes = (tableDishes: ITableDish[]) => {
        console.log('customer receive dishes: ', `${tableDishes.map(dish => dish.name)}`);
        for (const dish of tableDishes) {
            this.eat(dish);
        }
    }

    public eat = (tableDish: ITableDish) => {
        this.seatList[tableDish.tableId].customer.eat(tableDish);
    }
}