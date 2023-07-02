import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "../../../services/api";

import { PageTitle } from "../../../component/PageTitle";

import * as S from "./styles";

export const HumanResourcesEmployeeSheetEdit = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dataInfo = useSelector((state) => state.appData.dataInfo);

	const [findStatus, setFindStatus] = useState(true);
	const [sheetsData, setSheetData] = useState();

	useEffect(() => {
		setFindStatus(true);
		const filters = {
			year: location.state.employee.year,
			month: location.state.employee.month,
			
		}
		const findSheetData = async () => {
			try {
				const { data } = await api.get("/rh/sheet/edit", {
					params: filters
				});

				setSheetData(data);
				setFindStatus(false);
			} catch (error) {
				console.log("ERROR: ", error);
				setFindStatus(false);
			}
		};

		findSheetData();
	}, []);

	return (
		<S.Container>
			<PageTitle title="Edição de folha de ponto" />

			<S.PageUserBox>
				<S.PageTitle>
					{location.state.employee.fullName.toUpperCase()}
				</S.PageTitle>
				<S.PageSubTitle>
					{"Identificação: "} {location.state.employee.identification}
					&nbsp;&nbsp; {" | "}&nbsp;&nbsp;
					{"Situação: "}&nbsp;
					<S.SubTitleSpan status={location.state.employee.employee_status}>
						{location.state.employee.employee_status}
					</S.SubTitleSpan>
				</S.PageSubTitle>
			</S.PageUserBox>

			<S.CenterContainer>
				<S.HeaderBox>
					<div>
						<S.Head> Folha de Ponto </S.Head>
					</div>
					<div>
						<S.HeadText> Ano </S.HeadText>
						<S.Text>{location.state.employee.year}</S.Text>
					</div>
					<div>
						<S.HeadText> Mês </S.HeadText>
						<S.Text>{location.state.employee.month}</S.Text>
					</div>
					<div>
						<S.HeadText> Envio </S.HeadText>
						<S.TextStatus>{location.state.employee.status}</S.TextStatus>
					</div>
				</S.HeaderBox>
				<S.SheetDataBox></S.SheetDataBox>
			</S.CenterContainer>

			{/* {loading ? <>Carregando...</> : null}
			{!listData.length && !loading ? <>Sem registro...</>: null} */}
		</S.Container>
	);
};
