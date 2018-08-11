import { StaffModel } from './staff.model';

export class CookModel extends StaffModel {
    public id: number = null;
    public name: string;
    public salary: number;

    constructor(name: string, salary: number) {
        super(name, salary);
    }

    public doneTask(task: any): void {
        this.cook(task);
    }

    public cook(dish: any): void {

    }
}