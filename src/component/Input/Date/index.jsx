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
	readOnly
}) => {
	return (
		<S.Container width={width}>
			<S.TitleText disabled={disabled}>
				{(inputValue || inputShowInfo) && inputPlaceholder}
			</S.TitleText>

			<S.Input
				id={inputId}
				type={"date"}
				onChange={(e)=>inputOnChange(e)}
				name={inputName}
				value={inputValue}
				placeholder={!inputShowInfo ? inputPlaceholder : ""}
				disabled={disabled}
				readOnly={readOnly}
				width={width}
			/>
			<S.ErrorMsg>{inputErrorMsg}</S.ErrorMsg>
		</S.Container>
	);
};
