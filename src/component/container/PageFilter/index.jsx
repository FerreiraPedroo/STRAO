import React, { useEffect, useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";

import { Button } from "../../Button";
import { InputText } from "../../Input/Text";
import { InputSelect } from "../../Input/Select/index";

import * as S from "./styles.jsx";
import { PageTitle } from "../PageTitle";

// exemplo
// const [userListData] = [
// 		{
// 			type: "text",
// 			htmlName: "user",
// 			htmlPlaceholder: "Usuário"
//			showInfo: true,
// 		},
// 		{
// 			type: "select",
// 			htmlName: "status",
// 			htmlPlaceholder: "Status",
// 			defaultOption: 0,
// 			showInfo: true,
// 			options: [
// 				{ title: "Todos", value: "" },
// 				{ title: "Ativo", value: "active" },
// 				{ title: "Inativo", value: "inactive" }
// 			]
// 		}
// 	];

/**
 * @param title - String - Titulo principal da página.
 * @param subTitle - String - Sub titulo da página.
 * @returns
 */
export const PageFilter = ({
	filtersData = [],
	getFiltersSelected,
	loading
}) => {
	const [openContainer, setOpenContainer] = useState(false);
	const [filters, setFilters] = useState(filtersData.reduce((acc, cur) => {
		if (cur.type === "select" && cur.options.length) {
			return {
				...acc,
				[cur.htmlName]: cur.options[0].value
			};
		}
		return { ...acc, [cur.htmlName]: "" };
	}, {})
	);

	function handleFilter(event) {
		const newFilters = { ...filters, [event.target.name]: event.target.value };
		setFilters(newFilters);
	}

	function handleOpenStatus() {
		setOpenContainer((prev) => !prev);
	}

	useEffect(() => {
		getFiltersSelected(filters);
	}, []);

	function sendFiltersSelected() {
		getFiltersSelected(filters);
	}

	return (
		<S.FilterContainer>
			<S.FilterTitleBox>
				<S.FilterTitle> Filtros</S.FilterTitle>
				<S.FilterOpenButton>
					{openContainer ? (
						<CaretUp onClick={handleOpenStatus} size={24} />
					) : (
						<CaretDown onClick={handleOpenStatus} size={24} />
					)}
				</S.FilterOpenButton>
			</S.FilterTitleBox>
			{openContainer ? (
				<S.FilterInputBox>
					{filtersData.map((filter) => (
						<div key={filter.htmlName}>
							{filter.type == "select" && (
								<InputSelect
									selectId={filter.htmlName}
									selectName={filter.htmlName}
									selectValue={filters[filter.htmlName]}
									selectOnChange={handleFilter}
									selectPlaceholder={filter.htmlPlaceholder}
									disabled={loading}
									selectShowInfo={filter.showInfo}
									options={filter.options}
								/>
							)}
							{filter.type == "text" && (
								<InputText
									inputId={filter.htmlName}
									inputName={filter.htmlName}
									inputValue={filters[filter.htmlName]}
									inputOnChange={handleFilter}
									inputPlaceholder={filter.htmlPlaceholder}
									disabled={loading}
									inputShowInfo={filter.showInfo}
								/>
							)}
						</div>
					))}
					<Button
						typeStyle="find"
						disable={loading}
						onClick={sendFiltersSelected}
					/>
				</S.FilterInputBox>
			) : (
				<></>
			)}
		</S.FilterContainer>
	);
};