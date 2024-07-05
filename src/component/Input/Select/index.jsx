import React from "react";
import * as S from "./styles";

export const InputSelect = ({
	selectId,
	selectName,
	selectValue,
	selectOnChange,
	selectPlaceholder,
	selectShowInfo,
	selectErrorMsg,
	disabled,
	readOnly,
	width = "164px",
	options,
	theme = "normal",
	disableErrorMsg = false
}) => {
	return (
		<S.Container width={width} theme={theme}>
			<S.TitleText disabled={disabled} theme={theme}>
				{((selectValue && selectShowInfo) || selectShowInfo) && selectPlaceholder}
			</S.TitleText>
			<S.Select
				theme={theme}
				id={selectId}
				name={selectName}
				width={width}
				defaultValue=""
				onChange={selectOnChange}
				placeholder={selectPlaceholder}
				disabled={disabled}
				readOnly={readOnly}
			>

				{options instanceof Array &&
					options.map((option, index) =>
						option.type === "optionGroup" ? (
							<S.OptionGroup key={option.value + "-" + index} label={option.value}>
								{option.name}
							</S.OptionGroup>
						) : (
							/* eslint-disable-next-line */
							<S.Option key={option.value + "-" + index} selected={option.selected} value={option.value} theme={theme}>
								{option.name}
							</S.Option>
						)
					)}
			</S.Select>
			{!disableErrorMsg &&<S.ErrorMsg>{selectErrorMsg}</S.ErrorMsg>}
		</S.Container>
	);
};
