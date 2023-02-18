import { api } from "../api";

export const loginService = async (_user, _password, _dataVersion) => {
	try {
		const { data } = await api({
			url: "/login",
			method: "POST",
			data: {
				user: _user,
				password: _password,
				dataVersion: _dataVersion
			},
			withCredentials: true
		});
		return data;
	} catch (err) {
		if (err.response.data) {
			return err.response.data;
		}
		return {
			codStatus: 0,
			codName: "",
			message: "Erro ao conectar.",
			data: ""
		};
	}
};

export const logoutService = async () => {
	try {
		const { data } = await api({
			url: "/logout",
			method: "POST",
			withCredentials: true
		});
		return data;
	} catch (err) {
		if (err.response.data) {
			return err.response.data;
		}
		return {
			codStatus: 0,
			codName: "",
			message: "Erro ao desconectar.",
			data: ""
		};
	}
};
