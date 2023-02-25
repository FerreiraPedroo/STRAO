import React from "react";
import * as S from "./styles";

export const InputText = ({
	inputId,
	inputName,
	inputValue,
	inputOnChange,
	inputPlaceholder,
	inputShowInfo = false,
	inputWidth = "256px",
	disabled,
	readOnly
}) => {
	return (
		<S.Container>
			<S.TitleText disabled={disabled}>
				{((inputValue && inputShowInfo) || inputShowInfo) && inputPlaceholder}
			</S.TitleText>

			<S.Input
				id={inputId}
				onChange={inputOnChange}
				name={inputName}
				value={inputValue}
				placeholder={!inputShowInfo ? inputPlaceholder : ""}
				disabled={disabled}
				readOnly={readOnly}
				width={inputWidth}
			/>
		</S.Container>
	);
};
