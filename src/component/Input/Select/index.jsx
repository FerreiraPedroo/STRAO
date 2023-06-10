import React from "react";
import * as S from "./styles";

export const InputSelect = ({
	selectId,
	selectName,
	selectValue,
	selectOnChange,
	selectPlaceholder,
	selectShowInfo,
	disabled,
	readOnly,
	width,
	options
}) => {
	return (
		<S.Container>
			<S.TitleText disabled={disabled}>
				{((selectValue && selectShowInfo) || selectShowInfo) &&
					selectPlaceholder}
			</S.TitleText>
			<S.Select
				id={selectId}
				name={selectName}
				defaultValue={selectValue}
				disabled={disabled}
				readOnly={readOnly}
				onChange={selectOnChange}
				placeholder={selectPlaceholder}
				width={width}
			>
				{options &&
					options.map((option, index) =>

						option.type === 'optionGroup' ? (
							<S.OptionGroup key={option.value +"-"+ index} label={option.value}>
								{option.title}
							</S.OptionGroup>
						) : (
							<S.Option key={option.value +"-"+ index} value={option.value}>
								{option.title}
							</S.Option>
						)

					)}
			</S.Select>
		</S.Container>
	);
};
