import { createSlice } from "@reduxjs/toolkit";

export const appDataSlice = createSlice({
	name: "appData",
	initialState: {
		userInfo: (() => {
			try {
				return JSON.parse(localStorage.getItem("strao-user-info"));
			} catch (e) {
				return null;
			}
		})(),
		token: localStorage.getItem("strao-token"),
		data: (() => {
			try {
				return JSON.parse(localStorage.getItem("strao-data"));
			} catch (e) {
				return null;
			}
		})(),
		dataVersion: localStorage.getItem("strao-data-version")
	},
	reducers: {
		appDataUpdate: (state, action) => {
			return (state = {
				userInfo: {
					name: action.payload.userInfo.name,
					avatar: action.payload.userInfo.avatar
				},
				token: action.payload.token,
				data: action.payload.data,
				dataVersion: action.payload.dataVersion ?? 1
			});
		}
	}
});

export const { appDataUpdate } = appDataSlice.actions;

export default appDataSlice.reducer;
