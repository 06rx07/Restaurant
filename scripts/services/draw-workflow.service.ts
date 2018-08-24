import { IMenuItem } from "../models/menu.model";

const canvas: any = document.querySelector('canvas#workflow');
const balance: any = document.querySelector('p#balance');
const cookItems: any = document.querySelector('div#cook-items');
const orderedItems: any = document.querySelector('div#customer-items');

export class DrawWorkflowService {
    public config = {
        width: 1024,
        height: 250,
        textFillStyle: '#000000',
        font: '14px Arial',
        leftPos: { x: 200, y: 20 },
        rightPos: { x: 490, y: 20 }
    };

    public cookImgSrc = './assets/cook.jpeg';
    public waiterImg = {
        src: './assets/waiter.jpeg',
        height: 194,
        width: 259
    };
    public customerImgSrc = './assets/customer.jpeg';

    public context = canvas.getContext('2d');

    constructor() {
        canvas.width = this.config.width;
        canvas.height = this.config.height;
        this.context.font = this.config.font;
        this.context.fillStyle = this.config.textFillStyle;
        this.placeStaff(this.context, this.cookImgSrc, { x: 0, y: 0 });
        this.placeStaff(this.context, this.waiterImg.src, this.config.rightPos);
    }

    public placeStaff(context: any, src: string, position: any) {
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

    public displayMenuItems(menuItems: IMenuItem[], option: string): any {
        const parentNode = (option === 'cook') ? cookItems : orderedItems;
        for (let i = 0; i < menuItems.length; i++) {
            parentNode.appendChild(this.getMenuItem(menuItems[i]));
        }
    }

    public getMenuItem(menuItem: IMenuItem): any {
        const node = document.createElement('p');
        const text = document.createTextNode(menuItem.name);
        const status = document.createElement('span');
        status.setAttribute('class', 'countdown');
        node.appendChild(text);
        node.appendChild(status);
        return node;
    }

    public findMenuItemStatus(menuItem: IMenuItem, option: string): any {
        const parentNode: HTMLElement = (option === 'cook') ? cookItems : orderedItems;
        return Array.from(parentNode.childNodes)
            .find(node => node['textContent'] === menuItem.name)['childNodes'][1];
    }

    public showBalance(cash: number) {
        balance.innerHTML = '$ ' + cash;
    }

    public showCountdown(menuItem: IMenuItem, option: string): any {
        const node = this.findMenuItemStatus(menuItem, option);
        const time = (option === 'cook') ? menuItem.cookTime : 3;
        let initTime = time;
        const timeInterval = setInterval(() => {
            node.innerHTML = ' ' + initTime + 's';
            initTime--;
        }, 1000);
        setTimeout(() => {
            clearInterval(timeInterval);
            node.setAttribute('class', 'countdown done');
            node.innerHTML = ' done';
        }, time * 1000);
    }

    public clearDisplay(): any {
        this.cleanNode(orderedItems);
        this.cleanNode(cookItems);
    }

    public cleanNode(parentNode: HTMLElement) {
        while (parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild);
        }
    }

    public moveWaiter(leftToRight: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            const startPos = (leftToRight) ? this.config.leftPos : this.config.rightPos;
            const endPos = (leftToRight) ? this.config.rightPos : this.config.leftPos;
            setTimeout(() => {
                this.context.clearRect(startPos.x, startPos.y, this.waiterImg.width, this.waiterImg.height);
            }, 250);
            setTimeout(() => {
                this.placeStaff(this.context, this.waiterImg.src, endPos);
                resolve(true);
            }, 500);
        });
    }
}
