import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as S from "./styles";

import user_avatar from "../../assets/img/user_avatar.png";
import icon_menu from "../../assets/icons/menu/menu.svg";

import { navBarImgs } from "../../helper/indexImg"

export const NavBar = () => {
	const navigate = useNavigate();
	const menuData = useSelector((state) => state.appData.dataInfo.departments);

	const [showMenu, setShowMenu] = useState(false);

	function menuNavigation(path) {
		setShowMenu((prevState) => !prevState);
		navigate(path);
	}

	return (
		<S.Container onMouseLeave={() => setShowMenu(false)}>
			<S.LeftContainer>
				<S.MenuContainer>
					<S.MenuButton
						src={icon_menu}
						onClick={() => setShowMenu((prevState) => !prevState)}
					/>
					{showMenu && (
						<S.MenuOptions>
							{Object.values(menuData).map((card) => (
								<S.MenuCard
									key={card.title}
									onClick={() => menuNavigation(card.path)}
								>
									<S.MenuCardImg src={navBarImgs[card.img]} />
									<S.MenuCardTitle>{card.title}</S.MenuCardTitle>
								</S.MenuCard>
							))}
						</S.MenuOptions>
					)}
				</S.MenuContainer>
				<S.Title
					onClick={() => {
						navigate("/home");
						setShowMenu(false);
					}}
				>
					STRAO
				</S.Title>
			</S.LeftContainer>

			{/* <S.RightContainer>
				<S.NotificationBox>
					<Clipboard size={32} />
					<S.NotificationNumber>0</S.NotificationNumber>
				</S.NotificationBox>
				<S.Avatar src={user_avatar} />
				<S.UserName>STRAO</S.UserName>
			</S.RightContainer> */}
		</S.Container>
	);
};
