import { Product } from '../products/products.model';

export class Order {
  date: string;
  subtotal: number;
  items: Array<OrderItem>;

  constructor(date: string, subtotal: number, items: Array<OrderItem>) {
    this.date = date;
    this.subtotal = subtotal;
    this.items = items;
  }
}

export class OrderItem {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}

const orders = [
  new Order('2005-5-5', 99.55, [
    new OrderItem(new Product('redshoe', 'Old red shoe', 49.6, []), 2),
  ]),
];

function getAllOrders(): Array<Order> {
  return orders;
}

export {
  getAllOrders,
};
