import styled from "styled-components";

import homebg from "./img/home-bg2.png";

/**
 * Para mudar o estilo da posição do login deve mudar.
 * height: 100vh;
 * flex-wrap: wrap;
 * deixando um ou outro habilitado para mudar.
 * este efeito de mudança de posição já acontesse
 * quando a tela fica muito pequena, utilizando o media query
 */
export const PageContainer = styled.div`
	width: 100%;
	height: 100%;
	height: 100vh;
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: center;
	padding: 20px 16px;

	@media (max-width: 860px) {
		height: auto;
		flex-wrap: wrap;
	}
`;

export const LoginContainer = styled.div`
	padding: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 8px;
	box-shadow: 2px 2px 5px #ccc;
	border: 1px solid #ddd;
	gap: 8px;

	@media (max-width: 520px) {
		padding: 64px 32px;
		width: 100%
	}
`;
export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;

	background-color: white;
	gap: 12px;
`;

export const TitlePage = styled.div`
	width: 100%;
	padding: 32px;
	font-weight: 600;
	text-align: center;
	line-height: 0.3;
	letter-spacing: 10px;
	word-spacing: 8px;
	font-size: 5rem;

	& span {
		padding-right: 12px;
		font-weight: 500;
	}
`;
export const Text = styled.div`
	font-size: ${({ size }) => size && `${size}rem;`};
	padding: 2px;
	overflow-wrap: break-word;
`;
export const TextError = styled.div`
	height: 16px;
	font-size: ${({ size }) => size && `${size}rem;`};
	padding: 8px 4px;
	color: tomato;
	overflow-wrap: break-word;
`;
export const InputBox = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const UserInput = styled.input`
	width: 250px;
	height: 40px;
	padding: 4px;
	font-size: 1.25rem;
	border: 1px solid silver;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.5);
`;
export const PasswordInput = styled.input`
	width: 250px;
	height: 36px;
	padding: 4px;
	font-size: 1.25rem;
	border: 1px solid silver;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.5);
`;
export const ButtonBox = styled.div``;
export const Button = styled.input`
	width: 42px;
	height: 60px;
	margin-left: 30px;
`;
