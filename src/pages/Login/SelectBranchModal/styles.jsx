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
	left: calc(50% - 240px);
	top: calc(50% - 230px);
	width: 480px;
	height: 360px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	padding: 18px;
	border-radius: 12px;

	@media (max-width: 720px) {
		width: 100%;
		left: 0;
	}
`;

export const ModalMessageTitle = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28px;
	font-weight: bold;
`;
export const ModalContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	gap: 8px;
	padding: 12px 24px;
`;

export const BranchCard = styled.div`
	width: 256px;
	padding: 8px;
	border: 1px solid silver;
	border-radius: 6px;
	background-color: #f9f9f9;
	cursor: pointer;

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
