import styled from "styled-components";

export const InputContainer = styled.div`
  height: 40px;
  width: 400px;
  padding: 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const CustomInput = styled.input`
  width: 100%;
  border: none;
`;

export const Container = styled.div``;

export const DropDownOptions = styled.div`
  width: 400px;
  margin-top: 8px;
  background: white;
  color: black;
  position: absolute;
  border-radius: 8px;
`;

export const DropDownItem = styled.div`
  font-size: 16px;
  font-family: roboto;
  width: 100%;
  border-radius: 8px;
  padding: 4px 8px 4px 8px;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.COLORS.gray_100};
  }
`;
