import styled from "styled-components";

export const Container = styled.div`
	min-width: 208px;
	width: 208px;
	display: flex;
	flex-direction: column;
	place-items: center;
	padding: 0 4px 8px 4px;
	/* background-color: #f6f6f6; */
`;
/* HR SEPARATOR */
export const HrLine = styled.hr`
	width: 100%;
	border: 1px solid #c0c0c0;
`;
export const DepartmentTitle = styled.div`
	width: 100%;
	text-align: center;

	font-size: 1.2rem;
	font-style: italic;
	font-weight: 600;
	padding: 12px 0 12px 8px;
	color: #1f1f1f;
`;
export const SectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4px 6px;
	border: 1px solid transparent;

	&:hover {
		background-color: #e0e0e0;
		cursor: pointer;
	}

	${({ selected }) =>
		selected &&
		`
		background-color: #e0e0e0;
		border: 1px solid #C8C8C8;	
	`};
`;
export const SectionTop = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 8px;
`;
export const SectionImg = styled.img`
	min-width: 24px;
	width: 24px;
	min-height: 24px;
	height: 24px;
`;
export const SectionTitle = styled.div`
	font-style: italic;
	font-size: 0.9rem;
	color: #1f1f1f;
	user-select: none;
`;
export const ArrowDown = styled.p`
	${({ selected }) => (selected ? "visibility: visible" : "visibility: hidden")};
	line-height: 4px;

	&::after {
		content: "▾";
	}
`;

export const Action = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 8px 6px;
	border-left: 1px solid #c8c8c8;
	border-right: 1px solid #c8c8c8;
	gap: 6px;

	&:hover {
		${({ selected }) =>
			!selected &&
			`
			background-color: #e0e0e0;
			cursor: pointer;
		`}
	}

	&:last-child {
		border-bottom: 1px solid #c8c8c8;
	}

	${({ selected }) => selected && "background-color: #c0c0c0; color: #333; "};
`;

export const ActionImg = styled.img`
	min-width: 2rem;
	width: 2rem;
	min-height: 2rem;
	height: 2rem;
`;

export const ActionTitle = styled.p`
	font-weight: 500;
	font-size: 0.9rem;
	color: inherit;
`;
