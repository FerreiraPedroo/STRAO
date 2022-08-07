import { useState, useContext } from 'react'
import { GlobalUseContext } from '../../provider/app'
import { useNavigate } from "react-router-dom";

import * as S from './styles'
import rhIcon from '../../assets/icons/department/rh.png'
import { useEffect } from 'react';

const imgLoad = {
  rh: rhIcon
}

const categoriesList = [
  "Recursos Humanos",
  "Segurança Trabalho",
  "Suprimentos",
  "Admin"
]

const categoryDataList = {
  "Recursos Humanos": {
    imagem: imgLoad.rh,
    link: "/rh",
    subCategory: ["Cadastro funcionário", "Lista funcionários", "Ponto", "Férias"]
  },
  "Segurança Trabalho": {
    imagem: imgLoad.rh,
    link: "/safety",
    subCategory: ["EPI", "CAT", "DDS"]
  },
  "Suprimentos": {
    imagem: imgLoad.rh,
    link: "/supply",
    subCategory: ["Compras", "Almoxarifado"]
  },
  "Admin": {
    imagem: imgLoad.rh,
    link: "/admin",
    subCategory: ["Registrar usuário", "Modificar usuário"]
  },
}

export const NavBar = () => {
  const { userData } = useContext(GlobalUseContext)
  const navigate = useNavigate();

  const [categories, setCategories] = useState([])
  const [categorySelected, setCategorySelected] = useState("")

  useEffect(() => {
    setCategories(categoriesList)

  }, [])


  return (
    <S.Container>
      <S.StraoTitle>STRAO</S.StraoTitle>
      <S.UserAvatar>
        <S.UserAvatarImg img={userData.avatar} />
        <S.UserName>Pedro</S.UserName>
      </S.UserAvatar>
      <S.NavContainer>
        {
          categories.map(category => (
            <S.BtnDepartment key={category} select={''} onClick={() => navigate(categoryDataList[category].link)}>
              <S.ImgDepartment src={categoryDataList[category].imagem} />
              <S.TextDepartment>{category}</S.TextDepartment>
            </S.BtnDepartment>
          ))
        }
      </S.NavContainer>

    </S.Container >
  )
}