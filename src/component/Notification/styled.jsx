import styled from "styled-components";

const props = {
  textFontFamily: "Arial",
  titleTextColor: "#999",
  errorTextColor: "#f66",
  successTextColor: "#6f6",
  bgColor: "",
  inputBgColorDisable: "#ddd",
};

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 240px;
  min-height: 24px;

  display: flex;
  flex-direction: column;
  place-items: center;
  font-family: ${props.textFontFamily};

  border: 1px solid #ddd;
`;

export const TitleText = styled.div`
  width: 100%;
  height: 24px;
  text-align: center;
  padding: 2px;
  color: ${props.titleTextColor};

  &:hover {
    cursor: pointer;
  }
  ${({ notified }) =>
    notified === "success" &&
    `
    background-color: #393;
    color: white;
  `}
  ${({ notified }) =>
    notified === "fail" &&
    `
    background-color: #f77;
    color: white;
  `}
`;

export const NotificationText = styled.div`
  width: 100%;
  height: 24px;
  text-align: center;
  padding: 2px;

  ${({ notified }) =>
    notified === "success" &&
    `
background-color: #5b5;
color: white;
`};
  ${({ notified }) =>
    notified === "fail" &&
    `
background-color: #fbb;
color: white;
`};
`;

export const ContainerFull = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const Modal = styled.div`
  position: absolute;
  left: calc(50% - 300px);
  top: calc(50% - 200px);
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 12px;

  border-radius: 12px;
`;

export const ModalClose = styled.div`
  width: 32px;
  font-size: 28px;
  align-self: end;
  text-align: center;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: #bbb;
  }

  // border: 1px solid red;
`;
export const ModalMessage = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props.textFontFamily};
  font-size: 28px;
  font-weight: bold;
  color: #060;
  padding: 20px;
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
