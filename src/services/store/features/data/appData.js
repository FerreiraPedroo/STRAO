import { createSlice } from "@reduxjs/toolkit";

let token = null;
let UIInfo = null;
let userInfo = null;
let sectorsInfo = null;
let departmentsInfo = null;

try {
	token = localStorage.getItem("strao-token");
	UIInfo = JSON.parse(localStorage.getItem("strao-UIInfo"));
	userInfo = JSON.parse(localStorage.getItem("strao-userInfo"));
	sectorsInfo = JSON.parse(localStorage.getItem("strao-sectorsInfo"));
	departmentsInfo = JSON.parse(localStorage.getItem("strao-departmentsInfo"));

	if (!token) {
		throw "[STORE]: Token não encontrado.";
	}
	// if (!UIInfo) {
	// 	throw "[STORE]: Os dados da interface não foram encontrados.";
	// }
	if (!userInfo) {
		throw "[STORE]: Os dados do usuário não foram encontrados.";
	}
	if (!sectorsInfo) {
		throw "[STORE]: Informações dos setores não encontrados..";
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
		userInfo,
		sectorsInfo,
		departmentsInfo
	},
	reducers: {
		providerUpdateAppData: (state, action) => {
			localStorage.setItem(
				"strao-token",
				action.payload.token ? action.payload.token : null
			);
			localStorage.setItem(
				"strao-UIInfo",
				action.payload.UIInfo ? JSON.stringify(action.payload.UIInfo) : null
			);
			localStorage.setItem(
				"strao-userInfo",
				action.payload.userInfo ? JSON.stringify(action.payload.userInfo) : null
			);
			localStorage.setItem(
				"strao-sectorsInfo",
				action.payload.sectorsInfo ? JSON.stringify(action.payload.sectorsInfo) : null
			);
			localStorage.setItem(
				"strao-departmentsInfo",
				action.payload.departmentsInfo ? JSON.stringify(action.payload.departmentsInfo) : null
			);

			const updateData = {
				token: action.payload.token ?? null,
				UIInfo: action.payload.UIInfo ?? null,
				userInfo: action.payload.userInfo ?? null,
				sectorsInfo: action.payload.sectorsInfo ?? null,
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
			localStorage.setItem("strao-token", action.payload.token);
			state.token = action.payload.token ?? null;
			return state;
		},
		providerUpdateUIInfo: (state, action) => {
			state.UIInfo = action.payload.UIInfo;
			return state;
		},
		provideUpdateUserInfo: (state, action) => {
			state.userInfo = action.payload.userInfo;
			return state;
		},
		providerUpdateSectorsInfo: (state, action) => {
			state.sectorsInfo = action.payload.sectorsInfo;
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
