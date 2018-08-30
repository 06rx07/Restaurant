import { CookModel } from "../models/cook.model";
import { DrawWorkflowService } from "../services/draw-workflow.service";
import { EventHandlerService, EventType } from "../services/event-handler.service";
import { ITableDish } from "../models/dish.model";
import { config } from '../settings.const';

interface ICookStatus {
    cook: CookModel;
    isCooking: boolean;
}

export class CookModule {
    private cookList: ICookStatus[] = [];
    private toDoList: ITableDish[] = [];
    private drawService: DrawWorkflowService;
    private eventService: EventHandlerService;

    constructor(
        drawService: DrawWorkflowService,
        eventService: EventHandlerService
    ) {
        this.drawService = drawService;
        this.eventService = eventService;
        this.eventService.subScribe(EventType.DishesToCook, this.receiveOrder);
        this.initCook();
    }

    public initCook() {
        for (let i = 0; i < config.cookNumber; i++) {
            let cook = new CookModel(i, 'Cook ' + i, 1500);
            this.cookList.push({ cook, isCooking: false });
        }
    }

    public addCook(cook: CookModel) {
        this.cookList.push({ cook: cook, isCooking: false });
    }

    public removeCook(cook: CookModel): boolean {
        const index = this.cookList.findIndex(cookStatus => cookStatus.cook.id === cook.id);
        if (index > -1 && !this.cookList[index].isCooking) {
            this.cookList.splice(index, 1);
            return true;
        }
        return false;
    }

    public receiveOrder = (dishes: ITableDish[]) => {
        console.log('dishes to cook: ', `${dishes.map(dish => dish.name)}`);
        this.toDoList = this.toDoList.concat(dishes);
        const freeCookIndex = this.cookList.findIndex(cookStatus => !cookStatus.isCooking);
        if (freeCookIndex > -1) { this.cook(freeCookIndex); }
    }

    public cook(cookIndex: number): void {
        if (this.toDoList.length) {
            const dishesToCook = this.toDoList.filter(item => item.name === this.toDoList[0].name);
            this.toDoList = this.toDoList.filter(item => item.name !== this.toDoList[0].name);
            this.cookList[cookIndex].isCooking = true;
            this.cookList[cookIndex].cook.cook(dishesToCook[0].cookTime * config.timeUnit)
                .then(() => {
                    console.log('dishes done: ', `${dishesToCook.map(dish => dish.name + ' ' + dish.tableId)}`);
                    this.eventService.trigger(EventType.DishesDone, dishesToCook);
                    this.cookList[cookIndex].isCooking = false;
                    this.cook(cookIndex);
                });
        }
    }
}