interface IMenuItem {
    name: string;
    price: number;
}

export class MenuModel {
    public name: string;
    public price: number;

    constructor(menuItem: IMenuItem) {
        this.name = menuItem.name;
        this.price = menuItem.price;
    }
}