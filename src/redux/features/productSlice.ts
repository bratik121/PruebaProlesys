import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productT } from "../types/types";

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: [] as productT[],
	},
	reducers: {
		setProducts: (state, action: PayloadAction<productT[]>) => {
			state.products = action.payload;
		},
	},
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
