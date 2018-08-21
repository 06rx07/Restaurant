import { IMenuItem } from "../models/menu.model";
import { CookModel } from "../models/cook.model";
import { WaiterModel } from "../models/waiter.model";
import { CustomerModel } from "../models/customer.model";

export class GetWorkflowService {
    public cook: CookModel;
    public waiter: WaiterModel;

    constructor(cook: CookModel, waiter: WaiterModel){
        this.cook = cook;
        this.waiter = waiter;
    }

    public cookServe(menuItems: IMenuItem[], customer: CustomerModel): Promise<any>{
        let dishWorkFlow: Promise<any> = Promise.resolve(null);
        for (const menuItem of menuItems) {
            dishWorkFlow = dishWorkFlow.then(() => Promise.resolve(menuItem))
                .then(this.cook.cook)
                .then(this.waiter.serve)
                .then((menuItem) => customer.newDishServed(menuItem));
        }
        return dishWorkFlow;
    }
}