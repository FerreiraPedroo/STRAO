import styled from "styled-components";
import { PageStyle } from "styles/container";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: start;
	align-content: start;

	${({ theme }) => PageStyle.container(theme)};

	padding-top: 12px;
	padding-bottom: 16px;
	gap: 8px;
`;
