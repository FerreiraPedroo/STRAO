import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import * as S from "./styles";

export const SideBar = () => {
  const location = useLocation();
  console.log(location)
  const menuActions = useSelector(state => state.appData.data);
console.log(menuActions.departments)
	return <S.Container>
      <S.DepartmentTitle>{menuActions.departments[`${location.pathname}`]}</S.DepartmentTitle>
  </S.Container>;
};
