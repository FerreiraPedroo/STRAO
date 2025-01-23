import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";

import user_avatar from "../../assets/img/user_avatar.png";
import icon_menu from "../../assets/icons/menu/menu.svg";

import { navBarImgs } from "../../helper/indexImg";

export const NavBar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const menuData = useSelector((state) => state.appData.departmentsInfo);

	const [showMenu, setShowMenu] = useState(false);

	function menuNavigation(URLPath) {
		setShowMenu((prevState) => !prevState);
		dispatch({ payload: "", type: "sidebar/changeSectionSelected" });
		navigate(URLPath);
	}

	return (
		<S.Container onMouseLeave={() => setShowMenu(false)}>
			<S.LeftContainer>
				<S.MenuContainer>
					<S.MenuButton src={icon_menu} onClick={() => setShowMenu((prevState) => !prevState)} />
					{showMenu && (
						<S.MenuOptions key="menuoptions">
							{Object.values(menuData.departments).map((card) => (
								<S.MenuCard key={card.name} onClick={() => menuNavigation(card.URLPath)}>
									<S.MenuCardImg src={navBarImgs[card.URLMenuImg]} />
									<S.MenuCardTitle>{card.name}</S.MenuCardTitle>
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

			<S.RightContainer>
				{/* <S.NotificationBox>
					<Clipboard size={32} />
					<S.NotificationNumber>0</S.NotificationNumber>
				</S.NotificationBox> */}
				{/* <S.Avatar src={user_avatar} /> */}
				{/* <S.UserName>STRAO</S.UserName> */}
			</S.RightContainer>
		</S.Container>
	);
};
