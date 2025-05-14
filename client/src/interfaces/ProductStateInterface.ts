import ProductObject from "./ProductObject";

export default interface ProductsStateInterface {
    skip: number;
    productsPerPage: number;
    products: ProductObject;
    total: number;
    loading: boolean
}