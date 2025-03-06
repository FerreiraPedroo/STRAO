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
`;
export const ModalButtonClose = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.8rem;
	margin: 8px 16px;
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
	font-size: 1.8rem;
	text-align: start;

	padding: 8px 50px 8px 8px;
	font-weight: bold;
`;
export const ModalContent = styled.div`
	width: 100%;
	max-height: 65vh;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	padding: 24px 24px;
`;

export const BranchCard = styled.div`
	width: 256px;
	padding: 8px;
	border: 1px solid silver;
	border-radius: 6px;
	background-color: #f9f9f9;
	&:hover {
		cursor: pointer;
		border: 1px solid black;
	}

	${({ loading }) => (loading ? "background-color: #DDD; cursor: wait;" : "")}
`;
export const BranchName = styled.div`
	width: 100%;
	padding: 4px;
`;
export const BranchState = styled.div`
	width: 100%;
	padding: 4px;
`;
export const BranchCity = styled.div`
	width: 100%;
	padding: 4px;
`;
export const BranchDistrict = styled.div`
	width: 100%;
	padding: 4px;
`;
export const BranchAddress = styled.div`
	width: 100%;
	padding: 4px;
`;

export const ModalFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px;
	gap: 18px;
	border-radius: 0 0 12px 12px;
	background-color: #eeeeee;
`;
