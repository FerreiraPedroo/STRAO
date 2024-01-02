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
	options
}) => {
	return (
		<S.Container width={width}>
			<S.TitleText disabled={disabled}>
				{((selectValue && selectShowInfo) || selectShowInfo) && selectPlaceholder}
			</S.TitleText>
			<S.Select
				id={selectId}
				name={selectName}
				value={selectValue}
				// defaultValue={selectValue}
				disabled={disabled}
				readOnly={readOnly}
				onChange={selectOnChange}
				placeholder={selectPlaceholder}
				width={width}
			>
				{options &&
					options.map((option, index) =>
						option.type === "optionGroup" ? (
							<S.OptionGroup key={option.value + "-" + index} label={option.value}>
								{option.name}
							</S.OptionGroup>
						) : (
							<S.Option
								key={option.value + "-" + index}
								value={option.value}
								// defaultValue={option.value}
							>
								{option.name}
							</S.Option>
						)
					)}
			</S.Select>
			<S.ErrorMsg>{selectErrorMsg}</S.ErrorMsg>
		</S.Container>
	);
};
