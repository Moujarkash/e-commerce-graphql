import { getAllOrders } from './orders.model'

export = {
    Query: {
        orders: () => {
            return getAllOrders();
        }
    }
};