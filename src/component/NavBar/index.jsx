import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../provider/app";
import * as S from "./styles";

import user_avatar from "../../assets/img/user_avatar.png";
import icon_menu from "../../assets/icons/menu/menu.svg";

export const NavBar = () => {
	const navigate = useNavigate();
	const { userData } = useContext(GlobalContext);
	const [showMenu, setShowMenu] = useState(false);

	function menuNavigation(path) {
		setShowMenu((prevState) => !prevState);
		navigate(path);
	}

	return (
		<S.Container>
			<S.LeftContainer>
				<S.MenuContainer>
					<S.MenuButton
						src={icon_menu}
						onClick={() => setShowMenu((prevState) => !prevState)}
					/>
					{showMenu && (
						<S.MenuOptions>
							{Object.values(userData.departments).map((card) => (
								<S.MenuCard
									key={card.title}
									onClick={() => menuNavigation(card.path)}
								>
									<S.MenuCardImg src={card.img} />
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
			<S.RightContainer>
				<S.Avatar src={user_avatar} />
				<S.UserName>STRAO</S.UserName>
			</S.RightContainer>
		</S.Container>
	);
};
