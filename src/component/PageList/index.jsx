import React, { useState, useRef, useLayoutEffect } from "react";

import * as S from "./styles.jsx";

// exemplo
// const userListData = {
// 	columns: [
// 		{ title: "status", htmlName: "status", size: 0 },
// 		{ title: "nome", htmlName: "name", size: 0 },
// 		{ title: "email", htmlName: "email", size: 0 },
// 		{ title: "contrato", htmlName: "contract", size: 0 }
// 	]
// };

/**
 *
 */
export const PageList = ({ listData, columns = [], getDataSelected, loading = false }) => {
	const listRefHTML = useRef();
	const [headerInfo, setHeaderInfo] = useState([]);
	const [dataSelected, setDataSelected] = useState();
	const [listChangeSize, setListChangeSize] = useState(false);

	function handleDataSelected(data) {
		getDataSelected(data);
		setDataSelected(data);
	}

	useLayoutEffect(() => {
		if (listRefHTML.current) {
			const rows = listRefHTML.current.children;
			const columnsInfo = columns;
			const columnsSize = [];

			for (let i = 0; i < rows.length; i++) {
				const column = rows[i].children;
				for (let r = 0; r < column.length; r++) {
					if (!columnsSize[r]) {
						columnsSize[r] = column[r].offsetWidth;
					}
					if (columnsSize[r] < column[r].offsetWidth) {
						columnsSize[r] = column[r].offsetWidth;
					}
				}
			}

			for (let i = 0; i < columnsInfo.length; i++) {
				columnsInfo[
					i
				].size = `${columnsInfo[i].minSize}px; max-width:${columnsInfo[i].maxSize}px; flex: auto; width:${columnsSize[i]}`;
			}

			setListChangeSize((prevState) => !prevState);
			setHeaderInfo(columnsInfo);
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
					{listData &&
						listData.map((data) => (
							<S.ListUserBox
								key={JSON.stringify(data)}
								reloadListSize={listChangeSize}
								data-selected={data == dataSelected}
								onClick={() => handleDataSelected(data)}
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

			{!listData && <>Carregando...</>}
			{listData && listData.length == 0 && <>Lista vazia</>}
		</S.Container>
	);
};
