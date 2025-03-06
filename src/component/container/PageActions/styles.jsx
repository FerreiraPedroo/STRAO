import styled from "styled-components";
import { PageActionsStyle } from "styles/component/container/pageActions";

export const Container = styled.div`
	width: 100%;
	${PageActionsStyle.container};
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	${({ disabled }) => disabled && ""};
	${({ show }) => !show && "display: none"};
`;

export const ButtonText = styled.div`
	font-size: 1rem;
	/* font-weight: 500; */
	white-space: wrap;
	text-align: start;
`;
