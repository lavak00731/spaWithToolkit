import './App.css'
import { RoutesComp } from './routes/RoutesComp';
import { useAppDispatch, useAppSelector } from './app/hook';
import { getProducts } from './services/services.ts';
import { getNewProducts } from './features/productsSlice.ts';
import { useEffect } from 'react';
function App() {
  const skip = useAppSelector((store) => store.products.skip);
  const products = useAppSelector((store) => store.products.products)
  const prodPerPage = useAppSelector((store) => store.products.productsPerPage);
  
  const dispatch = useAppDispatch();
  const fetchProds = async (prodPerPage: number, skip: number, signal: AbortSignal)=>{
    const prodElems = await getProducts(prodPerPage, skip, signal);
    const products = prodElems.products;    
    dispatch(getNewProducts({[skip]: products}))
  }
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log(!products[skip])
    if(!products[skip]) {
      fetchProds(prodPerPage, skip, signal)
    }
    
    return () => {
      controller.abort();
    }
  }, [prodPerPage, skip])
  
  return (
    <>    
      <RoutesComp />
    </>
  )
}

export default App
