import React, { useState, useLayoutEffect, useEffect } from "react";

import * as S from "./styles.jsx";

// Exemplo
// const columns: [
// 		{ title: "nome", htmlName: "name", size: 96, minSize: 96, maxSize: 128, align: "center", overflow: "no/yes", transform: (data) => return data },
// 		{ title: "status", htmlName: "status", size: 96, minSize: 96, maxSize: 128, align: "center" },
// 		{ title: "email", htmlName: "email", size: 96, minSize: 96, maxSize: 128, align: "center" },
// 		{ title: "contrato", htmlName: "contract", size: 96, minSize: 96, maxSize: 128, align: "center" },
// 	];

/**
 *
 */
export const PageList = ({
	listData,
	columns = [],
	setDataSelected,
	dataSelected,
	loading,
	theme = "normal"
}) => {
	const [pageListData, setPageListData] = useState(null);

	const [headerInfo, setHeaderInfo] = useState(columns);
	const [rowSelected, setRowSelected] = useState();
	const [rowHover, setRowHover] = useState();

	function handleDataSelected(index) {
		setDataSelected(listData[index]);
		setRowSelected(index);
	}

	function handleRowHover(index) {
		setRowHover(index);
	}

	useEffect(() => {
		const data = listData.map((item) => {
			const newItem = { ...item };
			columns.forEach((column) => {
				if (column.transform) {
					newItem[column.htmlName] = column.transform(newItem);
				}
			});

			return newItem;
		});

		setPageListData(data);
	}, [listData]);
	return (
		<S.Container theme={theme}>
			<S.CenterContainer>
				<S.RowListContainer>
					<S.RowHeaderBox>
						{pageListData &&
							pageListData.length != 0 &&
							headerInfo.map((header) => (
								<S.RowHeadText
									key={header.htmlName}
									id={header.htmlName}
									minWidth={header.minSize}
									maxWidth={header.maxSize}
									align={header.align}
									width={header.size}
								>
									{header.name}
								</S.RowHeadText>
							))}
					</S.RowHeaderBox>
					{listData &&
						!loading &&
						pageListData.map((data, index) => (
							<S.RowBox
								key={JSON.stringify(data)}
								onClick={() => handleDataSelected(index)}
								onMouseEnter={() => handleRowHover(index)}
								onMouseLeave={() => handleRowHover()}
							>
								{headerInfo.map((column) => (
									<S.RowText
										key={column.htmlName}
										minWidth={column.minSize}
										maxWidth={column.maxSize}
										width={column.size}
										align={column.align}
										data-hover={index == rowHover}
										data-selected={index == rowSelected}
									>
										{data[column.htmlName] instanceof Object
											? data[column.htmlName].name
											: data[column.htmlName]}
									</S.RowText>
								))}
							</S.RowBox>
						))}
				</S.RowListContainer>
			</S.CenterContainer>

			{loading ? <S.LoadingBox>Carregando...</S.LoadingBox> : null}
			{!listData.length && !loading ? <S.LoadingBox>Sem registro</S.LoadingBox> : null}
		</S.Container>
	);
};
