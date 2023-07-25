import styled from "styled-components";

export const Container = styled.div`
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
	left: calc(50% - 340px);
	top: calc(50% - 260px);
	width: 680px;
	height: 520px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	padding: 12px;
	color: white;
	border-radius: 12px;
	gap: 8px;

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
		background-color: #fbb;
  `};
	${({ theme }) =>
		theme === "confirmation" &&
		`
		border: 3px solid #AE7100;
		background-color: #F0F060;
  `};
`;
export const ModalClose = styled.img`
	align-self: end;
	margin: 8px;
	margin-bottom: -48px;
	border-radius: 100%;
	padding: 1px;
	&:hover {
		cursor: pointer;
	}
`;
export const ModalTitle = styled.div`
	font-size: 2.3rem;
	letter-spacing: 0px;
	font-weight: 600;
	font-style: italic;
	text-align: center;
`;
export const ModalCenterBox = styled.div`
	width: 95%;
	height: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #e5e5e5;
	padding: 16px;
	gap: 16px;
`;
export const ModalTextInfo = styled.p`
	font-size: 1.1rem;
`;
export const ModalInputBox = styled.div`
	width: 80%;
	display: flex;
	padding: 12px;
	background-color: #d1d1d1;
	gap: 24px;

`;
export const TypeFileBox = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: 6px 0;
	gap: 18px;
`;

export const ModalTitle6 = styled.div``;
