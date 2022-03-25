import {
  addNewProduct,
  addNewProductReview,
  getAllProducts,
  getProductById,
  getProductsByPrice,
} from './products.model';

export = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_: any, args: any) => {
      return getProductsByPrice(args.min, args.max);
    },
    productById: (_: any, args: any) => {
      return getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_: any, args: any) => {
      return addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_: any, args: any) => {
        return addNewProductReview(args.id, args.rating, args.comment);
      },
  },
};
