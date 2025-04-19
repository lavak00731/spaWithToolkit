import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './../features/productsSlice';
const store = configureStore({
    reducer: {
      products: productsSlice
    },
  });
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch
  export default store;