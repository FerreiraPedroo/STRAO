import * as S from "./styles";

import { CircleNotch } from "phosphor-react";

/**
 *
 * @returns
 */
export const Loading = ({ size = 48, text = "" }) => {
	return (
		<S.LoadingContainer>
			<S.LoadingIcon>
				<CircleNotch className="animate-spin" size={size} color="#ffffff">
					<animateTransform
						attributeName="transform"
						attributeType="XML"
						type="rotate"
						dur="1s"
						from="0 0 0"
						to="360 0 0"
						repeatCount="indefinite"
					></animateTransform>
				</CircleNotch>
			</S.LoadingIcon>
			<S.LoadingText>{text}</S.LoadingText>
		</S.LoadingContainer>
	);
};
