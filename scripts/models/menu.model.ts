import { IDish } from './dish.model';
import { dishes } from '../../data/dishes.const';

export interface IMenuItem {
    name: string;
    price: number;
    cookTime: number;
}

export class MenuModel {
    public menus: IMenuItem[] = [];
    private static instance: MenuModel = null;

    private constructor() {
        for (const dish of dishes) {
            this.menus.push(this.getMenuItem(dish));
        }
    }

    public static getInstance(): MenuModel {
        if (!this.instance) {
            this.instance = new MenuModel();
        }
        return this.instance;
    }

    public getMenuItem(dish: IDish): IMenuItem {
        return {
            name: dish.name,
            price: dish.price,
            cookTime: Math.random() * 10
        }
    }
}