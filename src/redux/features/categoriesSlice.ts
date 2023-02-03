import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoryT } from "../types/types";

const categorieSlice = createSlice({
	name: "categories",
	initialState: {
		categories: [] as categoryT[],
	},
	reducers: {
		setCategories: (state, action: PayloadAction<categoryT[]>) => {
			state.categories = action.payload;
		},
	},
});

export const { setCategories } = categorieSlice.actions;

export default categorieSlice.reducer;
