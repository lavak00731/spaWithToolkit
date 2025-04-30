import ProductInterface from "../interfaces/ProductInteface";
import styled from "styled-components";

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
`
const Image = styled.img`
    max-width: 100%;
    height: auto;
`
const TitleH2 = styled.h2`
    font-family: Helvetica, Arial, sans-serif;
    font-size: clamp(2rem, 2vw, 2.5rem);
    line-height: 2.4rem;
`
const BrandName = styled.p`
    font-family: font-family: Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif;
    font-size: 1rem;
    strong {
        font-weight: 800;
    }
`

const DescWrap = styled.p`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1rem;
`
export const CardItem = ({thumbnail, title, description, brand, category, discountPercentage, price, rating}: ProductInterface) => {

  return (
    <CardWrapper>
        <Image src={thumbnail} />
        <TitleH2>{title}</TitleH2>
        <BrandName>Brand <strong>{brand}</strong></BrandName>
        <DescWrap>{description}</DescWrap>
    </CardWrapper>
  )
}
