export default interface ProductsStateInterface {
    skip: number;
    productsPerPage: number;
    products: ProductType[];
    total: number;
    loading: boolean
}