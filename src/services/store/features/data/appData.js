import { createSlice } from "@reduxjs/toolkit";

export const appDataSlice = createSlice({
	name: "appData",
	initialState: {
		userInfo: (() => {
			try {
				console.log("INICIAL")
				return JSON.parse(localStorage.getItem("strao-user-info"));
			} catch (e) {
				return null;
			}
		})(),
		token: localStorage.getItem("strao-token"),
		dataInfo: (() => {
			try {
				return JSON.parse(localStorage.getItem("strao-data-info"));
			} catch (e) {
				return null;
			}
		})(),
		dataVersion: localStorage.getItem("strao-data-version")
	},
	reducers: {
		appDataUpdate: (state, action) => {
			return (state = {
				token: action.payload.token,
				userInfo: {
					name: action.payload.userInfo.name,
					avatar: action.payload.userInfo.avatar
				},
				dataInfo: action.payload.dataInfo,
				dataVersion: action.payload.version
			});
		},
	}
});

export const { appDataUpdate } = appDataSlice.actions;

export default appDataSlice.reducer;
