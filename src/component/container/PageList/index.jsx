import React, { useState, useEffect } from "react";

import * as S from "./styles.jsx";

import { BlockInfoContainer } from "modules/Supply/components/BoxInfo/styles";

// Exemplo
const columns = [
	{
		title: "nome",
		htmlName: "name",
		size: 96,
		minSize: 96,
		maxSize: 128,
		align: "center",
		overflow: "no/yes",
		transform: (data) => data
	},
	{ title: "status", htmlName: "status", size: 96, minSize: 96, maxSize: 128, align: "center" }
];

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
		<BlockInfoContainer>
			{loading ? (
				<S.LoadingBox>Carregando...</S.LoadingBox>
			) : listData.length ? (
				<S.RowListContainer>
					<S.RowHeaderBox>
						{headerInfo.map((header) => (
							<S.RowHeadText
								key={header.htmlName}
								id={header.htmlName}
								minWidth={header.minSize}
								maxWidth={header.maxSize}
								align={header.align}
								width={header.size}
							>
								{header.title}
							</S.RowHeadText>
						))}
					</S.RowHeaderBox>

					{pageListData.map((data, index) => (
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
			) : (
				<S.LoadingBox>Sem registro</S.LoadingBox>
			)}
		</BlockInfoContainer>
	);
};
