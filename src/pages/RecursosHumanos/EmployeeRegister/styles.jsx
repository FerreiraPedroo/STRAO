import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
  padding: 0 74px;
`;
export const PersonalInformationContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 16px;
`;
export const Title = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: Verdana;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 12px;
`;
export const PersonalInformation = styled.div`
  width: 100%;
  margin-bottom: 12px;  
`;
export const PhotoBox = styled.div`
  min-width: 120px;
  min-height: 120px;
  max-height: 120px;
  margin-right: 16px;
  border: 1px solid #A9A9A9;
`;
export const NameBox = styled.div`
  max-width: 1920px;
  display: flex;
  font-size: 1.15rem;
  flex-wrap: wrap;
  gap: 20px;
`;
export const NameInput = styled.input`
  width: 460px;
  height: 32px;
  padding: 4px;
  border: 1px solid #696969;
  outline: 0;

  &:disabled {
    background-color: #A9A9A9;
  }
`;
export const BirthDateInput = styled.input`
  min-width: 220px;
  height: 32px;
  padding: 4px;
  border: 1px solid #696969;
  outline: 0;

  &:disabled {
    background-color: #A9A9A9;
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
  border: 1px solid #696969;
  outline: 0;

  &:disabled {
    background-color: #A9A9A9;
  }
`;
export const OccupationRegisterSelect = styled.select`
  min-width: 220px;
  width: 200px;
  height: 32px;
  padding: 4px;
  border: 1px solid #696969;
  outline: 0;

  &:disabled {
    background-color: #A9A9A9;
  }
`;
export const OccupationRegisterOption = styled.option``;
export const InformationContainer = styled.div`
  width: 100%;
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
  background-color: #DCDCDC;
  border: 1px solid black;
  cursor: pointer;

  &:active not(:disabled) {
    border: 1px solid silver;
    transform: scale(0.98);
  }
`;