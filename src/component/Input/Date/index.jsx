import React from "react";
import * as S from "./styles";

export const InputDate = ({
	id,
	name,
	value,
	onChange,
	placeholder,
	showInfo = false,
	width = "256px",
	errorMsg,
	onBlur = () => "",
	disabled,
	readOnly
}) => {
	return (
		<S.Container width={width}>
			<S.TitleBox>
				<S.TitleText disabled={disabled}>{(value || showInfo) && placeholder}</S.TitleText>
				{errorMsg && <S.ErrorMsg errorMsg={errorMsg}>❗</S.ErrorMsg>}
			</S.TitleBox>

			<S.Input
				id={id}
				type={"date"}
				onChange={(e) => onChange(e)}
				name={name}
				value={value}
				placeholder={!showInfo ? placeholder : ""}
				disabled={disabled}
				readOnly={readOnly}
				width={width}
			/>
		</S.Container>
	);
};
