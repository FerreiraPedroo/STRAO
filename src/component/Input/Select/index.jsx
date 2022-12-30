import React from "react";
import * as S from "./styles";

export const Select = ({
	filterTitle,
	filterName,
	filterValue,
	filterOnChange,
	filterPlaceholder,
	disabled,
	readOnly,
	children
}) => {
	return (
		<S.Container>
			<S.TitleText>{filterValue && filterTitle}</S.TitleText>
			<S.Select
				onChange={filterOnChange}
				name={filterName}
				value={filterValue}
				placeholder={filterPlaceholder}
				disabled={disabled}
				readOnly={readOnly}
			>
				{children}
			</S.Select>
		</S.Container>
	);
};
