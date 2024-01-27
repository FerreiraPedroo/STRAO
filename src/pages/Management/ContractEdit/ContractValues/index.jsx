import { useEffect, useState } from "react";
import { api } from "../../../../services/api.js";
import * as Yup from "yup";

import { NotificationModal } from "../../../../component/Notification/modal.jsx";
import { InputTextArea } from "../../../../component/Input/TextArea/index.jsx";
import { InputSelect } from "../../../../component/Input/Select/index.jsx";
import { InputText } from "../../../../component/Input/Text/index.jsx";
import { ButtonIcon } from "../../../../component/ButtonIcon/index.jsx";

import * as S from "./styles.jsx";

export function ContractValues({ contractId, contractValuesList = [], loading }) {
	const [notification, setNotification] = useState(null);

	const [itemSaveLoading, setItemSaveLoading] = useState(false); // loading para ser usando quando for salvar o item na API.
	const [internalLoading, setInternalLoading] = useState(true); // loading para esperar carregar algum dado de API

	const [itemList, setItemList] = useState([]); // lista de items com valores.
	const [itemValidator, setItemValidator] = useState({}); // validar com os erros.
	const [newItem, setNewItem] = useState({}); // dados do novo item.
	const [centersCostInfo, setCentersCostInfo] = useState([]);

	const [newMonthValueSchema] = useState(
		Yup.object().shape({
			name: Yup.string("O nome deve ser texto.")
				.required("O nome não pode ser vazio.")
				.min(4, "Minímo de 4 caracteres.")
				.max(30, "Máximo de 30 caracteres.")
				.test(
					"duplicated-name",
					"Nome já utilizado.",
					(name) => !itemList.find((item) => item.name === name)
				),
			value: Yup.number()
				.required("O valor não pode ser zero.")
				.min(0.01, "O valor não pode ser zero."),
			center_cost_id: Yup.string().required("Selecione um centro de custo.")
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

	async function removeMonthValue(monthValueId) {
		setInternalLoading(true);
		setItemSaveLoading(true);
		try {
			const response = await api.put(`/management/contract/${contractId}/remove_month_value`, {
				monthValueId
			});

			setItemList((prev) => {
				const newList = prev.filter((item) => {
					if (item._id === monthValueId) {
						return false;
					}
					return true;
				});
				return newList;
			});

			setNotification({
				theme: "success",
				message: "Valor mesal removido com sucesso."
			});

			setInternalLoading(false);
			setItemSaveLoading(false);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel remover o valor mensal, tente novamente."
			});

			setInternalLoading(false);
			setItemSaveLoading(false);
		}
	}

	async function saveMonthValue(item) {
		setInternalLoading(true);
		setItemSaveLoading(true);
		try {
			const response = await api.put(`/management/contract/${contractId}/add_month_value`, {
				...item
			});

			setItemList((prev) => {
				const newList = [...prev];

				newList.unshift({
					name: newItem.name,
					value: newItem.value,
					center_cost_id: newItem.center_cost_id,
					description: newItem.description
				});

				return newList;
			});

			setNewItem({ name: "", value: "0.00", center_cost_id: "", description: "" });

			setNotification({
				theme: "success",
				message: "Dados do contrato atualizado sucesso."
			});

			setInternalLoading(false);
			setItemSaveLoading(false);
		} catch (error) {
			setNotification({
				theme: "fail",
				message: "Não foi possivel atualizar os dados do contrato, tente novamente."
			});

			setInternalLoading(false);
			setItemSaveLoading(false);
		}
	}

	async function addItem() {
		const itemValidated = await handleItemInfoValidation();

		if (itemValidated) {
			const created = await saveMonthValue(itemValidated);
		}
	}

	useEffect(() => {
		setItemList(
			contractValuesList.map((item) => {
				const newItem = {
					_id: item._id,
					name: item.name,
					value: item.value,
					center_cost_id: item.center_cost_id,
					description: item.description
				};

				return newItem;
			})
		);
	}, [contractValuesList]);

	useEffect(() => {
		async function centerCostList() {
			setInternalLoading(true);

			try {
				const response = await api.get(`/management/centers-cost`);

				const centerCostList = response.data.data.map((centerCost) => {
					return {
						value: centerCost._id,
						name: `${centerCost.name} > ${centerCost.category.name} > ${centerCost.type.name}`
					};
				});

				centerCostList.unshift({
					value: "",
					name: "Selecione o centro de custo"
				});

				setCentersCostInfo(centerCostList);
				setInternalLoading(centerCostList.length <= 1);
			} catch (error) {
				setNotification({
					theme: "fail",
					message:
						(error.response && error.response.data.message) ??
						"Erro ao obter a lista de categorias do contrato.",
					setNotification: setNotification
				});
			}
		}

		centerCostList();
	}, []);

	return (
		<S.InnerContainer>
			<S.HeaderInner>
				<S.HeaderInnerTitle>Valores contratuais mensais</S.HeaderInnerTitle>
			</S.HeaderInner>

			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}

			<InputText
				inputName={"name"}
				inputValue={newItem.name ?? ""}
				inputWidth={"288px"}
				inputOnChange={handleItemInfo}
				inputPlaceholder={"Nome"}
				inputShowInfo={true}
				inputErrorMsg={itemValidator.name}
				disabled={loading || internalLoading}
			/>

			<InputText
				inputName={"value"}
				inputValue={newItem.value ?? "0.00"}
				inputWidth={"288px"}
				inputOnChange={handleItemInfo}
				inputPlaceholder={"Valor R$"}
				inputShowInfo={true}
				inputErrorMsg={itemValidator.value}
				disabled={loading || internalLoading}
			/>

			<InputSelect
				selectName={"center_cost_id"}
				selectValue={newItem.center_cost_id ?? ""}
				selectOnChange={handleItemInfo}
				selectPlaceholder={"Centro de Custo"}
				selectShowInfo={true}
				selectErrorMsg={itemValidator.center_cost_id}
				width={"288px"}
				options={centersCostInfo}
				disabled={loading || internalLoading}
			/>

			<InputTextArea
				textAreaName={"description"}
				textAreaValue={newItem.description ?? ""}
				textAreaOnChange={handleItemInfo}
				textAreaPlaceholder={"Descrição"}
				textAreaShowInfo={true}
				textAreaErrorMsg={itemValidator.description}
				width={"288px"}
				height={"92px"}
				disabled={loading || internalLoading}
			/>

			<S.ButtonContainer width={"256px"}>
				<ButtonIcon
					value="Criar"
					typeStyle="add"
					disable={loading || internalLoading}
					onClick={addItem}
					loading={itemSaveLoading}
				/>
				<S.ActionText>Adicionar</S.ActionText>
			</S.ButtonContainer>

			<S.Line />

			<S.ListContractValuesContainer>
				<S.ListContractValuesTitle>Valores do contrato</S.ListContractValuesTitle>

				{itemList.length ? (
					itemList.map((item) => (
						<S.ItemContractBox key={item.name}>
							<S.ItemValueInputBox>
								<S.ItemName>
									<span>Nome: </span>
									{item.name}
								</S.ItemName>
								<S.ItemValue>
									<span>R$ </span>
									{item.value}
								</S.ItemValue>
								<S.ItemValue>
									<span>Centro de custo: </span>
									{centersCostInfo.find((centerCost) => {
										return centerCost.value === item.center_cost_id;
									})
										? centersCostInfo.find((centerCost) => {
												return centerCost.value === item.center_cost_id;
										  }).name
										: null}
								</S.ItemValue>
								<S.ItemValue>
									<span>Descrição: </span>
									{item.description}
								</S.ItemValue>
							</S.ItemValueInputBox>
							<S.ItemValueButtonBox>
								<ButtonIcon
									typeStyle={"remove"}
									disable={loading || internalLoading}
									onClick={() => removeMonthValue(item._id)}
								/>
							</S.ItemValueButtonBox>
						</S.ItemContractBox>
					))
				) : (
					<S.EmptyText>Vazio</S.EmptyText>
				)}
			</S.ListContractValuesContainer>
		</S.InnerContainer>
	);
}
