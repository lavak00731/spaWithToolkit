import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './../features/productsSlice';

const store = configureStore({
    reducer: {
      products: productsSlice,       
    },
    devTools: true,
  });

  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch
  export default store;


// https://www.hostsgratuitos.com/api/productos?category=all&limit=50
// https://www.hostsgratuitos.com/api/productos?category=tecnologia&limit=10

// {
//   category: "tecnologia"
// }