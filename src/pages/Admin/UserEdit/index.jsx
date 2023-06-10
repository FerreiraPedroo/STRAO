import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../../services/api.js";

import { Button } from "../../../component/Button";
import { InputText } from "../../../component/Input/Text/index";
import { InputSelect } from "../../../component/Input/Select/index";
import { PageTitle } from "../../../component/PageTitle/index";
import { PageAction } from "../../../component/PageAction/index.jsx";

import * as S from "./styles.jsx";

export const AdminUserEdit = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [notification, setNotification] = useState();

	const [loading, setLoading] = useState(true);
	const [userData, setUserData] = useState();

	const [contractSelect, setContractSelect] = useState("");
	const [departmentSelect, setDepartmentSelect] = useState("");
	const [departmentSectionSelect, setDepartmentSectionSelect] = useState("");

	const [actionsPageData, setActionsPageData] = useState([
		{
			title: "Desativar",
			typeStyle: "hidden",
			show: false,
			action: (userId) => {
				changeUpdate("status", "remove", userId);
			}
		},
		{
			title: "Ativar",
			typeStyle: "show",
			show: false,
			action: (userId) => {
				changeUpdate("status", "add", userId);
			}
		}
	]);

	const [dataOptions] = useState({
		contract: {
			add: "allContracts",
			remove: "userContracts",
			addReverse: "userContracts",
			removeReverse: "allContracts",
			selectCategory: () => setContractSelect("")
		},
		department: {
			add: "allDepartments",
			remove: "userDepartments",
			addReverse: "userDepartments",
			removeReverse: "allDepartments",
			selectCategory: () => setDepartmentSelect("")
		},
		departmentSectors: {
			add: "allDepartmentSectors",
			remove: "userDepartmentSectors",
			addReverse: "userDepartmentSectors",
			removeReverse: "allDepartmentSectors",
			selectCategory: () => setDepartmentSectionSelect("")
		},
		status: {
			add: "active",
			remove: "inactive",
			activeSubTitle: <div style={{ color: "#00dd00" }}>Ativo</div>,
			inactiveSubTitle: <div style={{ color: "#dd0000" }}>Inativo</div>
		}
	});

	const changeUpdate = async (_type, _action, _id) => {
		try {
			const { data } = await api.put("/admin/user/data/update", {
				data: {
					type: _type,
					action: _action,
					actionId: _id,
					userId: location.state.userId
				}
			});
			if (data.codStatus === 200) {
				if (_type === "status") {
					console.log("STATUS:", dataOptions[_type][_action]);
					handleHiddenShowAction(dataOptions[_type][_action]);
					setUserData((prev) => {
						const prevData = { ...prev, status: dataOptions[_type][_action] };
						return prevData;
					});
					return;
				}

				setUserData((prev) => {
					const actual = { ...prev };
					const categoryData = actual[dataOptions[_type][_action]].find(
						(value) => value.id === _id
					);

					if (categoryData) {
						actual[dataOptions[_type][_action]] = actual[
							dataOptions[_type][_action]
						].filter((value) => value.id !== _id);

						actual[dataOptions[_type][_action + "Reverse"]].push(categoryData);
						dataOptions[_type].selectCategory();
					}

					return actual;
				});
			}
		} catch (error) {
			if (!error.response.status && !error.response.data) {
				error.response.data = { message: error.message };
			}
			if (error.response.data.codStatus === 200) {
				setNotification(error.response.data);
			}
		}
	};

	function handleHiddenShowAction(status) {
		if (actionsPageData) {
			setActionsPageData((prev) => {
				return prev.map((action) => {
					if (status == "active" && action.title == "Ativar") {
						action.show = false;
					}
					if (status == "active" && action.title == "Desativar") {
						action.show = true;
					}
					if (status == "inactive" && action.title == "Desativar") {
						action.show = false;
					}
					if (status == "inactive" && action.title == "Ativar") {
						action.show = true;
					}
					return action;
				});
			});
		}
	}

	function departmentSectionOptions() {
		const options = []
		options.push({ value: "", title: "Selecione a ação", type: "option" })

		userData.allDepartmentSectors &&
			userData.userDepartments &&
			userData.userDepartments.map((department) => (
				userData.allDepartmentSectors.map(
					(action, index) => {

						index === 0 &&
							options.push({ value: `| -${department.title}`, title: `| -${department.title}`, type: "optionGroup" })

						action.department_id === department.id &&
							options.push({ value: action.id, title: action.title, type: "option" })

					})
			))

		return options;
	}

	function departmentOptions() {
		const options = []
		options.push({ value: "", title: "Selecione o departamento", type: "option" })

		userData.allDepartments &&
			userData.allDepartments.map((department) =>
				options.push({ value: department.id, title: department.title, type: "option" })
			)

		return options;
	}

	function contractOptions() {
		const options = []
		options.push({ value: "", title: "Selecione o contrato", type: "option" })

		userData.allContracts &&
			userData.allContracts.map((contract) =>
				options.push({ value: contract.id, title: contract.title, type: "option" })
			)

		return options;
	}

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const { data } = await api.get("admin/user/data", {
					params: { userId: location.state.userId }
				});
				handleHiddenShowAction(data.status);
				setUserData(data);
			} catch (error) { }
			setLoading(false);
		};
		getUserInfo();
	}, []);

	return (
		<S.Container>
			<PageTitle
				title="Editar usuário"
				subTitle="adicione e remova permissões do usuário."
				loading={loading}
			/>
			{userData ? (
				<>
					<PageAction
						actionsData={actionsPageData}
						dataSelected={location.state.userId}
					/>

					<S.CenterContainer>
						<S.HeaderCenter>
							<S.HeaderTitle>Dados do usuário</S.HeaderTitle>
						</S.HeaderCenter>

						<S.PrincipalData>
							<InputText
								inputValue={userData.register}
								inputName={"register"}
								inputShowInfo={true}
								inputPlaceholder={"Nº de registro"}
								disabled={true}
							/>
							<InputText
								inputValue={userData.email}
								inputName="email"
								inputShowInfo={true}
								inputPlaceholder={"Email"}
								disabled={true}
							/>
							<InputText
								inputValue={userData.name}
								inputName="name"
								inputShowInfo={true}
								inputPlaceholder={"Nome"}
								disabled={true}
							/>
							<InputText
								inputValue={userData.birthDate}
								inputName="borthDate"
								disabled={true}
								inputShowInfo={true}
								inputPlaceholder={"Data de nascimento"}
							/>
						</S.PrincipalData>
					</S.CenterContainer>

					<S.CategoryContainer>
						<S.LeftContainer>
							<S.HeaderTitle>Contratos</S.HeaderTitle>
							<S.InputBox>
								<InputSelect
									selectValue={contractSelect}
									selectOnChange={(e) => setContractSelect(e.target.value)}
									options={contractOptions()}
								/>
								<Button
									typeStyle="correct"
									disable={!contractSelect}
									onClick={() =>
										changeUpdate("contract", "add", contractSelect)
									}
								/>
							</S.InputBox>
						</S.LeftContainer>

						<S.RightContainer>
							<S.HeaderTitle>Contratos associados</S.HeaderTitle>
							{userData.userContracts &&
								userData.userContracts.map((contract) => (
									<S.InputBox key={contract.id}>
										<InputText
											inputValue={contract.title}
											disabled={true}
											readOnly={true}
										/>
										<Button
											typeStyle="remove"
											onClick={() =>
												changeUpdate("contract", "remove", contract.id)
											}
										/>
									</S.InputBox>
								))}
						</S.RightContainer>
					</S.CategoryContainer>

					<S.DepartmentContainer>
						<S.SubDepartmentContainer>
							<S.LeftContainer>
								<S.HeaderTitle>Departamentos</S.HeaderTitle>
								<S.InputBox>
									<InputSelect
										selectValue={departmentSelect}
										selectOnChange={(e) => setDepartmentSelect(e.target.value)}
										options={departmentOptions()}
									/>

									<Button
										typeStyle="correct"
										disable={!departmentSelect}
										onClick={() =>
											changeUpdate("department", "add", departmentSelect)
										}
									/>
								</S.InputBox>
							</S.LeftContainer>

							<S.RightContainer>
								<S.HeaderTitle>Departamentos associados</S.HeaderTitle>
								{userData.userDepartments &&
									userData.userDepartments.map((department) => (
										<S.InputBox key={department.id}>
											<InputText
												inputValue={department.title}
												inputName="department"
												disabled={true}
												readOnly={true}
											/>
											<Button
												typeStyle="remove"
												onClick={() =>
													changeUpdate("department", "remove", department.id)
												}
											/>
										</S.InputBox>
									))}
							</S.RightContainer>
						</S.SubDepartmentContainer>

						<S.SubDepartmentActionsContainer>
							<S.LeftContainer>
								<S.HeaderTitle>Setores dos departamentos</S.HeaderTitle>
								<S.InputBox>
									<InputSelect
										selectValue={departmentSectionSelect}
										selectOnChange={(e) =>
											setDepartmentSectionSelect(e.target.value)
										}
										options={departmentSectionOptions()}
									>
									</InputSelect>

									<Button
										typeStyle="correct"
										disable={!departmentSectionSelect}
										onClick={() =>
											changeUpdate(
												"departmentSectors",
												"add",
												departmentSectionSelect
											)
										}
									/>
								</S.InputBox>
							</S.LeftContainer>

							<S.RightContainer>
								<S.HeaderTitle>Ações associadas</S.HeaderTitle>
								{userData.userDepartmentSectors &&
									userData.userDepartments &&
									userData.userDepartments.map((department) => (
										<div key={department.title}>
											<S.DepartmentAction>
												{department.title}
											</S.DepartmentAction>

											{userData.userDepartmentSectors.map((action, index) => (
												action.department_id === department.id && (
													<S.InputBox key={action.id}>
														<InputText
															inputValue={action.title}
															disabled={true}
															readOnly={true}
														/>
														<Button
															typeStyle="remove"
															onClick={() => changeUpdate("departmentSectors", "remove", action.id)}
														/>
													</S.InputBox>
												)

											))}
										</div>
									))
								}
							</S.RightContainer>
						</S.SubDepartmentActionsContainer>
					</S.DepartmentContainer>
				</>
			) : (
				<>Carregando...</>
			)}
		</S.Container>
	);
};
