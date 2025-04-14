import React, { useState, useEffect } from "react";

import * as S from "./styles.jsx";

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
 * @example
 * [{
 *		title: "nome",
 *		htmlName: "name",
 *		size: 96,
 *		minSize: 96,
 *		maxSize: 128,
 *		align: "center",
 *		overflow: "no/yes",
 *		transform: (data) => data
 *	},
 *	{
 *		title: "status",
 *		htmlName: "status",
 *		size: 96,
 *		minSize: 96,
 *		maxSize: 128,
 *		align: "center"
 *	}]
 *
 */
export const PageList = ({ listData, columns, setDataSelected, dataSelected, loading }) => {
	const [pageListData, setPageListData] = useState(null);
	const [headerInfo, setHeaderInfo] = useState(columns);
	const [rowHover, setRowHover] = useState();

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
		<S.ComponentContainer>
			{!loading && listData && listData.length ? (
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

					{pageListData &&
						pageListData.map((data, index) => (
							<S.RowBox
								key={data._id}
								onClick={() => setDataSelected(listData[index])}
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
										data-selected={data.name == (dataSelected ? dataSelected.name : "")}
										overflow="yes"
									>
										{data[column.htmlName] instanceof Object
											? data[column.htmlName].name
											: data[column.htmlName]}
									</S.RowText>
								))}
							</S.RowBox>
						))}
				</S.RowListContainer>
			) : null}

			{loading && !listData.length && (
				<S.RowListContainer>
					<S.LoadingBox>Carregando...</S.LoadingBox>
				</S.RowListContainer>
			)}
			{!loading && !listData.length && (
				<S.RowListContainer>
					<S.LoadingBox>Sem registro</S.LoadingBox>
				</S.RowListContainer>
			)}
		</S.ComponentContainer>
	);
};
