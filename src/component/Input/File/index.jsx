import React from "react";
import * as S from "./styles";

export const InputFile = ({
	inputId,
	inputName,
	inputValue,
	inputOnChange,
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
				onChange={inputOnChange}
				defaultValue={inputValue}
				placeholder={!inputShowInfo ? inputPlaceholder : ""}
				disabled={disabled}
				readOnly={readOnly}
				width={inputWidth}
				accept={inputAccept}
				capture="camera"
			/>
		</S.Container>
	);
};
