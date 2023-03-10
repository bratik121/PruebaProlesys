import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api";
import authSlice from "../features/authSlice";
import categoriesSlice from "../features/categoriesSlice";
import productsSlice from "../features/productSlice";
import popUpSlice from "../features/popUpSlice";
export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authSlice,
		cats: categoriesSlice,
		prodcts: productsSlice,
		popUp: popUpSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
