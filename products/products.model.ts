export class Product {
  id: string;
  description: string;
  price: number;
  reviews: Array<Review>;

  constructor(id: string, description: string, price: number, reviews: Array<Review>) {
    this.id = id;
    this.description = description;
    this.price = price;
    this.reviews = reviews;
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
  new Product('redshoe', 'Red Shoe', 42.23, []),
  new Product('bluejean', 'Blue Jeans', 55.23, []),
];

function getAllProducts(): Array<Product> {
    return products;
}

function getProductsByPrice(min: number, max: number): Array<Product> {
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
}

function getProductById(id: string): Product | undefined {
    return products.find((product) => {
        return product.id === id;
    });
}

function addNewProduct(id: string, description: string, price: number): Product {
    const newProduct = new Product(id, description, price, []);
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id: string, rating: number, comment: string): Review | null {
    const matchedProduct = getProductById(id);

    if (matchedProduct) {
        const newReview = new Review(rating, comment);

        matchedProduct.reviews.push(newReview);

        return newReview;
    }

    return null;
}

export {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
};
