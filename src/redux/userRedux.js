import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
		isSuccess: false,
	},
	reducers: {
		loginStart: (state) => {
			(state.isFetching = true), (state.isSuccess = false);
		},
		loginSuccess: (state, action) => {
			(state.isFetching = false),
				(state.currentUser = action.payload),
				(state.isSuccess = true);
		},
		loginFailure: (state) => {
			(state.isFetching = false),
				(state.error = true),
				(state.isSuccess = false);
		},
		resetSuccessFlag: (state) => {
			state.isSuccess = false;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, resetSuccessFlag } =
	userSlice.actions;
export default userSlice.reducer;
