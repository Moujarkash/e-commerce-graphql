import { getAllProducts } from "./products.model";

export = {
    Query: {
        products: () => {
            return getAllProducts();
        }
    }
};