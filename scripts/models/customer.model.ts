import { config } from '../settings.const';
import { dishes } from '../../data/dishes.const';
import { IMenuItem } from "./menu.model";
import { DrawWorkflowService } from '../services/draw-workflow.service';

export class CustomerModel {
    private orderTime = config.orderTime * config.timeUnit;
    private ordered: IMenuItem[] = [];
    public served: Promise<any> = Promise.resolve(null);
    public drawService: DrawWorkflowService;

    constructor(
        drawService: DrawWorkflowService
    ) {
        this.drawService = drawService;
    }

    public order(): Promise<IMenuItem[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.ordered = this.getDishes();
                resolve(this.ordered);
            }, this.orderTime);
        });
    }

    public newDishServed(menuItem: IMenuItem): boolean {
        this.eat(menuItem);
        return true;
    }

    public eat(menuItem: IMenuItem): void {
        this.served = this.served
            .then(() => this.drawService.moveWaiter(true))
            .then(() => {
                const isLastItem = this.ordered.lastIndexOf(menuItem) === this.ordered.length - 1;
                if (!isLastItem) { this.drawService.moveWaiter(false); }
                return true;
            })
            .then(() => new Promise((resolve, reject) => {
                this.drawService.showCountdown(menuItem, 'customer');
                setTimeout(() => {
                    resolve(menuItem);
                }, config.eatTime * config.timeUnit);
            }));
    }

    public pay(): number {
        return this.ordered.map(dish => dish.price).reduce((prev, next) => prev + next);
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