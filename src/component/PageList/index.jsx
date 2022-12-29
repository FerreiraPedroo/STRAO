import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../component/Button";
import { Input } from "../../component/Input/Text";

import * as S from "./styles.jsx";

// exemplo
// const [userListData] = useState({
//     columns: [
//         { title: "status", htmlName: "status", size: 0 },
//         { title: "nome", htmlName: "name", size: 0 },
//         { title: "email", htmlName: "email", size: 0 },
//         { title: "contrato", htmlName: "contract", size: 0 }
//     ],
//     actions: [
//         {
//             title: "Remover",
//             typeStyle: "remove",
//             action: () => {}
//         },
//         {
//             title: "Editar",
//             typeStyle: "edit",
//             action: (data) =>
//                 navigate("/admin/user/edit", {
//                     state: { email: data.email }
//                 })
//         }
//     ],
//     filters: [
//         {
//             type: "text",
//             htmlName: "user",
//             htmlPlaceholder: "Usuário"
//         },
//         {
//             type: "list",
//             htmlName: "contract",
//             htmlPlaceholder: "Contrato"
//         },
//         {
//             type: "list",
//             htmlName: "status",
//             htmlPlaceholder: "",
//             defaultOption: 0,
//             options: ["ativo", "inativo"]
//         }
//     ]
// });

/**
 
 * @param title - String - Titulo principal da página.
 * @param subTitle - String - Sub titulo da página.
 * @param getDataAPI - Função - API para obter os dados que serão exibidos na lista.
 * @param column - Array `[{ title, htmlName ,size }]` - Nome das colunas que serão exibidas na lista na ordem que estiver no array, os `htmlName` devem ser o mesmo do retorno da api.
 * @param actions - Array `[{ title, typeStyle, action(data)}] `
 * @param filters - Array `[{ type, htmlName, htmlPlaceholder }]` - Filtros que serão exibidos.
 * @returns
 */
export const PageList = ({
	title,
	subTitle,
	getListDataAPI,
	columns = [],
	actions = [],
	filters = []
}) => {
	const navigate = useNavigate();
	const [listData, setListData] = useState([]);
	const listRefHTML = useRef();
	const [headerInfo, setHeaderInfo] = useState();
	const [listChangeSize, setListChangeSize] = useState(false);

	const [rowSelected, setRowSelected] = useState();
	const [filterChangeListData, setFilterChangeListData] = useState(false);
	const [filterState, setFilterState] = useState(
		(() => {
			return filters.reduce((acc, cur) => {
				return { ...acc, [cur.htmlName]: "" };
			}, {});
		})()
	);

	function changeFilter(event) {
		setFilterState(
			(prev) => (prev = { ...prev, [event.target.name]: event.target.value })
		);
	}

	function getNewFilteredListData() {
		setFilterChangeListData((prev) => !prev);
	}

	useEffect(() => {
		const getData = async () => {
			const data = await getListDataAPI(filterState);
			setListData(data);
		};
		getData();
	}, [filterChangeListData]);

	useLayoutEffect(() => {
		if (listRefHTML.current) {
			const rows = listRefHTML.current.children;
			const columnsInfo = columns;

			for (let i = 0; i < rows.length; i++) {
				const column = rows[i].children;
				for (let r = 0; r < column.length; r++) {
					if (!columnsInfo[r].size) {
						columnsInfo[r].size = column[r].offsetWidth;
					}
					if (columnsInfo[r].size < column[r].offsetWidth) {
						columnsInfo[r].size = column[r].offsetWidth;
					}
				}
			}
			setListChangeSize((prevState) => !prevState);
			setHeaderInfo(columnsInfo);
		}
	}, [listData]);

	return (
		<S.Container>
			<S.PageHeader>
				<Button typeStyle="back" value="<" onClick={() => navigate(-1)}>
					Voltar
				</Button>
				<S.PageTitle>
					{title}
					<S.PageSubTitle>{subTitle}</S.PageSubTitle>
				</S.PageTitle>
			</S.PageHeader>

			<S.CenterContainer>
				<S.FilterContainer>
					<S.FilterTitle>Filtros</S.FilterTitle>
					<S.FilterInputBox>
						{filters.map((filter) => (
							<Input
								key={filter.htmlName}
								filterTitle={filter.title}
								filterName={filter.htmlName}
								filterValue={filterState[filter.htmlName]}
								filterOnChange={changeFilter}
								filterPlaceholder={filter.htmlPlaceholder}
							/>
						))}
						<Button typeStyle="find" onClick={getNewFilteredListData} />
					</S.FilterInputBox>
				</S.FilterContainer>

				<S.ActionsContainer>
					<S.ActionsTitle>Ações</S.ActionsTitle>
					{actions.map((action) => (
						<S.ActionButtonBox key={action.title}>
							<Button
								typeStyle={action.typeStyle}
								title={action.title}
								onClick={() => action.action(rowSelected)}
								disable={!rowSelected}
							/>
							{action.title}
						</S.ActionButtonBox>
					))}
				</S.ActionsContainer>

				<S.ListUserContainer ref={listRefHTML}>
					<S.ListUserHeaderBox>
						{listData.length != 0 &&
							headerInfo.map((header) => (
								<S.ListHeadText
									key={header.htmlName}
									id={header.htmlName}
									w={header.size}
								>
									{header.title}
								</S.ListHeadText>
							))}
					</S.ListUserHeaderBox>
					{listData.length == 0 && <>Carregando...</>}
					{listData.map((data) => (
						<S.ListUserBox
							key={JSON.stringify(data)}
							reloadListSize={listChangeSize}
							data-selected={data == rowSelected}
							onClick={() => setRowSelected(data)}
						>
							{headerInfo.map((column) => (
								<S.UserText key={column.htmlName} w={column.size}>
									{data[column.htmlName]}
								</S.UserText>
							))}
						</S.ListUserBox>
					))}
				</S.ListUserContainer>
			</S.CenterContainer>
		</S.Container>
	);
};
