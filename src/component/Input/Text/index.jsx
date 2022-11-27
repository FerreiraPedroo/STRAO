import React from "react";
import * as S from "./styles";

export const Input = ({
  type = "input",
  title,
  value,
  disabled,
  placeholder,
  onChange,
  readOnly,
}) => {
  return (
    <S.Container type={type}>
      <S.TitleText>{value && title}</S.TitleText>
      <S.Input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      />
    </S.Container>
  );
};
