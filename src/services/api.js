import axios from "axios";

export const api = (() => {
	return axios.create({
		baseURL: "http://127.0.0.1:8000",
		headers:{
			Authorization: `Bearer ${localStorage.getItem("strao-token")}`,
			"x-strao-data-version": `${localStorage.getItem("strao-data-version")}`
		}
	});
})();
