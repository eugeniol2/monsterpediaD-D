import styled, { css } from "styled-components";

interface ContainerProps {
  isActions?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ isActions }) =>
    isActions &&
    css`
      margin-bottom: 16px;
    `}
  display: ${({ isActions }) => (isActions ? "block" : "flex")};
  align-items: center;
  gap: 8px;
  > p {
    font-size: 18px;
  }
`;
