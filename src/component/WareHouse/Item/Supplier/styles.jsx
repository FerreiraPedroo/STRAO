import { CaretDown } from "phosphor-react";
import React from "react";
import styled from "styled-components";

export const Container = styled.details`
	display: flex;
	width: 100%;
	align-items: center;
	background-color: #e5e5e5;
	gap: 2px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
	border-radius: 8px;

	// &[open] {
	// 	border-radius: 8px 8px 0px 0px;
	// }
`;

export const Title = styled.summary`
	width: 100%;
	height: 32px;
	display: flex;
	align-items: center;
	font-size: 1.25rem;

	padding-left: 6px;
	border-radius: 6px;
	cursor: pointer;

	&:before {
		content: "►";
		font-weight: bolder;
		width: 32px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	[open] & {
		border-radius: 0px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
		&:before {
			content: "▼";
		}
	}
`;

export const TitleBox = styled.p`
	display: flex;
	align-items: center;
	font-size: 1.25rem;
`;


export const DataContainer = styled.div`
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
	width: 100%;
	padding: 12px 16px;
	gap: 16px;

`;
