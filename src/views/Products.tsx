import { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from './../app/hook';
import { CardItem } from "../components/CardItem";

const MainElem = styled.main`
  background: #FFFFFF;
  max-width: 1440px;
  border-bottom: 3px solid #000;
  padding: 3rem 2rem;
`
const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const Products = () => {
  const products = useAppSelector((store) => store.products.products);
  const loading = useAppSelector((store) => store.products.loading)
  const skip = useAppSelector((store) => store.products.skip);
  
  useEffect(() => {
    document.title = "Products";  
    return () => {       
    }
  }, );

  if(loading) {
    return (
      <MainElem>
        <h1>Loading Products...</h1>
      </MainElem>
    )
  }
  
  return (
    <MainElem>
      <h1>Products</h1>
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
