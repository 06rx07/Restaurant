import { StaffModel } from './staff.model';
import { IMenuItem } from './menu.model';
import { ITableDish } from './dish.model';

export class WaiterModel extends StaffModel {
    public id: number;
    public name: string;
    public salary: number;

    constructor(
        id: number,
        name: string, 
        salary: number
    ) {
        super(id, name, salary);
    }

    public move(moveTime: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, moveTime);
        });
    }
}