import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 64px;
	display: flex;
	justify-content: space-between;
	place-items: center;
	background-color: #c8c8c8;
	border-bottom: 1px solid #747679;
	padding: 8px;
`;

/* TITLE */
export const Title = styled.p`
	font-size: 1.75rem;
	font-weight: bold;
	color: #464646;

	&:hover {
		cursor: pointer;
	}
`;

/* LEFT CONTAINER */
export const LeftContainer = styled.div`
	display: flex;
	gap: 16px;
`;

/* MENU */
export const MenuContainer = styled.div`
	position: relative;
	width: 64px;
	display: flex;
	place-items: center;
	justify-content: center;
	z-index: 100;
`;
export const MenuButton = styled.img`
	width: 32px;
	height: 100%;

	&:hover {
		cursor: pointer;
		border: 1px solid transparent;
	}
`;
export const MenuOptions = styled.div`
	position: absolute;
	top: 47px;
	left: -9px;

	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 8px 24px 24px 24px;
	gap: 24px;

	background: #c8c8c8;
	border: 1px solid #747679;
	border-radius: 0 0 4px 0;
	border-top: 0;
`;
export const MenuCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 6px;
	gap: 4px;
	box-sizing: border-box;

	width: 108px;
	height: 100px;

	background: #b0b0b0;
	border: 1px solid #747679;

	&:hover {
		cursor: pointer;
		border: 1px solid #101010;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
	}
`;
export const MenuCardImg = styled.img`
	width: 56px;
	height: 56px;
`;
export const MenuCardTitle = styled.p`
	display: flex;
	align-items: center;
	font-family: "Courier New";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 14px;
	text-align: center;
	color: #000000;
`;

/**
 *
 */
export const RightContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
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

export const Avatar = styled.img``;
export const UserName = styled.p`
	display: flex;
	place-items: center;
`;
