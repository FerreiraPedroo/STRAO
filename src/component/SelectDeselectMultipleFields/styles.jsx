import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: start;
	flex-direction: column;
	background-color: #e5e5e5;
	gap: 2px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	padding: 0px 12px 16px 12px;
`;
export const TitleBox = styled.div`
	width: 100%;
	height: 32px;
	display: flex;
	align-items: center;
	font-size: 1.25rem;
	padding: 22px 0px;
	border-radius: 0px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;
export const Title = styled.p`
	display: flex;
	align-items: center;
	font-size: 1.25rem;
`;

export const SelectContainerInner = styled.div`
	display: flex;
`;
export const SelectContainer = styled.div`
	padding: 8px;
	padding-right: 20px;
	border-right: 1px solid rgba(0, 0, 0, 0.25);
`;
export const SelectedContainer = styled.div`
	padding: 8px;
`;
export const SelectedBox = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 8px;
`;
