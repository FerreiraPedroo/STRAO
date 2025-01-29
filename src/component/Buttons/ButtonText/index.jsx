import * as S from "./styles";

/**
 * 
 * @param {*} { text , disabled = false , onClick , loading = false , width = 80 } 
 * @returns 
 */
export const ButtonText = ({ text, disabled = false, onClick, loading = false, width = 80 }) => {
	return (
		<S.Button width={width} height={40} disabled={disabled || loading} onClick={onClick}>
			{text}
		</S.Button>
	);
};
