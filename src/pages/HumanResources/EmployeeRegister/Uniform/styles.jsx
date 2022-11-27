import styled from "styled-components";

export const Container = styled.details`
  width: 100%;
`;
export const Title = styled.summary`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
  border: 1px solid #696969;
  padding-left: 8px;
  padding-top: 5px;
  border-radius: 2px 2px 0 0;
  cursor: pointer;

  &:after {
    content: " + ";
    font-weight: bolder;
    width: 32px;
    height: 28px;
    margin-top: -4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid #696969;
  padding: 8px;
  gap: 16px;
`;
export const BodyPartBox = styled.div`
  min-width: 340px;
  width: 99%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
`;
export const BodyPartText = styled.div`
  width: 100%;
  padding: 1px 4px;
  background-color: rgba(0, 0, 0, 0.07);
`;
export const UniformPartBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
`;
export const UniformPart = styled.div``;
export const UniformPartText = styled.p`
  font-size: 1rem;
  white-space: nowrap;
`;
export const UniformPartInput = styled.input`
  min-width: 160px;
  width: 320px;
  height: 32px;
  padding: 4px;
  border: 1px solid #696969;
  outline: 0;
`;
