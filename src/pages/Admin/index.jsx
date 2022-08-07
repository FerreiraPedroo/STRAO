import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from './styles.jsx';

const adminCardList = [
  { name: 'Registrar usuário', img: '', link: '/admin/user/register' },
  { name: 'Lista de usuários', img: '', link: '/admin/user/list' },
]


export const Admin = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    setCards(adminCardList);
    setCategory('');
  }, []);


  return (
    <S.Container>
      {
        cards.map((card) => (
          <S.Card key={card.name} onClick={() => navigate(card.link)}>
            <S.Box>
              <S.Img src={card.img} />
              <S.CategoryNotification>0</S.CategoryNotification>
            </S.Box>
            <S.CategoryName>{card.name}</S.CategoryName>
          </S.Card>
        ))
      }
    </S.Container >

  )
}