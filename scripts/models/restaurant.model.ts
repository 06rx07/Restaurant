import { StaffModel } from './staff.model';
import { WaiterModel } from './waiter.model';
import { CookModel } from './cook.model';
import { CustomerModel } from './customer.model';

interface IRestaurant {
    cash: number;
    seats: number;
    staff: StaffModel[];
}

export class RestaurantModel {
    public cash: number;
    public seats: number;
    public staff: StaffModel[];
    public queue: CustomerModel[] = [];
    private static instance: RestaurantModel = null;

    private constructor(restaurant: IRestaurant) {
        this.cash = restaurant.cash;
        this.seats = 1;
        this.staff = restaurant.staff;
    }

    public static getInstance(restaurant: IRestaurant): RestaurantModel {
        if (!this.instance) {
            this.instance = new RestaurantModel(restaurant);
        }
        return this.instance;
    }

    public hire(person: WaiterModel | CookModel): void {
        person.id = this.staff.length + 1;
        this.staff.push(person);
    }

    public fire(person: WaiterModel | CookModel): void {
        const index = this.staff.findIndex(s => s.id === person.id);
        if (index > -1) {
            let fired = this.staff.splice(index, 1);
            fired = null;
        }
    }

    public assignCustomer(customer: CustomerModel): void {
        this.queue.push(customer);
    }

    public assignSeats(): CustomerModel {
        if (this.queue.length && this.seats > 0) {
            this.seats -= 1;
            return this.queue[0];
        }
        return null;
    }

    public resetSeats(): void {
        this.seats += 1;
        let assigned = this.queue.splice(0, 1);
        assigned = null;
    }

    public receipt(payment: number): void {
        this.cash += payment;
    }
}