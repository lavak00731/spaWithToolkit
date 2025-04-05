import { Outlet } from "react-router";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const ProductsLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}
