
import { useState } from 'react'
import { AppContext } from '../../provider/app'
import { useNavigate } from "react-router-dom";

import * as S from './styles'

const categoryAndSubCategory = {
  "Recursos Humanos": ["Cadastro funcionário", "Lista funcionários", "Ponto", "Férias"],
  "Segurança do Trabalho": ["EPI", "CAT", "DDS"],
  "Suprimentos": ["Compras", "Almoxarifado"],
}

const subCategoryLink = {
  "Cadastro funcionário": "/rh/register/employee",
  "Lista funcionários": "/rh/list/employee",
  "Férias": "/rh/vacation",
  "Ponto": "/rh/sheet",
}

export const NavBar = () => {
  const { user } = AppContext()
  const navigate = useNavigate();

  const [category, setCategory] = useState(categoryAndSubCategory)
  const [categorySelected, setCategorySelected] = useState("")
  const [subCategorySelected, setSubCategorySelected] = useState("")

  const selectCategory = (_category) => {
    setCategorySelected(_category)
  }

  const backCategory = () => {
    setSubCategorySelected("")
    setCategorySelected("")
    navigate("/home")
  }

  const changePage = (_url, _subCategory) => {
    if (_url) {
      setSubCategorySelected(_subCategory)
      navigate(_url)
    }
  }


  return (
    <S.Container>
      <S.UserAvatar>
        <S.UserAvatarImg img={user.avatar} />
      </S.UserAvatar>
      <S.NavContainer>
        {categorySelected ? (
          <>
            <S.BackArrowCategory onClick={() => backCategory()}>{"<-"}</S.BackArrowCategory>
            <S.Category select={true}>{categorySelected}</S.Category>
            <S.Arrow>{'>'}</S.Arrow>
            {category[categorySelected].map(cat => (
              <S.SubCategory key={cat} select={subCategorySelected === cat} onClick={() => changePage(subCategoryLink[cat], cat)}> {cat}</S.SubCategory>
            ))}
          </>
        ) : (
          <>
            <S.BackArrowCategory noPointer={true} />
            {
              Object.entries(category).map(cat => (
                <S.Category key={cat} select={subCategorySelected === cat} onClick={() => selectCategory(cat[0])}>{cat[0]}</S.Category>
              ))
            }
          </>
        )}

      </S.NavContainer>
    </S.Container >
  )
}