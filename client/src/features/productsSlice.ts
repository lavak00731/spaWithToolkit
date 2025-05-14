import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductInterface from "../interfaces/ProductInteface";
import ProductsStateInterface from "../interfaces/ProductStateInterface";


  
const initialState: ProductsStateInterface = {
    skip: 0,
    productsPerPage: 10,
    products:{},
    total: 0,
    loading: false
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      nexPage: (state) => {
        state.skip += 1;
      },
      previousPage: (state) => {
        state.skip -= 1;
      },
      getTotal: (state, action: PayloadAction<number>) => {
        state.total = action.payload;      
      },
      getNewProducts: (state, action: PayloadAction<{[key:number]:ProductInterface[]}>) => {
        state.products = action.payload
      },
      loadingSwitch: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload
      }
    },
});
export const { nexPage, previousPage, getTotal, getNewProducts, loadingSwitch} = productsSlice.actions;
export default productsSlice.reducer;