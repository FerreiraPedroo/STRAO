import axios from "axios";

export const api = axios.create({
	baseURL: "http://127.0.0.1:3030",
	headers: {
		Authorization: `Bearer ${localStorage.getItem("strao-token")}`
	}
});

api.interceptors.request.use(
	function (config) {
		config.headers["x-strao-data-version"] = `${localStorage.getItem("strao-data-version")}`;
		return config;
	}
);

api.interceptors.response.use(
	function (response) {
		const updateData = response.headers['x-strao-update-data'];
		
		return response;
	}
);
