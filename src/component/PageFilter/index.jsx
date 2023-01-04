import React, { useState } from "react";

import { Button } from "../../component/Button";
import { InputText } from "../../component/Input/Text";
import { InputSelect } from "../Input/Select/index";

import * as S from "./styles.jsx";

// exemplo
// const [userListData] = {
// 	filters: [
// 		{
// 			type: "text",
// 			htmlName: "user",
// 			htmlPlaceholder: "Usuário"
// 		},
// 		{
// 			type: "select",
// 			htmlName: "status",
// 			htmlPlaceholder: "Status",
// 			defaultOption: 0,
// 			options: [
// 				{ title: "Todos", value: "" },
// 				{ title: "Ativo", value: "active" },
// 				{ title: "Inativo", value: "inactive" }
// 			]
// 		}
// 	]
// };

/**
 * @param title - String - Titulo principal da página.
 * @param subTitle - String - Sub titulo da página.
 * @returns
 */
export const PageFilter = ({
	filtersData = [],
	getFiltersSelected,
	loading = false
}) => {
	const [filters, setFilters] = useState(
		(() => {
			const data = filtersData.reduce((acc, cur) => {
				if (cur.type === "select") {
					return {
						...acc,
						[cur.htmlName]: cur.options[1].value
					};
				}
				return { ...acc, [cur.htmlName]: "" };
			}, {});
            console.log(data)
            return data
		})()
	);

	function handleFilter(event) {
		setFilters(
			(prev) => (prev = { ...prev, [event.target.name]: event.target.value })
		);
	}

	function sendFiltersSelected() {
		getFiltersSelected(filters);
	}

	return (
		<S.FilterContainer>
			<S.FilterTitle>Filtros</S.FilterTitle>
			<S.FilterInputBox>
				{filtersData.map((filter) => (
					<div key={filter.htmlName}>
						{filter.type == "select" && (
							<InputSelect
								filterName={filter.htmlName}
								filterValue={filters[filter.htmlName]}
								filterOnChange={handleFilter}
								filterPlaceholder={filter.htmlPlaceholder}
								disabled={loading}
							>
								{filter.options &&
									filter.options.map((option) => (
										<option key={option.value} value={option.value}>
											{option.title}
										</option>
									))}
							</InputSelect>
						)}
						{filter.type == "text" && (
							<InputText
								inputName={filter.htmlName}
								inputValue={filters[filter.htmlName]}
								inputOnChange={handleFilter}
								inputPlaceholder={filter.htmlPlaceholder}
								disabled={loading}
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
		</S.FilterContainer>
	);
};
