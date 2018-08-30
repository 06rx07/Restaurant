export class StaffModel {
    public id: number = null;
    public name: string;
    public salary: number;

    constructor(
        id: number,
        name: string, 
        salary: number
    ) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public doneTask(task: any): void {

    }
}