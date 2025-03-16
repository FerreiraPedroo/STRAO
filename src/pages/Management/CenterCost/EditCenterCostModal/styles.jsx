import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(2px);
	z-index: 100;
	user-select: none;
`;

export const Modal = styled.div`
	position: absolute;
	left: calc(50% - 260px);
	top: calc(10%);
	width: 520px;
	height: auto;
	max-height: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	border-radius: 12px;

	@media (max-width: 540px) {
		width: 90%;
		position: relative;
		left: 0;
		top: 0;
	}
`;

export const ModalHeader = styled.div`
	width: 100%;
	display: flex;
	border-radius: 12px 12px 0 0;
	background-color: #eeeeee;
	padding: 6px 0 ;
`;

export const ModalTitle = styled.div`
	width: 100%;
	display: flex;
`;

export const ModalClose = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.4rem;
	margin: 2px 16px;
	font-weight: bold;
	&:hover {
		color: tomato;
		cursor: pointer;
	}
`;

export const ModalMessageTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	text-align: start;

	padding: 0px 50px 0px 0;
	font-weight: bold;
`;

export const ModalContent = styled.div`
	width: 100%;
	height: 100%;

	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	padding: 16px 24px;
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

export const ModalFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	gap: 18px;
	border-radius: 0 0 12px 12px;
	background-color: #eeeeee;
`;
