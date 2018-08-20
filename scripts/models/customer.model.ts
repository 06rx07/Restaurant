import { config } from '../settings.const';
import { dishes } from '../../data/dishes.const';
import { IMenuItem } from "./menu.model";

export class CustomerModel {
    private orderTime = config.orderTime * config.timeUnit;
    private ordered: IMenuItem[] = [];
    public served: Promise<boolean> = new Promise((resolve, reject) => resolve(true));

    public order(): Promise<IMenuItem[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.ordered = this.getDishes();
                resolve(this.ordered);
            }, this.orderTime);
        });
    }

    public newDishServed(menuItem: IMenuItem): boolean {
        console.log(this);
        this.served.then(() => this.eat(menuItem));
        return true;
    }

    public eat(menuItem: IMenuItem): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('eat up' + menuItem.name);
                resolve(true);
            }, config.eatTime * config.timeUnit);
        });
    }

    public pay(): number {
        return this.ordered.map(dish => dish.price).reduce((prev, next) => prev + next);
    }

    private getDishes(): IMenuItem[] {
        const selected = [];
        let dishNumber = Math.floor(Math.random() * dishes.length);
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