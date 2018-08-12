import { IMenuItem } from "./menu.model";

export class CustomerModel {
    public order(menuItem: IMenuItem): IMenuItem {
        console.info(`customer ordered ${menuItem.name + ' $' + menuItem.price}`);
        return menuItem;
    }

    public eat(menuItem: IMenuItem): boolean {
        const eatTime = Math.round(Math.random() * menuItem.price);
        console.info(`customer complete ${menuItem.name} in ${eatTime} minutes.`);
        return true;
    }
}