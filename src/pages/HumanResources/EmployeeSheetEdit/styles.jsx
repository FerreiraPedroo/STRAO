import styled from "styled-components";

const props = {
	textPageTitle: `
		width: 100%;
		font-size: 2rem;
		font-style: italic;
		font-weight: bolder;
		color: #565656;
		line-height: 1.1;
	  `
};

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;
	padding: 12px 16px;
	gap: 8px;
`;
export const PageUserBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #e5e5e5;
	padding: 8px 16px 12px 16px;
	gap: 8px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
`;
export const PageTitle = styled.h1`
	display: flex;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	align-items: center;

	${props.textPageTitle}
`;
export const PageSubTitle = styled.h1`
	display: flex;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	align-items: center;
	font-size: 1rem;
`;
export const SubTitleSpan = styled.p`
	${({ status }) => `
	${status === "Ativo" ? "color:green;" : ""};
	${status === "Inativo" ? "color:red;" : ""};
	`};
`;

// CENTER CONTAINER ////////////////////////////////////
export const CenterContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;

	align-content: start;
	background-color: #e5e5e5;
	padding: 16px;
	border-radius: 8px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);

	gap: 16px;
`;
// CENTER CONTAINER - LEFT BOX //
export const HeaderBox = styled.div`
	width: 256px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 12px;

`;
export const Head = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1.2rem;
	font-weight: 600;
	color: #767676;
	background-color: #e5e5e5;
	border: 1px solid #c0c0c0;

	padding: 2px;

	border-radius: 4px;
`;
export const HeadText = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1rem;
	font-weight: 500;
	color: #767676;
	background-color: #e5e5e5;
	border: 1px solid #c0c0c0;
	border-bottom: 0px;
	padding: 2px;

	border-radius: 4px 4px 0 0;
`;
export const Text = styled.div`
	${({ w }) => `min-width:${w}px`};
	${({ color }) => (color ? `color:${color}` : "#767676")};

	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
	background: #f8f8f8;
	padding: 16px 8px;

	border: 1px solid #c0c0c0;
	border-top: 0px;

	border-radius: 0 0 4px 4px;

	${({ children }) => `
	${children === "Pendente" && "background: #FFFBF2; color: #DDAF4F;"}
	${children === "Em Aprovação" && "background: #F3F3FD; color: #1A20A8;"}
	${children === "Aprovado" && "background: #F2FBFA; color: #3E9A83;"}
	${children === "Reprovado" && "background: #FFF6F5; color: #D35E64;"}
	
	`}
`;
export const TextStatus = styled.div`
	${({ w }) => `min-width:${w}px`};

	font-size: 1.2rem;
	font-weight: bold;
	color: #767676;
	text-align: center;
	background: #f8f8f8;
	padding: 20px 8px;

	border: 1px solid #c0c0c0;
	border-top: 0px;

	border-radius: 0 0 4px 4px;

	${({ children }) => `
	${children === "Pendente" && "background-color: #FFFBD2; color: #DDAF4F;"};
	${children === "Em aprovação" && "background-color: #D2D2FD; color: #1A20A8;"};
	${children === "Aprovado" && "background-color: #DEFBF0; color: #3E9A83;"};
	${children === "Reprovado" && "background-color: #FFDCDC; color: #D35E64;"};
	`}
`;
// CENTER CONTAINER - RIGHT BOX //
export const SheetDataBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 1rem;
	font-weight: 500;
	color: #767676;
	background-color: #e5e5e5;
	border: 1px solid #c0c0c0;
	border-radius: 6px;
	padding: 2px;
`;
