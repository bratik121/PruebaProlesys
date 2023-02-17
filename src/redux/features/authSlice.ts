import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userT } from "../types/types";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: "",
		token: "",
		loged: false,
	},
	reducers: {
		setToken: (state, action: PayloadAction<userT>) => {
			state.user = action.payload.nombre;
			state.token = action.payload.token;
			state.loged = true;
		},
		removeToken: (state) => {
			state.user = "";
			state.token = "";
			state.loged = false;
		},
	},
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
