import { useState } from "react";
import * as Yup from "yup";

// import { InputSelect } from "../../../../../component/Input/Select/index.jsx";
import { InputText } from "../../../../../component/Input/Text/index.jsx";
import { Button } from "../../../../../component/Button/index.jsx";

import * as S from "./styles.jsx";

export function ContractValues({ contractValuesList }) {
	const [loading, setLoading] = useState(false);

	const [itemList, setItemList] = useState([{ name: "pedroo" }]);
	const [newItem, setNewItem] = useState({});

	const [itemValidator, setItemValidator] = useState({});

	const [newMonthValueSchema] = useState(
		Yup.object().shape({
			name: Yup.string("O nome deve ser texto.")
				.required("O nome não pode ser vazio.")
				.min(4, "Minímo de 4 caracteres.")
				.max(30, "Máximo de 30 caracteres.")
                .test('duplicated-name', 'Nome já utilizado.', name => !itemList.find((item) => item.name === name)),
			value: Yup.number()
				.required("O valor não pode ser zero.")
				.min(0.01, "O valor não pode ser zero.")
		})
	);
    
	function handleItemInfo(event) {
		setItemValidator((prev) => {
			const newValidator = { ...prev };
			delete newValidator[event.target.name];
			return newValidator;
		});

		setNewItem((prev) => {
			const item = { ...prev };

			if (event.target.name === "value") {
				let newValue;

				if (/\D/.test(event.target.value.replace(".", ""))) {
					newValue = item[event.target.name];
				} else {
					let valueNotDot = event.target.value.replace(".", "");

					const dotSizeSlice = valueNotDot.length - 2;

					const valueJoined = [
						valueNotDot.slice(0, dotSizeSlice),
						".",
						valueNotDot.slice(dotSizeSlice)
					].join("");

					newValue = Number(valueJoined).toFixed(2).toString();
				}

				item[event.target.name] = newValue;
			} else {
				item[event.target.name] = event.target.value;
			}

			return item;
		});
	}

	async function handleItemInfoValidation() {
		try {
			const monthValueValidated = await newMonthValueSchema.validate(newItem, {
				abortEarly: false
			});

			return monthValueValidated;
		} catch (error) {
			const errors = error.inner.reduce((prev, element) => {
				if (!prev[element.path]) {
					prev[element.path] = element.message;
				}
				return prev;
			}, {});

			setItemValidator(errors);
			return false;
		}
	}

	async function addItem() {
		const itemValidated = await handleItemInfoValidation();

		if (itemValidated) {
			setItemList((prev) => {
				const newList = [...prev];

				newList.push({ name: newItem.name, value: newItem.value });

				return newList;
			});

			setNewItem({ name: "", value: "0.00" });
		}
	}

	return (
		<S.ContractVaulueContainer>
			<S.ContractValueTitle>Valores contratuais mensais</S.ContractValueTitle>
			<InputText
				inputName={"name"}
				inputValue={newItem.name}
				inputWidth={"256px"}
				inputOnChange={handleItemInfo}
				inputPlaceholder={"Nome"}
				inputShowInfo={true}
				inputErrorMsg={itemValidator.name}
				disabled={loading}
			/>
			<InputText
				inputName={"value"}
				inputValue={newItem.value ?? "0.00"}
				inputWidth={"256px"}
				inputOnChange={handleItemInfo}
				inputPlaceholder={"Valor R$"}
				inputShowInfo={true}
				inputErrorMsg={itemValidator.value}
				disabled={loading}
			/>
			<S.ButtonContainer>
				<Button
					value="Criar"
					typeStyle="correct"
					disable={false}
					onClick={addItem}
					loading={false}
				/>
			</S.ButtonContainer>
		</S.ContractVaulueContainer>
	);
}
