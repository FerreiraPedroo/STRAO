/**
 *
 * @param {*} event Evento do input
 * @param {*} setFormInput Função que altero o valor do input
 * @param {*} action A ação se é adicionar "add" ou remover "remove".
 */
export function helperHandleInputFile({ event, setData, action }) {
	const name = event.target.name;
	const value = event.target.value;
	const type = event.target.type;

	console.log({ event, setData, action });
	console.log({ name, value, type });

	if (action == "add") {
		const file = new Blob(event.target.files[0]);
		let fileArray = [];

		setData((prev) => {
			if (Array.isArray(prev.files)) {
				return {
					...prev,
					files: prev.files.push({
						name: file.name,
						type: file.type,
						file: file
					})
				};
			} else {
				fileArray.push({
					name: "",
					type: "",
					file: ""
				});

				return {
					...prev,
					files: fileArray
				};
			}
		});
	} else if (action == "remove") {
		setFormInput((prev) => {
			const newValues = { ...prev };
			delete newValues[inputName];
			return newValues;
		});
		return;
	}
}
