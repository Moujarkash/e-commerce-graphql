export class Product {
  id: string;
  description: string;
  price: number;

  constructor(id: string, description: string, price: number) {
    this.id = id;
    this.description = description;
    this.price = price;
  }
}

export class Review {
  rating: number;
  comment: string;

  constructor(rating: number, comment: string) {
    this.rating = rating;
    this.comment = comment;
  }
}

const products = [
  new Product('redshoe', 'Red Shoe', 42.23),
  new Product('bluejean', 'Blue Jeans', 55.23),
];

function getAllProducts(): Array<Product> {
    return products;
}

export {
    getAllProducts
};
