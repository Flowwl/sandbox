import { Order } from "./Order";

export class Broker {
    private orderList: Order[] = [];

    public takeOrder(order: Order) {
        this.orderList.push(order);
    }

    public placeOrders() {
        for (let order of this.orderList) {
            order.execute();
        }
        this.orderList = [];
    }
}
