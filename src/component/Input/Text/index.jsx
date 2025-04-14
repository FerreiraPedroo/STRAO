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
	inputErrorMsg,
	inputOnBlur = () => "",
	disabled,
	readOnly,
	disableErrorMsg = false
}) => {
	return (
		<S.Container width={inputWidth}>
			<S.TitleBox>
				<S.TitleText disabled={disabled}>
					{((inputValue && inputShowInfo) || inputShowInfo) && inputPlaceholder}
				</S.TitleText>
				{inputErrorMsg && <S.ErrorMsg errorMsg={inputErrorMsg}>❗</S.ErrorMsg>}
			</S.TitleBox>

			<S.Input
				id={inputId}
				userSelect={false}
				onChange={inputOnChange}
				name={inputName}
				type={"text"}
				value={inputValue}
				placeholder={!inputShowInfo ? inputPlaceholder : ""}
				disabled={disabled}
				readOnly={readOnly}
				onBlur={(e) => inputOnBlur(e)}
				width={inputWidth}
			/>
		</S.Container>
	);
};
