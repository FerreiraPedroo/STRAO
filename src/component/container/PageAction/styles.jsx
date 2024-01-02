import styled from "styled-components";

export const ActionsContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	padding: 6px 12px 6px 12px;
	gap: 16px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
`;
export const ActionsTitle = styled.div`
	align-self: center;
	font-style: italic;
	font-size: 1rem;
	font-weight: 600;
	color: #565656;
`;

export const ActionsBox = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	gap: 12px;
`;

export const ActionButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	${({ disabled }) => disabled && "color: #B6B6B6"};
	${({ show }) => !show && "display: none"};

`;

export const ActionText = styled.div`
	font-size: 0.9rem;
	font-weight: 500;
	white-space: wrap;
	text-align: start;
	line-height: 14px;
`;
