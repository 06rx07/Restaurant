export class DishModel {
    public name: string;
    public cost: number;
    public price: number;

    constructor(name: string, cost: number, price: number) {
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}