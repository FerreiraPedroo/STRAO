import React, { useState, useRef, useLayoutEffect } from "react";

import * as S from "./styles.jsx";

// Exemplo
// const columns: [
// 		{ title: "status", htmlName: "status", minSize: 96, maxSize: 128, align: "center" },
// 		{ title: "nome", htmlName: "name", minSize: 96, maxSize: 128, align: "center" },
// 		{ title: "email", htmlName: "email", minSize: 96, maxSize: 128, align: "center" },
// 		{ title: "contrato", htmlName: "contract", minSize: 96, maxSize: 128, align: "center" },
// 	];

/**
 *
 */
export const PageList = ({
	listData,
	columns = [],
	setDataSelected,
	dataSelected,
	loading
}) => {
	const listRefHTML = useRef();
	const [headerInfo, setHeaderInfo] = useState([]);
	const [rowSelected, setRowSelected] = useState();
	const [rowHover, setRowHover] = useState();
	const [listChangeSize, setListChangeSize] = useState(false);

	function handleDataSelected(index) {
		setDataSelected(listData[index]);
		setRowSelected(index);
	}

	function handleRowHover(index) {
		setRowHover(index);
	}

	useLayoutEffect(() => {
		if (listRefHTML.current) {
			const rows = listRefHTML.current.children;

			const columnsInfo = columns;
			const columnsSize = [];

			for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
				const row = rows[rowIndex].children;

				for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {

					if (!columnsSize[columnIndex]) {
						columnsSize[columnIndex] = row[columnIndex].offsetWidth;
					}

					if (columnsSize[columnIndex] < row[columnIndex].offsetWidth) {
						columnsSize[columnIndex] = row[columnIndex].offsetWidth;
					}
				}

				for (let i = 0; i < columnsInfo.length; i++) {
					columnsInfo[
						i
					].size = `${columnsInfo[i].minSize}px; flex: 1; max-width:${columnsInfo[i].maxSize}px; width:${columnsSize[i]}; text-align: ${columnsInfo[i].align};`;
				}
			}

			setListChangeSize((prevState) => !prevState);
			setHeaderInfo(columnsInfo);
		}
		if (!dataSelected) {
			setDataSelected(null)
			setRowSelected(null)
		}
	}, [listData]);


	return (
		<S.Container>
			<S.CenterContainer>
				<S.ListUserContainer ref={listRefHTML}>
					<S.ListUserHeaderBox>
						{listData &&
							listData.length != 0 &&
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
					{listData && !loading &&
						listData.map((data, index) => (
							<S.ListUserBox
								key={JSON.stringify(data)}
								reloadListSize={listChangeSize}
								onClick={() => handleDataSelected(index)}
								onMouseEnter={() => handleRowHover(index)}
								onMouseLeave={() => handleRowHover()}
							>
								{headerInfo.map((column) => (
									<S.UserText key={column.htmlName} w={column.size} data-hover={index == rowHover} data-selected={index == rowSelected}>
										{data[column.htmlName]}
									</S.UserText>
								))}
							</S.ListUserBox>
						))}
				</S.ListUserContainer>
			</S.CenterContainer>

			{listData.length && loading && <>Carregando...</>}
			{!listData && !loading && <>Sem registro...</>}
		</S.Container>
	);
};
