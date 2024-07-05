import React from "react";
import * as S from "./styles";

export const InputText = ({
	inputId,
	inputType = "text",
	inputName,
	inputValue,
	inputOnChange,
	inputPlaceholder,
	inputShowInfo = false,
	inputWidth = "256px",
	inputErrorMsg,
	inputOnBlur = () => "",
	disabled,
	readOnly,
	theme = "normal",
	disableErrorMsg = false
}) => {
	return (
		<S.Container width={inputWidth} theme={theme}>
			<S.TitleText disabled={disabled} theme={theme}>
				{((inputValue && inputShowInfo) || inputShowInfo) && inputPlaceholder}
			</S.TitleText>

			<S.Input
				id={inputId}
				userSelect={false}
				onChange={inputOnChange}
				name={inputName}
				type={inputType}
				value={inputValue}
				placeholder={!inputShowInfo ? inputPlaceholder : ""}
				disabled={disabled}
				readOnly={readOnly}
				onBlur={(e) => inputOnBlur(e)}
				width={inputWidth}
				theme={theme}
			/>
			{!disableErrorMsg && <S.ErrorMsg>{inputErrorMsg}</S.ErrorMsg>}
		</S.Container>
	);
};
