export async function getItemsFromFilters(filters) {
	
	let sendFilters = "";
	if(filters){
		sendFilters = new URLSearchParams([...Object.entries(filters)]).toString();
	}
	
	const url = `http://localhost:8000/supply/warehouse/items?${sendFilters}`;
	const headers = loadHeaders();
	const config = {
		method: "GET",
		headers
	};

	const data = await fetch(url, config).then((response) => {
		return response.json();
	});

	return data;
}

export async function getDataFromNewItem() {
	const url = `http://localhost:8000/supply/warehouse/items/register/data`;
	const config = {
		method: "GET",
		headers: loadHeaders()
	};

	const data = await fetch(url, config).then((response) => {
		return response.json();
	});

	return data;
}


function loadHeaders() {
	return {
		Authorization: `Bearer ${localStorage.getItem("strao-token")}`,
		"x-strao-data-version": `${localStorage.getItem("strao-data-version")}`
	};
}
