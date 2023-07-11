import * as S from "./styles";

import {
	Check,
	FileText,
	MagnifyingGlass,
	Trash,
	NotePencil,
	EyeSlash,
	Eye,
	Plus
} from "phosphor-react";

/**
 *
 * @param {typeStyle} typeStyle "normal-128x32 | back-32x32 | find-40x32 | remove-40x32 | correct-40x32 | document-40x32"
 * @returns
 */
export const Button = ({
	value,
	typeStyle = "normal",
	disable,
	theme,
	onClick
}) => {
	// 	export const EmployeeStatus = styled.p`
	// 	min-width: 96px;
	// 	width: 10%;
	// 	border: 1px solid #c0c0c0;
	// 	text-align: center;
	// 	font-weight: bold;
	// 	font-size: 1.3rem;

	// 	${({ status }) =>
	// 	  status === "Enviado" &&
	// 	  "color: #33f; background-color: #ccf; border: 1px solid #66f;"}
	// 	${({ status }) =>
	// 	  status === "Pendente" &&
	// 	  "color: tomato; background-color: #fcc; border: 1px solid #f99;"}
	//   `;

	//   export const EmployeeButton = styled.button`
	// 	box-sizing: border-box;
	// 	display: flex;
	// 	width: 160px;
	// 	height: 32px;
	// 	flex-direction: row;
	// 	justify-content: center;
	// 	align-items: center;

	// 	font-style: normal;
	// 	font-weight: 400;
	// 	font-size: 16px;
	// 	line-height: 19px;
	// 	color: #ffffff;

	// 	background: #00a300;
	// 	border: 1px solid #20c320;
	// 	border-radius: 6px;

	// 	cursor: pointer;

	// 	&:hover:not(:disabled) {
	// 	  background: #00a300;
	// 	  border: 1px solid #20c320;
	// 	  box-shadow: 2px 2px 0px #228b22;
	// 	  border-radius: 6px;
	// 	}

	// 	&:active:not(:disabled) {
	// 	  background: #00a300;
	// 	  border: 1px solid #20c320;
	// 	  box-shadow: inset 2px 2px 0px #228b22;
	// 	  border-radius: 6px;
	// 	}

	// 	&:disabled {
	// 	  background: #75a275;
	// 	  border: 1px solid #97c697;
	// 	  border-radius: 6px;
	// 	}
	//   `;

	return (
		<>
			{typeStyle === "back" && (
				<S.ButtonBack
					width={72}
					height={40}
					disabled={disable}
					theme={theme}
					onClick={onClick}
				>
					{value}
				</S.ButtonBack>
			)}
			{typeStyle === "find" && (
				<S.Button40x32
					typeStyle={typeStyle}
					value={value}
					width={40}
					height={32}
					disabled={disable}
					theme={theme}
					onClick={onClick}
				>
					<MagnifyingGlass size={24} color="#ffffff" />
				</S.Button40x32>
			)}
			{typeStyle === "remove" && (
				<S.Button40x32
					typeStyle={typeStyle}
					value={value}
					width={40}
					height={32}
					disabled={disable}
					theme={theme}
					onClick={onClick}
				>
					<Trash size={24} color="#ffffff" />
				</S.Button40x32>
			)}
			{typeStyle === "edit" && (
				<S.Button40x32
					typeStyle={typeStyle}
					value={value}
					width={40}
					height={32}
					disabled={disable}
					theme={theme}
					onClick={onClick}
				>
					<NotePencil size={24} color="#ffffff" />
				</S.Button40x32>
			)}
			{typeStyle === "hidden" && (
				<S.Button40x32
					typeStyle={typeStyle}
					value={value}
					width={40}
					height={32}
					disabled={disable}
					theme={theme}
					onClick={onClick}
				>
					<EyeSlash size={24} color="#ffffff" />
				</S.Button40x32>
			)}
			{typeStyle === "show" && (
				<S.Button40x32
					typeStyle={typeStyle}
					value={value}
					width={40}
					height={32}
					disabled={disable}
					theme={theme}
					onClick={onClick}
				>
					<Eye size={24} color="#ffffff" />
				</S.Button40x32>
			)}
			{typeStyle === "document" && (
				<S.Button40x32
					typeStyle={typeStyle}
					value={value}
					width={40}
					height={32}
					disabled={disable}
					theme={theme}
					onClick={onClick}
				>
					<FileText size={24} color="#ffffff" />
				</S.Button40x32>
			)}
			{typeStyle === "correct" && (
				<S.Button40x32
					typeStyle={typeStyle}
					value={value}
					width={40}
					height={32}
					disabled={disable}
					theme={theme}
					onClick={onClick}
				>
					<Check size={24} color="#ffffff" />
				</S.Button40x32>
			)}
			{typeStyle === "add" && (
				<S.Button40x32
					typeStyle={typeStyle}
					value={value}
					width={40}
					height={32}
					disabled={disable}
					theme={theme}
					onClick={onClick}
				>
					<Plus size={24} color="#ffffff" />
				</S.Button40x32>
			)}
			{typeStyle === "normal" && (
				<S.Button
					typeStyle={typeStyle}
					value={value}
					width={128}
					height={32}
					disabled={disable}
					theme={theme}
					onClick={onClick}
					readonly
				>
					{value}
				</S.Button>
			)}
		</>
	);
};
