import React from "react";
import * as S from "./styles";

export const InputTextArea = ({
	textAreaId,
	textAreaName,
	textAreaValue,
	textAreaMin = "128px",
	textAreaMax = "100%",
	textAreaOnChange,
	textAreaPlaceholder,
	textAreaShowInfo = false,
	width = "256px",
	height = "128px",
	textAreaErrorMsg,
	textAreaOnBlur = () => "",
	disabled,
	readOnly
}) => {
	return (
		<S.Container width={width} height={height}>
			<S.TitleText disabled={disabled}>
				{((textAreaValue && textAreaShowInfo) || textAreaShowInfo) && textAreaPlaceholder}
			</S.TitleText>

			<S.TextArea
				id={textAreaId}
				name={textAreaName}
				min={textAreaMin}
				max={textAreaMax}
				onChange={textAreaOnChange}
				onBlur={(e) => textAreaOnBlur(e)}
				placeholder={!textAreaShowInfo ? textAreaPlaceholder : ""}
				value={textAreaValue == null ? "" : textAreaValue}
				height={height}
				width={width}
				disabled={disabled}
				readOnly={readOnly}
				userSelect={false}
			/>
			<S.ErrorMsg>{textAreaErrorMsg}</S.ErrorMsg>
		</S.Container>
	);
};
