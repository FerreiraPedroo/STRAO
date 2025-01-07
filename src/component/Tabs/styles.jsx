import styled from "styled-components";
import { BlockInfoContainerStyle } from "styles/container";

export const TabsContainer = styled.div`
	width: 100%;
	height: 54px;
	display: flex;
	gap: 8px;

	${BlockInfoContainerStyle.container};

	place-items: center;
`;

export const TabsButton = styled.div`
	display: flex;
	position: relative;

	font-size: 1.2rem;
	font-weight: 500;

	place-items: start;
	padding: 8px 12px;
	border-radius: 6px;

	cursor: pointer;

	&:hover {
		background-color: #f5f5f5;
	}

	&[data-selected="true"] {
		color: #001DBC;
		background-color: #bac8d3;
	}

	&[data-selected-change="true"] {
		color: #001DBC;
		background-color: #fff9ce;
		&::after {
			position: absolute;
			content: "❗";
			top: 0;
			right: -8px;
		}
	}

`;
