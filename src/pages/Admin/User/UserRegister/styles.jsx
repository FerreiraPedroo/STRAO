import styled from "styled-components";
import { PageContainer } from "component/container/PageContainer/styles";
import { BlockStyle } from "styles/component/container/blockContainer";

export const Container = styled(PageContainer)``;

export const DataContainer = styled.div`
	${BlockStyle.container}
	max-width: 520px;
	justify-content: center;
`;
export const HeaderContainer = styled.div`
	width: 100%;
`;
export const HeaderTitle = styled.p`
	${BlockStyle.title}
`;

const props = {
	paragraphTextSize: "16px",

	errorTextColor: "#f66",
	textSize: "",
	bgColor: "",
	inputBgColorDisable: "#ddd"
};

export const Form = styled.form`
	width: 320px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
export const InputBox = styled.div``;
export const ButtonBox = styled.div`
	width: 100%;
	padding: 10px;
	place-items: center;
`;

export const InputTitleText = styled.p`
	font-size: 1rem;
	white-space: nowrap;
`;
export const Input = styled.input`
	width: 460px;
	height: 32px;
	padding: 4px;
	border: 1px solid #696969;
	outline: 0;
`;
export const InputErrorText = styled.p`
	height: 24px;
	font-size: 1rem;
	color: ${props.errorTextColor};
	text-align: right;
	padding: 1px 8px;
	white-space: nowrap;
`;

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

export const SubmitErrorText = styled.p`
	width: 100%;
	height: 24px;
	font-size: 1.3rem;
	color: red;
	text-align: center;
	padding: 4px 4px;
	white-space: nowrap;
`;
