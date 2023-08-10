import { createSlice } from "@reduxjs/toolkit";

let token = null;
let dataVersion = null;
let userInfo = null;
let dataInfo = null;
let uiInfo = null;

try {
	token = localStorage.getItem("strao-token");
	dataVersion = localStorage.getItem("strao-data-version");
	userInfo = JSON.parse(localStorage.getItem("strao-user-info"));
	dataInfo = JSON.parse(localStorage.getItem("strao-data-info"));
	uiInfo = JSON.parse(localStorage.getItem("strao-ui-info"));

	// console.log({token,dataVersion,userInfo,dataInfo,uiInfo})

	if (!token) {
		console.log("[STORE]: Token não encontrado.");
		throw "[STORE]: Token não encontrado.";
	}
	if (!dataVersion) {
		console.log("[STORE]: A versão da data não localizada.");
		throw "[STORE]: A versão da data não localizada.";
	}
	if (!userInfo) {
		console.log("[STORE]: Informações do usuário não encontradas.");
		throw "[STORE]: Informações do usuário não encontradas.";
	}
	if (!dataInfo) {
		console.log("[STORE]: Os dados do aplicativo não foram encontrados.");
		throw "[STORE]: Os dados do aplicativo não foram encontrados.";
	}
	if (!uiInfo) {
		console.log("[STORE]: Os dados da interface não foram encontrados.");
		throw "[STORE]: Os dados da interface não foram encontrados.";
	}
} catch (error) {
	console.log("[STORE]: Erro ao carregar a store > " + error);
}

export const appDataSlice = createSlice({
	name: "appData",
	initialState: {
		token,
		dataVersion,
		userInfo,
		dataInfo,
		uiInfo
	},
	reducers: {
		clearAllInfo: (state, action) => {
			localStorage.clear("strao-token");
			localStorage.clear("strao-data-version");
			localStorage.clear("strao-user-info");
			localStorage.clear("strao-data-info");
			localStorage.clear("strao-ui-info");

			return {
				token: null,
				dataVersion: null,
				userInfo: null,
				dataInfo: null,
				uiInfo: null
			};
		},
		appDataUpdate: (state, action) => {
			const updateData = {
				...state,
				token: action.payload.token ?? null,
				userInfo: action.payload.userInfo ?? null,
				uiInfo: action.payload.uiInfo ?? null,
				dataInfo: action.payload.dataInfo ?? null,
				dataVersion: action.payload.version ?? null
			};
			return updateData
		},
		tokenUpdate: (state, action) => {
			const updateData = { ...state };
			updateData.token = action.payload.token;
			return updateData;
		},
		userInfoUpdate: (state, action) => {
			const updateData = { ...state };
			updateData.userInfo = action.payload.userInfo;
			return updateData;
		},
		uiInfoUpdate: (state, action) => {
			const updateData = { ...state };
			updateData.uiInfo = action.payload.uiInfo;
			return updateData;
		},
		dataInfoUpdate: (state, action) => {
			const updateData = { ...state };
			updateData.dataInfo = action.payload.dataInfo;
			return updateData;
		}
	}
});

export const { appDataUpdate, clearAllInfo } = appDataSlice.actions;

export default appDataSlice.reducer;
