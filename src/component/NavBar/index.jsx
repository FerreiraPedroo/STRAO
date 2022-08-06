import { useState, useContext } from 'react'
import { GlobalUseContext } from '../../provider/app'
import { useNavigate } from "react-router-dom";

import * as S from './styles'
import rhIcon from '../../assets/icons/department/rh.png'

const imgLoad = {
  rh: rhIcon
}

const categoriesList = [
  "Recursos Humanos",
  "Segurança Trabalho",
  "Suprimentos"
]

const subCategoryList = {
  "Recursos Humanos": {
    imagem: imgLoad.rh,
    subCategory: ["Cadastro funcionário", "Lista funcionários", "Ponto", "Férias"]
  },
  "Segurança Trabalho": {
    imagem: imgLoad.rh,
    subCategory: ["EPI", "CAT", "DDS"]
  },
  "Suprimentos": {
    imagem: imgLoad.rh,
    subCategory: ["Compras", "Almoxarifado"]
  },
}

const subCategoryLink = {
  "Cadastro funcionário": "/rh/register/employee",
  "Lista funcionários": "/rh/list/employee",
  "Férias": "/rh/vacation",
  "Ponto": "/rh/sheet",
}

export const NavBar = () => {
  const { userData } = useContext(GlobalUseContext)
  const navigate = useNavigate();

  const [categories, setCategories] = useState(categoriesList)
  const [categorySelected, setCategorySelected] = useState("")
  const [subCategorySelected, setSubCategorySelected] = useState("")

  const selectCategory = (_category) => {
    setCategorySelected(_category)
  }

  return (
    <S.Container>
      <S.UserAvatar>
        <S.UserAvatarImg img={userData.avatar} />
      </S.UserAvatar>
      <S.NavContainer>
        {
          categories.map(category => (
            <S.BtnDepartment key={category} select={subCategorySelected === category} >
              <S.ImgDepartment src={subCategoryList[category].imagem} />
              <S.TextDepartment>{category}</S.TextDepartment>
            </S.BtnDepartment>
          ))
        }
      </S.NavContainer>

    </S.Container >
  )
}