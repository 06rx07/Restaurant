import { StaffModel } from './staff.model';

export class CookModel extends StaffModel {
    public id: number = null;
    public name: string;
    public salary: number;
    private static instance: CookModel = null;

    private constructor(name:string, salary:number) {
        super(name, salary);
    }

    public static getInstance(name:string, salary:number): CookModel {
        if (!this.instance) {
            this.instance = new CookModel(name, salary);
        }
        return this.instance;
    }

    public doneTask(task: any): void {
        this.cook(task);
    }

    public cook(dish: any): void {

    }
}