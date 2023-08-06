import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 48px;
	display: flex;
	justify-content: space-between;
	place-items: center;
	padding: 16px 16px;
`;

/* TITLE */
export const Title = styled.p`
	width: 100%;
	text-align: center;
	font-size: 1.80rem;
	font-weight: bold;
	color: #464646;
	padding-top: 2px;

	&:hover {
		cursor: pointer;
	}
`;

/* LEFT CONTAINER */
export const LeftContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 6px;
`;

/* MENU */
export const MenuContainer = styled.div`
	position: relative;
	width: 2rem;
	display: flex;
	place-items: center;
	justify-content: center;
	z-index: 100;
`;
export const MenuButton = styled.img`
	width: 36px;

	&:hover {
		cursor: pointer;
		border: 1px solid transparent;
	}
`;
export const MenuOptions = styled.div`
	position: absolute;
	top: 2.50rem;
	left: -1.0rem;
	min-width: 256px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 16px;
	gap: 16px;

	background: #c8c8c8;
	border: 1px solid #747679;
	/* border-radius: 0 0 4px 0; */
	/* border-top: 0; */
`;
export const MenuCard = styled.div`
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	padding: 6px;
	gap: 8px;
	box-sizing: border-box;

	width: 100%;
	height: 5.25rem;

	background: #b0b0b0;
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
	width:100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Courier New";
	font-style: normal;
	font-weight: 500;
	font-size: 1.2rem;
	line-height: 0.9rem;
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
