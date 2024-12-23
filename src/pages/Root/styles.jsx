import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	height: 100%;
	background-color: #ECEEF4;
	gap: 8px;
`;

/* HR SEPARATOR */
export const HrLine = styled.hr`
	margin: 0px 8px;
	border: 1px solid #c0c0c0;
`;

export const CenterContainer = styled.div`
	min-width: 224px;
	width: 224px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #F6F6F6;
	border-right: 1px solid rgba(0,0,0,0.08);
	box-shadow: 1px 2px 10px 1px rgba(0,0,0,0.05);
`;
