import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";
import { loginT, registerT } from "../types/types";

export const apiSlice: any = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api-test-v2.onrender.com/",
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;
			// If we have a token set in state, let's assume that we should be passing it.
			if (token) {
				headers.set("token", token);
			}
			return headers;
		},
	}), //wrapper del rtk-query para fetch (es como axios)
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => ({
				url: `user/index`,
				method: "GET",
			}),
		}),
		getLogin: builder.mutation({
			query: (user: loginT): any => ({
				url: "user/login",
				method: "POST",
				body: user,
			}),
		}),
		getProducts: builder.query({
			query: () => ({
				url: `producto/index`,
				method: "GET",
			}),
		}),
		addUser: builder.mutation({
			query: (user: registerT): any => ({
				url: "user/create",
				method: "POST",
				body: user,
			}),
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetLoginMutation,
	useGetProductsQuery,
	useAddUserMutation,
} = apiSlice;
