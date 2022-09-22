import * as S from "./styles";

export const Input = ({ title, value, disabled, placeholder, onChange }) => {

  return (
    <S.Container>
        <S.TitleText>{value !== "" && title}</S.TitleText>
        <S.Input onChange={onChange} value={value} placeholder={placeholder} disabled={disabled} />
    </S.Container>
  );
};
