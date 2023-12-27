import { createSlice } from "@reduxjs/toolkit";

let token = null;
let dataVersion = null;
let departmentsInfo = null;
let contractsInfo = null;
let sectorsInfo = null;
let userInfo = null;
let uiInfo = null;

try {
	token = localStorage.getItem("strao-token");
	dataVersion = localStorage.getItem("strao-data-version");
	departmentsInfo = JSON.parse(localStorage.getItem("strao-departments-info"));
	contractsInfo = JSON.parse(localStorage.getItem("strao-contracts-info"));
	sectorsInfo = JSON.parse(localStorage.getItem("strao-sectors-info"));
	userInfo = JSON.parse(localStorage.getItem("strao-user-info"));
	uiInfo = JSON.parse(localStorage.getItem("strao-ui-info"));

	if (!token) {
		throw "[STORE]: Token não encontrado.";
	}
	if (!dataVersion) {
		throw "[STORE]: A versão da data não localizada.";
	}
	if (!departmentsInfo) {
		throw "[STORE]: Informações dos departamentos não encontrados.";
	}
	if (!sectorsInfo) {
		throw "[STORE]: Os dados dos setores não foram encontrados.";
	}
	if (!contractsInfo) {
		throw "[STORE]: Os dados dos contratos não foram encontrados.";
	}
	if (!userInfo) {
		throw "[STORE]: Os dados do usuário não foram encontrados.";
	}
	if (!uiInfo) {
		throw "[STORE]: Os dados da interface não foram encontrados.";
	}
} catch (error) {
	console.log(error);
}

export const appDataSlice = createSlice({
	name: "appData",
	initialState: {
		token,
		dataVersion,
		departmentsInfo,
		contractsInfo,
		sectorsInfo,
		userInfo,
		uiInfo
	},
	reducers: {
		providerUpdateAppData: (state, action) => {
			const updateData = {
				...state,
				token: action.payload.token ?? null,
				dataVersion: action.payload.dataVersion ?? null,
				departmentsInfo: action.payload.departmentsInfo ?? null,
				contractsInfo: action.payload.contractsInfo ?? null,
				sectorsInfo: action.payload.sectorsInfo ?? null,
				userInfo: action.payload.userInfo ?? null,
				uiInfo: action.payload.uiInfo ?? null
			};
			return updateData;
		},
		providerClearAllInfo: (state, action) => {
			localStorage.clear("strao-token");
			localStorage.clear("strao-data-version");
			localStorage.clear("strao-department-info");
			localStorage.clear("strao-contracts-info");
			localStorage.clear("strao-sectors-info");
			localStorage.clear("strao-user-info");
			localStorage.clear("strao-ui-info");
			return {
				token: null,
				dataVersion: null,
				departmentInfo: null,
				contractsInfo: null,
				sectorsInfo: null,
				userInfo: null,
				uiInfo: null
			};
		},
		providerUpdateToken: (state, action) => {
			const updateData = { ...state };
			updateData.token = action.payload.token;
			return updateData;
		},
		providerUpdateDepartmentsInfo: (state, action) => {
			const updateData = { ...state };
			updateData.departmentsInfo = action.payload.departmentsInfo;
			return updateData;
		},
		providerUpdateContractsInfo: (state, action) => {
			const updateData = { ...state };
			updateData.contractsInfo = action.payload.contractsInfo;
			return updateData;
		},
		providerUpdateSectorsInfo: (state, action) => {
			const updateData = { ...state };
			updateData.sectorsInfo = action.payload.sectorsInfo;
			return updateData;
		},
		provideUpdateUserInfo: (state, action) => {
			const updateData = { ...state };
			updateData.userInfo = action.payload.userInfo;
			return updateData;
		},
		providerUpdateUiInfo: (state, action) => {
			const updateData = { ...state };
			updateData.uiInfo = action.payload.uiInfo;
			return updateData;
		}
	}
});

export const { providerUpdateAppData, providerClearAllInfo } =
	appDataSlice.actions;

export default appDataSlice.reducer;
