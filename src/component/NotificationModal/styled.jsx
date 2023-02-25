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
	position: fixed;
	top: 0;
	right: 0;

	width: 240px;
	// min-height: 24px;

	display: flex;
	flex-direction: column;
	place-items: center;
	font-family: ${props.textFontFamily};

	border: 1px solid #ddd;
`;
export const NotificationTitleText = styled.div`
	width: 100%;
	height: 24px;
	text-align: center;
	padding: 2px;
	color: ${props.titleTextColor};

	&:hover {
		cursor: pointer;
	}
	${({ theme }) =>
		theme === "success" &&
		`
    background-color: #393;
    color: white;
  `}
	${({ theme }) =>
		theme === "fail" &&
		`
    background-color: #f77;
    color: white;
  `}
`;
export const NotificationText = styled.div`
	width: 100%;
	// height: 24px;
	text-align: center;
	padding: 2px;

	${({ theme }) =>
		theme === "success" &&
		`
    background-color: #5b5;
  `};
	${({ theme }) =>
		theme === "fail" &&
		`
    background-color: #fbb;
  `};
`;


export const ContainerFull = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 100;
	user-select: none;
`;
export const Modal = styled.div`
	position: absolute;
	left: calc(50% - 250px);
	top: calc(50% - 150px);
	width: 500px;
	height: 300px;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	padding: 18px;
	color: white;
	border-radius: 12px;

	${({ theme }) =>
		theme === "success" &&
		`
		border: 3px solid #003300;
		background-color: #5b5;
  `};
	${({ theme }) =>
		theme === "fail" &&
		`
		border: 3px solid #770000;
		background-color: #f99;
  `};
`;
export const ModalClose = styled.div`
	width: 30px;
	font-size: 1.5rem;
	align-self: end;
	text-align: center;
	border-radius: 50%;
	color: white;

	&:hover {
		cursor: pointer;
	}

	${({ theme }) =>
		theme === "success" &&
		`
	&:hover {
		color: #5b5;
		background-color: #bfb;
	}
`};

	${({ theme }) =>
		theme === "fail" &&
		`
	&:hover {
		color: #f99;
		background-color: #fbb;
	}
`};
`;
export const ModalMessage = styled.div`
	width: 100%;
	height: 70%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${props.textFontFamily};
	font-size: 1.5rem;
	font-weight: bold;
	color: white;
	padding: 14px;
`;
export const ModalMessageTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${props.textFontFamily};
	font-size: 28px;
	font-weight: bold;
	color: white;
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
