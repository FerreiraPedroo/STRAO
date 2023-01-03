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
				name={filterName}
				defaultValue={filterValue}
				disabled={disabled}
				readOnly={readOnly}
				onChange={filterOnChange}
				placeholder={filterPlaceholder}
			>
				{children}
			</S.Select>
		</S.Container>
	);
};
