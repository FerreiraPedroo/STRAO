import { createSlice } from "@reduxjs/toolkit";

let token = null;
let UIInfo = null;
let userInfo = null;
let sectorsInfo = null;
let departmentsInfo = null;
let infoDataVersion = null;

try {
	token = localStorage.getItem("strao-token");
	UIInfo = JSON.parse(localStorage.getItem("strao-UIInfo"));
	userInfo = JSON.parse(localStorage.getItem("strao-userInfo"));
	sectorsInfo = JSON.parse(localStorage.getItem("strao-sectorsInfo"));
	departmentsInfo = JSON.parse(localStorage.getItem("strao-departmentsInfo"));
	infoDataVersion = JSON.parse(localStorage.getItem("strao-infoDataVersion"));

	if (!token) {
		throw "[STORE]: Token não encontrado.";
	}
	if (!userInfo) {
		throw "[STORE]: Os dados do usuário não foram encontrados.";
	}
	if (!sectorsInfo) {
		throw "[STORE]: Informações dos setores não encontrados..";
	}
	if (!departmentsInfo) {
		throw "[STORE]: Informações dos departamentos não encontrados.";
	}
	if (!infoDataVersion) {
		throw "[STORE]: Os dados das versões não encontrado.";
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
		departmentsInfo,
		infoDataVersion
	},
	reducers: {
		providerUpdateAppData: (state, action) => {
			localStorage.setItem("strao-token", action.payload ? action.payload.token : null);
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

			const infoDataVersion = {
				UIInfoVersion: action.payload.UIInfo ? action.payload.UIInfo.UIInfoVersion : null,
				userInfoVersion: action.payload.userInfo.userInfoVersion ?? null,
				sectorInfoVersion: action.payload.sectorsInfo.sectorInfoVersion ?? null,
				departmentInfoVersion: action.payload.departmentsInfo.departmentInfoVersion ?? null
			};

			localStorage.setItem("strao-infoDataVersion", JSON.stringify(infoDataVersion));

			const updateData = {
				infoDataVersion: infoDataVersion,
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
			localStorage.removeItem("strao-infoDataVersion");

			return {
				token: null,
				UIInfo: null,
				appInfo: null,
				userInfo: null,
				departmentsInfo: null,
				infoDataVersion: null
			};
		},
		providerUpdateToken: (state, action) => {
			localStorage.setItem("strao-token", action.payload.token);
			state.token = action.payload.token ?? null;
			return state;
		},
		providerUpdateUIInfo: (state, action) => {
			if (state.infoDataVersion) {
				state.infoDataVersion.UIInfoVersion = action.payload.UIInfo.UIInfoVersion;
			}
			state.UIInfo = action.payload.UIInfo;
			return state;
		},
		provideUpdateUserInfo: (state, action) => {
			if (state.infoDataVersion) {
				state.infoDataVersion.userInfoVersion = action.payload.userInfo.userInfoVersion;
			}
			state.userInfo = action.payload.userInfo;
			return state;
		},
		providerUpdateSectorsInfo: (state, action) => {
			if (state.infoDataVersion) {
				state.infoDataVersion.sectorInfoVersion = action.payload.sectorsInfo.sectorInfoVersion;
			}
			state.sectorsInfo = action.payload.sectorsInfo;
			return state;
		},
		providerUpdateDepartmentsInfo: (state, action) => {
			if (state.infoDataVersion) {
				state.infoDataVersion.departmentInfoVersion =
					action.payload.departmentsInfo.departmentInfoVersion;
			}
			state.departmentsInfo = action.payload.departmentsInfo;
			return state;
		}
	}
});

export const { providerUpdateAppData, providerClearAllInfo, providerUpdateToken } =
	appDataSlice.actions;

export default appDataSlice.reducer;
