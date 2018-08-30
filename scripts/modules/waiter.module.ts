import { WaiterModel } from "../models/waiter.model";
import { DrawWorkflowService } from "../services/draw-workflow.service";
import { EventHandlerService, EventType } from "../services/event-handler.service";
import { ITableDish } from "../models/dish.model";
import { config } from '../settings.const';

interface IWaiterStatus {
    waiter: WaiterModel;
    isServing: boolean;
    position: string;
}

export class WaiterModule {
    private waiterList: IWaiterStatus[] = [];
    private toOrderList: ITableDish[][] = [];
    private toServeList: ITableDish[][] = [];
    private drawService: DrawWorkflowService;
    private eventService: EventHandlerService;

    constructor(
        drawService: DrawWorkflowService,
        eventService: EventHandlerService
    ) {
        this.drawService = drawService;
        this.eventService = eventService;
        this.eventService.subScribe(EventType.DishesDone, this.receiveDishes);
        this.eventService.subScribe(EventType.NewOrder, this.receiveOrder);
        this.eventService.subScribe(EventType.EatUp, this.receipt);
        this.initWaiter();
    }

    public initWaiter() {
        for (let i = 0; i < config.waiterNumber; i++) {
            let waiter = new WaiterModel(i, 'Waiter ' + i, 1000);
            this.waiterList.push({ waiter, isServing: false, position: 'right' });
        }
    }

    public addWaiter(waiter: WaiterModel) {
        this.waiterList.push({ waiter: waiter, isServing: false, position: 'right' });
    }

    public removeWaiter(waiter: WaiterModel): boolean {
        const index = this.waiterList.findIndex(waiterStatus => waiterStatus.waiter.id === waiter.id);
        if (index > -1 && !this.waiterList[index].isServing) {
            this.waiterList.splice(index, 1);
            return true;
        }
        return false;
    }

    public receiveOrder = (dishes: ITableDish[]) => {
        console.log('waiter receive new order: ', `${dishes.map(dish => dish.name)}`);
        this.toOrderList.push(dishes);
        const closetFreeWaiter = this.findClosetWaiter('right');
        if (typeof closetFreeWaiter !== 'undefined') { this.deliverDishes(closetFreeWaiter, dishes, 'right'); }
    }

    public receiveDishes = (dishes: ITableDish[]) => {
        console.log('waiter receive dishes from cook: ', `${dishes.map(dish => dish.name)}`);
        this.toServeList.push(dishes);
        const closetFreeWaiter = this.findClosetWaiter('left');
        if (typeof closetFreeWaiter !== 'undefined') { this.deliverDishes(closetFreeWaiter, dishes, 'left'); }
    }

    private findClosetWaiter(startPos: string): number {
        const closest = this.waiterList
            .findIndex(waiterStatus => !waiterStatus.isServing && waiterStatus.position === startPos);
        if (closest > -1) {
            return closest;
        } else {
            const freeWaiter = this.waiterList.findIndex(waiterStatus => !waiterStatus.isServing);
            return (freeWaiter > -1) ? freeWaiter : undefined;
        }
    }

    public deliverDishes(waiterIndex: number, dishes: ITableDish[], startPos: string): void {
        const waiterSatus = this.waiterList[waiterIndex];
        waiterSatus.isServing = true;
        const startStatus = (waiterSatus.position === startPos) ?
            Promise.resolve(true) : waiterSatus.waiter.move(config.serveTime * config.timeUnit);
        startStatus.then(() => waiterSatus.waiter.move(config.serveTime * config.timeUnit))
            .then(() => {
                waiterSatus.isServing = false;
                (startPos === 'right') ? this.eventService.trigger(EventType.DishesToCook, dishes)
                : this.eventService.trigger(EventType.NewDishes, dishes);
                console.log('waiter receive dishes from cook/order: ', `${dishes.map(dish => dish.name)}`);
            });
    }

    public receipt = (data: { tableId: number, payment: number }) => {
        console.log('waiter receive customer eat up: ', data);
        this.eventService.trigger(EventType.CustomerOut, data.tableId);
        this.eventService.trigger(EventType.Receipt, data.payment);
    }
}