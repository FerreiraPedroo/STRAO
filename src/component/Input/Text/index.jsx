import React from "react";
import * as S from "./styles";

export const InputText = ({
	inputId,
	inputType = "text",
	inputName,
	inputValue,
	inputMin = 0,
	inputMax,
	inputOnChange,
	inputPlaceholder,
	inputShowInfo = false,
	inputWidth = "256px",
	inputErrorMsg,
	inputOnBlur = () => "",
	disabled,
	readOnly
}) => {
	return (
		<S.Container width={inputWidth}>
			<S.TitleText disabled={disabled}>
				{((inputValue && inputShowInfo) || inputShowInfo) && inputPlaceholder}
			</S.TitleText>

			<S.Input
				id={inputId}
				userSelect={false}
				onChange={inputOnChange}
				name={inputName}
				type={inputType}
				min={inputMin}
				max={inputMax}
				value={inputValue}
				placeholder={!inputShowInfo ? inputPlaceholder : ""}
				disabled={disabled}
				readOnly={readOnly}
				onBlur={(e) => inputOnBlur(e)}
				width={inputWidth}
			/>
			<S.ErrorMsg>{inputErrorMsg}</S.ErrorMsg>
		</S.Container>
	);
};
