import ProductInterface from "../interfaces/ProductInteface";
import styled from "styled-components";
import VisuallyHidden from "./VisuallyHidden";
import { Rating } from "./Rating";
import { Link } from "react-router";

const CardWrapper = styled.div`
    padding: 1rem;
    background: #FFF;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 2px solid #000;
    border-radius: 5px;
    min-height: 100%;
    position: relative;
`
const Image = styled.img`
    max-width: 100%;
    height: auto;
`
const TitleH2 = styled.h2`
    font-family: Helvetica, Arial, sans-serif;
    font-size: clamp(2rem, 2vw, 2.5rem);
    line-height: 2.4rem;
    margin-bottom: 1rem;
`
const BrandName = styled.p`
    font-family: Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif;
    font-size: 1rem;
    strong {
        font-weight: 800;
    }
`
const DescWrap = styled.p`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1rem;
`

const CategoryWrapper = styled.span`
    font-family: Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif;
    padding: 1rem;
    font-size: 1rem;
    line-height: 1rem;
    color: #FFF;
    background: #000;
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-weight: 600;
    border-radius: 5px;
    text-transform: capitalize;
`

const DiscountContainer = styled.span`
    color: #FFF;
    background: #0B6623;
    padding: 0.5rem;
    font-family: Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif;
    font-size: 1.2rem;
    font-weight: 700;
`

const PriceElem = styled.p`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 600;
`

const LinkToProduct = styled(Link)`
    color:  #276cdf;
    text-decoration: underlined;
`
const AddToCartBtn = styled.button`    
    font-family: Helvetica, Arial, sans-serif;
    padding: 1rem;
    font-size: 1rem;
    line-height: 1.15rem;
    border-radius: 6px;
    color: #FFF;
    background: #276cdf;
    border: 2px solid #2b59a7
`
export const CardItem = ({id, thumbnail, title, description, brand, category, discountPercentage, price, rating}: ProductInterface) => {

  return (
    <CardWrapper>
        <CategoryWrapper><VisuallyHidden>category</VisuallyHidden>{category}</CategoryWrapper>        
        <Image src={thumbnail} />
        <TitleH2><LinkToProduct to={'/product/'+id.toString()}>{title}</LinkToProduct></TitleH2>
        <PriceElem>
            Price ${price} {discountPercentage > 0 && <DiscountContainer> <VisuallyHidden>Discount</VisuallyHidden> - { discountPercentage }%</DiscountContainer> }
        </PriceElem>
        <BrandName>Brand <strong>{brand}</strong></BrandName>     
        <Rating ratingRates={rating} />
        <DescWrap>{description}</DescWrap>
        <AddToCartBtn>Add to the Cart <VisuallyHidden>{title}</VisuallyHidden></AddToCartBtn>
    </CardWrapper>
  )
}
