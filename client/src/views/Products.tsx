import { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from './../app/hook';
import { CardItem } from "../components/CardItem";

const MainElem = styled.main`
  background: #FFFFFF;
  max-width: 1440px;
  border-bottom: 3px solid #000;
  padding: 3rem 2rem;
  margin: 0 auto;
`
const MainTitle = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-size: clamp(2.5rem, 3vw, 3rem);
  line-height: 3rem;
  margin-bottom: 1.5rem;
`
const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  align-items: stretch;

  li {
    flex-basis: 100%;
  }
  @media (min-width: 640px) {
    li {
      flex-basis: calc( 50% - ( 1rem / 2 ) );
    }
  }
  @media (min-width: 1024px) {
    li {
      flex-basis: calc( 25% - 1rem );
    }
  }
`
export const Products = () => {
  const products = useAppSelector((store) => store.products.products);
  const loading = useAppSelector((store) => store.products.loading)
  const skip = useAppSelector((store) => store.products.skip);
  console.log(products)
  useEffect(() => {
    document.title = "Products";  
    return () => {       
    }
  }, );

  if(loading) {
    return (
      <MainElem>
        <MainTitle>Loading Products...</MainTitle>
      </MainElem>
    )
  }
  
  return (
    <MainElem>
      <MainTitle>Products</MainTitle>
      <ProductList>
        {
          (products[skip] !== undefined && products[skip].length > 0) ? products[skip].map((prod) => (
            <li key={prod.id}>
              <CardItem {...prod} />
            </li>
          )) : <li>No products found.</li>
        }
      </ProductList>
        
      
    </MainElem>
  )
}
