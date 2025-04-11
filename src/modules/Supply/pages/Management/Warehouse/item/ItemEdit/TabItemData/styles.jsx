import styled from "styled-components";
import { BlockStyle } from "styles/component/container/blockContainer";

export const ButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-items: center;
	gap: 20px;
	color: #222;
	background-color: #fff;
	padding: 12px 16px;
	border-radius: 8px;
	// border: 1px solid #4E5F8F;
	// box-shadow: 2px 2px 0px rgba(78, 95, 143, 0.9);
`;

export const ActionText = styled.div`
	font-size: 1rem;
	/* font-weight: 500; */
	user-select: none;
	white-space: wrap;
	text-align: start;
`;

export const DataContainer = styled.div`
	${BlockStyle.container}
`;

export const HeaderContainer = styled.div`
	width: 100%;
`;
export const HeaderTitle = styled.p`
	${BlockStyle.title}
`;
