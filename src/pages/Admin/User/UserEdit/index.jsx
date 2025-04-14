import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginReset } from "services/store/features/actions/actions.js";
import { api } from "services/api.js";

import { ButtonIcon } from "component/Buttons/ButtonIcon/index.jsx";
import { InputText } from "component/Input/Text";
import { InputSelect } from "component/Input/Select";
import { PageTitle } from "component/container/PageTitle";

import * as S from "./styles.jsx";

export function AdminUserEdit() {
	const location = useLocation();

	const [loading, setLoading] = useState(true);
	const [notification, setNotification] = useState();

	const [userData, setUserData] = useState();
	const [departmentSelect, setDepartmentSelect] = useState("");

	async function changeUpdate(category, action, category_id) {
		const actionField = {
			add: "available",
			remove: "user",
			addReverse: "user",
			removeReverse: "available"
		};

		try {
			const response = await api(
				`/admin/user/${location.state.user._id}/${category}/${category_id}/${action}`,
				{ method: "PUT" }
			);

			if (response.codStatus == 201) {
				setUserData((prevState) => {
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
			} else if (response.codStatus == 401) {
				useDispatch(setLoginReset(true));
			} else {
				setNotification({ theme: "fail", message: response.message });
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

		userData.departmentsInfo.available.length &&
			userData.departmentsInfo.available.map((department) =>
				options.push({
					value: department._id,
					name: department.name,
					category: "option"
				})
			);

		return options;
	}

	function userDepartmentSectorsElement(departmentId) {
		return userData.sectorsInfo.user.reduce((prev, sector) => {
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
		return userData.sectorsInfo.available.reduce((prev, sector) => {
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
				const request = await api(`/admin/user/${location.state.user._id}`, { method: "GET" });

				setUserData(request.data);
			} catch (error) {}
			setLoading(false);
		};
		getUserInfo();
	}, []);

	return (
		<S.Container>
			<PageTitle title="Editar usuário" />
			{userData ? (
				<>
					<S.DataContainer>
						<S.HeaderContainer>
							<S.HeaderTitle>Dados do usuário</S.HeaderTitle>
						</S.HeaderContainer>

						<S.DataCenterContainer>
							<S.InputBox>
								<InputText
									inputValue={userData.userInfo.name}
									inputName="name"
									inputShowInfo={true}
									inputPlaceholder={"Nome"}
									disabled={true}
								/>
								<InputText
									inputValue={userData.userInfo.register ?? ""}
									inputName={"register"}
									inputShowInfo={true}
									inputPlaceholder={"Nº de registro"}
									disabled={true}
								/>
							</S.InputBox>
							<S.InputBox>
								<InputText
									inputValue={userData.userInfo.email}
									inputName="email"
									inputShowInfo={true}
									inputPlaceholder={"Email"}
									disabled={true}
								/>
								<InputText
									inputValue={userData.userInfo.birth_date ?? ""}
									inputName="birthDate"
									inputShowInfo={true}
									inputPlaceholder={"Data de nascimento"}
									disabled={true}
								/>
							</S.InputBox>
						</S.DataCenterContainer>
					</S.DataContainer>

					<S.DataContainer>
						<S.HeaderContainer>
							<S.HeaderTitle>Departamentos</S.HeaderTitle>
						</S.HeaderContainer>

						<S.InputBox>
							<InputSelect
								selectValue={departmentSelect}
								width="256px"
								selectShowInfo={false}
								selectPlaceholder={""}
								selectOnChange={(e) => setDepartmentSelect(e.target.value)}
								options={departmentSelectOptions()}
							/>
							<ButtonIcon
								typeStyle="correct"
								disabled={!departmentSelect}
								onClick={() => changeUpdate("department", "add", departmentSelect)}
							/>
						</S.InputBox>

						<S.DataCenterContainer>
							<S.HeaderTitle>Departamentos associados ao usuário</S.HeaderTitle>
							{userData.departmentsInfo.user.length ? (
								userData.departmentsInfo.user.map((department) => (
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
						</S.DataCenterContainer>
					</S.DataContainer>

					{/* <S.DataContainer>
						<S.HeaderContainer>
							<S.HeaderTitle>Contratos</S.HeaderTitle>
						</S.HeaderContainer>

						<S.DataCenterContainer>
							{userData.contractsInfo ? (
								<S.DataBox>
									<S.DepartmentSectorsBox>
										<S.SectorAdded>
											<S.SectorHead>Contratos adicionados</S.SectorHead>
											{userData.contractInfo.user.map((contrato) => (
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
											{userData.contractsInfo.available.map((contrato) => (
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
		</S.Container>
	);
}
