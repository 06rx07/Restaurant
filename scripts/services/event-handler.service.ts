export enum EventType {
    CustomerIn,
    CustomerOut,
    NewOrder,
    DishesToCook,
    DishesDone,
    NewDishes,
    EatUp,
    Receipt
}

export interface IEventObserver {
    observers: Function[];
}

export class EventHandlerService {
    private eventObservers: IEventObserver[] = [];

    constructor() {
        for (let i = 0; i <= 7; i++) {
            this.eventObservers.push({ observers: [] });
        }
    }

    public trigger = (type: EventType, data: any) => {
        for (const fn of this.eventObservers[type].observers) {
            fn(data);
        }
    }

    public subScribe = (type: EventType, fn: Function) => {
        this.eventObservers[type].observers.push(fn);
    }
}