import React from "react";
import * as S from "./styles";

export const Input = ({
  type = "input",
  filterTitle,
  filterName,
  filterValue,
  filterOnChange,
  filterPlaceholder,
  disabled,
  readOnly,
}) => {
  return (
    <S.Container type={type}>
      <S.TitleText disabled={disabled}>{filterValue && filterPlaceholder}</S.TitleText>
      <S.Input
        onChange={filterOnChange}
        name={filterName}
        value={filterValue}
        placeholder={filterPlaceholder}
        disabled={disabled}
        readOnly={readOnly}
      />
    </S.Container>
  );
};
