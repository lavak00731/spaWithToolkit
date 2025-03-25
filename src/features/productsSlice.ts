import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductType from "../interfaces/ProductType";


  
const initialState: ProductsState = {
    skip: 0,
    productsPerPage: 10,
    products: [],
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
      getProducts: (state, action: PayloadAction<ProductType[]>) => {
        state.products = action.payload
      },
    },
});
export const { nexPage, previousPage, getTotal, getProducts } = productsSlice.actions;
export default productsSlice.reducer;