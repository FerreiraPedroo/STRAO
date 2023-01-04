import React from "react";
import * as S from "./styles";

export const InputSelect = ({
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
			<S.TitleText disabled={disabled}>{filterPlaceholder}</S.TitleText>
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
