import styled from "styled-components";

const props = {
  textPageTitle: `
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Arial;
  font-size: 36px;
  color:#999;
  font-style: italic;
  `,

  paragraphTextSize: "16px",

  headeTitle: `
  font-size: 18px;
  font-style: italic;
  font-weight: bold;`,

  errorTextColor: "#f66",
  textSize: "",
  bgColor: "",
  inputBgColorDisable: "#ddd",
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
  background-color: #ededed;
  padding: 16px;
  gap: 4px;
`;

export const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const PageTitle = styled.h1`
  ${props.textPageTitle}
  padding-right: 32px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const InputBox = styled.div``;
export const InputTitleText = styled.p`
  font-size: 1rem;
  white-space: nowrap;
`;
export const Input = styled.input`
  width: 460px;
  height: 32px;
  padding: 4px;
  border: 1px solid #696969;
  outline: 0;
`;
export const InputErrorText = styled.p`
  height: 24px;
  font-size: 1rem;
  color: ${props.errorTextColor};
  text-align: right;
  padding: 1px 8px;
  white-space: nowrap;
`;

export const ButtonFormSubmit = styled.button`
  width: 128px;
  border: 1px solid #555;
  border-radius: 6px;
  padding: 6px 12px;
  align-self: center;

  &:hover {
    cursor: pointer;
    border-color: #000;
    background-color: #bbb;
  }

  &:active {
    color: #555;
    border-color: #000;
    background-color: #999;
  }
`;

export const SubmitErrorText = styled.p`
  width: 100%;
  height: 24px;
  font-size: 1.3rem;
  color: red;
  text-align: center;
  padding: 16px 8px;
  white-space: nowrap;
`;
