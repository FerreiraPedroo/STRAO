import axios from "axios";

export const api = (() => {

	axios.defaults.headers.common = {
		Authorization: `Bearer ${localStorage.getItem("strao-token")}`,
		"x-strao-data-version": localStorage.getItem("strao-data-version")
	};
console.log(axios.defaults)
	return axios.create({
		baseURL: "http://127.0.0.1:8000"
	});

})();
