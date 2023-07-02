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
		throw "Token não encontrado.";
	}
	if (!dataVersion) {
		throw "A versão da data não localizada.";
	}
	if (!userInfo) {
		throw "Informações do usuário não encontradas.";
	}
	if (!dataInfo) {
		throw "Os dados do aplicativo não foram encontrados.";
	}
	if (!uiInfo) {
		throw "Os dados da interface não foram encontrados.";
	}
} catch (error) {
	console.log("[STORE] Erro ao carregar a store: " + error);
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
			return {
				token: null,
				dataVersion: null,
				userInfo: null,
				dataInfo: null,
				uiInfo: null
			};
		},
		appDataUpdate: (state, action) => {
			const previousData = {
				...state,
				token: action.payload.token ?? null,
				userInfo: action.payload.userInfo ?? null,
				uiInfo: action.payload.uiInfo ?? null,
				dataInfo: action.payload.dataInfo ?? null,
				dataVersion: action.payload.version ?? null
			};
		},
		tokenUpdate: (state, action) => {
			const previousData = { ...state };
			previousData.token = action.payload.token;
			return previousData;
		},
		userInfoUpdate: (state, action) => {
			const previousData = { ...state };
			previousData.userInfo = action.payload.userInfo;
			return previousData;
		},
		uiInfoUpdate: (state, action) => {
			const previousData = { ...state };
			previousData.uiInfo = action.payload.uiInfo;
			return previousData;
		},
		dataInfoUpdate: (state, action) => {
			const previousData = { ...state };
			previousData.dataInfo = action.payload.dataInfo;
			return previousData;
		}
	}
});

export const { appDataUpdate, clearAllInfo } = appDataSlice.actions;

export default appDataSlice.reducer;
