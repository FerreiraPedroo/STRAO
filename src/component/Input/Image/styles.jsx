import styled from "styled-components";

export const Container = styled.div`
	${({ width }) => width && `width:${width};`}
	min-width: 128px;
`;

export const ContainerImg = styled.div`
	width: 100%;
	border: 1px solid #808080;
	border-radius: 4px;
	padding: 8px 6px 4px 6px;
`;

export const TitleText = styled.p`
	height: 12px;
	position: relative;
	color: #767676;
	font-weight: 500;
	top: -1px;
	left: 2px;
	font-size: 0.75rem;
	${({ disabled }) => disabled && "color: #b6b6b6;"}
`;

export const InputImg = styled.input`
	width: 100%;
	font-size: 0.8rem;

	&::placeholder {
		color: #c9c9c9;
	}

	&:disabled {
		border: 1px solid #c0c0c0;
		background-color: #e0e0e0;
		color: #b6b6b6;
	}
`;

export const ErrorMsg = styled.p`
	min-height: 10px;
	font-size: 0.6rem;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: red;
`;

export const FilesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	padding: 8px 0 0 0;
`;

export const FileLoadedImgBox = styled.div`
	position: relative;
	border-radius: 8px;
`;

export const FileLoadedImg = styled.img`
	width: 96px;
	height: 96px;
	border: 2px solid #ccc;
	border-radius: 8px;
`;

export const DeleteFile = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: -4px;
	right: -4px;
	width: 18px;
	height: 18px;
	padding: 8px 7px 7px 8px;
	background-color: red;
	border-radius: 50%;

	&::before {
		content: "X";
		font-size: 0.7rem;
		color: white;
		border-radius: 50%;
	}
	
	&:hover {
		cursor: pointer;
		border: 1px solid #000;

		&::after {
			content: "Remover";
			position: absolute;
			top: -22px;
			left: 14px;
			color: #fff;
			background-color: red;
			border: 1px solid #000;

			padding: 2px 6px;

			border-radius: 6px;
			border-bottom-left-radius: 0px;
			z-index: 10;
		}
	}
`;
