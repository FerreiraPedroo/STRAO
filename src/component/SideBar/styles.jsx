import styled from "styled-components";

const props = {
	navMenuButtonTextSize: "1rem",
	navMenuButtonSizeWidth: "100px",
	navMenuButtonSizeHeight: "96px",
	navMenuButtonBackColor: "#C0C0C0",

	navMenuContainerBackColor: "#F8F8F8"
};

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	place-items: center;
	padding: 6px 8px;
	background-color: #f5f3f0;
	gap:6px;
`;
/* HR SEPARATOR */
export const HrLine = styled.hr`
	margin: 0px 8px;
	width: 100%;
	border: 1px solid #c0c0c0;
`;
export const DepartmentTitle = styled.div`
	width: 100%;
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 1.4rem;
	font-style: italic;
	font-weight: 600;
	color: #464646;
`;
export const SectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid transparent;

	&:hover{
		cursor: pointer;
	}

`;
export const SectionTop = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border: 1px solid transparent;
	padding: 4px 4px;
	gap: 4px;

	&:hover{
		background-color: #e0e0e0;
	}

	${({ selected }) => selected && `
		background-color: #e0e0e0;
		border: 1px solid #C8C8C8;	
	`};

`;
export const SectionImg = styled.img`
	min-width: 2.5rem;
	width: 2.5rem;
	min-height: 2.5rem;
	height:  2.5rem;
`;
export const SectionTitle = styled.div`
	font-style: italic;
	font-size: 0.9rem;
	font-weight: 600;
	color: #767676;
	user-select: none;
`;
export const ArrowDown = styled.p`
	${({ selected }) => selected ? "visibility: visible" : "visibility: hidden"};
	line-height: 4px;
	
	&::after {
		content: '▾';
	}
`;


export const Action = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 8px 6px;
	border-left: 1px solid #C8C8C8;
	border-right: 1px solid #C8C8C8;
	gap: 6px;
	
	&:hover {
		${({ selected }) => !selected && `
			background-color: #e0e0e0;
			cursor: pointer;
		`}
	}

	&:last-child{
		border-bottom: 1px solid #C8C8C8;
	}
	
	${({ selected }) => selected && "background-color: #c0c0c0; color: #333; "};

`;

export const ActionImg = styled.img`
	min-width: 2rem;
	width:  2rem;
	min-height: 2rem;
	height: 2rem;
`;

export const ActionTitle = styled.p`
	font-weight: 500;
	font-size: 0.9rem;
	color: inherit;

`;
