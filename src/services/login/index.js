import { api } from "../api.js";

export const loginService = async (user, password) => {
	try {
		const response = await api("/login", {
			method: "POST",
			body: JSON.stringify({
				login: user,
				password: password
			}),
			withCredentials: true
		});

		return response;
	} catch (err) {
		return {
			codStatus: 500,
			message: "Erro ao conectar.",
			data: null
		};
	}
};

export const logoutService = async () => {
	try {
		const response = await api("/logout", {
			method: "POST",
			withCredentials: true
		});
		return response;
	} catch (err) {
		return {
			codStatus: 0,
			codName: "",
			message: "Erro ao desconectar.",
			data: ""
		};
	}
};
