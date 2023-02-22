import styled from "styled-components";

const props = {
	navMenuButtonTextSize: "16px",
	navMenuButtonSizeWidth: "100px",
	navMenuButtonSizeHeight: "96px",
	navMenuButtonBackColor: "#C0C0C0",

	navMenuContainerBackColor: "#F8F8F8"
};

export const Container = styled.div`
	min-width: 192px;
	height: calc(100vh - 40px);
	display: flex;
	flex-direction: column;
	place-items: center;
	padding: 16px 4px;
	border-right: 1px solid #c4c6c9;
	background-color: ${props.navMenuContainerBackColor};
	gap: 16px;
`;
export const DepartmentTitle = styled.div`
	width: 100%;
	font-size: 1.6rem;
	font-style: italic;
	font-weight: 700;
	text-align: center;
	line-height: 1.4rem;
	padding: 0px 8px;
	color: #333;
`;
export const SectionContainer = styled.div`
	width: 100%;
	background-color: #e5e5e5;
	// border: 1px solid red;
`;
export const SectionHead = styled.div`
	min-height: 26px;
	display: flex;
	align-items: center;
	border-left: 2.5px solid #000000;
	padding-left: 4px;
	gap: 4px;
`;
export const SectionHeadTitle = styled.div`
	font-style: italic;
	font-size: 1.2rem;
	font-weight: 700;
`;
export const Section = styled.div``;

export const LineSeparation = styled.div`
	margin: 4px 8px;
	border-top: 1px solid #a9a9a9;
`;
export const Action = styled.div`
	padding-left: 8px;
	min-height: 20px;
	&:hover {
		background-color: #c0c0c0;
		cursor: pointer;
	}
	${({ selected }) => selected && "background-color: #C0C0C0"};
`;

export const ActionTitle = styled.p`
	font-weight: 600;
	font-size: 0.9rem;
`;
