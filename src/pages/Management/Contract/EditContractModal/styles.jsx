import styled from "styled-components";

const props = {
	textFontFamily: "Arial",
	titleTextColor: "#999",
	errorTextColor: "#f66",
	successTextColor: "#6f6",
	bgColor: "",
	inputBgColorDisable: "#ddd"
};

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 100;
	user-select: none;
`;
export const Modal = styled.div`
	position: absolute;
	left: calc(50% - 340px);
	top: calc(50% - 250px);
	width: 680px;
	height: 500px;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	padding: 18px;
	border-radius: 12px;

	@media (max-width: 720px) {
		width: 100%;
		left: 0;
	}
`;
export const ModalClose = styled.div`
	width: 30px;
	font-size: 1.5rem;
	font-weight: bolder;
	align-self: end;
	text-align: center;
	border-radius: 50%;
	color: black;

	&:hover {
		cursor: pointer;
		color: #999;
	}
`;
export const ModalMessageTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${props.textFontFamily};
	font-size: 28px;
	font-weight: bold;
`;
export const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	/* flex-direction: column; */
	/* align-items: center; */
	/* justify-content: center; */
	padding: 12px;
	gap: 12px;

`;
export const LeftContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* justify-content: center; */
	padding: 0px;
`;
export const RightContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* justify-content: center; */
	padding: 0px;
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
