import React from "react";
import * as S from "./styles";

export const InputDate = ({
	inputId,
	inputName,
	inputValue,
	inputOnChange,
	inputPlaceholder,
	inputShowInfo = false,
	inputErrorMsg,
	width,
	disabled,
	readOnly,
	theme = "normal"
}) => {
	return (
		<S.Container width={width} theme={theme}>
			<S.TitleText disabled={disabled} theme={theme}>
				{(inputValue || inputShowInfo) && inputPlaceholder}
			</S.TitleText>

			<S.Input
				id={inputId}
				type={"date"}
				onChange={(e) => inputOnChange(e)}
				name={inputName}
				value={inputValue}
				placeholder={!inputShowInfo ? inputPlaceholder : ""}
				disabled={disabled}
				readOnly={readOnly}
				width={width}
				theme={theme}
			/>
			<S.ErrorMsg>{inputErrorMsg}</S.ErrorMsg>
		</S.Container>
	);
};
