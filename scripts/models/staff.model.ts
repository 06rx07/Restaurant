export class StaffModel {
    public id: number = null;
    public name: string;
    public salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    public doneTask(task: any): void {

    }
}