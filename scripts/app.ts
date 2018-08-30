import { EventHandlerService, EventType } from "./services/event-handler.service";
import { DrawWorkflowService } from "./services/draw-workflow.service";
import { RestaurantModel } from "./models/restaurant.model";
import { config } from "./settings.const";
import { CookModule } from "./modules/cook.module";
import { WaiterModule } from "./modules/waiter.module";
import { CustomerModule } from "./modules/customer.module";

// init restaurant
const eventService = new EventHandlerService();
const drawService = new DrawWorkflowService();
const ifeRestaurant = RestaurantModel.getInstance(config.initCash, eventService);
const cookModule = new CookModule(drawService, eventService);
const waiterModule = new WaiterModule(drawService, eventService);
const customerModule = new CustomerModule(drawService, eventService);

const randomCustomer = eventService.trigger(EventType.CustomerIn, null);


