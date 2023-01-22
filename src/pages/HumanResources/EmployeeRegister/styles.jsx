import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
    height: 100%;
    border: 1px solid red;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: start;
	padding: 16px 32px;
	gap: 32px;
`;
export const PersonalInformationContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	padding: 12px 16px 12px 16px;
	gap: 16px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;
export const ErrorMessage = styled.p`
	width: 100%;
	height: 14px;
	font-size: 0.8rem;
	color: #dd0000;
	text-align: end;
	padding: 0 8px;
`;
export const PhotoBox = styled.div`
	min-width: 120px;
	min-height: 120px;
	margin-right: 16px;
`;
export const InputContainer = styled.div`
	display: flex;
	font-size: 1.15rem;
	flex-wrap: wrap;
	gap: 6px 16px;
`;
export const InputBox = styled.div``;

export const EmployeePhoto = styled.img`
    width: 100%;
    height: 120px;
    background-color: #f9f9f9;
`;
export const PhotoButtons = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;
`;
export const InformationContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
	gap: 12px;
`;
export const SubmitBox = styled.div`
	width: 100%;
	min-height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const SubmitButton = styled.input`
	width: 160px;
	height: 32px;
	font-size: 20px;
	border-radius: 6px;
	background-color: #dcdcdc;
	border: 1px solid #555;
	cursor: pointer;

	&:active not(:disabled) {
		border: 1px solid silver;
		transform: scale(0.98);
	}

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
