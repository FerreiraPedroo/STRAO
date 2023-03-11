import React from "react";
import * as S from "./styles";

export const InputSelect = ({
	selectId,
	selectName,
	selectValue,
	selectOnChange,
	selectPlaceholder,
	selectShowInfo,
	disabled,
	readOnly,
	width,
	children
}) => {
	return (
		<S.Container>
			<S.TitleText disabled={disabled}>
				{((selectValue && selectShowInfo) || selectShowInfo) &&
					selectPlaceholder }
			</S.TitleText>
			<S.Select
				id={selectId}
				name={selectName}
				defaultValue={selectValue}
				disabled={disabled}
				readOnly={readOnly}
				onChange={selectOnChange}
				placeholder={selectPlaceholder}
				width={width}
			>
				{children}
			</S.Select>
		</S.Container>
	);
};
