import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { popUpType } from "../types/types";

const popUpSlice = createSlice({
	name: "opUp",
	initialState: {
		open: false,
		message: "",
	},
	reducers: {
		setOpen: (state, action: PayloadAction<popUpType>) => {
			state.open = action.payload.open;
			state.message = action.payload.message;
		},
		setClose: (state) => {
			state.open = false;
			state.message = "";
		},
	},
});

export const { setOpen, setClose } = popUpSlice.actions;

export default popUpSlice.reducer;
