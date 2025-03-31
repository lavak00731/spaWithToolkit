import {Routes, Route } from "react-router";
import { ProductsLayout } from "../Layout/ProductsLayout";
import { Products } from "../views/Products";
import { ProductPage } from "../views/ProductPage";
import { Cart } from "../views/Cart";
import { Payment } from "../views/Payment";
import { Favorites } from "../views/Favorites";
import { User } from "../views/User";
import { PrivateRoutes } from "../views/PrivateRoutes";

export const RoutesComp = () => {
  return (
    <Routes>
      <Route element={<ProductsLayout />}>
        <Route index path="/" element={<Products />} />
        <Route path="product:id" element={<ProductPage />} />
      </Route>
      <Route element={<PrivateRoutes/>}>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/user" element={<User/>}/>
      </Route>      
    </Routes>
  )
}


