import { createSlice } from "@reduxjs/toolkit";

let UIInfo = null;
let appInfo = null;
let userInfo = null;
let departmentsInfo = null;

try {
	UIInfo = JSON.parse(localStorage.getItem("strao-UIInfo"));
	appInfo = JSON.parse(localStorage.getItem("strao-AppInfo"));
	userInfo = JSON.parse(localStorage.getItem("strao-UserInfo"));
	departmentsInfo = JSON.parse(localStorage.getItem("strao-DepartmentsInfo"));

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
		UIInfo,
		appInfo,
		userInfo,
		departmentsInfo
	},
	reducers: {
		providerUpdateAppData: (state, action) => {
			localStorage.setItem("strao-UIInfo", JSON.stringify(action.payload.UIInfo));
			localStorage.setItem("strao-AppInfo", JSON.stringify(action.payload.appInfo));
			localStorage.setItem("strao-UserInfo", JSON.stringify(action.payload.userInfo));
			localStorage.setItem(
				"strao-DepartmentsInfo",
				JSON.stringify(action.payload.departmentsInfo)
			);

			const updateData = {
				UIInfo: action.payload.UIInfo ?? null,
				appInfo: action.payload.appInfo ?? null,
				userInfo: action.payload.userInfo ?? null,
				departmentsInfo: action.payload.departmentsInfo ?? null
			};
			return updateData;
		},
		providerClearAllInfo: (state, action) => {
			localStorage.removeItem("strao-UIInfo");
			localStorage.removeItem("strao-AppInfo");
			localStorage.removeItem("strao-UserInfo");
			localStorage.removeItem("strao-DepartmentsInfo");

			return {
				UIInfo: null,
				appInfo: null,
				userInfo: null,
				departmentsInfo: null
			};
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

export const { providerUpdateAppData, providerClearAllInfo } = appDataSlice.actions;

export default appDataSlice.reducer;
