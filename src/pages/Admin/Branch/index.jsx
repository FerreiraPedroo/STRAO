import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { api } from "services/api.js";

import { InputText } from "component/Input/Text/index.jsx";
import { InputSelect } from "component/Input/Select/index.jsx";
import { PageTitle } from "component/container/PageTitle/index.jsx";

import { Modal } from "component/Modal/index.jsx";
import { useDispatch } from "react-redux";
import { changeLoginReset } from "services/store/features/actions/actions.js";
import { NotificationModal } from "component/Notification/modal.jsx";

import * as S from "./styles.jsx";
import { PageActions } from "component/container/PageActions/index.jsx";

const validator = yup.object().shape({
	status: yup
		.mixed()
		.oneOf(["inactive", "active"])
		.required("E obrigatório selecionar ativo ou inativo"),
	name: yup
		.string()
		.min(4, "O nome deve ter no minimo 4 caracteres.")
		.max(128, "Minimo de 4 e máximo de 128 caracteres.")
		.required("O nome é obrigatório."),
	cnpj: yup
		.string()
		.matches(
			/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/,
			"Formato do CNPJ inválido, você deve colocar no formato xx.xxx.xxx/xxxx-xx"
		)
		.required("O CNPJ é obrigatório.")
});

export function AdminBranchEdit() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const param = useParams();

	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [notification, setNotification] = useState(false);
	const [errorPage, setErrorPage] = useState(null);

	const [branchDataOriginal, setBranchDataOriginal] = useState();
	const [isChanged, setIsChanged] = useState(true);
	const [branchData, setBranchData] = useState();
	const [branchDataError, setBranchDataError] = useState();
 
	async function handleInput(e) {
		const name = e.target.name;
		const valueChange = e.target.value;
		const newValue = { ...branchData, [name]: valueChange };
		let isChangedValue = true;

		for (const branch in branchData) {
			if (
				branchDataOriginal[branch] != newValue[branch] ||
				(branch == name && branchDataOriginal[branch] != valueChange)
			) {
				isChangedValue = false;
				break;
			}
		}

		try {
			setBranchData(newValue);
			if (isChanged != isChangedValue) {
				setIsChanged(isChangedValue);
			}
			await validator.validate(newValue, { abortEarly: false });
			setBranchDataError(null);

		} catch (err) {
			setBranchDataError(
				err.inner.reduce((acc, e) => {
					acc[e.path] = e.message;
					return acc;
				}, {})
			);
		}
	}

	async function changeUpdate(branchData) {
		try {
			const response = await api(`/admin/branch/${param.id}`, {
				method: "PUT",
				body: JSON.stringify(branchData)
			});

			if (response.codStatus == 201) {
				setBranchData(response.data);
				setBranchDataOriginal(response.data);
				setIsChanged(true);
				setNotification({ theme: "success", message: response.message });
			} else if (response.codStatus == 401) {
				dispatch(changeLoginReset(true));
			} else {
				setNotification({ theme: "fail", message: response.message });
			}
		} catch (error) {
			if (error.response) {
				setNotification("Erro ao atualizar os dados do usuário, tente novamente.");
			}
		}
	}

	const options = [
		{
			value: "active",
			name: "Ativo",
			category: "option",
			selected: branchData && branchData.status == "active"
		},
		{
			value: "inactive",
			name: "Inativo",
			category: "option",
			selected: branchData && branchData.status == "inactive"
		}
	];
	const actions = [
		{
			name: "Salvar",
			typeStyle: "correct",
			show: true,
			disable: isChanged,
			action: () => changeUpdate(branchData)
		}
	];

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const response = await api(`/admin/branch/${param.id}`, { method: "GET" });

				if (response.codStatus == 201) {
					setBranchData(response.data);
					setBranchDataOriginal(response.data);
				} else if (response.codStatus == 401) {
					dispatch(changeLoginReset(true));
				} else {
					setNotification({ theme: "fail", message: response.message });
				}
			} catch (error) {
				setErrorPage(true);
			}
			setLoading(false);
		};
		getUserInfo();
	}, []);

	return (
		<S.Container>
			{notification && (
				<NotificationModal
					theme={notification.theme}
					message={notification.message}
					setNotification={setNotification}
				/>
			)}

			<PageTitle title="Editar filial" backUrl={"/admin/branchs"} loading={loading} />

			{showModal ? (
				<Modal showModal={setShowModal}>
					<div>OK</div>
				</Modal>
			) : (
				""
			)}

			{branchData ? (
				<>
					<PageActions actionsData={actions} loading={branchDataError}></PageActions>
					<S.DataContainer>
						<S.HeaderContainer>
							<S.HeaderTitle>Dados</S.HeaderTitle>
						</S.HeaderContainer>

						<S.DataCenterContainer>
							<InputSelect
								selectValue={branchData.status}
								selectName="status"
								selectShowInfo={true}
								selectPlaceholder={"Status"}
								selectOnChange={handleInput}
								width="160px"
								options={options}
								inputErrorMsg={branchDataError && branchDataError.status}
							/>
							<S.InputBox>
								<InputText
									inputValue={branchData.name}
									inputName="name"
									inputShowInfo={true}
									inputPlaceholder={"Nome"}
									inputOnChange={(e) => handleInput(e)}
									inputErrorMsg={branchDataError && branchDataError.name}
								/>
								<InputText
									inputValue={branchData.cnpj}
									inputName="cnpj"
									inputShowInfo={true}
									inputPlaceholder={"CNPJ"}
									inputOnChange={handleInput}
									inputErrorMsg={branchDataError && branchDataError.cnpj}
								/>
							</S.InputBox>
						</S.DataCenterContainer>
					</S.DataContainer>
				</>
			) : (
				<>{errorPage ? <S.Empyt>Erro na página.</S.Empyt> : <S.Empyt>Carregando...</S.Empyt>}</>
			)}
		</S.Container>
	);
}
