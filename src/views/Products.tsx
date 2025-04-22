import { useEffect } from "react";

import { useAppSelector } from './../app/hook';

export const Products = () => {
  const products = useAppSelector((store) => store.products.products);
  console.log(products)
  useEffect(() => {
    document.title = "Products";  
    return () => {

    }
  }, )
  
  return (
    <div>Products</div>
  )
}
