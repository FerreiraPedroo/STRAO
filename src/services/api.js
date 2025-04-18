import { CONFIG } from "config/config.jsx";

export const api = async (url, config = {}) => {
	// console.log({url, config })
	const configDefault = {
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("strao-token")}`,
			"Strao-Data-Info-Version": `${localStorage.getItem("strao-infoDataVersion")}`
		}
	};

	const configFinal = {
		...config,
		...configDefault
	};
	// console.log({configFinal})
	try {
		const response = await fetch(`${CONFIG.urlApi}${url}`, configFinal);
		// console.log({response})
		const responseJson = await response.json();

		return responseJson;
	} catch (error) {
		// console.log({error})
		if (
			error.message.includes("Failed to fetch") ||
			error.message.includes("ERR_CONNECTION_REFUSED")
		) {
			return { codStatus: 404, message: "Servidor indisponível ou conexão recusada.", data: null };
		} else {
			return { codStatus: 404, message: `Erro desconhecido: ${error}`, data: null };
		}
	}
};
