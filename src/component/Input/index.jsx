import * as S from "./styles";

export const Input = ({
  type = "input",
  title,
  value,
  disabled,
  placeholder,
  onChange,
  readOnly,
  children,
}) => {
  return (
    <S.Container type={type}>
      {type === "textonly" && (
        <S.Input
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
      )}
      {type === "input" && (
        <>
          <S.TitleText>{value && title}</S.TitleText>
          <S.Input
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
          />
        </>
      )}
      {type === "select" && (
        <>
          <S.TitleText>{value !== "" && title}</S.TitleText>
          <S.Select
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
          >
            {children}
          </S.Select>
        </>
      )}
    </S.Container>
  );
};
