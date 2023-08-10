import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../../services/api.js";

import { Button } from "../../../component/Button";
import { InputText } from "../../../component/Input/Text";
import { InputSelect } from "../../../component/Input/Select";
import { PageTitle } from "../../../component/container/PageTitle";
import { PageAction } from "../../../component/container/PageAction";

import * as S from "./styles.jsx";

export function AdminUserEdit() {
	const location = useLocation();

	const [loading, setLoading] = useState(true);
	const [notification, setNotification] = useState();
	const [actionsPageData, setActionsPageData] = useState([
		{
			name: "Desativar",
			typeStyle: "hidden",
			show: false,
			action: (userId) => {
				changeUpdate("status", "remove", userId);
			}
		},
		{
			name: "Ativar",
			typeStyle: "show",
			show: false,
			action: (userId) => {
				changeUpdate("status", "add", userId);
			}
		}
	]);

	const [userData, setUserData] = useState();
	const [departmentSelect, setDepartmentSelect] = useState("");
	console.log(userData)
	async function changeUpdate(type, action, action_id) {
		const dataOptions = {
			contract: {
				add: "all",
				remove: "user",
				addReverse: "user",
				removeReverse: "all",
				selectCategory: () => 'setContractSelect("")'
			},
			department: {
				add: "all",
				remove: "user",
				addReverse: "user",
				removeReverse: "all",
				selectCategory: () => setDepartmentSelect("")
			},
			department_sector: {
				path: "department",
				add: "all",
				remove: "user",
				addReverse: "user",
				removeReverse: "all",
				selectCategory: () => 'setDepartmentSectionSelect("")'
			},
			status: {
				add: "active",
				remove: "inactive",
				activeSubTitle: <div style={{ color: "#00dd00" }}>Ativo</div>,
				inactiveSubTitle: <div style={{ color: "#dd0000" }}>Inativo</div>
			}
		};

		try {
			const { data } = await api.put("/admin/user/data/update", {
				type: type,
				action: action,
				action_id: action_id,
				user_id: location.state.user._id
			});
			if (data.codStatus === 200) {
				if (type === "status") {
					console.log("STATUS:", dataOptions[type][action]);
					handleHiddenShowAction(dataOptions[type][action]);
					setUserData((prev) => {
						const prevData = { ...prev, status: dataOptions[type][action] };
						return prevData;
					});
					return;
				}

				setUserData((prev) => {
					const actual = { ...prev };

					if (type === "contract") {
						const contractToMove = actual.contracts[
							dataOptions[type][action]
						].find((value) => value._id === action_id);

						if (contractToMove) {
							actual.contracts[dataOptions[type][action]] = actual.contracts[
								dataOptions[type][action]
							].filter((value) => value._id !== action_id);

							actual.contracts[dataOptions[type][action + "Reverse"]].push(
								contractToMove
							);
						}
					}
					if (type === "department") {
						const departmentToMove = actual.departments[
							dataOptions[type][action]
						].find((value) => value._id === action_id);

						if (departmentToMove) {
							actual.departments[dataOptions[type][action]] =
								actual.departments[dataOptions[type][action]].filter(
									(value) => value._id !== action_id
								);

							actual.departments[dataOptions[type][action + "Reverse"]].push(
								departmentToMove
							);
						}
					}
					if (type === "department_sector") {
						actual.departments.user = actual.departments.user.map(
							(department) => {
								const sectionToMove = department.sectors[
									dataOptions[type][action]
								].find((sector) => {
									return sector._id === action_id;
								});

								if (sectionToMove) {
									department.sectors[dataOptions[type][action]] =
										department.sectors[dataOptions[type][action]].filter(
											(sector) => {
												return sector._id != action_id;
											}
										);

									department.sectors[
										dataOptions[type][action + "Reverse"]
									].push(sectionToMove);
									dataOptions[type].selectCategory();
								}
								return department;
							}
						);
					}

					return actual;
				});
			}
		} catch (error) {
			if (!error.response.status && !error.response.data) {
				error.response.data = { message: error.message };
			}
		}
	}

	function departmentSelectOptions() {
		const options = [];
		options.push({
			value: "",
			name: "Selecione o departamento",
			type: "option"
		});

		userData.departments.all.length &&
			userData.departments.all.map((department) =>
				options.push({
					value: department._id,
					name: department.name,
					type: "option"
				})
			);

		return options;
	}

	function handleHiddenShowAction(status) {
		if (actionsPageData) {
			setActionsPageData((prev) => {
				return prev.map((action) => {
					if (status == "active" && action.name == "Ativar") {
						action.show = false;
					}
					if (status == "active" && action.name == "Desativar") {
						action.show = true;
					}
					if (status == "inactive" && action.name == "Desativar") {
						action.show = false;
					}
					if (status == "inactive" && action.namw == "Ativar") {
						action.show = true;
					}
					return action;
				});
			});
		}
	}

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const { data } = await api.get("admin/user/data", {
					params: {
						user_id: location.state.user._id,
						branch: location.state.user.company_branch_selected
					}
				});
				handleHiddenShowAction(data.status);
				setUserData(data);
			} catch (error) {}
			setLoading(false);
		};
		getUserInfo();
	}, []);

	/**
	 * PODE COLOCAR UM PRE-SET PARA O ACESSO DE CADA USUÁRIO ADM/SUP/COOR
	 */

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
						dataSelected={location.state.user._id}
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

					<S.DataContainer>
						<S.DataHeadContainer>
							<S.HeaderTitle>Departamentos</S.HeaderTitle>
							<S.InputBox>
								<InputSelect
									selectValue={departmentSelect}
									width="256px"
									selectOnChange={(e) => setDepartmentSelect(e.target.value)}
									options={departmentSelectOptions()}
								/>
								<Button
									typeStyle="correct"
									disable={!departmentSelect}
									onClick={() =>
										changeUpdate("department", "add", departmentSelect)
									}
								/>
							</S.InputBox>
						</S.DataHeadContainer>

						<S.DataCenterContainer>
							<S.HeaderTitle>Departamentos associados ao usuário</S.HeaderTitle>
							{userData.departments.user.length ? (
								userData.departments.user.map((department) => (
									<S.DataBox key={department._id}>
										<S.DataTitleBox>
											<S.DataTitle>{department.name}</S.DataTitle>
											<Button
												typeStyle="remove"
												onClick={() =>
													changeUpdate("department", "remove", department._id)
												}
											/>
										</S.DataTitleBox>

										<S.DepartmentSectorsBox>
											<S.SectorAdded>
												<S.SectorHead>Setores adicionados</S.SectorHead>
												{department.sectors.user.map((sector) => (
													<S.Sector key={sector._id}>
														<S.SectorName>{sector.name} </S.SectorName>
														<Button
															typeStyle="remove"
															onClick={() =>
																changeUpdate(
																	"department_sector",
																	"remove",
																	sector._id
																)
															}
														/>
													</S.Sector>
												))}
											</S.SectorAdded>
											<S.SectorNotAdded>
												<S.SectorHead>Setores não adicionado</S.SectorHead>
												{department.sectors.all.map((sector) => (
													<S.Sector key={sector._id}>
														<S.SectorName>{sector.name} </S.SectorName>
														<Button
															typeStyle="add"
															onClick={() =>
																changeUpdate(
																	"department_sector",
																	"add",
																	sector._id
																)
															}
														/>
													</S.Sector>
												))}
											</S.SectorNotAdded>
										</S.DepartmentSectorsBox>
									</S.DataBox>
								))
							) : (
								<S.Empyt>Vazio</S.Empyt>
							)}
						</S.DataCenterContainer>
					</S.DataContainer>

					<S.DataContainer>
						<S.DataHeadContainer>
							<S.HeaderTitle>Contratos</S.HeaderTitle>
						</S.DataHeadContainer>
						<S.DataCenterContainer>
							{userData.contracts ? (
								<S.DataBox>
									<S.DepartmentSectorsBox>
										<S.SectorAdded>
											<S.SectorHead>Contratos adicionados</S.SectorHead>
											{userData.contracts.user.map((contrato) => (
												<S.Sector key={contrato._id}>
													<S.SectorName>{contrato.name} </S.SectorName>
													<Button
														typeStyle="remove"
														onClick={() =>
															changeUpdate("contract", "remove", contrato._id)
														}
													/>
												</S.Sector>
											))}
										</S.SectorAdded>
										<S.SectorNotAdded>
											<S.SectorHead>Contratos não adicionado</S.SectorHead>
											{userData.contracts.all.map((contrato) => (
												<S.Sector key={contrato._id}>
													<S.SectorName>{contrato.name} </S.SectorName>
													<Button
														typeStyle="add"
														onClick={() =>
															changeUpdate("contract", "add", contrato._id)
														}
													/>
												</S.Sector>
											))}
										</S.SectorNotAdded>
									</S.DepartmentSectorsBox>
								</S.DataBox>
							) : (
								<S.Empyt>Vazio</S.Empyt>
							)}
						</S.DataCenterContainer>
					</S.DataContainer>
				</>
			) : (
				<>Carregando...</>
			)}
		</S.Container>
	);
}
