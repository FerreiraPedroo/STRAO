import styled from "styled-components";

const props = {
	headeTitle: `
  font-size: 20px;
  font-style: italic;
  font-weight: bold;  
  `
};

export const ActionsContainer = styled.div`
	display: flex;
	width: 100%;
	min-height: 46px;
	align-items: center;
	background-color: #e5e5e5;
	padding: 6px 16px 6px 16px;
	gap: 16px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;
export const ActionsTitle = styled.div`
	${props.headeTitle}
	align-self: center;
`;
export const ActionButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 6px;
	${({ disabled }) => disabled && "color: #B6B6B6"};
	${({ show }) => !show && "display: none"};
`;
