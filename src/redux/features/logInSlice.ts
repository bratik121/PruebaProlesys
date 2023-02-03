import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const logInSlice = createSlice({
	name: "logIn",
	initialState: {
		loged: false,
	},
	reducers: {
		setLog: (state, action: PayloadAction<boolean>) => {
			state.loged = action.payload;
		},
	},
});

export const { setLog } = logInSlice.actions;

export default logInSlice.reducer;
