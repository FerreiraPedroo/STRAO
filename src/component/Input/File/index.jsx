import React from "react";
import * as S from "./styles";

export const InputFile = ({
	inputId,
	inputName,
	inputValue,
	inputOnChange,
	inputOnBlur,
	inputPlaceholder,
	inputShowInfo = false,
	inputWidth = "256px",
	inputAccept = ".jpg,.png,.bmp,.pdf",
	disabled,
	readOnly
}) => {
	return (
		<S.Container width={inputWidth}>
			{/* <S.TitleText disabled={disabled}>
				{((inputValue && inputShowInfo) || inputShowInfo) && inputPlaceholder}
			</S.TitleText> */}

			<S.Input
				id={inputId}
				name={inputName}
				type="file"
				onChange={(e) => inputOnChange(e)}
				defaultValue={inputValue}
				onBlur={inputOnBlur}
				placeholder={!inputShowInfo ? inputPlaceholder : ""}
				disabled={disabled}
				readOnly={readOnly}
				width={inputWidth}
				accept={inputAccept}
				capture="camera"
				theme={theme}
			/>
		</S.Container>
	);
};
