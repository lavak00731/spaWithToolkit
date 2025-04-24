import { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from './../app/hook';



export const Products = () => {
  const products = useAppSelector((store) => store.products.products);
  const skip = useAppSelector((store) => store.products.skip);
  
  useEffect(() => {
    document.title = "Products";  
    return () => {       
    }
  }, )
  
  return (
    <div>Products</div>
  )
}
