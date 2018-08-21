import { IMenuItem } from "../models/menu.model";

const canvas: any = document.querySelector('canvas#workflow');

export class DrawWorkflowService {
    public config = {
        width: 1024,
        height: 600,
        availableColor: '#3cb44b',
        cookColor: '#f58231',
        paidColor: '#0082c8',
        textFillStyle: '#000000',
        font: '14px Arial',
    };

    public cookImgSrc = './assets/cook.jpeg';
    public waiterImgSrc = './assets/waiter.jpeg';
    public customerImgSrc = './assets/customer.jpeg';

    public context = canvas.getContext('2d');

    constructor() {
        canvas.width = this.config.width;
        canvas.height = this.config.height;
        this.context.font = this.config.font;
        this.context.fillStyle = this.config.textFillStyle;
        this.placeStaff(this.context, this.cookImgSrc, { x: 0, y: 0 });
        this.placeStaff(this.context, this.waiterImgSrc, { x: 260, y: 20 });
    }

    public placeStaff(context, src, position) {
        const img = new Image();
        img.onload = () => {
            context.drawImage(img, position.x, position.y);
        };
        img.src = src;
    }

    public placeCustomer() {
        const img = new Image();
        img.onload = () => {
            this.context.drawImage(img, 750, 0);
        };
        img.src = this.customerImgSrc;
    }

    public displayMenuItems(menuItems: IMenuItem[]) {
        for(let i = 0; i < menuItems.length; i++){
            this.context.fillText(menuItems[i].name, 800, (250 + i * 16));
        }
    }
}