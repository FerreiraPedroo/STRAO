import { createSlice } from "@reduxjs/toolkit";

let token = null;
let UIInfo = null;
let appInfo = null;
let userInfo = null;
let departmentsInfo = null;

try {
	token = JSON.parse(localStorage.getItem("strao-token"));
	UIInfo = JSON.parse(localStorage.getItem("strao-UIInfo"));
	appInfo = JSON.parse(localStorage.getItem("strao-AppInfo"));
	userInfo = JSON.parse(localStorage.getItem("strao-UserInfo"));
	departmentsInfo = JSON.parse(localStorage.getItem("strao-DepartmentsInfo"));

	if (!token) {
		throw "[STORE]: Token não encontrado.";
	}
	if (!UIInfo) {
		throw "[STORE]: Os dados da interface não foram encontrados.";
	}
	if (!appInfo) {
		throw "[STORE]: Dados do aplicativo não localizado.";
	}
	if (!userInfo) {
		throw "[STORE]: Os dados do usuário não foram encontrados.";
	}
	if (!departmentsInfo) {
		throw "[STORE]: Informações dos departamentos não encontrados.";
	}

	console.log("STORE LOADEAD FROM CACHE");
} catch (error) {
	console.log(error);
}

export const appDataSlice = createSlice({
	name: "appData",
	initialState: {
		token,
		UIInfo,
		appInfo,
		userInfo,
		departmentsInfo
	},
	reducers: {
		providerUpdateAppData: (state, action) => {
			localStorage.setItem(
				"strao-token",
				action.payload.token ? JSON.stringify(action.payload.token) : null
			);
			localStorage.setItem(
				"strao-UIInfo",
				action.payload.UIInfo ? JSON.stringify(action.payload.UIInfo) : null
			);
			localStorage.setItem(
				"strao-AppInfo",
				action.payload.appInfo ? JSON.stringify(action.payload.appInfo) : null
			);
			localStorage.setItem(
				"strao-UserInfo",
				action.payload.userInfo ? JSON.stringify(action.payload.userInfo) : null
			);
			localStorage.setItem(
				"strao-DepartmentsInfo",
				action.payload.departmentsInfo ? JSON.stringify(action.payload.departmentsInfo) : null
			);

			const updateData = {
				token: action.payload.token ?? null,
				UIInfo: action.payload.UIInfo ?? null,
				appInfo: action.payload.appInfo ?? null,
				userInfo: action.payload.userInfo ?? null,
				departmentsInfo: action.payload.departmentsInfo ?? null
			};
			return updateData;
		},
		providerClearAllInfo: (state, action) => {
			localStorage.removeItem("strao-token");
			localStorage.removeItem("strao-UIInfo");
			localStorage.removeItem("strao-AppInfo");
			localStorage.removeItem("strao-UserInfo");
			localStorage.removeItem("strao-DepartmentsInfo");

			return {
				token: null,
				UIInfo: null,
				appInfo: null,
				userInfo: null,
				departmentsInfo: null
			};
		},
		providerUpdateToken: (state, action) => {
			localStorage.setItem(
				"strao-token",
				action.payload.token ? JSON.stringify(action.payload.token) : null
			);
			state.token = action.payload.token ?? null;
			return state;
		},
		providerUpdateUIInfo: (state, action) => {
			state.UIInfo = action.payload.UIInfo;
			return state;
		},
		providerUpdateAppInfo: (state, action) => {
			state.appInfo = action.payload.appInfo;
			return state;
		},
		provideUpdateUserInfo: (state, action) => {
			state.userInfo = action.payload.userInfo;
			return state;
		},
		providerUpdateDepartmentsInfo: (state, action) => {
			state.departmentsInfo = action.payload.departmentsInfo;
			return state;
		}
	}
});

export const { providerUpdateAppData, providerClearAllInfo, providerUpdateToken } =
	appDataSlice.actions;

export default appDataSlice.reducer;
