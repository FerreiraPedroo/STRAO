import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
`;

/* TITLE */
export const Title = styled.p`
	font-size: 1.4rem;
	font-weight: bold;
	color: #424242;

	&:hover {
		cursor: pointer;
	}
`;

/* START CONTAINER */
export const StartContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	padding: 16px;
`;

/* MENU */
export const MenuContainer = styled.div`
	position: relative;
	display: flex;
	place-items: center;
	z-index: 100;
`;
export const MenuButton = styled.img`
	width: 24px;

	&:hover {
		cursor: pointer;
	}
`;
export const MenuOptions = styled.div`
	position: absolute;
	top: 2.5rem;
	left: -1rem;
	min-width: 256px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 16px;
	gap: 16px;
	border-radius: 0 4px 4px 0;

	background: #e0e0e0;
	border: 1px solid #747679;
`;
export const MenuCard = styled.div`
	display: flex;
	align-items: center;
	padding: 6px;
	gap: 8px;
	box-sizing: border-box;

	width: 100%;
	height: 5.25rem;
	border-radius: 4px;

	background: #f0f0f0;
	border: 1px solid #747679;

	&:hover {
		cursor: pointer;
		border: 1px solid #101010;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
	}
`;
export const MenuCardImg = styled.img`
	min-width: 3.5rem;
	min-height: 3.5rem;
`;
export const MenuCardTitle = styled.p`
	width: 100%;
	display: flex;
	align-items: center;
	font-style: normal;
	font-size: 1rem;
	line-height: 0.9rem;
	color: #1f1f1f;
`;

/**
 *
 */
export const RightContainer = styled.div`
	display: flex;
	/* justify-content: center;
	align-items: center; */
	gap: 16px;
	padding: 8px;
`;
export const NotificationBox = styled.div`
	display: flex;
	position: relative;
`;
export const NotificationNumber = styled.p`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 2px;
	color: #ff0000;
	font-weight: bold;
	cursor: pointer;
`;

export const FinalContainer = styled.div`
	display: flex;
	place-items: center;
	padding: 4px 16px;
`;
export const Avatar = styled.img`
	height: 46px;
`;
export const UserName = styled.p`
	display: flex;
	place-items: center;
`;
