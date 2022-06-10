import styled from "styled-components";

const color = {
  bgTitle: "silver",
};

export const Container = styled.div`
  max-width: 1416px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  margin: 12px;
  padding-bottom: 32px;
`;
export const PersonalInformationContainer = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  margin-bottom: 16px;
`;
export const Title = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 12px;
`;
export const PersonalInformation = styled.div`
  width: 95%;
  font-size: 1.5rem;
  border-bottom: 1px solid black;
  margin-bottom: 12px;
`;
export const PhotoBox = styled.div`
  min-width: 120px;
  min-height: 120px;
  max-height: 120px;

  background-color: rgba(0, 0, 0, 0.2);
  margin-right: 16px;
  border: 1px solid #091034;
`;
export const NameBox = styled.div`
  max-width: 1280px;
  display: flex;
  font-size: 1.15rem;
  flex-wrap: wrap;
  // flex-direction: column;
  // margin-right: 16px;
  gap: 20px;
`;
export const NameInput = styled.input`
  width: 460px;
  height: 32px;
  padding: 4px;
  border: 1px solid silver;
  outline: 0;

  background-color: rgba(9, 21, 52, 0.1);

  &:disabled {
    background-color: rgba(9, 21, 52, 0.4);
    border: 1px solid rgba(9, 21, 52, 0.4);
  }
`;
export const BirthDateInput = styled.input`
  min-width: 220px;
  height: 32px;
  padding: 4px;
  border: 1px solid silver;
  outline: 0;

  background-color: rgba(9, 21, 52, 0.1);

  &:disabled {
    background-color: rgba(9, 21, 52, 0.4);
    border: 1px solid rgba(9, 21, 52, 0.4);
  }
`;
export const OccupationRegisterBox = styled.div`
`;
export const OccupationRegisterText = styled.p`
  font-size: 1rem;
  white-space: nowrap;
`;
export const OccupationRegisterInput = styled.input`
  min-width: 220px;
  width: 200px;
  height: 32px;
  padding: 4px;
  border: 1px solid silver;
  outline: 0;

  background-color: rgba(9, 21, 52, 0.12);

  &:disabled {
    background-color: rgba(9, 21, 52, 0.4);
    border: 1px solid rgba(9, 21, 52, 0.4);
  }
`;
export const OccupationRegisterSelect = styled.select`
  min-width: 220px;
  width: 200px;
  height: 32px;
  padding: 4px;
  border: 1px solid silver;
  outline: 0;

  background-color: rgba(9, 21, 52, 0.2);

  &:disabled {
    background-color: rgba(9, 21, 52, 0.6);
    border: 1px solid rgba(9, 21, 52, 1);
  }
`;
export const OccupationRegisterOption = styled.option``;
export const InformationContainer = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 12px;
`;
export const SubmitBox = styled.div`
  width: 100%;
  min-height: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubmitButton = styled.input`
  width: 160px;
  height: 32px;
  font-size: 20px;
  border-radius: 6px;
  background-color: #1430b8;
  border: 1px solid black;
  cursor: pointer;

  &:active not(:disabled) {
    border: 1px solid silver;
    transform: scale(0.98);
  }
`;
