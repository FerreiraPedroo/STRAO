import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "../../../services/api";

import { Button } from "../../../component/Button";
import { PageTitle } from "../../../component/container/PageTitle";
import { DocumentModal } from "./AddDocumentModal/index";

import * as S from "./styles";

export const HumanResourcesEmployeeSheetEdit = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dataInfo = useSelector((state) => state.appData.dataInfo);

	const [loadingStatus, setLoadingStatus] = useState(true);
	const [sheetData, setSheetData] = useState(null);
	const [sheetDocuments, setSheetDocuments] = useState(null);
	const [documentModalShow, setDocumentModalShow] = useState(true);

	async function addDocument(documentInfo) {
		setLoadingStatus(true);

		const data = {};

		try {
			const { data } = await api.post("/rh/employee/sheet/add-document", {
				data
			});

			setSheetDocuments(data);
			setLoadingStatus(false);
		} catch (error) {
			console.log("ERROR:", error);
			setLoadingStatus(false);
		}
	}

	useEffect(() => {
		setLoadingStatus(true);
		const filters = {
			sheet_id: location.state.employee.sheet_id,
			employee_id: location.state.employee.employee_id
		};

		const findSheetData = async () => {
			try {
				const { data } = await api.get("/rh/employee/sheet/edit", {
					params: filters
				});
				setSheetDocuments(data.documentsFile);
				setSheetData(data);
				setLoadingStatus(false);
			} catch (error) {
				console.log("ERROR: ", error);
				setLoadingStatus(false);
			}
		};

		findSheetData();
	}, []);

	return (
		<S.Container>
			<PageTitle title="Edição de folha de ponto" />

			{documentModalShow ? <DocumentModal onClick={() => setDocumentModalShow(false)} /> : null}

			<S.PageUserBox>
				<S.PageTitle>
					{location.state.employee.employee_fullName.toUpperCase()}
				</S.PageTitle>
				<S.PageSubTitle>
					{"Identificação: "} {location.state.employee.wmployee_identification}
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
				<S.SheetDataBox>
					<S.DocumentBox>
						<Button
							typeStyle="add"
							onClick={() => setDocumentModalShow(true)}
						/>
					</S.DocumentBox>
				</S.SheetDataBox>
			</S.CenterContainer>

			{/* {loading ? <>Carregando...</> : null}
			{!listData.length && !loading ? <>Sem registro...</>: null} */}
		</S.Container>
	);
};
