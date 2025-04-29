import ProductInterface from "../interfaces/ProductInteface";
import styled from "styled-components";

const CardWrapper = styled.div`
    padding: 1rem;
    background: #FFF;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const Image = styled.img`
    max-width: 100%;
    height: auto;
`
const TitleH2 = styled.h2`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 2.5rem;
    line-height: 3rem;
`
const DescWrap = styled.p`
    font-size: 1rem;
`
export const CardItem = (prod: ProductInterface) => {
    console.log(prod)
  return (
    <CardWrapper>
        <Image src={prod.thumbnail} />
        <TitleH2>{prod.title}</TitleH2>
        <DescWrap>{prod.description}</DescWrap>
    </CardWrapper>
  )
}
