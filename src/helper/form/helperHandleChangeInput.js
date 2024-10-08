/**
 *
 * @param {*} event Evento do input
 * @param {*} setFormInput Função que altero o valor do input
 * @param {*} action A ação se é adicionar "add" ou remover "remove".
 * @param {*} type O tipo de dado: "text", "files", "multiple-string"
 */
export function helperHandleChangeInput({event, setFormInput, action, type}) {
	const inputName = event.target.name;
	const inputValue = event.target.value;
	const inputType = type;
	
	// console.log({inputName,inputValue,inputType})

	if (action == "remove") {
		setFormInput((prev) => {
			const newValues = { ...prev };
			delete newValues[inputName];
			return newValues;
		});
		return;
	}

	switch (inputType) {
		case "text":
			setFormInput((prev) => {
				return {
					...prev,
					[inputName]: inputValue
				};
			});
			break;

		case "files":
			if (action == "add") {
				setFormInput((prev) => {
					return {
						...prev,
						[inputName]: inputValue
					};
				});
			} else if (action == "remove") {
			}
			break;
	}
}
