import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../../services/api.js";

import { ButtonIcon } from "../../../component/ButtonIcon/index.jsx";
import { InputText } from "../../../component/Input/Text";
import { InputSelect } from "../../../component/Input/Select";
import { PageTitle } from "../../../component/container/PageTitle";
import { PageAction } from "../../../component/container/PageAction";

import * as S from "./styles.jsx";
import { PageContainer } from "component/container/PageContainer/styles.jsx";
import { helperHandleChangeInput } from "helper/form/helperHandleChangeInput.js";
import { helperHandleRequestReturn } from "helper/helperHandleRequestReturn.js";

export function AdminCompanyEdit() {
	const location = useLocation();

	const [loading, setLoading] = useState(true);
	const [notification, setNotification] = useState();
	const [actionsPageData, setActionsPageData] = useState([]);

	const [companyData, setCompanyData] = useState();
	const [companyUpdate, setCompanyUpdate] = useState();

	const [inputChanged, setInputChanged] = useState({});
	const handleInput = useCallback((event, setFormInput, action, type) => {
		helperHandleChangeInput({ event, setFormInput, action, type });
	});

	const departmentSelectOptions = useMemo(() => {
		const options = [];
		options.push({
			value: "",
			name: "Selecione o departamento",
			category: "option"
		});

		companyData &&
			companyData.departmentsInfo.notAssigned.map((department) =>
				options.push({
					value: department._id,
					name: department.name,
					category: "option"
				})
			);

		return options;
	}, [companyData]);

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
			add: "notAssigned",
			remove: "assigned",
			addReverse: "assigned",
			removeReverse: "notAssigned"
		};

		try {
			const request = await api.put(
				`admin/company/${location.state.user._id}/${category}/${category_id}/${action}`
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

	function assignedDepartmentSectorsElement(departmentId) {
		return (
			companyData &&
			companyData.sectorsInfo.assigned.reduce((prev, sector) => {
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
			}, [])
		);
	}

	function notAssignedDepartmentSectorsElement(departmentId) {
		return companyData.sectorsInfo.notAssigned.reduce((prev, sector) => {
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
				console.log(request.data.data);
				helperHandleRequestReturn(request)({ setData: setCompanyData, notification, location });
			} catch (error) {}
			setLoading(false);
		};
		getUserInfo();
	}, []);

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
							<S.HeaderTitle>Dados</S.HeaderTitle>
						</S.HeaderCenter>

						<S.PrincipalData>
							<InputText
								inputValue={companyData.companyInfo.name}
								inputName="name"
								inputShowInfo={true}
								inputPlaceholder={"Nome"}
								disabled={true}
								readOnly={true}
							/>
							<InputText
								inputValue={companyData.companyInfo.status}
								inputName="status"
								inputShowInfo={true}
								inputPlaceholder={"Status"}
								disabled={true}
								readOnly={true}
								inputOnChange={(e) => null}
							/>
							<InputText
								inputValue={companyData.companyInfo.cnpj}
								inputName="cnpj"
								inputShowInfo={true}
								inputPlaceholder={"CNPJ"}
								disabled={true}
								readOnly={true}
								inputOnChange={(e) => null}
							/>
						</S.PrincipalData>
					</S.CenterContainer>

					<S.DataContainer>
						<S.DataHeadContainer>
							<S.HeaderTitle>Departamentos </S.HeaderTitle>
							<S.InputBox>
								<InputSelect
									selectName="departmentSelect"
									selectValue={inputChanged.departmentSelect}
									width="256px"
									selectOnChange={(event) => handleInput(event, setInputChanged, "add", "text")}
									options={departmentSelectOptions}
								/>
								<ButtonIcon
									typeStyle="correct"
									disable={!inputChanged.departmentSelect}
									onClick={() => changeUpdate("department", "add", inputChanged.departmentSelect)}
								/>
							</S.InputBox>
						</S.DataHeadContainer>

						<S.DataCenterContainer>
							{companyData.departmentsInfo.assigned ? (
								companyData.departmentsInfo.assigned.map((department) => (
									<S.DataBox key={department._id}>
										<S.DataTitleBox>
											<S.DataTitle>{department.name}</S.DataTitle>
											<ButtonIcon
												typeStyle="remove"
												onClick={() => changeUpdate("department", "remove", department._id)}
											/>
										</S.DataTitleBox>

										<S.ListBox>
											<S.Assigned>
												<S.AssignedHead>Adicionado</S.AssignedHead>
												{assignedDepartmentSectorsElement(department._id)}
											</S.Assigned>
											<S.NotAssigned>
												<S.AssignedHead>Não adicionado</S.AssignedHead>
												{notAssignedDepartmentSectorsElement(department._id)}
											</S.NotAssigned>
										</S.ListBox>
									</S.DataBox>
								))
							) : (
								<S.Empyt>Vazio</S.Empyt>
							)}
						</S.DataCenterContainer>
					</S.DataContainer>

					<S.DataContainer>
						<S.DataHeadContainer>
							<S.HeaderTitle>Filiais</S.HeaderTitle>
						</S.DataHeadContainer>
						<S.DataCenterContainer>
							{companyData ? (
								<S.DataBox>
									{companyData.companyBranchesInfo.map((branch) => (
										<S.Sector key={branch._id}>
											<S.SectorName>{branch.name} </S.SectorName>
											<S.SectorName>CNPJ: {branch.cnpj} </S.SectorName>
											<ButtonIcon typeStyle="edit" onClick={() => null} />
										</S.Sector>
									))}
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
		</PageContainer>
	);
}
