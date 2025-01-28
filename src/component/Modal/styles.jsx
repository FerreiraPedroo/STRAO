import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 100;
	user-select: none;
`;
export const Modal = styled.div`
	position: absolute;
	top: 100px;

	${({ width }) => (width ? `left: calc(50% - (${width}/2));` : "")}
	${({ width }) => (width ? `max-width:${width};` : "")}
	${({ width }) => (width ? `width:${width};` : "")}

	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	padding: 24px 20px;
	border-radius: 12px;

	@media (max-width: 720px) {
		/* width: 100%; */
		/* left: 0; */
	}
`;

export const ModalHeaderBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;
export const ModalMessageTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	word-wrap: break-word;
	font-size: 28px;
	font-weight: bold;
	padding-left: 40px;
`;
export const ModalClose = styled.div`
	width: 40px;

	font-size: 1.5rem;
	font-weight: bolder;
	align-self: top;

	text-align: center;
	border-radius: 50%;
	color: black;

	&:hover {
		cursor: pointer;
		color: #999;
	}
`;

