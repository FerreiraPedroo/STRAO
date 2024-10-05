import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../../services/api.js";

import { ButtonIcon } from "../../../component/ButtonIcon/index.jsx";
import { InputText } from "../../../component/Input/Text";
import { InputSelect } from "../../../component/Input/Select";
import { PageTitle } from "../../../component/container/PageTitle";
import { PageAction } from "../../../component/container/PageAction";

import * as S from "./styles.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";
import { helperHandleChangeInput } from "helper/form/handleChangeInput.js";

export function AdminCompanyEdit() {
	const location = useLocation();

	const [loading, setLoading] = useState(true);
	const [notification, setNotification] = useState();
	const [actionsPageData, setActionsPageData] = useState([]);

	const [companyData, setCompanyData] = useState();
	const [companyUpdate, setCompanyUpdate] = useState();

	function handleHiddenShowAction(status) {
		if (actionsPageData.length) {
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

	async function changeUpdate(category, action, category_id) {
		const dataOptions = {
			status: {
				add: "active",
				remove: "inactive",
				activeSubTitle: <div style={{ color: "#00dd00" }}>Ativo</div>,
				inactiveSubTitle: <div style={{ color: "#dd0000" }}>Inativo</div>
			}
		};

		const actionField = {
			add: "available",
			remove: "user",
			addReverse: "user",
			removeReverse: "available"
		};

		try {
			const request = await api.put(
				`admin/user/${location.state.user._id}/${category}/${category_id}/${action}`
			);

			if (request.data.codStatus === 200) {
				setCompanyData((prevState) => {
					const actualState = { ...prevState };

					const sectorToMove = actualState[category + "sInfo"][actionField[action]].find(
						(sector) => {
							return sector._id === category_id;
						}
					);

					if (sectorToMove) {
						actualState[category + "sInfo"][actionField[action]] = actualState[category + "sInfo"][
							actionField[action]
						].filter((sector) => sector._id !== category_id);

						actualState[category + "sInfo"][actionField[action + "Reverse"]].push(sectorToMove);
					}

					return actualState;
				});
			}
		} catch (error) {
			if (error.response) {
				setNotification("Erro ao atualizar os dados do usuário, tente novamente.");
			}
		}
	}

	function departmentSelectOptions() {
		const options = [];
		options.push({
			value: "",
			name: "Selecione o departamento",
			category: "option"
		});

		companyData.departmentsInfo.available.length &&
			companyData.departmentsInfo.available.map((department) =>
				options.push({
					value: department._id,
					name: department.name,
					category: "option"
				})
			);

		return options;
	}

	function userDepartmentSectorsElement(departmentId) {
		return companyData.sectorsInfo.user.reduce((prev, sector) => {
			sector.department_id === departmentId &&
				prev.push(
					<S.Sector key={sector._id}>
						<S.SectorName>{sector.name} </S.SectorName>
						<ButtonIcon
							typeStyle="remove"
							onClick={() => changeUpdate("sector", "remove", sector._id)}
						/>
					</S.Sector>
				);
			return prev;
		}, []);
	}

	function availableDepartmentSectorsElement(departmentId) {
		return companyData.sectorsInfo.available.reduce((prev, sector) => {
			sector.department_id === departmentId &&
				prev.push(
					<S.Sector key={sector._id}>
						<S.SectorName>{sector.name} </S.SectorName>
						<ButtonIcon typeStyle="add" onClick={() => changeUpdate("sector", "add", sector._id)} />
					</S.Sector>
				);
			return prev;
		}, []);
	}

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const request = await api.get(`admin/company/${location.state._id}`);
				handleHiddenShowAction(request.data.data);
				setCompanyData(request.data.data);
			} catch (error) {}
			setLoading(false);
		};
		getUserInfo();
	}, []);
	console.log({ companyData });
	return (
		<PageContainer>
			<PageTitle
				title="Editar companhia"
				subTitle="gerencie os dados da companhia."
				backUrl={"/admin/companies"}
				loading={loading}
			/>
			{companyData ? (
				<>
					{/* <PageAction actionsData={actionsPageData} dataSelected={location.state._id} /> */}

					<S.CenterContainer>
						<S.HeaderCenter>
							<S.HeaderTitle>Dados da companhia</S.HeaderTitle>
						</S.HeaderCenter>

						<S.PrincipalData>
							<InputText
								inputValue={companyData.name}
								inputName="name"
								inputShowInfo={true}
								inputPlaceholder={"Nome"}
								disabled={false}
								readOnly={true}
							/>
							<InputText
								inputValue={companyData.status}
								inputName="status"
								inputShowInfo={true}
								inputPlaceholder={"Status"}
								disabled={false}
								readOnly={true}
								inputOnChange={(e) => {
									helperHandleChangeInput(e, setCompanyUpdate, "add", "text");
								}}
							/>
						</S.PrincipalData>
					</S.CenterContainer>

					<S.DataContainer>
					<S.DataHeadContainer>
						<S.HeaderTitle>Departamentos</S.HeaderTitle>
						<S.InputBox>
							<InputSelect
								// selectValue={departmentSelect}
								width="256px"
								selectOnChange={(e) => setDepartmentSelect(e.target.value)}
								options={departmentSelectOptions()}
							/>
							<ButtonIcon
								typeStyle="correct"
								// disable={!departmentSelect}
								onClick={() => changeUpdate("department", "add", departmentSelect)}
							/>
						</S.InputBox>
					</S.DataHeadContainer>

					{/* <S.DataCenterContainer>
						<S.HeaderTitle>Departamentos associados ao usuário</S.HeaderTitle>
						{companyData.departmentsInfo.user.length ? (
							companyData.departmentsInfo.user.map((department) => (
								<S.DataBox key={department._id}>
									<S.DataTitleBox>
										<S.DataTitle>{department.name}</S.DataTitle>
										<ButtonIcon
											typeStyle="remove"
											onClick={() => changeUpdate("department", "remove", department._id)}
										/>
									</S.DataTitleBox>

									<S.DepartmentSectorsBox>
										<S.SectorAdded>
											<S.SectorHead>Setores adicionados</S.SectorHead>
											{userDepartmentSectorsElement(department._id)}
										</S.SectorAdded>
										<S.SectorNotAdded>
											<S.SectorHead>Setores não adicionado</S.SectorHead>
											{availableDepartmentSectorsElement(department._id)}
										</S.SectorNotAdded>
									</S.DepartmentSectorsBox>
								</S.DataBox>
							))
						) : (
							<S.Empyt>Vazio</S.Empyt>
						)}
					</S.DataCenterContainer> */}

				</S.DataContainer>

					{/*<S.DataContainer>
						<S.DataHeadContainer>
							<S.HeaderTitle>Contratos</S.HeaderTitle>
						</S.DataHeadContainer>
						<S.DataCenterContainer>
							{companyData.contractsInfo ? (
								<S.DataBox>
									<S.DepartmentSectorsBox>
										<S.SectorAdded>
											<S.SectorHead>Contratos adicionados</S.SectorHead>
											{companyData.contractInfo.user.map((contrato) => (
												<S.Sector key={contrato._id}>
													<S.SectorName>{contrato.name} </S.SectorName>
													<ButtonIcon
														typeStyle="remove"
														onClick={() => changeUpdate("contract", "remove", contrato._id)}
													/>
												</S.Sector>
											))}
										</S.SectorAdded>
										<S.SectorNotAdded>
											<S.SectorHead>Contratos não adicionado</S.SectorHead>
											{companyData.contractsInfo.available.map((contrato) => (
												<S.Sector key={contrato._id}>
													<S.SectorName>{contrato.name} </S.SectorName>
													<ButtonIcon
														typeStyle="add"
														onClick={() => changeUpdate("contract", "add", contrato._id)}
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
					</S.DataContainer> */}
				</>
			) : (
				<>Carregando...</>
			)}
		</PageContainer>
	);
}
