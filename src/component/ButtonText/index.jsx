import * as S from "./styles";

/**
 * @param {typeStyle} typeStyle ""
 * @returns
 */
export const ButtonText = ({
	value,
	typeStyle = "normal",
	disabled = false,
	theme = "normal",
	onClick,
	loading,
	width = 160,
}) => {
	return (
		<>
			{typeStyle === "normal" && (
				<S.Button width={width} height={40} disabled={disabled} theme={theme} onClick={onClick}>
					{value.toUpperCase()}
				</S.Button>
			)}
			{typeStyle === "back" && (
				<S.ButtonBack
					type="button"
					width={72}
					height={40}
					disabled={disabled}
					theme={theme}
					onClick={onClick}
					value={value}
				/>
			)}
		</>
	);
};
