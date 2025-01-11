/**
 *
 * @param {*} event Evento do input
 * @param {*} setFormInput Função que altero o valor do input
 * @param {*} action A ação se é adicionar "add" ou remover "remove".
 */
export function helperHandleInputText({ event, setData, action }) {
	const name = event.target.name;
	const value = event.target.value;
	const type = event.target.type;

	console.log({ event, setData, action });
	console.log({ name, value, type });

	if (action == "add") {
		setData((prev) => {
			return {
				...prev,
				[name]: value
			};
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
