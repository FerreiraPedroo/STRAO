import React from "react";
import * as S from "./styles";

export const InputText = ({
  inputName,
  inputValue,
  inputOnChange,
  inputPlaceholder,
  disabled,
  readOnly,
}) => {
  return (
    <S.Container>
      <S.TitleText disabled={disabled}>{inputValue && inputPlaceholder}</S.TitleText>
      <S.Input
        onChange={inputOnChange}
        name={inputName}
        value={inputValue}
        placeholder={inputPlaceholder}
        disabled={disabled}
        readOnly={readOnly}
      />
    </S.Container>
  );
};
