import DimensionsInterface from "./innerTypes/DimensionsInterface";
import ReviewsInterface from "./innerTypes/ReviewsInterface";
import metaProductInterface from "./innerTypes/metaProductsInterface";
export default interface ProductInterface {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: DimensionsInterface,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: ReviewsInterface[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: metaProductInterface,
    images: string[],
    thumbnail: string,
}