import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { InputSelect } from "../Input/Select";
import { InputText } from "../Input/Text";

import * as S from "./styles";

export const SelectDeselectMultipleFields = ({
	fields = ['pedro','henrique'],
	title,
	name,
	placeHolder,
	getSelectedInfo
}) => {
	const [fieldsData, setFieldsData] = useState();
	const [selectData, setSelectData] = useState({});

	const [fieldsSelectedInfo, setFieldsSelectedInfo] = useState([]);

	const handleSelectedData = (e) => {
		// setSelectedData(e.target.value);
	};
	
	const handleAddSelectedData = () => {
		// const findSelectedData = selectData.find((data) => data.id == selectedData);

		// if (findSelectedData) {
		// 	setSelectData(
		// 		selectData.filter((value) => value.id != findSelectedData.id)
		// 	);
		// 	setSelectedInfo([...selectedInfo, findSelectedData]);
		// }
	};

	const handleRemoveSelectedData = (selected) => {
		// const removeSelectedData = selectedInfo.find(
		// 	(data) => data.id == selected.id
		// );

		// if (removeSelectedData) {
		// 	setSelectedInfo(
		// 		selectedInfo.filter((value) => value.id != removeSelectedData.id)
		// 	);
		// 	setSelectData([...selectData, selected]);
		// }
	};

	useEffect(() => {
		const selectedIds = selectedInfo.reduce((prev, cur) => {
			prev.push(cur.id);
			return prev;
		}, []);

		getSelectedInfo(name, selectedIds);
	}, [selectedInfo]);

	return (
		<S.Container>
			<S.TitleBox>
				<S.Title>{title}</S.Title>
			</S.TitleBox>

			<S.SelectContainerInner>
				<S.SelectContainer>
					{placeHolder} disponíveis
					<S.SelectedBox>
						<InputSelect
							selectId="selectId"
							selectName="categories_id"
							selectPlaceholder={placeHolder}
							selectValue={"selectedData"}
							selectOnChange={handleSelectedData}
							disabled={!"selectData.length"}
							selectShowInfo={false}
							width={"256px"}
						>
							<option value="">Selecione</option>
							{/* {selectData &&
								selectData.map((category) => (
									<option key={category.id} value={category.id}>
										{category.title}
									</option>
								))} */}
						</InputSelect>
						<Button
							typeStyle="correct"
							title="Adicionar"
							onClick={handleAddSelectedData}
							disable={!"selectedData"}
						/>
					</S.SelectedBox>
				</S.SelectContainer>

				<S.SelectedContainer>
					{placeHolder} selecionas
					{/* {selectedInfo &&
						selectedInfo.map((selected) => (
							<S.SelectedBox key={selected.id}>
								<InputText inputValue={selected.title} disabled={true} />
								<Button
									typeStyle="remove"
									title="Remover"
									onClick={() => handleRemoveSelectedData(selected)}
								/>
							</S.SelectedBox>
						))} */}
				</S.SelectedContainer>
			</S.SelectContainerInner>
		</S.Container>
	);
};
