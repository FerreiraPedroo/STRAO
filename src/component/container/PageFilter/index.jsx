import React, { useEffect, useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";

import * as S from "./styles.jsx";

import { ButtonIcon } from "component/Buttons/ButtonIcon/index.jsx";
import { InputSelect } from "component/Input/Select/index";
import { InputText } from "component/Input/Text";

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
export const PageFilter = ({ theme = "normal", filtersData = [], getFiltersSelected, loading }) => {
	const [openContainer, setOpenContainer] = useState(false);
	const [filters, setFilters] = useState(
		filtersData.reduce((acc, cur) => {
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

	function sendFiltersSelected() {
		getFiltersSelected(filters);
	}

	useEffect(() => {
		getFiltersSelected(filters);
	}, []);

	return (
		<S.Container>
			<S.TitleBox>
				<S.Title>Filtros</S.Title>
				<S.OpenButton>
					{openContainer ? (
						<CaretUp onClick={handleOpenStatus} size={24} />
					) : (
						<CaretDown onClick={handleOpenStatus} size={24} />
					)}
				</S.OpenButton>
			</S.TitleBox>
			{openContainer ? (
				<S.InputBox>
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
									disableErrorMsg={true}
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
									disableErrorMsg={true}
								/>
							)}
						</div>
					))}
					<ButtonIcon typeStyle="find" disable={loading} onClick={sendFiltersSelected} />
				</S.InputBox>
			) : (
				<></>
			)}
		</S.Container>
	);
};
