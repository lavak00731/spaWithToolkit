import ProductInterface from "./ProductInteface";
export default interface ProductsStateInterface {
    skip: number;
    productsPerPage: number;
    products: ProductInterface[];
    total: number;
    loading: boolean
}