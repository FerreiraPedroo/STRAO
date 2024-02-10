import React from "react";
import * as S from "./styles";

export const InputTextArea = ({
	textAreaId,
	textAreaName,
	textAreaValue,
	textAreaMin = 0,
	textAreaMax,
	textAreaOnChange,
	textAreaPlaceholder,
	textAreaShowInfo = false,
	width = "256px",
	height = "128px",
	textAreaErrorMsg,
	textAreaOnBlur = () => "",
	disabled,
	readOnly,
	theme = "normal"
}) => {
	return (
		<S.Container width={width} height={height} theme={theme}>
			<S.TitleText disabled={disabled} theme={theme}>
				{((textAreaValue && textAreaShowInfo) || textAreaShowInfo) && textAreaPlaceholder}
			</S.TitleText>

			<S.TextArea theme={theme}
				id={textAreaId}
				name={textAreaName}
				min={textAreaMin}
				max={textAreaMax}
				onChange={textAreaOnChange}
				onBlur={(e) => textAreaOnBlur(e)}
				placeholder={!textAreaShowInfo ? textAreaPlaceholder : ""}
				value={textAreaValue}
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
