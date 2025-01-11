import styled from "styled-components";

const props = {
	textFontFamily: "Arial",
	titleTextColor: "#999",
	errorTextColor: "#f66",
	successTextColor: "#6f6",
	bgColor: "",
	inputBgColorDisable: "#ddd"
};

export const ButtonFormSubmit = styled.button`
	width: 128px;
	border: 1px solid #555;
	border-radius: 6px;
	padding: 6px 12px;
	align-self: center;

	&:hover {
		cursor: pointer;
		border-color: #000;
		background-color: #bbb;
	}

	&:active {
		color: #555;
		border-color: #000;
		background-color: #999;
	}
`;

export const InputBox = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const ButtonBox = styled.div`
	height: 100%;
	display: flex;
	gap: 16px;
	/* padding: 12px; */
`;
