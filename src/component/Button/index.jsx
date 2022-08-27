import * as S from "./styles";

export const Button = ({width, value, type, disable, theme, onClick}) => {
  return (
    <S.Button
      type={type}
      value={value}
      width={width}
      disabled={disable}
      theme={theme}
      onClick={onClick}
    />
  );
};
