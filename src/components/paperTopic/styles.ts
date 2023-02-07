import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;
  font-size: 12px;
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.red};
  > h2 {
    color: ${({ theme }) => theme.COLORS.red};
    font-size: 16px;
  }
`;

export const Content = styled.div`
  margin-top: 8px;
`;
