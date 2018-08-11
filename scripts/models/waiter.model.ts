import { StaffModel } from './staff.model';

export class WaiterModel extends StaffModel {
    public id: number = null;
    public name: string;
    public salary: number;

    constructor(name:string, salary:number) {
        super(name, salary);
    }

    public doneTask(task:any): void {
        (Array.isArray(task)) ? this.order(task) : this.serve(task);
    }

    public order(dishes: any[]): void {

    }

    public serve(table: any): void {

    }
}