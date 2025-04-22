import './App.css'
import { RoutesComp } from './routes/RoutesComp';
import { useAppDispatch, useAppSelector } from './app/hook';
import { getProducts } from './services/services.ts';
import { useEffect } from 'react';
function App() {
  const skip = useAppSelector((store) => store.products.skip);
  const prodPerPage = useAppSelector((store) => store.products.productsPerPage);
  const dispatch = useAppDispatch();
  const fetchProds = async (prodPerPage: number, skip: number, signal: AbortSignal)=>{
    const prods = await getProducts(prodPerPage, skip, signal);
    const products = prods.products;    
    dispatch({type: prods, payload: {skip:{products}}})
  }
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchProds(prodPerPage, skip, signal)
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
