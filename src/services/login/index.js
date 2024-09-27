import { api } from "../api.js";

export const loginService = async (_user, _password) => {
	try {
		const response = await api({
			url: "/login",
			method: "POST",
			data: {
				login: _user,
				password: _password
			},
			withCredentials: true
		});

		const { data } = response;

		return data;
	} catch (err) {
		return {
			codStatus: 500,
			message: "Erro ao conectar.",
			data: err.response.data
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
