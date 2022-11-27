import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

import user_avatar from "../../assets/img/user_avatar.png";
import img_recursos_humanos from "../../assets/img/menu/recursos-humanos.svg";
import icon_menu from "../../assets/icons/menu/menu.svg";

const menuCards = [
    {
        path: "/rh",
        title: "Recursos Humanos",
        img: img_recursos_humanos,
    },
    {
        path: "/supply",
        title: "Suprimentos",
        img: img_recursos_humanos,
    },
    {
        path: "/safety",
        title: "Segurança do Trabalho",
        img: img_recursos_humanos,
    },
    {
        path: "/feets",
        title: "Frotas",
        img: img_recursos_humanos,
    },
];

export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    function menuNavigation(path) {
        setShowMenu((prevState) => !prevState);
        navigate(path);
    }

    return (
        <S.Container>
            <S.LeftContainer>
                <S.MenuContainer>
                    <S.MenuButton src={icon_menu} onClick={() => setShowMenu((prevState) => !prevState)} />
                    {showMenu && (
                        <S.MenuOptions>
                            {menuCards.map((card) => (
                                <S.MenuCard key={card.title} onClick={() => menuNavigation(card.path)}>
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
