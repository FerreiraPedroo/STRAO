import styled from "styled-components";

const props = {
	navMenuButtonTextSize: "16px",
	navMenuButtonSizeWidth: "100px",
	navMenuButtonSizeHeight: "96px",
	navMenuButtonBackColor: "#C0C0C0",

	navMenuContainerBackColor: "#F8F8F8"
};

export const Container = styled.div`
	width: 100%;
	height: 72px;
	display: flex;
	place-items: center;
	padding: 6px 12px;
	border-top: 1px solid #908E8E;
	background-color: #C8C8C8;
	gap: 8px;
`;
export const DepartmentTitle = styled.div`
	font-size: 1.6rem;
	font-style: italic;
	font-weight: 700;
	line-height: 1.4rem;
	color: #464646;
`;
export const SectionContainer = styled.div`
	width: 90px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border: 1px solid transparent;
	gap: 2px;

	&:hover {
		background-color: #B0B0B0;
		cursor: pointer;
		border-top: 1px solid #747679;
		border-left: 1px solid #747679;
		border-right: 1px solid #747679;
	}

	${({ selected }) => selected && "background-color: #B0B0B0;"}

`;
export const SectionImg = styled.img`
	min-width: 48px;
	width: 48px;
	min-height: 44px;
	height: 44px;
`;
export const SectionTitle = styled.div`
	font-style: italic;
	font-size: 0.75rem;
	font-weight: 700;
	color: #767676;
`;
export const ArrowDown = styled.p`
	${({ selected }) => selected ? "visibility: visible" : "visibility: hidden"};
	line-height: 4px;
	
	&::after {
		content: '▾';
	}
`;


export const Action = styled.div`
	position: absolute;
	top: 115px;
	align-self: start;
	margin: 0 0 0 -1px;

	display: flex;
	align-items: center;

	border-radius: 0px 0px 4px 4px;
	padding: 4px 8px;
	background-color: #C8C8C8;
	border: 1px solid #747679;

	gap: 8px;

	&:hover {
		background-color: #B0B0B0;
		cursor: pointer;
	}

	z-index: 100;
`;

export const ActionImg = styled.img`
min-width: 32px;
width: 32px;
min-height: 32px;
height: 32px;
`;

export const ActionTitle = styled.p`
	font-weight: 600;
	font-size: 0.9rem;
`;
