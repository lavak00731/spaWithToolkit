import {Routes, Route } from "react-router";
import { ProductsLayout } from "../Layout/ProductsLayout";
import { Products } from "../views/Products";
import { ProductPage } from "../views/ProductPage";
import { Cart } from "../views/Cart";
import { Payment } from "../views/Payment";
import { Favorites } from "../views/Favorites";
import { User } from "../views/User";
import { PrivateRoutes } from "../views/PrivateRoutes";
import { Login } from "../views/Login";
import { Register } from "../views/Register"

export const RoutesComp = () => {
  return (
    <Routes>
      <Route element={<ProductsLayout />}>
        <Route index path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Route>
      <Route element={<PrivateRoutes/>}>        
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/user" element={<User/>}/>        
      </Route>      
    </Routes>
  )
}


