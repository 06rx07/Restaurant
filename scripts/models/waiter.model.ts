import { StaffModel } from './staff.model';
import { IMenuItem } from './menu.model';

export class WaiterModel extends StaffModel {
    public id: number = null;
    public name: string;
    public salary: number;
    private static instance: WaiterModel = null;

    private constructor(name: string, salary: number) {
        super(name, salary);
    }

    public static getInstance(name: string, salary: number): WaiterModel {
        if (!this.instance) {
            this.instance = new WaiterModel(name, salary);
        }
        return this.instance;
    }

    public doneTask(task: any): void {
        // (Array.isArray(task)) ? this.order(task) : this.serve(task);
    }

    public order(menuItem: IMenuItem): IMenuItem {
        console.info(`${this.name} ordered ${menuItem.name} for customer`);
        return menuItem;
    }

    public serve(menuItem: IMenuItem): boolean {
        console.info(`${this.name} serve ${menuItem.name} to customer `);
        return true;
    }
}