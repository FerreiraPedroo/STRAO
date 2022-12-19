import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../provider/app";
import { Card } from "../../component/Card/index.jsx";

import * as S from "./styles.jsx";

const cardMock = {
	actions: [
		{
			title: "Registrar usuário",
			img: "",
			url: "/admin/user/register"
		},
		{
			title: "Lista de usuários",
			img: "",
			url: "/admin/user/list"
		}
	]
};

export const Admin = () => {
	const { userData } = useContext(GlobalContext);
	const [cards, setCards] = useState(cardMock);

	useEffect(() => {
		// setCards(userData.departments[pageName]);
	}, []);

	return (
		<S.Container>
			{cards &&
				cards.actions.map((card) => <Card key={card.title} data={card} />)}
		</S.Container>
	);
};
