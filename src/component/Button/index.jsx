import * as S from "./styles";

import { Check, FileText, MagnifyingGlass, Trash } from "phosphor-react";

/**
 * 
 * @param {typeStyle} typeStyle "normal-128x32 | back-32x32 | find-40x32 | remove-40x32 | correct-40x32 | document-40x32" 
  * @returns 
 */
export const Button = ({
  value,
  typeStyle = "normal",
  disable,
  theme,
  onClick,
}) => {
  return (
    <>
      {typeStyle === "back" && (
        <S.ButtonBack
          width={32}
          height={32}
          disabled={disable}
          theme={theme}
          onClick={onClick}
        >{value}</S.ButtonBack>
      )}
      {typeStyle === "find" && (
        <S.Button40x32
          typeStyle={typeStyle}
          value={value}
          width={40}
          height={32}
          disabled={disable}
          theme={theme}
          onClick={onClick}
        >
          <MagnifyingGlass size={24} color="#ffffff" />
        </S.Button40x32>
      )}
      {typeStyle === "remove" && (
        <S.Button40x32
          typeStyle={typeStyle}
          value={value}
          width={40}
          height={32}
          disabled={disable}
          theme={theme}
          onClick={onClick}
        >
          <Trash size={24} color="#ffffff" />
        </S.Button40x32>
      )}
      {typeStyle === "correct" && (
        <S.Button40x32
          typeStyle={typeStyle}
          value={value}
          width={40}
          height={32}
          disabled={disable}
          theme={theme}
          onClick={onClick}
        >
          <Check size={24} color="#ffffff" />
        </S.Button40x32>
      )}
      {typeStyle === "document" && (
        <S.Button40x32
          typeStyle={typeStyle}
          value={value}
          width={40}
          height={32}
          disabled={disable}
          theme={theme}
          onClick={onClick}
        >
          <FileText size={24} color="#ffffff" />
        </S.Button40x32>
      )}
      {typeStyle === "normal" && (
        <S.Button
          typeStyle={typeStyle}
          value={value}
          width={128}
          height={32}
          disabled={disable}
          theme={theme}
          onClick={onClick}
        />
      )}
    </>
  );
};
