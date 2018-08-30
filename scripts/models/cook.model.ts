import { config } from '../settings.const';
import { StaffModel } from './staff.model';
import { IMenuItem } from './menu.model';

export class CookModel extends StaffModel {
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

    public cook(cookTime: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(true);
            }, cookTime);
        });
    }
}