import { config } from '../settings.const';
import { dishes } from '../../data/dishes.const';
import { IMenuItem } from "./menu.model";
import { DrawWorkflowService } from '../services/draw-workflow.service';
import { EventHandlerService, EventType } from '../services/event-handler.service';
import { ITableDish } from './dish.model';

export class CustomerModel {
    private orderTime = config.orderTime * config.timeUnit;
    private ordered: IMenuItem[] = [];
    private payment: number = 0;
    public served: Promise<any> = Promise.resolve(null);
    // private drawService: DrawWorkflowService;
    private eventService: EventHandlerService;

    constructor(
        // drawService: DrawWorkflowService,
        eventService: EventHandlerService
    ) {
        // this.drawService = drawService;
        this.eventService = eventService;
    }

    public order(): Promise<IMenuItem[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.ordered = this.getDishes();
                this.payment = this.ordered.map(dish => dish.price).reduce((prev, next) => prev + next);
                resolve(this.ordered);
            }, this.orderTime);
        });
    }

    public newDishServed(tableDish: ITableDish): boolean {
        this.eat(tableDish);
        return true;
    }

    public eat(tableDish: ITableDish): void {
        this.served = this.served
            .then(() => new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.eatUpDish(tableDish);
                    resolve(tableDish);
                }, config.eatTime * config.timeUnit);
            }));
    }

    private eatUpDish(tableDish: ITableDish): void {
        const dishIndex = this.ordered.findIndex(dish => dish.name === tableDish.name);
        if (dishIndex > -1) {
            let eaten = this.ordered.splice(dishIndex, 1);
            eaten = null;
        }
        if(this.ordered.length === 0){
            this.eventService.trigger(EventType.EatUp, { tableId: tableDish.tableId, payment: this.payment });
        }
    }

    private getDishes(): IMenuItem[] {
        const selected = [];
        let dishNumber = Math.floor(Math.random() * dishes.length);
        if (dishNumber === 0) { dishNumber = 1; }
        while (dishNumber > 0) {
            const dishIndex = Math.floor(Math.random() * dishes.length);
            if (selected.indexOf(dishes[dishIndex]) > -1) {
                continue;
            } else {
                selected.push(dishes[dishIndex]);
                dishNumber--;
            }
        }
        return selected;
    }
}